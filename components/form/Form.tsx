import { FormData, Labels } from '@/types/form';
import styles from '../../styles/modules/Form.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next-translate-routes';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import useIsMounted from '@/hooks/useIsMounted';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import useNavigationContext from '@/context/navigationContext';
import { getFormSchema } from '@/schemas/form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormRecaptchaNote from './FormRecaptchaNote';
import Button from '../shared/Button';
import { toast, ToastContainer, Zoom, Bounce } from 'react-toastify';
import TranslateInOut from '../shared/gsap/TranslateInOut';
import FadeInOut from '../shared/gsap/FadeInOut';
import classNames from 'classnames';
import { FORM_LABELS } from '@/data/contact.data';

async function sendFormData(data: FormData, recaptchaToken: string, locale: string): Promise<Response> {
    const currentLabels: Labels = {
        firstname: FORM_LABELS[locale as keyof typeof FORM_LABELS]?.firstname || FORM_LABELS.en.firstname,
        lastname: FORM_LABELS[locale as keyof typeof FORM_LABELS]?.lastname || FORM_LABELS.en.lastname,
        email: FORM_LABELS[locale as keyof typeof FORM_LABELS]?.email || FORM_LABELS.en.email,
        message: FORM_LABELS[locale as keyof typeof FORM_LABELS]?.message || FORM_LABELS.en.message
    };
    
    return await fetch('/api/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale
        },
        body: JSON.stringify({
            data,
            labels: currentLabels,
            recaptchaToken
        })
    });
}

export default function Form() {
    const { currentLocale } = useNavigationContext();
    const { locale } = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { isSubmitting, errors },
        trigger
    } = useForm<FormData>({
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            message: ''
        },
        resolver: yupResolver(getFormSchema(locale ?? ''))
    });
    const isMounted = useIsMounted();
    const { executeRecaptcha } = useGoogleReCaptcha();
    
    // Get current language labels based on locale
    const currentLang = (locale as keyof typeof FORM_LABELS) || 'en';
    const firstnameLabel = FORM_LABELS[currentLang]?.firstname || FORM_LABELS.en.firstname;
    const lastnameLabel = FORM_LABELS[currentLang]?.lastname || FORM_LABELS.en.lastname;
    const emailLabel = FORM_LABELS[currentLang]?.email || FORM_LABELS.en.email;
    const messageLabel = FORM_LABELS[currentLang]?.message || FORM_LABELS.en.message;
    const toastLoadingMessage = FORM_LABELS[currentLang]?.loading || FORM_LABELS.en.loading;
    const formErrorsMessage = FORM_LABELS[currentLang]?.formErrors || FORM_LABELS.en.formErrors;
    const buttonLabel = FORM_LABELS[currentLang]?.send || FORM_LABELS.en.send;
    
    // We don't need placeholders as per user's request

    const submitForm = async (data: FormData, recaptchaToken: string) => {
        const toastConfig = {
            isLoading: false,
            autoClose: 3000,
            closeButton: true,
            draggable: true
        }

        const toastId = toast.loading(toastLoadingMessage);

        try {
            const response = await sendFormData(data, recaptchaToken, locale ?? '');

            const _data = await response.json();

            if (!response.ok) {
                /* API returns validation errors, this type of error will not persist with each submission */
                setError('root.serverError', {
                    type: response.status.toString(),
                });
                if (_data.errors) {
                    /* Validation error, expect response to be a JSON response {"field": "error message for that field"} */
                    for (const [fieldName, errorMessage] of Object.entries(_data.errors) as [keyof FormData, string][]) {
                        setError(fieldName, {type: 'custom', message: errorMessage});
                    }
                }
                throw new Error(_data.message || formErrorsMessage);
            }

            toast.update(toastId, {
                render: _data.message,
                type: 'success',
                ...toastConfig
            });

            /* Resets form after success */
            reset();

        } catch (error) {
            if (error instanceof Error) {
                toast.update(toastId, {
                    render: error.message,
                    type: 'error',
                    ...toastConfig
                });
            }
        }
    };

    const handleSubmitForm = async (data: FormData) => {
        try {
            // Check if recaptcha is configured
            if (executeRecaptcha && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
                await executeRecaptcha('submit')
                .then((recaptchaToken) => {
                    submitForm(data, recaptchaToken);
                })
                .catch((error) => {
                    console.log(error);
                    setError('root.serverError', {
                        type: 'custom',
                    });
                })
            } else {
                // Development mode - no reCAPTCHA
                console.log('reCAPTCHA not configured, proceeding in development mode');
                submitForm(data, 'development-mode');
            }
        } catch (err) {
            console.error('Error in form submission:', err);
        };
    };

    useEffect(() => {
        if (currentLocale !== locale && Object.keys(errors).length) {
            trigger();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);

    return(
        <>
            <section className={classNames
                (
                    'u-spacing--responsive--bottom',
                    styles['c-form']
                )}
            >
                <div className="o-container">
                    <div className="o-grid">
                        <form className={styles['c-form__element']} onSubmit={handleSubmit(handleSubmitForm)} noValidate>
                            <div className={styles['c-form__row']}>
                                <div className={styles['c-form__item']}>
                                    <TranslateInOut
                                        delay={0.1}
                                        durationIn={0.6}
                                        outro={{
                                            opacity: 0
                                        }}
                                        y="100%"
                                        start="-100% bottom"
                                        end="top top"
                                        watch
                                    >
                                        <FormInput
                                            htmlFor="firstname"
                                            label={firstnameLabel}
                                            id="firstname"
                                            required={true}
                                            className="c-formElement--bordered"
                                            register={register('firstname')}
                                            errors={errors['firstname']}
                                        />
                                    </TranslateInOut>
                                </div>
                                <div className={styles['c-form__item']}>
                                    <TranslateInOut
                                        delay={0.15}
                                        durationIn={0.6}
                                        outro={{
                                            opacity: 0
                                        }}
                                        y="100%"
                                        start="-100% bottom"
                                        end="top top"
                                        watch
                                    >
                                        <FormInput
                                            htmlFor="lastname"
                                            label={lastnameLabel}
                                            id="lastname"
                                            required={true}
                                            className="c-formElement--bordered"
                                            register={register('lastname')}
                                            errors={errors['lastname']}
                                        />
                                    </TranslateInOut>
                                </div>
                                <div className={styles['c-form__itemFull']}>
                                    <TranslateInOut
                                        delay={0.20}
                                        durationIn={0.6}
                                        outro={{
                                            opacity: 0
                                        }}
                                        y="100%"
                                        start="-100% bottom"
                                        end="top top"
                                        watch
                                    >
                                        <FormInput
                                            htmlFor="email"
                                            label={emailLabel}
                                            type="email"
                                            id="email"
                                            required={true}
                                            className="c-formElement--bordered"
                                            register={register('email')}
                                            errors={errors['email']}
                                        />
                                    </TranslateInOut>
                                </div>
                                <div className={styles['c-form__itemFull']}>
                                    <TranslateInOut
                                        delay={0.25}
                                        durationIn={0.6}
                                        outro={{
                                            opacity: 0
                                        }}
                                        y="100%"
                                        start="-100% bottom"
                                        end="top top"
                                        watch
                                    >
                                        <FormTextarea
                                            htmlFor="message"
                                            label={messageLabel}
                                            id="message"
                                            required={true}
                                            className="c-formElement--bordered"
                                            register={register('message')}
                                            errors={errors['message']}
                                        />
                                    </TranslateInOut>
                                </div>
                            </div>
                            <div className="u-overflow--hidden">
                                <TranslateInOut
                                    fade={false}
                                    y="100%"
                                    start="-100% bottom"
                                    end="top top"
                                    watch
                                >
                                    <FormRecaptchaNote />
                                </TranslateInOut>
                            </div>
                            <FadeInOut
                                watch
                            >
                                <div className={styles['c-form__btn']}>
                                    <Button
                                        label={buttonLabel}
                                        className="c-btn"
                                        wrapperClassName={classNames({'c-formElement--submit': isSubmitting})}
                                        type="submit"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </FadeInOut>
                        </form>
                    </div>
                    {isMounted() &&
                        <ToastContainer
                            position="bottom-center"
                            transition={Zoom}
                            className="c-toastify"
                        />
                    }
                </div>
            </section>
        </>
    );
}