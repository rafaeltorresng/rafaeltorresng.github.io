import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Experiences = ({ darkMode, accentColor, isMobileSection = false }) => {
    const experience = [
        {
            title: 'Founding Software Engineer',
            company: 'SeverinoBiu',
            period: 'Nov 2025 - Present',
            description: 'Building and maintaining a production web application as a full-stack engineer.',
            current: true,
            logo: 'SB.png',
            link: 'https://www.santanainteligencia.com.br/',
            asset: 'SB.png'
        },
        {
            title: 'AI Researcher (ARIA & UPenn)',
            company: 'ARIA',
            period: 'Aug 2025 - Present',
            description: 'Conducting collaborative research with UPenn on machine learning for healthcare applications.',
            current: true,
            logo: 'aria.png',
            link: 'https://aria.ci.ufpb.br/',
            asset: 'aria.png'
        },
        {
            title: 'Student Member',
            company: 'TAIL - Technology and Artificial Intelligence League',
            period: 'July 2025 - Present',
            description: 'Advancing skills in Machine Learning, Data Science, and Deep Learning by developing AI projects.',
            current: true,
            logo: 'tail.png',
            link: 'https://www.instagram.com/tailufpb/?hl=en',
            asset: 'tail.png'
        },
        {
            title: 'Software Engineer',
            company: 'deco',
            period: 'Oct 2025 (1 month)',
            description: 'Engineered tools for an internal application that served as the data backbone for a client product.',
            current: false,
            logo: 'deco.png',
            link: 'https://www.decocms.com/',
            asset: 'deco.png'
        },
        {
            title: 'AI Researcher Intern',
            company: 'MGITECH',
            period: 'March 2025 - Oct 2025',
            description: 'Designed and deployed AI systems enhancing client satisfaction and decision-making speed through intelligent data workflows.',
            current: false,
            logo: 'mgitech-logo.jpeg',
            link: 'https://pt.linkedin.com/feed/update/urn:li:activity:7356288758721183745',
            asset: 'mgi.png'
        },
        {
            title: 'Data Scientist',
            company: 'TRIL Lab',
            period: 'Dec 2024 - March 2025',
            description: 'AI research support: data preparation, exploratory analysis, and development of multi-agent systems for sales automation (CrewAI).',
            current: false,
            logo: 'tril-logo.png',
            link: 'https://tril.ci.ufpb.br/en/',
            asset: 'tril-logo.png'
        },
        {
            title: 'Trainee',
            company: 'Trilha',
            period: 'July 2024 - Dec 2024',
            description: 'Developed skills in AI/programming logic. Gained experience with software development tools, best practices, and ML pipelines.',
            current: false,
            logo: 'trilha.png',
            link: 'https://www.trilhaufpb.com/',
            asset: 'Trilhahack.png'
        }
    ]

    const content = (
        <div className={`${isMobileSection ? 'space-y-8' : 'space-y-12'} relative`}>
            {/* Vertical Timeline Line */}
            <div
                className={`absolute ${isMobileSection ? 'left-[23.25px]' : 'left-[27.25px]'} top-2 bottom-2 w-[1.5px] transition-colors duration-500`}
                style={{
                    backgroundColor: accentColor,
                    opacity: darkMode ? 0.15 : 0.1
                }}
            />

            {experience.map((exp, index) => (
                <div
                    key={`${exp.company}-${index}`}
                    className="group relative z-10"
                >
                    <div className="flex items-start gap-4">
                        {/* Logo */}
                        <div className={`${isMobileSection ? 'w-12 h-12' : 'w-14 h-14'} rounded flex-shrink-0 flex items-center justify-center bg-white border border-gray-100 overflow-hidden`}>
                            {exp.logo && (
                                exp.link ? (
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        <img
                                            src={`${import.meta.env.BASE_URL}${exp.logo}`}
                                            alt={`${exp.company} Logo`}
                                            className="w-full h-full object-contain p-1"
                                            onError={(e) => e.target.style.display = 'none'}
                                        />
                                    </a>
                                ) : (
                                    <img
                                        src={`${import.meta.env.BASE_URL}${exp.logo}`}
                                        alt={`${exp.company} Logo`}
                                        className="w-full h-full object-contain p-1"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                )
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-baseline justify-between gap-4 mb-1">
                                <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {exp.title}
                                </h3>
                                {exp.link && exp.asset && (
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-shrink-0 transition-opacity duration-200 hover:opacity-60 ${darkMode ? 'text-gray-500' : 'text-gray-400'
                                            }`}
                                    >
                                        <ExternalLink size={isMobileSection ? 18 : 14} style={{ color: accentColor }} />
                                    </a>
                                )}
                            </div>

                            <p className={`text-base font-normal mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                {exp.company}
                            </p>

                            <p className={`text-xs font-normal mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                                {exp.period}
                            </p>

                            <p className={`text-base font-normal leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                {exp.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    if (isMobileSection) {
        return content;
    }

    return (
        <div className="min-h-screen px-6 sm:px-12 lg:px-24 xl:px-32 py-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-3xl"
            >
                {/* Header */}
                <div className="mb-16">
                    <h1 className={`text-2xl sm:text-3xl font-normal mb-2 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Experiences<span className="transition-colors duration-500" style={{ color: accentColor }}>.</span>
                    </h1>
                </div>

                {/* Experience List */}
                {content}
            </motion.div>
        </div>
    )
}


export default Experiences
