import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Projects = ({ darkMode }) => {
    const projects = [
        {
            title: 'Blonded AI',
            description: 'An intelligent music recommendation system built using Spotify audio embeddings and PCA. Features a sophisticated feature extraction pipeline, similarity computation algorithms, and a personalized recommendation engine with Spotify integration.',
            github: 'https://github.com/rafaeltorresng/Blonded-AI'
        },
        {
            title: 'GuardAzul',
            description: 'A mobile app designed to protect the coastal ecosystems of Paraíba, Brazil. This project integrates a React Native (Expo) mobile application with a Python (FastAPI) RESTful API and a PostgreSQL database. The platform leverages Google\'s AI (Gemini and Vision) to power an informative chatbot and to automatically validate environmental reports submitted by users.',
            github: 'https://github.com/luigischmitt/GuardAzul'
        },
        {
            title: 'Brazilian Championship Simulator',
            description: 'A comprehensive football simulation platform that recreates the Brazilian Championship experience. Features intelligent match algorithms, real-time league standings, and dynamic team management with an intuitive web interface built on Java Spring Boot.',
            github: 'https://github.com/arturpereira12/poo_brasileirao'
        },
        {
            title: 'TARG (Time-series Analysis Report Generator)',
            description: 'An advanced stock forecasting platform that predicts stock prices for the next 5 days using sophisticated LSTM time series models. Integrates real-time financial news through web scraping with sentiment analysis to enhance prediction accuracy and provide comprehensive market insights.',
            github: 'https://github.com/Vitoreism/TARG'
        },
        {
            title: 'Machine Learning',
            description: 'This repository is to show some of my Machine Learning, Deep Learning and Statistical Modeling algorithms implementations.',
            github: 'https://github.com/rafaeltorresng/Machine_Learning'
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
                        Projects
                    </h1>
                </div>

                {/* Projects List */}
                <div className="space-y-12">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group"
                        >
                            <div className="flex items-start justify-between gap-4 mb-2">
                                <h3 className={`text-base font-normal transition-opacity duration-200 group-hover:opacity-60 ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                    {project.title}
                                </h3>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex-shrink-0 transition-opacity duration-200 hover:opacity-60 ${
                                        darkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`}
                                >
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                            
                            <p className={`text-lg font-normal leading-relaxed ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Projects
