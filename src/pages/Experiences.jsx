import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Experiences = ({ darkMode }) => {
    const experience = [
        {
            title: 'Software Engineer',
            company: 'SeverinoBiu',
            period: 'Nov 2025 - Present',
            description: 'Crafting tools.',
            current: true,
            logo: 'SB.png',
            link: 'https://severinobiu.com.br/'
        },
        {
            title: 'AI Researcher (ARIA & UPenn)',
            company: 'ARIA',
            period: 'Aug 2025 - Present',
            description: 'Conducting collaborative research with UPenn on machine learning for healthcare applications.',
            current: true,
            logo: 'aria.png'
        },
        {
            title: 'Student Member',
            company: 'TAIL - Technology and Artificial Intelligence League',
            period: 'July 2025 - Present',
            description: 'Advancing skills in Machine Learning, Data Science, and Deep Learning by developing AI projects.',
            current: true,
            logo: 'tail.png'
        },
        {
            title: 'Software Engineer',
            company: 'deco',
            period: 'Oct 2025 (1 month)',
            description: 'Engineered tools for an internal application that served as the data backbone for a client product.',
            current: false,
            logo: 'deco.png'
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
            logo: 'tril-logo.png'
        },
        {
            title: 'Trainee',
            company: 'Trilha',
            period: 'July 2024 - Dec 2024',
            description: 'Developed skills in AI/programming logic. Gained experience with software development tools, best practices, and ML pipelines.',
            current: false,
            logo: 'trilha.png',
            link: 'https://www.linkedin.com/feed/update/urn:li:activity:7289706489248641025/?originalSubdomain=pt',
            asset: 'Trilhahack.png'
        }
    ]

    return (
        <div className="min-h-screen px-12 py-24">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-3xl"
            >
                {/* Header */}
                <div className="mb-16">
                    <h1 className={`text-xl font-normal mb-2 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        Experience
                    </h1>
                </div>

                {/* Experience List */}
                <div className="space-y-12">
                    {experience.map((exp, index) => (
                        <div
                            key={`${exp.company}-${index}`}
                            className="group"
                        >
                            <div className="flex items-start gap-4">
                                {/* Logo */}
                                <div className="w-10 h-10 rounded flex-shrink-0 flex items-center justify-center bg-white border border-gray-100 overflow-hidden">
                                    {exp.logo && (
                                        exp.link && exp.company === 'SeverinoBiu' ? (
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
                                        <h3 className={`text-base font-normal ${
                                            darkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            {exp.title}
                                        </h3>
                                        {exp.link && exp.asset && (
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex-shrink-0 transition-opacity duration-200 hover:opacity-60 ${
                                                    darkMode ? 'text-gray-500' : 'text-gray-400'
                                                }`}
                                            >
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                    
                                    <p className={`text-base font-normal mb-1 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {exp.company}
                                    </p>

                                    <p className={`text-base font-normal mb-3 ${
                                        darkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>
                                        {exp.period}
                                    </p>

                                    <p className={`text-lg font-normal leading-relaxed ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Experiences
