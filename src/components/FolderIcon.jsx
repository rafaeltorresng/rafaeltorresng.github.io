import { motion } from 'framer-motion'

const FolderIcon = ({ isActive, isHovered }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
        >
            {/* Folder Base */}
            <motion.path
                d="M3 8V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V8C21 6.89543 20.1046 6 19 6H11L9 4H5C3.89543 4 3 4.89543 3 6V8Z"
                fill="currentColor"
                initial={{ opacity: 0.3 }}
                animate={{
                    opacity: isActive ? 0.8 : isHovered ? 0.5 : 0.3,
                }}
                transition={{ duration: 0.3 }}
            />
            
            {/* Folder Tab */}
            <motion.path
                d="M3 8V6C3 4.89543 3.89543 4 5 4H9L11 6H19C20.1046 6 21 6.89543 21 8H3Z"
                fill="currentColor"
                initial={{ opacity: 0.5 }}
                animate={{
                    opacity: isActive ? 1 : isHovered ? 0.7 : 0.5,
                    y: isActive ? -1 : 0,
                }}
                transition={{ 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
            />
            
            {/* Folder Opening Line */}
            {isActive && (
                <motion.path
                    d="M3 8H21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />
            )}
        </svg>
    )
}

export default FolderIcon
