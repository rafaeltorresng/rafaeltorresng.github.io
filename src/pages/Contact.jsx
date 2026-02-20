import { motion } from 'framer-motion'

const Contact = ({ darkMode }) => {
    return (
        <div className="min-h-[60vh] flex items-start px-12 pt-24 pb-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-2xl"
            >
                {/* Header */}
                <div className="mb-16">
                    <h1 className={`text-2xl font-light mb-6 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        Get In Touch
                    </h1>
                    <p className={`text-sm font-light leading-relaxed ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        I'm always interested in discussing new opportunities, innovative projects, 
                        or just connecting with fellow tech enthusiasts.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                    {/* Email */}
                    <div>
                        <p className={`text-xs font-light mb-2 ${
                            darkMode ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                            Email
                        </p>
                        <a
                            href="mailto:rafaeltorresng@gmail.com"
                            className={`text-sm font-light transition-opacity duration-200 hover:opacity-60 ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                        >
                            rafaeltorresng@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div>
                        <p className={`text-xs font-light mb-2 ${
                            darkMode ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                            Phone
                        </p>
                        <a
                            href="tel:+5581982512792"
                            className={`text-sm font-light transition-opacity duration-200 hover:opacity-60 ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                        >
                            +55 81 98251-2792
                        </a>
                    </div>

                    {/* Location */}
                    <div>
                        <p className={`text-xs font-light mb-2 ${
                            darkMode ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                            Location
                        </p>
                        <p className={`text-sm font-light ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            João Pessoa, PB, Brazil
                        </p>
                    </div>

                    {/* Social Links */}
                    <div>
                        <p className={`text-xs font-light mb-3 ${
                            darkMode ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                            Links
                        </p>
                        <div className="flex gap-6 text-sm font-light">
                            <a
                                href="https://github.com/rafaeltorresng"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`transition-opacity duration-200 hover:opacity-60 ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/rafaeltng"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`transition-opacity duration-200 hover:opacity-60 ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://www.instagram.com/rafatorresg_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`transition-opacity duration-200 hover:opacity-60 ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                                Instagram
                            </a>
                            <a
                                href={`${import.meta.env.BASE_URL}resume.pdf`}
                                download
                                className={`transition-opacity duration-200 hover:opacity-60 ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact
