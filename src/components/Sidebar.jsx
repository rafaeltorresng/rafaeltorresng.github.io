import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, Instagram } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import FolderIcon from './FolderIcon'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import AnimatedText from './AnimatedText'

const Sidebar = ({ darkMode }) => {
    const [hoveredLink, setHoveredLink] = useState(null)
    const { language } = useLanguage()
    const t = translations[language].sidebar

    const navLinks = [
        { name: t.intro, path: '/' },
        { name: t.experience, path: '/experiences' },
        { name: t.projects, path: '/projects' },
        { name: t.books, path: '/books' },
        { name: t.contact, path: '/contact' },
    ]


    const languages = [
        { name: t.portuguese, flag: '🇧🇷', level: t.native },
        { name: t.english, flag: '🇺🇸', level: t.fluent },
    ]

    return (
        <aside className={`w-80 sidebar-fixed border-r transition-colors duration-300 ${
            darkMode ? 'bg-[#0a0a0a] border-gray-800' : 'bg-white border-gray-200'
        }`}>
            <div className="p-8 space-y-8">
                {/* Profile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <img
                                src={`${import.meta.env.BASE_URL}eu.png`}
                                alt="Rafael Torres"
                                className="w-full h-full rounded-full object-cover"
                                style={{
                                    objectPosition: '90% center',
                                    transform: 'scale(1.2)'
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <span className="text-white font-bold text-lg hidden">RT</span>
                        </div>
                        <div>
                            <h1 className={`text-lg font-bold transition-colors ${
                                darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                                Rafael Torres
                            </h1>
                            <div className="flex items-center space-x-1">
                                <span className={`text-xs font-mono ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={`text-sm leading-relaxed mb-6 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        <p className="mb-3">
                            <AnimatedText>{t.description}</AnimatedText>
                        </p>
                        <p className={`text-xs font-mono ${
                            darkMode ? 'text-gray-500' : 'text-gray-500'
                        }`}>
                            <AnimatedText>{t.location}</AnimatedText>
                        </p>
                    </div>
                </motion.div>

                {/* Navigation */}
                <motion.nav
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-1"
                >
                    <p className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                        <AnimatedText>{t.navigation}</AnimatedText>
                    </p>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onMouseEnter={() => setHoveredLink(link.path)}
                            onMouseLeave={() => setHoveredLink(null)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-mono transition-all duration-300 ${
                                    isActive
                                        ? darkMode
                                            ? 'bg-gray-800 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-900 shadow-md'
                                        : darkMode
                                        ? 'text-gray-400 hover:bg-gray-800 hover:text-white hover:translate-x-1'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <FolderIcon 
                                        isActive={isActive} 
                                        isHovered={hoveredLink === link.path}
                                    />
                                    <AnimatedText as="span">{link.name}</AnimatedText>
                                </>
                            )}
                        </NavLink>
                    ))}
                </motion.nav>

                {/* Languages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                        <AnimatedText>{t.languages}</AnimatedText>
                    </p>
                    <div className="space-y-2">
                        {languages.map((lang) => (
                            <div key={lang.name} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg">{lang.flag}</span>
                                    <span className={`text-sm ${
                                        darkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        {lang.name}
                                    </span>
                                </div>
                                <span className={`text-xs font-mono ${
                                    darkMode ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                    {lang.level}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                        <AnimatedText>{t.contactSection}</AnimatedText>
                    </p>
                    <div className="space-y-2">
                        <a
                            href="mailto:rafaeltorresng@gmail.com"
                            className={`flex items-center space-x-2 text-sm transition-colors ${
                                darkMode
                                    ? 'text-gray-400 hover:text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            <Mail size={14} />
                            <span className="font-mono text-xs"><AnimatedText>{t.email}</AnimatedText></span>
                        </a>
                        <a
                            href={`${import.meta.env.BASE_URL}resume.pdf`}
                            download
                            className={`flex items-center space-x-2 text-sm transition-colors ${
                                darkMode
                                    ? 'text-gray-400 hover:text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            <FileText size={14} />
                            <span className="font-mono text-xs"><AnimatedText>{t.resume}</AnimatedText></span>
                        </a>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center space-x-4 pt-4 border-t"
                    style={{
                        borderColor: darkMode ? '#1f1f1f' : '#e5e7eb'
                    }}
                >
                    <a
                        href="https://github.com/rafaeltorresng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${
                            darkMode
                                ? 'text-gray-400 hover:text-white'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/rafaeltng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${
                            darkMode
                                ? 'text-gray-400 hover:text-white'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="https://www.instagram.com/rafatorresg_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${
                            darkMode
                                ? 'text-gray-400 hover:text-white'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        <Instagram size={18} />
                    </a>
                </motion.div>
            </div>
        </aside>
    )
}

export default Sidebar
