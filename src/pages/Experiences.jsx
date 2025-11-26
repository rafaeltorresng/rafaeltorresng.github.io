import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Experiences = ({ darkMode }) => {
    const experience = [
        {
            title: 'Software Engineer',
            company: 'SeverinoBiu',
            period: 'Nov 2025 - Present',
            location: 'Brazil',
            description: 'Crafting tools.',
            current: true,
            logo: 'SB.png'
        },
        {
            title: 'AI Researcher (ARIA & UPenn)',
            company: 'ARIA',
            period: 'Aug 2025 - Present',
            location: 'João Pessoa, PB, Brazil',
            description: 'Conducting collaborative research with UPenn on machine learning for healthcare applications.',
            current: true,
            logo: 'aria.png'
        },
        {
            title: 'Student Member',
            company: 'TAIL - Technology and Artificial Intelligence League',
            period: 'July 2025 - Present',
            location: '',
            description: 'Advancing skills in Machine Learning, Data Science, and Deep Learning by developing AI projects.',
            current: true,
            logo: 'tail.png'
        },
        {
            title: 'Software Engineer',
            company: 'deco',
            period: 'Oct 2025 (1 month)',
            location: 'Rio de Janeiro, Brazil',
            description: 'Engineered tools for an internal application that served as the data backbone for a client product.',
            current: false,
            logo: 'deco.png'
        },
        {
            title: 'AI Researcher Intern',
            company: 'MGITECH',
            period: 'March 2025 - Oct 2025',
            location: 'Mogi das Cruzes, SP, Brazil',
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
            location: 'João Pessoa, PB, Brazil',
            description: 'AI research support: data preparation, exploratory analysis, and development of multi-agent systems for sales automation (CrewAI).',
            current: false,
            logo: 'tril-logo.png'
        },
        {
            title: 'Trainee',
            company: 'Trilha',
            period: 'July 2024 - Dec 2024',
            location: 'João Pessoa, PB, Brazil',
            description: 'Developed skills in AI/programming logic. Gained experience with software development tools, best practices, and ML pipelines.',
            current: false,
            logo: 'trilha.png',
            link: 'https://www.linkedin.com/feed/update/urn:li:activity:7289706489248641025/?originalSubdomain=pt',
            asset: 'Trilhahack.png'
        }
    ]

    return (
        <div className="pt-24 pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Professional Experience
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        My journey in the tech industry
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`p-8 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode
                                ? 'bg-gray-800 border-gray-700'
                                : 'bg-white border-gray-200'
                                }`}
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/* Logo or Placeholder */}
                                <div className="w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center bg-white border border-gray-200">
                                    {exp.logo ? (
                                        <img
                                            src={`${import.meta.env.BASE_URL}${exp.logo}`}
                                            alt={`${exp.company} Logo`}
                                            className="w-full h-full object-contain rounded-lg p-1"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextElementSibling.style.display = 'block';
                                            }}
                                        />
                                    ) : (
                                        <span className={`text-2xl font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {exp.company.charAt(0)}
                                        </span>
                                    )}
                                    {/* Fallback for broken image */}
                                    <span className="hidden text-2xl font-bold text-gray-500">
                                        {exp.company.charAt(0)}
                                    </span>
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                        <div>
                                            <h3 className={`text-xl font-bold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                                                }`}>
                                                {exp.title}
                                            </h3>
                                            <p className={`text-lg font-medium transition-colors duration-300 ${darkMode ? 'text-brand-300' : 'text-brand-600'
                                                }`}>
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="text-right mt-2 md:mt-0">
                                            <p className={`font-medium whitespace-nowrap transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}>
                                                {exp.period}
                                            </p>
                                            {exp.location && (
                                                <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-500' : 'text-gray-500'
                                                    }`}>
                                                    {exp.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {exp.description && (
                                        <p className={`mt-4 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                            {exp.description}
                                        </p>
                                    )}

                                    {/* Linked Asset */}
                                    {exp.link && exp.asset && (
                                        <div className="mt-4">
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block group"
                                            >
                                                <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                                                    <img
                                                        src={`${import.meta.env.BASE_URL}${exp.asset}`}
                                                        alt="Reference"
                                                        className="h-24 w-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                                        <ExternalLink size={16} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences
