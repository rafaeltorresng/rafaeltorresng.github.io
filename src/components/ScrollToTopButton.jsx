import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

// Constants for behavior tuning
const SHOW_THRESHOLD = 300
const HIDE_THRESHOLD = 200
const TOP_RELEASE_THRESHOLD = 20
const SCROLL_MONITOR_INTERVAL = 100
const MAX_SCROLL_MONITOR_DURATION = 3000

const ScrollToTopButton = ({ darkMode, accentColor }) => {
    const [isVisible, setIsVisible] = useState(false)
    const isScrollingToTop = useRef(false)
    const scrollMonitorRef = useRef(null)
    const ticking = useRef(false)

    const updateVisibility = useCallback(() => {
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
        
        // If we are currently in the process of scrolling to top
        if (isScrollingToTop.current) {
            if (currentScrollY < TOP_RELEASE_THRESHOLD) {
                isScrollingToTop.current = false
                if (scrollMonitorRef.current) {
                    clearTimeout(scrollMonitorRef.current)
                    scrollMonitorRef.current = null
                }
            }
            // While scrolling to top, we keep it hidden to avoid flashing
            if (isVisible) setIsVisible(false)
            return
        }

        // Standard visibility logic with hysteresis to prevent jitter
        if (currentScrollY > SHOW_THRESHOLD) {
            if (!isVisible) setIsVisible(true)
        } else if (currentScrollY < HIDE_THRESHOLD) {
            if (isVisible) setIsVisible(false)
        }
    }, [isVisible])

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    updateVisibility()
                    ticking.current = false
                })
                ticking.current = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        // Initial check in case we mount already scrolled down
        updateVisibility()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (scrollMonitorRef.current) clearTimeout(scrollMonitorRef.current)
        }
    }, [updateVisibility])

    const scrollToTop = () => {
        if (scrollMonitorRef.current) {
            clearTimeout(scrollMonitorRef.current)
        }

        isScrollingToTop.current = true
        setIsVisible(false)
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        // Fallback monitor to release the scroll lock if smooth scroll finishes or is interrupted
        const monitorScrolling = (startTime) => {
            const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
            
            if (currentScrollY < TOP_RELEASE_THRESHOLD || Date.now() - startTime >= MAX_SCROLL_MONITOR_DURATION) {
                isScrollingToTop.current = false
                scrollMonitorRef.current = null
                return
            }

            scrollMonitorRef.current = setTimeout(() => {
                monitorScrolling(startTime)
            }, SCROLL_MONITOR_INTERVAL)
        }

        scrollMonitorRef.current = setTimeout(() => {
            monitorScrolling(Date.now())
        }, SCROLL_MONITOR_INTERVAL)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    key="scroll-to-top-button"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ 
                        duration: 0.2,
                        ease: "easeOut"
                    }}
                    whileHover={{ 
                        scale: 1.1,
                        backgroundColor: accentColor,
                        borderColor: accentColor,
                        color: '#ffffff'
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg backdrop-blur-sm border ${
                        darkMode
                            ? 'bg-gray-800/80 text-white border-gray-700/50'
                            : 'bg-white/80 text-gray-900 border-gray-200/50'
                    }`}
                    style={{ 
                        borderColor: accentColor + '40',
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
