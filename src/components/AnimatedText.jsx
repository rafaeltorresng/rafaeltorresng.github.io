import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useState, useEffect, useRef } from 'react'

const AnimatedText = ({ children, className = '', as = 'span' }) => {
    const { isTransitioning } = useLanguage()
    const [displayText, setDisplayText] = useState(children)
    const [showCursor, setShowCursor] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const prevChildrenRef = useRef(children)

    // Determine if text is short enough for typing effect (less than 80 chars)
    const isShortText = typeof children === 'string' && children.length < 80

    useEffect(() => {
        // Only animate if children actually changed and we're transitioning
        if (children !== prevChildrenRef.current && isTransitioning && typeof children === 'string') {
            prevChildrenRef.current = children
            setIsAnimating(true)
            
            if (isShortText) {
                // Typing effect for short text
                setShowCursor(true)
                
                // Phase 1: Delete current text
                const deleteSpeed = 25
                let currentText = displayText
                
                const deleteChars = () => {
                    if (currentText.length > 0) {
                        currentText = currentText.slice(0, -1)
                        setDisplayText(currentText)
                        setTimeout(deleteChars, deleteSpeed)
                    } else {
                        // Phase 2: Type new text after pause
                        setTimeout(() => {
                            let charIndex = 0
                            const typeChars = () => {
                                if (charIndex < children.length) {
                                    setDisplayText(children.substring(0, charIndex + 1))
                                    charIndex++
                                    setTimeout(typeChars, 35)
                                } else {
                                    // Animation complete
                                    setIsAnimating(false)
                                    setTimeout(() => setShowCursor(false), 400)
                                }
                            }
                            typeChars()
                        }, 200)
                    }
                }
                deleteChars()
            } else {
                // Fade effect for long text
                setDisplayText(children)
                setTimeout(() => setIsAnimating(false), 600)
            }
        } else if (!isTransitioning && children !== displayText) {
            // Direct update when not transitioning
            setDisplayText(children)
            prevChildrenRef.current = children
        }
    }, [children, isTransitioning, isShortText])

    const Component = as

    if (isShortText) {
        // Typing effect for short text
        return (
            <Component className={`${className} inline-block`}>
                <span className="relative">
                    {displayText}
                    {showCursor && (
                        <motion.span
                            className="inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle"
                            animate={{ 
                                opacity: [1, 1, 0, 0],
                                scaleY: [1, 1, 0.8, 0.8]
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    )}
                </span>
            </Component>
        )
    } else {
        // Fade effect for long text
        return (
            <Component className={className}>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={displayText}
                        initial={{ 
                            opacity: 0, 
                            x: -20,
                            filter: "blur(4px)"
                        }}
                        animate={{ 
                            opacity: 1, 
                            x: 0,
                            filter: "blur(0px)"
                        }}
                        exit={{ 
                            opacity: 0, 
                            x: -20,
                            filter: "blur(4px)"
                        }}
                        transition={{ 
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                    >
                        {displayText}
                    </motion.span>
                </AnimatePresence>
            </Component>
        )
    }
}

export default AnimatedText
