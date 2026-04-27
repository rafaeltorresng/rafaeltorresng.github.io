import { motion } from 'framer-motion'

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
    const sunVariants = {
        initial: { rotate: 45 },
        animate: { rotate: darkMode ? 45 : 0 },
    }

    const rayVariants = {
        initial: { scale: 0, opacity: 0 },
        animate: { 
            scale: darkMode ? 0 : 1, 
            opacity: darkMode ? 0 : 1,
            transition: { duration: 0.3 }
        },
    }

    const moonMaskVariants = {
        initial: { x: 0, y: 0 },
        animate: { 
            x: darkMode ? 10 : 25, 
            y: darkMode ? -5 : -25,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        },
    }

    return (
        <motion.button
            onClick={toggleDarkMode}
            className="fixed top-8 right-8 z-50 p-1.5 rounded-full flex items-center justify-center focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
        >
            <div className="relative w-5 h-5">
                {/* Sun/Moon Body */}
                <motion.svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-5 h-5 transition-colors duration-300 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    variants={sunVariants}
                    animate="animate"
                >
                    {/* The main circle */}
                    <mask id="moon-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        <motion.circle
                            variants={moonMaskVariants}
                            animate="animate"
                            r="8"
                            fill="black"
                        />
                    </mask>

                    <circle
                        cx="12"
                        cy="12"
                        r="5"
                        fill="currentColor"
                        mask="url(#moon-mask)"
                    />

                    {/* Sun Rays */}
                    <motion.g variants={rayVariants} animate="animate">
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </motion.g>
                </motion.svg>
            </div>
        </motion.button>
    )
}

export default ThemeToggle
