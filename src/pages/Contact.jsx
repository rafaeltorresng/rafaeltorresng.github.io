import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

const Contact = ({ darkMode }) => {
    return (
        <div className="pt-24 pb-20 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Get In Touch
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow tech enthusiasts
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Information - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className={`text-2xl font-semibold mb-6 text-center transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                                }`}>Let's Connect</h3>

                            <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'
                                        }`}>
                                        <Mail className="text-brand-300" size={24} />
                                    </div>
                                    <div>
                                        <p className={`text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Email</p>
                                        <a
                                            href="mailto:rafaeltorresng@gmail.com"
                                            className={`transition-colors text-sm ${darkMode
                                                    ? 'text-gray-400 hover:text-brand-300'
                                                    : 'text-gray-700 hover:text-brand-600'
                                                }`}
                                        >
                                            rafaeltorresng@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'
                                        }`}>
                                        <Phone className="text-brand-300" size={24} />
                                    </div>
                                    <div>
                                        <p className={`text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Phone</p>
                                        <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'
                                            }`}>+55 81 98251-2792</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'
                                        }`}>
                                        <Linkedin className="text-brand-300" size={24} />
                                    </div>
                                    <div>
                                        <p className={`text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>LinkedIn</p>
                                        <a
                                            href="https://linkedin.com/in/rafaeltng"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`transition-colors text-sm ${darkMode
                                                    ? 'text-gray-400 hover:text-brand-300'
                                                    : 'text-gray-700 hover:text-brand-600'
                                                }`}
                                        >
                                            linkedin.com/in/rafaeltng
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'
                                        }`}>
                                        <Github className="text-brand-300" size={24} />
                                    </div>
                                    <div>
                                        <p className={`text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>GitHub</p>
                                        <a
                                            href="https://github.com/rafaeltorresng"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`transition-colors text-sm ${darkMode
                                                    ? 'text-gray-400 hover:text-brand-300'
                                                    : 'text-gray-700 hover:text-brand-600'
                                                }`}
                                        >
                                            github.com/rafaeltorresng
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Contact
