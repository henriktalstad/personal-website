import { ExperienceContent, Lang } from '@/types/components/experience';
import { BasicHeaderProps } from '@/types/components/headers';
import { MetaDataProps } from '@/types/components/global';

export const META_EXPERIENCE: Lang<MetaDataProps> = {
    en: {
        title: `Experience | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    no: {
        title: `Erfaring | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const EXPERIENCE_HEADER: Lang<BasicHeaderProps> = {
    en: {
        title: '03',
        content: 'Professional Journey'
    },
    no: {
        title: '03',
        content: 'Profesjonell reise'
    }
};

export const EXPERIENCE: Lang<ExperienceContent> = {
    en: {
        title: 'Experience',
        items: [
            {
                title: 'CEO & Founder',
                company: 'Scoped Solutions',
                period: 'Jan 2024 - Present',
                description: [
                    'Developing a data-driven real estate platform that makes property management more efficient',
                    'Combining advanced data analysis with practical insights to help property companies make smarter decisions',
                    'Leading sustainability efforts through interactive visualizations and forecasting tools that enable clients to monitor progress and generate reports'
                ],
                skills: ['Leadership', 'Product Development', 'Data Analysis']
            },
            {
                title: 'Market Lead & Co-Founder',
                company: 'Artigboks',
                period: 'Dec 2023 - Present',
                description: [
                    'Co-founded activity box rental service for parks',
                    'Leading market strategy and business development'
                ],
                skills: ['Entrepreneurship', 'Marketing', 'Business Development']
            },
            {
                title: 'Advisor',
                company: 'Spark* NTNU',
                period: 'Feb 2024 - Feb 2025',
                description: [
                    'Provided guidance to student entrepreneurs at NTNU',
                    'Helped startups develop their business ideas and go-to-market strategies'
                ],
                skills: ['Mentorship', 'Business Strategy', 'Startup Advising']
            },
            {
                title: 'Teaching Assistant',
                company: 'NTNU',
                period: '2022 - 2024',
                description: [
                    'Multiple TA positions in entrepreneurship, cybernetics and engineering courses',
                    'TIØ4331 - Entrepreneurial opportunities and market research',
                    'TTK4215 - Adaptive control',
                    'TTK4130 - Modeling and simulation',
                    'TTK4225 - System theory'
                ],
                skills: ['Teaching', 'Cybernetics', 'Engineering', 'Entrepreneurship']
            },
            {
                title: 'Model Developer',
                company: 'TERRAVERA Foundation',
                period: 'Dec 2022 - Dec 2023',
                description: [
                    'Developed models for sustainable decision-making platform',
                    'Non-profit tech foundation empowering sustainable decisions'
                ],
                skills: ['Innovation', 'Simulation', 'Creative Problem Solving', 'Modeling']
            },
            {
                title: 'Start NTNU',
                company: 'Student Organization',
                period: '2022 - 2024',
                description: [
                    'Served in multiple roles including Mentor, Project Manager and Project Member',
                    'Promoted innovation and entrepreneurship within the NTNU student community',
                    'Helped develop student entrepreneurial spirit through events, knowledge-sharing and networking'
                ],
                skills: ['Project Management', 'Entrepreneurship', 'Student Leadership']
            },
            {
                title: 'Sensor Engineer',
                company: 'Shift Hyperloop',
                period: 'Sep 2021 - Aug 2022',
                description: [
                    'Member of student-driven hyperloop team working on Scandinavia\'s first hyperloop pod',
                    'Developed levitation R&D components for transportation technology'
                ],
                skills: ['Engineering', 'R&D', 'Sensor Technology', 'Levitation', 'Magnetics']
            },
            {
                title: 'Master\'s Degree',
                company: 'NTNU School of Entrepreneurship',
                period: 'Completed',
                description: [
                    'MSc in Entrepreneurship with background in Cybernetics and Robotics engineering',
                    'Thesis focused on how hardware companies can enhance scalability capabilities through business model innovation',
                    'Combined technical engineering expertise with entrepreneurial business development skills'
                ],
                skills: ['Entrepreneurship', 'Cybernetics', 'Robotics', 'Business Model Innovation']
            }
        ]
    },
    no: {
        title: 'Erfaring',
        items: [
            {
                title: 'Daglig leder & Gründer',
                company: 'Scoped Solutions',
                period: 'Jan 2024 - Nåværende',
                description: [
                    'Utvikler et datadrevet eiendomsverktøy som gjør det lønnsomt og lett å forbedre eiendom',
                    'Kombinerer avansert dataanalyse med praktisk innsikt for å hjelpe eiendomsselskaper med å ta smartere valg',
                    'Gjør bærekraftsarbeid til en mer engasjerende prosess gjennom interaktive visualiseringer og prognoseverkøy'
                ],
                skills: ['Ledelse', 'Produktutvikling', 'Dataanalyse']
            },
            {
                title: 'Markedssjef & Medgründer',
                company: 'Artigboks',
                period: 'Des 2023 - Nåværende',
                description: [
                    'Medgründer av utleietjeneste for aktivitetsbokser i parker',
                    'Leder markedsstrategi og forretningsutvikling'
                ],
                skills: ['Gründervirksomhet', 'Markedsføring', 'Forretningsutvikling']
            },
            {
                title: 'Veileder',
                company: 'Spark* NTNU',
                period: 'Feb 2024 - Feb 2025',
                description: [
                    'Veiledet studentgründere ved NTNU',
                    'Hjalp oppstartsbedrifter med å utvikle sine forretningsideer og go-to-market strategier'
                ],
                skills: ['Veiledning', 'Forretningsstrategi', 'Oppstartsveiledning']
            },
            {
                title: 'Læringsassistent',
                company: 'NTNU',
                period: '2022 - 2024',
                description: [
                    'Flere stillinger som læringsassistent innen gründerskap, kybernetikk og ingeniørfag',
                    'TIØ4331 - Entreprenørielle muligheter og markedsundersøkelser',
                    'TTK4215 - Adaptiv regulering',
                    'TTK4130 - Modellering og simulering',
                    'TTK4225 - Systemteori'
                ],
                skills: ['Undervisning', 'Kybernetikk', 'Ingeniørvitenskap', 'Entreprenørskap']
            },
            {
                title: 'Modellutvikler',
                company: 'TERRAVERA Foundation',
                period: 'Des 2022 - Des 2023',
                description: [
                    'Utviklet modeller for bærekraftige beslutningsplattformer',
                    'Non-profit tech-stiftelse for å styrke bærekraftige beslutninger'
                ],
                skills: ['Innovasjon', 'Simulering', 'Kreativ problemløsning', 'Modellering']
            },
            {
                title: 'Start NTNU',
                company: 'Studentorganisasjon',
                period: '2022 - 2024',
                description: [
                    'Hadde flere roller inkludert Mentor, Prosjektleder og Prosjektmedlem',
                    'Fremmet innovasjon og gründerskap blant NTNU-studenter',
                    'Bidro til å utvikle studenters entreprenørånd gjennom arrangementer, kunnskapsdeling og nettverksbygging'
                ],
                skills: ['Prosjektledelse', 'Gründerskap', 'Studentengasjement']
            },
            {
                title: 'Sensoringeniør',
                company: 'Shift Hyperloop',
                period: 'Sep 2021 - Aug 2022',
                description: [
                    'Medlem av studentdrevet hyperloop-team med mål om å bygge Skandinavias første hyperloop-pod',
                    'Utviklet levitasjons-R&D komponenter for transportteknologi'
                ],
                skills: ['Ingeniørvitenskap', 'R&D', 'Sensorteknologi', 'Levitasjon', 'Magnetisme']
            },
            {
                title: 'Mastergrad',
                company: 'NTNUs Entreprenørskole',
                period: 'Fullført',
                description: [
                    'Sivilingeniør og Mastergrad i Entreprenørskap, bakgrunn fra Kybernetikk og Robotikk',
                    'Masteroppgave om hvordan selskaper med maskinvarekomponenter kan øke skalerbarhetskapabiliteter gjennom sin forretningsmodell',
                    'Kombinerte teknisk ingeniørekspertise med entreprenørielle forretningsutviklingsferdigheter'
                ],
                skills: ['Entreprenørskap', 'Kybernetikk', 'Robotikk', 'Forretningsmodellinnovasjon']
            }
        ]
    }
};
