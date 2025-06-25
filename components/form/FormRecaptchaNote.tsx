import { useRouter } from 'next-translate-routes';
import { FORM_LABELS } from '@/data/contact.data';

export default function FormRecaptchaNote() {
    const { locale } = useRouter();
    const currentLang = (locale as keyof typeof FORM_LABELS) || 'en';
    const rawRecaptchaNote = FORM_LABELS[currentLang]?.recaptchaNote || FORM_LABELS.en.recaptchaNote;
    
    // Add the privacy policy and terms of service links
    const recaptchaNote = rawRecaptchaNote.replace('Google', 'Google <a href="https://policies.google.com/privacy" title="Privacy Policy">Privacy Policy</a> and <a href="https://policies.google.com/terms" title="Terms of Service">Terms of Service</a>');

    return (
        <>
            {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY &&
                <div className="o-wysiwyg">
                    <p><small dangerouslySetInnerHTML={{__html: recaptchaNote}} /></p>
                </div>
            }
        </>
    );
}