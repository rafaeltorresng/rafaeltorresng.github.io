import { motion } from 'framer-motion'

const TerminalPrompt = ({ darkMode, command = '', className = '' }) => {
    return (
        <div className={`flex items-center gap-2 font-mono text-sm ${className}`}>
            <span className={darkMode ? 'text-green-400' : 'text-green-600'}>❯</span>
            {command && (
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {command}
                </span>
            )}
            <motion.span
                className={`inline-block w-[2px] h-4 ${
                    darkMode ? 'bg-green-400' : 'bg-green-600'
                }`}
                animate={{ 
                    opacity: [1, 1, 0, 0]
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.5, 0.5, 1]
                }}
            />
        </div>
    )
}

export default TerminalPrompt
