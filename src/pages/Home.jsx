import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Plus, X } from 'lucide-react'
import { useState } from 'react'

const Home = ({ darkMode }) => {
    const [showUFPBExperiences, setShowUFPBExperiences] = useState(false)

    const ufpbExperiences = [
        { name: 'MGITECH', role: 'AI Researcher Intern', link: 'https://pt.linkedin.com/feed/update/urn:li:activity:7356288758721183745' },
        { name: 'ARIA', role: 'AI Researcher', link: 'https://aria.ci.ufpb.br/' },
        { name: 'TAIL', role: 'Student Member', link: 'https://www.instagram.com/tailufpb/?hl=en' },
        { name: 'TRIL Lab', role: 'Data Scientist', link: 'https://tril.ci.ufpb.br/en/' },
        { name: 'Trilha', role: 'Trainee', link: 'https://www.trilhaufpb.com/' }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="min-h-[60vh] flex items-start px-12 pt-24 pb-16">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="space-y-12"
                    >
                        {/* Name & Title */}
                        <div className="space-y-3">
                            <h1 className={`text-3xl font-normal tracking-tight transition-colors ${
                                darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                                Rafael Torres
                            </h1>
                            <p className={`text-base font-medium ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                Brazilian software engineer and computer science student who loves to learn new things.
                            </p>
                        </div>
                        
                        {/* Bio */}
                        <div className={`space-y-4 text-lg leading-relaxed font-normal max-w-xl ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            <p>
                                Passionate about exploring the realms of Software Engineering and Machine Learning.
                            </p>
                            
                            <p>
                                I have always found a quiet magic in building things, which is exactly why I ended up in Computer Science. I am captivated by technology and AI, not just for the code, but for their potential to make the everyday smarter and simpler.
                            </p>
                        </div>

                        {/* Current Work */}
                        <div>
                            <p className={`text-sm font-normal mb-2 ${
                                darkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                                Currently
                            </p>
                            <a
                                href="https://www.santanainteligencia.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2"
                            >
                                <span className={`text-base font-normal transition-opacity duration-200 group-hover:opacity-60 ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    Working at SeverinoBiu as Software Engineer
                                </span>
                                <ArrowUpRight 
                                    size={14} 
                                    className={`transition-opacity duration-200 group-hover:opacity-60 ${
                                        darkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`}
                                />
                            </a>
                        </div>

                        {/* Education */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <p className={`text-sm font-normal ${
                                    darkMode ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                    Education
                                </p>
                                <button
                                    onClick={() => setShowUFPBExperiences(!showUFPBExperiences)}
                                    className={`p-1 rounded transition-opacity duration-200 hover:opacity-60 ${
                                        darkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`}
                                >
                                    {showUFPBExperiences ? <X size={14} /> : <Plus size={14} />}
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <img
                                    src={`${import.meta.env.BASE_URL}ufpb-logo.png`}
                                    alt="UFPB"
                                    className="w-8 h-8 object-contain rounded"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                                <div>
                                    <p className={`text-base font-normal ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        Bachelor of Computer Science
                                    </p>
                                    <p className={`text-sm font-normal ${
                                        darkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>
                                        UFPB · 2024 - 2027
                                    </p>
                                </div>
                            </div>

                            {/* UFPB Experiences Dropdown */}
                            <AnimatePresence>
                                {showUFPBExperiences && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        transition={{ 
                                            duration: 0.4,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                        className={`overflow-hidden pl-11 space-y-2 border-l ${
                                            darkMode ? 'border-gray-800' : 'border-gray-200'
                                        }`}
                                    >
                                        {ufpbExperiences.map((exp, index) => (
                                            <motion.div 
                                                key={index} 
                                                className="pl-3"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ 
                                                    duration: 0.3,
                                                    delay: index * 0.05,
                                                    ease: [0.4, 0, 0.2, 1]
                                                }}
                                            >
                                                {exp.link ? (
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group inline-flex items-start gap-2"
                                                    >
                                                        <div className="flex-1">
                                                            <p className={`text-sm font-normal transition-opacity duration-200 group-hover:opacity-60 ${
                                                                darkMode ? 'text-gray-400' : 'text-gray-600'
                                                            }`}>
                                                                {exp.name}
                                                            </p>
                                                            <p className={`text-xs font-normal ${
                                                                darkMode ? 'text-gray-600' : 'text-gray-500'
                                                            }`}>
                                                                {exp.role}
                                                            </p>
                                                        </div>
                                                        <ArrowUpRight 
                                                            size={12} 
                                                            className={`flex-shrink-0 mt-0.5 transition-opacity duration-200 group-hover:opacity-60 ${
                                                                darkMode ? 'text-gray-600' : 'text-gray-500'
                                                            }`}
                                                        />
                                                    </a>
                                                ) : (
                                                    <div>
                                                        <p className={`text-sm font-normal ${
                                                            darkMode ? 'text-gray-400' : 'text-gray-600'
                                                        }`}>
                                                            {exp.name}
                                                        </p>
                                                        <p className={`text-xs font-normal ${
                                                            darkMode ? 'text-gray-600' : 'text-gray-500'
                                                        }`}>
                                                            {exp.role}
                                                        </p>
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Home
