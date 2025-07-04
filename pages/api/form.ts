import { FieldsValidationErrors } from '@/types/form';
import Email from '@/utils/email';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getEmailTemplateFile } from '@/utils/template';
import { ValidationError } from 'yup';
import { getFormSchema } from '@/schemas/form';
import { validateRecaptcha } from '@/utils/recaptcha';
import { getTranslation } from '@/utils/translation';

/**
 * Handler
 *
 * https://nextjs.org/docs/api-routes/introduction
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    /* Gets locale */
    const locale = req.headers['accept-language'];

    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method not allowed');
    }

    if (!locale) {
        return res.status(400);
    }

    try {
        /* Destructures body */
        const { recaptchaToken, labels, data } = req.body;

        /* Validation */
        const formSchema = getFormSchema(locale);

        await formSchema.validate({ ...data }, { abortEarly: false });

        // Check if we're in development mode or if reCAPTCHA is properly configured
        const isDevelopmentMode = recaptchaToken === 'development-mode' || !process.env.RECAPTCHA_SECRET_KEY;
        let validReCaptcha = false;
        
        // Only validate reCAPTCHA if not in development mode
        if (!isDevelopmentMode) {
            validReCaptcha = await validateRecaptcha(recaptchaToken, res, locale);
        } else {
            console.log('Running in development mode - skipping reCAPTCHA validation');
            validReCaptcha = true;
        }

        if (validReCaptcha) {
            /* Sends email if SendGrid API key is present, otherwise simulate success */
            if (process.env.SENDGRID_API_KEY) {
                try {
                    const emailTemplate = await getEmailTemplateFile('/templates/email.html', res);
                    await new Email(emailTemplate as string, 'New form', labels, data, []).send();
                    
                    return res.status(201).json({
                        data,
                        message: getTranslation('Thank you, your message has been sent successfully.', locale)
                    });
                } catch (err) {
                    console.error('Email sending error:', err);
                    return res.status(500).json({
                        data: null, 
                        message: getTranslation('An error occurred while sending the email.', locale)
                    });
                }
            } else {
                // Development mode without SendGrid API key
                console.log('SendGrid API key not configured - Development mode success');
                console.log('Form data received:', data);
                
                return res.status(201).json({
                    data,
                    message: getTranslation('Form received in development mode (no email sent).', locale)
                });
            }
        }

    } catch (err) {
        /* Yup validation */
        if (err instanceof ValidationError) {
            const validationErrors: FieldsValidationErrors = {};

            err.inner.forEach((error) => {
                if (error.path && !validationErrors[error.path])
                    validationErrors[error.path] = error.errors[0];
            });

            return res.status(400).json({ data: null, errors: validationErrors });
        }
        /* Global server error */
        return res.status(500).json({ data: null, message: getTranslation('Internal Server Error.', locale) });
    }
}