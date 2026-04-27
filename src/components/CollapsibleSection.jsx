import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const CollapsibleSection = ({ title, children, darkMode, accentColor }) => {
    const [isOpen, setIsOpen] = useState(false)

    const sectionId = `section-${title.toLowerCase().replace(/\s+/g, '-')}`
    const contentId = `content-${title.toLowerCase().replace(/\s+/g, '-')}`

    return (
        <div className="border-t" style={{ borderColor: `${accentColor}33` }}>
            <button
                id={sectionId}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full py-6 flex items-center justify-between group focus:outline-none focus-visible:outline-none relative"
                style={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent', tapHighlightColor: 'transparent' }}
            >
                <h2 className={`text-lg font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                    {title}<span className="transition-colors duration-500" style={{ color: accentColor }}>.</span>
                </h2>

                <div className="relative w-6 h-6 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {!isOpen ? (
                            <motion.div
                                key="plus"
                                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <Plus size={20} className={`transition-colors duration-500 ${
                                    darkMode ? 'text-gray-500' : 'text-gray-400'
                                }`} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="minus"
                                initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <Minus size={20} style={{ color: accentColor }} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={sectionId}
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{ 
                            height: {
                                type: "spring",
                                stiffness: 250,
                                damping: 30,
                                restDelta: 0.01
                            },
                            opacity: {
                                duration: 0.3,
                                ease: "easeOut"
                            },
                            y: {
                                type: "spring",
                                stiffness: 250,
                                damping: 30
                            }
                        }}
                        className="overflow-hidden"
                    >
                        <div className="pb-12 pt-2">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                {children}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}


export default CollapsibleSection
