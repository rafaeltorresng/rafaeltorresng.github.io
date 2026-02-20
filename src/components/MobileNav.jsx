import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const MobileNav = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Intro', path: '/' },
        { name: 'Experience', path: '/experiences' },
        { name: 'Projects', path: '/projects' },
        { name: 'Books', path: '/books' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <div className="lg:hidden">
            {/* Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-6 left-6 z-50 p-3 rounded-full transition-colors ${
                    darkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className={`fixed top-0 left-0 h-full w-64 z-40 overflow-y-auto ${
                                darkMode ? 'bg-[#0a0a0a]' : 'bg-white'
                            }`}
                        >
                            <div className="px-8 pt-24 pb-12 flex flex-col h-full">
                                {/* Navigation - Top */}
                                <nav className="flex-1 space-y-1">
                                    {navLinks.map((link) => (
                                        <NavLink
                                            key={link.path}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `block py-1 text-sm font-light transition-colors duration-200 ${
                                                    isActive
                                                        ? darkMode
                                                            ? 'text-white'
                                                            : 'text-gray-900'
                                                        : darkMode
                                                        ? 'text-gray-500 hover:text-gray-300'
                                                        : 'text-gray-400 hover:text-gray-700'
                                                }`
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    ))}
                                </nav>

                                {/* Contact & Social */}
                                <div className="space-y-6">
                                    {/* Email & Resume */}
                                    <div className="space-y-1">
                                        <a
                                            href="mailto:rafaeltorresng@gmail.com"
                                            className={`block text-xs font-light transition-colors duration-200 ${
                                                darkMode
                                                    ? 'text-gray-500 hover:text-gray-300'
                                                    : 'text-gray-400 hover:text-gray-700'
                                            }`}
                                        >
                                            Email
                                        </a>
                                        <a
                                            href={`${import.meta.env.BASE_URL}resume.pdf`}
                                            download
                                            className={`block text-xs font-light transition-colors duration-200 ${
                                                darkMode
                                                    ? 'text-gray-500 hover:text-gray-300'
                                                    : 'text-gray-400 hover:text-gray-700'
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
                                                darkMode ? 'text-gray-500' : 'text-gray-400'
                                            }`}
                                        >
                                            <Github size={16} />
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/rafaeltng"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`transition-opacity duration-200 hover:opacity-60 ${
                                                darkMode ? 'text-gray-500' : 'text-gray-400'
                                            }`}
                                        >
                                            <Linkedin size={16} />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/rafatorresg_"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`transition-opacity duration-200 hover:opacity-60 ${
                                                darkMode ? 'text-gray-500' : 'text-gray-400'
                                            }`}
                                        >
                                            <Instagram size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileNav
