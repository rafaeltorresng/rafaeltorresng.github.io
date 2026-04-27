import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const Home = ({ darkMode }) => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="min-h-[60vh] flex items-start px-6 sm:px-12 lg:px-24 xl:px-32 pt-24 pb-16 max-w-7xl mx-auto">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="space-y-12"
                    >
                        {/* Name & Title */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-6 sm:gap-8">
                                <motion.img
                                    src={`${import.meta.env.BASE_URL}rtng.png`}
                                    alt="Rafael Torres"
                                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover flex-shrink-0"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                />
                                <h1 className={`text-2xl sm:text-3xl font-normal tracking-tight transition-colors ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Rafael Torres
                                </h1>
                            </div>
                            <p className={`text-base font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                Brazilian software engineer and computer science student who loves to learn new things.
                            </p>
                        </div>

                        {/* Bio */}
                        <div className={`space-y-4 text-base sm:text-lg leading-relaxed font-normal max-w-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            <p>
                                Passionate about exploring the realms of Software Engineering and Machine Learning.
                            </p>

                            <p>
                                I have always found a kind of magic in building things, which is exactly why I ended up in Computer Science. I am captivated by technology and AI, not just for the code, but for their potential to make the everyday smarter and simpler.
                            </p>

                            <p>
                                Outside of work I'm obsessed with sports, music and travelling.
                            </p>
                        </div>

                        {/* Current Work */}
                        <div>
                            <p className={`text-sm font-normal mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                Currently
                            </p>
                            <Link
                                to="/experiences"
                                className="group inline-flex items-center gap-2"
                            >
                                <span className={`text-base font-normal transition-opacity duration-200 group-hover:opacity-60 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                    Working at SeverinoBiu as Founding Software Engineer
                                </span>
                                <ArrowUpRight
                                    size={14}
                                    className={`transition-opacity duration-200 group-hover:opacity-60 ${darkMode ? 'text-gray-500' : 'text-gray-400'
                                        }`}
                                />
                            </Link>
                        </div>

                        {/* Education */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <p className={`text-sm font-normal ${darkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>
                                    Education
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <img
                                    src={`${import.meta.env.BASE_URL}ufpb-logo.png`}
                                    alt="UFPB"
                                    className="w-8 h-8 object-contain rounded"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                                <div>
                                    <p className={`text-base font-normal ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        Bachelor of Computer Science
                                    </p>
                                    <p className={`text-sm font-normal ${darkMode ? 'text-gray-500' : 'text-gray-500'
                                        }`}>
                                        UFPB · 2024 - 2027
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Home
