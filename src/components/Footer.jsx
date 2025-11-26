import { Github, Linkedin, Instagram } from 'lucide-react'

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={`py-8 transition-colors duration-300 border-t ${darkMode
                ? 'bg-black border-gray-800 text-gray-400'
                : 'bg-white border-gray-200 text-gray-500'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    &copy; {currentYear} Rafael Torres. All rights reserved.
                </p>

                <div className="flex items-center space-x-6">
                    <a
                        href="https://github.com/rafaeltorresng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors duration-300 ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'
                            }`}
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/rafaeltng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors duration-300 ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'
                            }`}
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/rafatorresg_/profilecard/?igsh=a3BxOGoycTF2ZTI4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors duration-300 ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'
                            }`}
                        aria-label="Instagram"
                    >
                        <Instagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
