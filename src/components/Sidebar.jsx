import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ darkMode }) => {
    const navLinks = [
        { name: 'Intro', path: '/' },
        { name: 'Experience', path: '/experiences' },
        { name: 'Projects', path: '/projects' },
        { name: 'Refs', path: '/books' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <aside className={`w-64 sidebar-fixed transition-colors duration-300 ${
            darkMode ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f5]'
        }`}>
            {/* Dark mode background */}
            <div 
                className="fixed top-0 left-0 w-64 h-screen transition-opacity duration-500"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}IMG_3122.JPG)`,
                    backgroundPosition: 'top center',
                    backgroundSize: 'cover',
                    opacity: darkMode ? 0.6 : 0,
                    zIndex: 0
                }}
            />
            
            {/* Light mode background */}
            <div 
                className="fixed top-0 left-0 w-64 h-screen transition-opacity duration-500"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}IMG_3124%202.JPG)`,
                    backgroundPosition: 'top center',
                    backgroundSize: 'cover',
                    opacity: darkMode ? 0 : 0.6,
                    zIndex: 0
                }}
            />
            
            {/* Overlay for better text readability */}
            <div 
                className="fixed top-0 left-0 w-64 h-screen transition-colors duration-500"
                style={{
                    backgroundColor: darkMode ? 'rgba(10, 10, 10, 0.5)' : 'rgba(245, 245, 245, 0.5)',
                    zIndex: 1
                }}
            />
            
            <div className="px-8 pt-24 pb-12 flex flex-col h-full relative z-10">
                {/* Navigation - Top */}
                <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-1"
                >
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `block py-1 text-base font-medium transition-colors duration-200 ${
                                    isActive
                                        ? darkMode
                                            ? 'text-white'
                                            : 'text-gray-900'
                                        : darkMode
                                        ? 'text-gray-300 hover:text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </motion.nav>

                {/* Contact & Social - Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="space-y-6"
                >
                    {/* Email & Resume */}
                    <div className="space-y-1">
                        <a
                            href="mailto:rafaeltorresng@gmail.com"
                            className={`block text-sm font-medium transition-colors duration-200 ${
                                darkMode
                                    ? 'text-gray-300 hover:text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Email
                        </a>
                        <a
                            href={`${import.meta.env.BASE_URL}resume.pdf`}
                            download
                            className={`block text-sm font-medium transition-colors duration-200 ${
                                darkMode
                                    ? 'text-gray-300 hover:text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Resume
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/rafaeltorresng"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-opacity duration-200 hover:opacity-60 ${
                                darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                            <Github size={16} />
                        </a>
                        <a
                            href="https://linkedin.com/in/rafaeltng"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-opacity duration-200 hover:opacity-60 ${
                                darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                            <Linkedin size={16} />
                        </a>
                        <a
                            href="https://www.instagram.com/rafatorresg_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-opacity duration-200 hover:opacity-60 ${
                                darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                            <Instagram size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </aside>
    )
}

export default Sidebar
