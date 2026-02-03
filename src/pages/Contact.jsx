import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = ({ darkMode }) => {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'rafaeltorresng@gmail.com',
            link: 'mailto:rafaeltorresng@gmail.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+55 81 98251-2792',
            link: 'tel:+5581982512792'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'João Pessoa, PB, Brazil',
            link: null
        }
    ]

    return (
        <div className="min-h-screen flex items-center justify-center px-8 py-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl w-full"
            >
                <div className="mb-12">
                    <h1 className={`text-4xl font-bold mb-4 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        Get In Touch
                    </h1>
                    <p className={`text-lg ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        I'm always interested in discussing new opportunities, innovative projects, 
                        or just connecting with fellow tech enthusiasts.
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4 mb-12">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`p-6 rounded-lg border transition-all duration-300 ${
                                darkMode
                                    ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
                                    : 'bg-white border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                    darkMode ? 'bg-gray-800' : 'bg-gray-100'
                                }`}>
                                    <info.icon size={20} className={
                                        darkMode ? 'text-blue-400' : 'text-blue-600'
                                    } />
                                </div>
                                <div className="flex-1">
                                    <p className={`text-xs font-mono uppercase tracking-wider mb-1 ${
                                        darkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>
                                        {info.label}
                                    </p>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className={`font-medium transition-colors ${
                                                darkMode
                                                    ? 'text-white hover:text-blue-400'
                                                    : 'text-gray-900 hover:text-blue-600'
                                            }`}
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className={`font-medium ${
                                            darkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            {info.value}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`p-6 rounded-lg border ${
                        darkMode
                            ? 'bg-gray-900 border-gray-800'
                            : 'bg-gray-50 border-gray-200'
                    }`}
                >
                    <p className={`text-xs font-mono uppercase tracking-wider mb-4 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                        Quick Links
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <a
                            href="https://github.com/rafaeltorresng"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-3 rounded-lg text-sm font-mono text-center transition-all ${
                                darkMode
                                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                                    : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/rafaeltng"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-3 rounded-lg text-sm font-mono text-center transition-all ${
                                darkMode
                                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                                    : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/rafatorresg_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-3 rounded-lg text-sm font-mono text-center transition-all ${
                                darkMode
                                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                                    : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            Instagram
                        </a>
                        <a
                            href={`${import.meta.env.BASE_URL}resume.pdf`}
                            download
                            className={`px-4 py-3 rounded-lg text-sm font-mono text-center transition-all ${
                                darkMode
                                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                                    : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            Resume
                        </a>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-8"
                >
                    <a
                        href="mailto:rafaeltorresng@gmail.com"
                        className={`group flex items-center justify-center gap-2 w-full px-6 py-4 rounded-lg font-mono text-sm transition-all ${
                            darkMode
                                ? 'bg-white text-black hover:bg-gray-200'
                                : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}
                    >
                        <Send size={16} />
                        <span>Send me an email</span>
                    </a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact
