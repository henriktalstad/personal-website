import { FormData } from '@/types/form';
import { object, string, addMethod, ObjectSchema } from 'yup';
import { FORM_VALIDATION } from '@/data/contact.data';

/**
 * Returns form schema for validation
 * @param {string} locale the locale used for translations
 * @returns {ObjectSchema<FormData>} the form schema
 */
export const getFormSchema = (locale: string): ObjectSchema<FormData> => {
    /* Override the email method, if email isn't required we need to add excludeEmptyString: true */
    addMethod(string, 'email', function validateEmail(message: string){
        return this.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
            message,
            name: 'email'
        });
    });

    // Get validation messages based on locale
    const lang = (locale as keyof typeof FORM_VALIDATION) || 'en';
    const messages = FORM_VALIDATION[lang] || FORM_VALIDATION.en;
    
    const schema: ObjectSchema<FormData> = object({
        firstname: string().required(messages.required),
        lastname: string().required(messages.required),
        email: string().required(messages.required).email(messages.invalidEmail),
        message: string().required(messages.required)
    });

    return schema;
};