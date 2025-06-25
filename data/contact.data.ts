import { Lang, MetaDataProps } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';

export const META_CONTACT: Lang<MetaDataProps> = {
    en: {
        title: `Contact | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    no: {
        title: `Kontakt | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const CONTACT_HEADER: Lang<BasicHeaderProps> = {
    en: {
        title: 'Contact',
        content: 'Is there something on your mind you\'d like to talk about? Whether it\'s related to work, just a casual conversation or need help with some code. Feel free to contact me at anytime.'
    },
    no: {
        title: 'Kontakt',
        content: 'Er det noe du har på hjertet du ønsker å snakke om? Enten det gjelder jobb, en uformell prat eller du trenger hjelp med kode – ta gjerne kontakt når som helst.'
    }
};

export const FORM_LABELS = {
    en: {
        firstname: 'First name',
        lastname: 'Last name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        loading: 'Your message is on its way!',
        formErrors: 'Form has errors.',
        success: 'Thank you! Your message has been sent.',
        recaptchaNote: 'This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.'
    },
    no: {
        firstname: 'Fornavn',
        lastname: 'Etternavn',
        email: 'E-post',
        message: 'Melding',
        send: 'Send',
        loading: 'Meldingen din er på vei!',
        formErrors: 'Skjemaet har feil.',
        success: 'Takk! Meldingen din har blitt sendt.',
        recaptchaNote: 'Dette nettstedet er beskyttet av reCAPTCHA og Googles personvernregler og tjenestevilkår gjelder.'
    }
};

export const FORM_VALIDATION = {
    en: {
        required: 'This field is required.',
        invalidEmail: 'The specified email address is invalid.',
        serverError: 'An error occurred while processing your request.',
        noApiKeys: 'Form submission is currently disabled (development mode).',
        success: 'Thank you! Your message was received (development mode).',
        internalError: 'Internal Server Error.'
    },
    no: {
        required: 'Dette feltet er påkrevd.',
        invalidEmail: 'E-postadressen er ugyldig.',
        serverError: 'Det oppstod en feil under behandlingen av forespørselen din.',
        noApiKeys: 'Skjemasending er deaktivert nå (utviklingsmodus).',
        success: 'Takk! Meldingen din ble mottatt (utviklingsmodus).',
        internalError: 'Intern serverfeil.'
    }
};

// Placeholders removed as per user request