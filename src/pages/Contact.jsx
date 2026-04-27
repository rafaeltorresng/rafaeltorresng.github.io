import { motion } from 'framer-motion'

const Contact = ({ darkMode, accentColor, isMobileSection = false }) => {
    const content = (
        <div className={isMobileSection ? "space-y-6" : "space-y-8"}>
            {/* Email */}
            <div>
                <p className={`text-[10px] font-medium uppercase tracking-widest mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Email
                </p>
                <a
                    href="mailto:rafaeltorresng@gmail.com"
                    className={`${isMobileSection ? 'text-base' : 'text-lg'} font-normal transition-opacity duration-200 hover:opacity-60 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                >
                    rafaeltorresng@gmail.com
                </a>
            </div>

            {/* Phone */}
            <div>
                <p className={`text-[10px] font-medium uppercase tracking-widest mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Phone
                </p>
                <a
                    href="tel:+5581982512792"
                    className={`${isMobileSection ? 'text-base' : 'text-lg'} font-normal transition-opacity duration-200 hover:opacity-60 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                >
                    +55 81 98251-2792
                </a>
            </div>

            {/* Location */}
            <div>
                <p className={`text-[10px] font-medium uppercase tracking-widest mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Location
                </p>
                <p className={`${isMobileSection ? 'text-base' : 'text-lg'} font-normal ${darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    João Pessoa, PB, Brazil
                </p>
            </div>

            {/* Social Links */}
            <div>
                <p className={`text-[10px] font-medium uppercase tracking-widest mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    Links
                </p>
                <div className={`flex flex-wrap gap-x-6 gap-y-4 ${isMobileSection ? 'text-base' : 'text-lg'} font-normal`}>
                    <a
                        href="https://github.com/rafaeltorresng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-opacity duration-200 hover:opacity-60 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/rafaeltng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-opacity duration-200 hover:opacity-60 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://www.instagram.com/rafatorresg_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-opacity duration-200 hover:opacity-60 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                    >
                        Instagram
                    </a>
                    <a
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        download
                        className={`transition-opacity duration-200 hover:opacity-60 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );

    if (isMobileSection) {
        return content;
    }

    return (
        <div className="min-h-[60vh] flex items-start px-6 sm:px-12 lg:px-24 xl:px-32 pt-24 pb-16 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-2xl"
            >
                {/* Header */}
                <div className="mb-16">
                    <h1 className={`text-2xl sm:text-3xl font-normal mb-6 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Get In Touch<span className="transition-colors duration-500" style={{ color: accentColor }}>.</span>
                    </h1>
                    <p className={`text-lg font-normal leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        I'm always interested in discussing new opportunities, innovative projects,
                        or just connecting with fellow tech enthusiasts.
                    </p>
                </div>

                {/* Contact Info */}
                {content}
            </motion.div>
        </div>
    )
}


export default Contact
