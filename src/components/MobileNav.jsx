import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const MobileNav = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [darkIndex, setDarkIndex] = useState(0)
    const [lightIndex, setLightIndex] = useState(0)

    const darkImages = ['1.JPG', '6.JPG', '3.JPG']
    const lightImages = ['2.JPG', '4.JPG', '5.JPG', '7.JPG']

    useEffect(() => {
        const interval = setInterval(() => {
            setDarkIndex((prev) => (prev + 1) % darkImages.length)
            setLightIndex((prev) => (prev + 1) % lightImages.length)
        }, 30000)
        return () => clearInterval(interval)
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const navLinks = [
        { name: 'Intro', path: '/' },
        { name: 'Experience', path: '/experiences' },
        { name: 'Projects', path: '/projects' },
        { name: 'Refs', path: '/books' },
        { name: 'Contact', path: '/contact' },
    ]

    const sidebarVariants = {
        closed: {
            x: '-100%',
            transition: {
                type: 'spring',
                damping: 40,
                stiffness: 400
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                damping: 30,
                stiffness: 300
            }
        }
    }

    const staggeredLinksVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 + i * 0.05,
                ease: 'easeOut'
            }
        })
    }

    return (
        <div className="lg:hidden">
            {/* Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-8 left-8 z-50 p-2 focus:outline-none group"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <div className="w-5 h-4 relative flex flex-col justify-between">
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={`w-full h-[1.2px] block rounded-full transition-colors duration-300 origin-center ${
                            darkMode ? 'bg-white' : 'bg-gray-900'
                        }`}
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`w-full h-[1.2px] block rounded-full transition-colors duration-300 ${
                            darkMode ? 'bg-white' : 'bg-gray-900'
                        }`}
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={`w-full h-[1.2px] block rounded-full transition-colors duration-300 origin-center ${
                            darkMode ? 'bg-white' : 'bg-gray-900'
                        }`}
                    />
                </div>
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
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            variants={sidebarVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className={`fixed top-0 left-0 h-full w-[280px] z-40 shadow-2xl overflow-hidden ${
                                darkMode ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f5]'
                            }`}
                        >
                            {/* Dynamic Background Images */}
                            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                                <AnimatePresence mode="popLayout">
                                    <motion.div
                                        key={`mobile-dark-${darkIndex}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: darkMode ? 0.5 : 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: `url(${import.meta.env.BASE_URL}${darkImages[darkIndex]})`,
                                            backgroundPosition: 'top center',
                                            backgroundSize: 'cover',
                                        }}
                                    />
                                </AnimatePresence>

                                <AnimatePresence mode="popLayout">
                                    <motion.div
                                        key={`mobile-light-${lightIndex}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: darkMode ? 0 : 0.5 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: `url(${import.meta.env.BASE_URL}${lightImages[lightIndex]})`,
                                            backgroundPosition: 'top center',
                                            backgroundSize: 'cover',
                                        }}
                                    />
                                </AnimatePresence>
                                
                                <div 
                                    className="absolute inset-0 transition-colors duration-700"
                                    style={{
                                        backgroundColor: darkMode ? 'rgba(10, 10, 10, 0.4)' : 'rgba(245, 245, 245, 0.4)',
                                    }}
                                />
                            </div>
                            
                            <div className="relative z-10 flex flex-col h-full pt-28 px-8 pb-10 overflow-y-auto scrollbar-hide">
                                {/* Navigation */}
                                <nav className="space-y-1">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.path}
                                            custom={i}
                                            variants={staggeredLinksVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <NavLink
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
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
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Contact & Social - Pushed to allow natural flow but always reachable */}
                                <motion.div 
                                    className="mt-12 sm:mt-auto space-y-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
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
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileNav
