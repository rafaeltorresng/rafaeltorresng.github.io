import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useState } from 'react'

const LanguageToggle = ({ darkMode }) => {
    const { language, toggleLanguage, isTransitioning } = useLanguage()
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.button
            onClick={toggleLanguage}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={isTransitioning}
            className={`fixed top-6 right-20 z-50 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'
            } ${isTransitioning ? 'opacity-50 cursor-wait' : 'cursor-pointer'}`}
            whileHover={{ scale: isTransitioning ? 1 : 1.05 }}
            whileTap={{ scale: isTransitioning ? 1 : 0.95 }}
        >
            <div className="flex items-center gap-2">
                <motion.div
                    key={language}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                >
                    {language === 'en' ? (
                        <span className="flex items-center gap-1">
                            <span>🇺🇸</span>
                            <span>EN</span>
                        </span>
                    ) : (
                        <span className="flex items-center gap-1">
                            <span>🇧🇷</span>
                            <span>PT</span>
                        </span>
                    )}
                </motion.div>
                
                {/* Animated indicator */}
                <motion.div
                    className={`w-1 h-1 rounded-full ${
                        darkMode ? 'bg-green-400' : 'bg-green-600'
                    }`}
                    animate={{
                        scale: isTransitioning ? [1, 1.5, 1] : (isHovered ? [1, 1.5, 1] : 1),
                        opacity: isTransitioning ? [1, 0.5, 1] : (isHovered ? [1, 0.5, 1] : 1)
                    }}
                    transition={{
                        duration: 1,
                        repeat: (isTransitioning || isHovered) ? Infinity : 0
                    }}
                />
            </div>
        </motion.button>
    )
}

export default LanguageToggle
