import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

const Projects = ({ darkMode }) => {
    const projects = [
        {
            title: 'TARG (Time-series Analysis Report Generator)',
            description: 'An advanced stock forecasting platform that predicts stock prices for the next 5 days using sophisticated LSTM time series models. Integrates real-time financial news through web scraping with sentiment analysis to enhance prediction accuracy and provide comprehensive market insights.',
            github: 'https://github.com/Vitoreism/TARG',
            number: '01'
        },
        {
            title: 'Blonded AI',
            description: 'An intelligent music recommendation system built using Spotify audio embeddings and PCA. Features a sophisticated feature extraction pipeline, similarity computation algorithms, and a personalized recommendation engine with Spotify integration.',
            github: 'https://github.com/rafaeltorresng/Blonded-AI',
            number: '02'
        },
        {
            title: 'GuardAzul',
            description: 'A mobile app designed to protect the coastal ecosystems of Paraíba, Brazil. This project integrates a React Native (Expo) mobile application with a Python (FastAPI) RESTful API and a PostgreSQL database. The platform leverages Google\'s AI (Gemini and Vision) to power an informative chatbot and to automatically validate environmental reports submitted by users.',
            github: 'https://github.com/luigischmitt/GuardAzul',
            number: '03'
        },
        {
            title: 'Brazilian Championship Simulator',
            description: 'A comprehensive football simulation platform that recreates the Brazilian Championship experience. Features intelligent match algorithms, real-time league standings, and dynamic team management with an intuitive web interface built on Java Spring Boot.',
            github: 'https://github.com/arturpereira12/poo_brasileirao',
            number: '04'
        }
    ]

    return (
        <div className="min-h-screen py-16 px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <div className="mb-12">
                    <h1 className={`text-4xl font-bold mb-4 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        Projects
                    </h1>
                    <p className={`text-lg font-mono ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Selected work
                    </p>
                </div>

                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ x: 4 }}
                            className={`elegant-card p-6 rounded-lg border transition-all duration-300 hover:shadow-xl group ${
                                darkMode
                                    ? 'bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#3a3a3a]'
                                    : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-start gap-6">
                                {/* Project Number */}
                                <div className={`text-5xl font-bold font-mono opacity-20 transition-opacity duration-300 group-hover:opacity-40 ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                    {project.number}
                                </div>

                                {/* Project Content */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h3 className={`text-xl font-bold transition-colors duration-300 ${
                                            darkMode ? 'text-white group-hover:text-gray-300' : 'text-gray-900 group-hover:text-gray-700'
                                        }`}>
                                            {project.title}
                                        </h3>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${
                                                darkMode
                                                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                            }`}
                                        >
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>
                                    
                                    <p className={`text-sm leading-relaxed mb-4 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {project.description}
                                    </p>

                                    {/* Links */}
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`link-underline flex items-center gap-2 text-sm font-mono transition-colors ${
                                                darkMode
                                                    ? 'text-gray-400 hover:text-white'
                                                    : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        >
                                            <Github size={16} />
                                            <span>Repository</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Projects
