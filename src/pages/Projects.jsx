import { motion } from 'framer-motion'
import { Github, ExternalLink, TrendingUp, Music, Shield, Trophy } from 'lucide-react'

const Projects = ({ darkMode }) => {
    const projects = [
        {
            title: 'TARG (Time-series Analysis Report Generator)',
            description: 'An advanced stock forecasting platform that predicts stock prices for the next 5 days using sophisticated LSTM time series models. Integrates real-time financial news through web scraping with sentiment analysis to enhance prediction accuracy and provide comprehensive market insights.',
            icon: TrendingUp,
            bgColor: darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 via-gray-100 to-white',
            accentColor: darkMode ? 'text-gray-300' : 'text-gray-700',
            iconColor: 'text-purple-500',
            glowColor: 'rgba(168, 85, 247, 0.4)',
            github: 'https://github.com/Vitoreism/TARG',
            pattern: 'chart'
        },
        {
            title: 'Blonded AI',
            description: 'An intelligent music recommendation system built using Spotify audio embeddings and PCA. Features a sophisticated feature extraction pipeline, similarity computation algorithms, and a personalized recommendation engine with Spotify integration.',
            icon: Music,
            bgColor: darkMode ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100',
            accentColor: darkMode ? 'text-gray-400' : 'text-gray-600',
            iconColor: 'text-emerald-500',
            glowColor: 'rgba(16, 185, 129, 0.4)',
            github: 'https://github.com/rafaeltorresng/Blonded-AI',
            pattern: 'waves'
        },
        {
            title: 'GuardAzul',
            description: 'A mobile app designed to protect the coastal ecosystems of Paraíba, Brazil. This project integrates a React Native (Expo) mobile application with a Python (FastAPI) RESTful API and a PostgreSQL database. The platform leverages Google\'s AI (Gemini and Vision) to power an informative chatbot and to automatically validate environmental reports submitted by users.',
            icon: Shield,
            bgColor: darkMode ? 'bg-gradient-to-br from-gray-800 via-black to-gray-900' : 'bg-gradient-to-br from-gray-100 via-white to-gray-50',
            accentColor: darkMode ? 'text-white' : 'text-gray-900',
            iconColor: 'text-blue-500',
            glowColor: 'rgba(59, 130, 246, 0.4)',
            github: 'https://github.com/luigischmitt/GuardAzul',
            pattern: 'hexagon'
        },
        {
            title: 'Brazilian Championship Simulator',
            description: 'A comprehensive football simulation platform that recreates the Brazilian Championship experience. Features intelligent match algorithms, real-time league standings, and dynamic team management with an intuitive web interface built on Java Spring Boot.',
            icon: Trophy,
            bgColor: darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50',
            accentColor: darkMode ? 'text-gray-200' : 'text-gray-800',
            iconColor: 'text-amber-500',
            glowColor: 'rgba(245, 158, 11, 0.4)',
            github: 'https://github.com/arturpereira12/poo_brasileirao',
            pattern: 'grid'
        }
    ]

    const renderPattern = (pattern, accentColor) => {
        switch(pattern) {
            case 'chart':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M 0 100 Q 50 50 100 80 T 200 60 T 300 90 T 400 70"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className={accentColor}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.path
                            d="M 0 120 Q 50 70 100 100 T 200 80 T 300 110 T 400 90"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className={accentColor}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />
                    </svg>
                )
            case 'waves':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className={accentColor}
                            animate={{ d: [
                                "M0,50 Q25,30 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50",
                                "M0,50 Q25,70 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50",
                                "M0,50 Q25,30 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50"
                            ]}}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.path
                            d="M0,80 Q25,60 50,80 T100,80 T150,80 T200,80 T250,80 T300,80 T350,80 T400,80"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className={accentColor}
                            animate={{ d: [
                                "M0,80 Q25,60 50,80 T100,80 T150,80 T200,80 T250,80 T300,80 T350,80 T400,80",
                                "M0,80 Q25,100 50,80 T100,80 T150,80 T200,80 T250,80 T300,80 T350,80 T400,80",
                                "M0,80 Q25,60 50,80 T100,80 T150,80 T200,80 T250,80 T300,80 T350,80 T400,80"
                            ]}}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </svg>
                )
            case 'hexagon':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                        {[...Array(6)].map((_, i) => (
                            <motion.polygon
                                key={i}
                                points="100,50 125,68 125,93 100,111 75,93 75,68"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="none"
                                className={accentColor}
                                style={{ transform: `translate(${i * 60}px, ${i % 2 * 40}px)` }}
                                animate={{ 
                                    opacity: [0.1, 0.3, 0.1],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity, 
                                    delay: i * 0.3,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </svg>
                )
            case 'grid':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <motion.rect 
                                    width="40" 
                                    height="40" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="1"
                                    className={accentColor}
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                )
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen py-16 px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl"
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

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => {
                        const IconComponent = project.icon
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className={`elegant-card rounded-lg border overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col group relative ${
                                    darkMode
                                        ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
                                        : 'bg-white border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                {/* Full card background pattern */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <div className={`absolute inset-0 ${project.bgColor} opacity-5`} />
                                    <div className="absolute inset-0 opacity-5">
                                        {renderPattern(project.pattern, project.accentColor)}
                                    </div>
                                </div>

                                {/* Icon Section */}
                                <div className={`relative h-48 flex items-center justify-center ${project.bgColor} overflow-hidden z-10`}>
                                    {/* Animated pattern - more visible in header */}
                                    <div className="absolute inset-0 opacity-20">
                                        {renderPattern(project.pattern, project.accentColor)}
                                    </div>
                                    
                                    {/* Icon with glow effect */}
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="relative z-10"
                                    >
                                        <motion.div
                                            animate={{ 
                                                boxShadow: [
                                                    `0 0 30px ${project.glowColor}`,
                                                    `0 0 60px ${project.glowColor}`,
                                                    `0 0 30px ${project.glowColor}`
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="rounded-full p-6"
                                        >
                                            <IconComponent 
                                                size={64} 
                                                className={`${project.iconColor} drop-shadow-2xl`}
                                                strokeWidth={1.5}
                                            />
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 flex flex-col flex-1 relative z-10">
                                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                                        darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'
                                    }`}>
                                        {project.title}
                                    </h3>
                                    
                                    <p className={`text-sm leading-relaxed mb-4 flex-1 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {project.description}
                                    </p>

                                    {/* Links */}
                                    <div className="flex items-center gap-4 pt-4 border-t"
                                        style={{
                                            borderColor: darkMode ? '#1f1f1f' : '#e5e7eb'
                                        }}
                                    >
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
                                            <span>Code</span>
                                        </a>
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
                                            <ExternalLink size={16} />
                                            <span>View</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </div>
    )
}

export default Projects
