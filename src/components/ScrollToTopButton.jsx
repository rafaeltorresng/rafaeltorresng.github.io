import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const SCROLL_THRESHOLD = 300
const MAX_SCROLL_MONITOR_DURATION = 3000
const SCROLL_MONITOR_INTERVAL = 300

const ScrollToTopButton = ({ darkMode, accentColor }) => {
    const [isVisible, setIsVisible] = useState(false)
    const isScrollingToTop = useRef(false)
    const scrollMonitorRef = useRef(null)

    useEffect(() => {
        const toggleVisibility = () => {
            // If we are currently in the process of scrolling to top, don't toggle
            if (isScrollingToTop.current) {
                if (window.scrollY < SCROLL_THRESHOLD) {
                    isScrollingToTop.current = false
                    if (scrollMonitorRef.current) {
                        clearTimeout(scrollMonitorRef.current)
                        scrollMonitorRef.current = null
                    }
                }
                return
            }

            if (window.scrollY > SCROLL_THRESHOLD) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility, { passive: true })

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        if (scrollMonitorRef.current) {
            clearTimeout(scrollMonitorRef.current)
            scrollMonitorRef.current = null
        }

        isScrollingToTop.current = true
        setIsVisible(false)
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        const monitorScrollingFallback = (startTime) => {
            if (window.scrollY < SCROLL_THRESHOLD) {
                isScrollingToTop.current = false
                scrollMonitorRef.current = null
                return
            }

            if (Date.now() - startTime >= MAX_SCROLL_MONITOR_DURATION) {
                isScrollingToTop.current = false
                scrollMonitorRef.current = null
                return
            }

            scrollMonitorRef.current = setTimeout(() => {
                monitorScrollingFallback(startTime)
            }, SCROLL_MONITOR_INTERVAL)
        }

        scrollMonitorRef.current = setTimeout(() => {
            monitorScrollingFallback(Date.now())
        }, SCROLL_MONITOR_INTERVAL)
    }

    useEffect(() => {
        return () => {
            if (scrollMonitorRef.current) {
                clearTimeout(scrollMonitorRef.current)
            }
        }
    }, [])

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
                    aria-label="Scroll to top"
                >
                    <style>
                        {`
                            @media (hover: hover) {
                                button[aria-label="Scroll to top"]:hover {
                                    background-color: ${accentColor} !important;
                                    border-color: ${accentColor} !important;
                                    color: white !important;
                                }
                            }
                        `}
                    </style>
                    <ArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default ScrollToTopButton
