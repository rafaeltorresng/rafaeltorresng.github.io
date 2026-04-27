import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollToTopButton = ({ darkMode, accentColor }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ 
                        duration: 0.3,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                    whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-500 ${
                        darkMode
                            ? 'bg-gray-800/80 text-white border border-gray-700/50'
                            : 'bg-white/80 text-gray-900 border border-gray-200/50'
                    }`}
                    style={{ 
                        borderColor: accentColor + '40'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = accentColor
                        e.currentTarget.style.borderColor = accentColor
                        e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = ''
                        e.currentTarget.style.borderColor = ''
                        e.currentTarget.style.color = ''
                    }}
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default ScrollToTopButton
