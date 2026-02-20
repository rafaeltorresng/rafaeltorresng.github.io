import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const Home = ({ darkMode }) => {
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
                                darkMode ? 'text-gray-600' : 'text-gray-400'
                            }`}>
                                Currently
                            </p>
                            <Link
                                to="/experiences"
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
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Home
