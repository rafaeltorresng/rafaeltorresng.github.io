import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import TiltedCard from '../components/TiltedCard'

const Projects = ({ darkMode }) => {
    const projects = [
        {
            title: 'TARG (Time-series Analysis Report Generator)',
            description: 'An advanced stock forecasting platform that predicts stock prices for the next 5 days using sophisticated LSTM time series models. Integrates real-time financial news through web scraping with sentiment analysis to enhance prediction accuracy and provide comprehensive market insights.',
            image: 'targ-presentation.png',
            tech: ['Python', 'LSTM', 'NLP', 'Web Scraping', 'Time Series', 'Sentiment Analysis'],
            github: 'https://github.com/Vitoreism/TARG'
        },
        {
            title: 'Blonded AI',
            description: 'An intelligent music recommendation system built using Spotify audio embeddings and PCA. Features a sophisticated feature extraction pipeline, similarity computation algorithms, and a personalized recommendation engine with Spotify integration.',
            image: 'blonded-ai.png',
            tech: ['Python', 'Spotify API', 'PCA', 'Audio Processing', 'Machine Learning', 'Embeddings'],
            github: 'https://github.com/rafaeltorresng/Blonded-AI'
        },
        {
            title: 'GuardAzul',
            description: 'A mobile app designed to protect the coastal ecosystems of Paraíba, Brazil. This project integrates a React Native (Expo) mobile application with a Python (FastAPI) RESTful API and a PostgreSQL database. The platform leverages Google\'s AI (Gemini and Vision) to power an informative chatbot and to automatically validate environmental reports submitted by users.',
            image: 'Login(1).png',
            tech: ['React Native', 'FastAPI', 'PostgreSQL', 'Google AI', 'Docker', 'TypeScript'],
            github: 'https://github.com/luigischmitt/GuardAzul'
        },
        {
            title: 'Brazilian Championship Simulator',
            description: 'A comprehensive football simulation platform that recreates the Brazilian Championship experience. Features intelligent match algorithms, real-time league standings, and dynamic team management with an intuitive web interface built on Java Spring Boot.',
            image: 'brasileirao-adr.png',
            tech: ['Java', 'Spring Boot', 'OOP', 'Web Application', 'Database', 'Sports Simulation'],
            github: 'https://github.com/arturpereira12/poo_brasileirao'
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
                        Featured Projects
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        A selection of projects that showcase my skills and experience
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border flex flex-col ${darkMode
                                    ? 'bg-gray-800 border-gray-700'
                                    : 'bg-white border-gray-200'
                                }`}
                        >
                            <div className="relative h-48 sm:h-64 flex-shrink-0">
                                <TiltedCard
                                    imageSrc={`${import.meta.env.BASE_URL}${project.image}`}
                                    altText={project.title}
                                    containerHeight="100%"
                                    containerWidth="100%"
                                    imageHeight="100%"
                                    imageWidth="100%"
                                    scaleOnHover={1.05}
                                    rotateAmplitude={10}
                                    showMobileWarning={false}
                                    showTooltip={false}
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {project.title}
                                </h3>
                                <p className={`mb-6 leading-relaxed text-sm transition-colors duration-300 flex-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-3 py-1 text-xs rounded-full font-medium ${darkMode
                                                    ? 'bg-gray-700 text-gray-300'
                                                    : 'bg-gray-100 text-gray-700'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center transition-colors ${darkMode
                                                ? 'text-gray-400 hover:text-brand-300'
                                                : 'text-gray-600 hover:text-brand-600'
                                            }`}
                                    >
                                        <Github size={16} className="mr-2" />
                                        View Code
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`transition-colors cursor-pointer ${darkMode
                                                ? 'text-gray-500 hover:text-brand-300'
                                                : 'text-gray-600 hover:text-brand-600'
                                            }`}
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
