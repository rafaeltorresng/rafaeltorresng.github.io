import { motion } from 'framer-motion'
import { Code, Database, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import DataSculpture from '../components/3d/DataSculpture'

const Home = ({ darkMode }) => {
    const services = [
        {
            title: 'Engineering Systems',
            icon: Code
        },
        {
            title: 'Data Intelligence',
            icon: Database
        },
        {
            title: 'Applied AI',
            icon: Brain
        }
    ]

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section id="home" className={`pt-24 pb-20 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'
                }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Rafael Torres
                                </h1>
                                <p className={`text-xl md:text-2xl mt-4 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    Computer Science student passionate about exploring the realms of Software Engineering and Machine Learning.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a
                                    href={`${import.meta.env.BASE_URL}resume.pdf`}
                                    download="Rafael_Torres_Resume.pdf"
                                    className={`px-8 py-3 rounded-lg transition-colors font-medium shadow-lg text-center ${darkMode
                                        ? 'bg-white text-black hover:bg-gray-200'
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Download CV
                                </motion.a>
                                <Link
                                    to="/contact"
                                    className={`px-8 py-3 rounded-lg transition-colors font-medium border text-center ${darkMode
                                        ? 'border-white text-white hover:bg-white hover:text-black'
                                        : 'border-gray-900 text-gray-900 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    Get In Touch
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                <img
                                    src={`${import.meta.env.BASE_URL}eu.png`}
                                    alt="Rafael Torres - Computer Science Student"
                                    className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: '90% center',
                                        transform: 'scale(1.2)'
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'flex';
                                    }}
                                />
                                <div
                                    className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-4xl md:text-6xl shadow-2xl border-4 border-white dark:border-gray-800"
                                    style={{ display: 'none' }}
                                >
                                    RT
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section id="about" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'
                }`}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-12"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                            }`}>About Me</h2>
                        <div className="w-24 h-0.5 bg-brand-600 mx-auto"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="prose prose-lg max-w-none"
                    >
                        <div className={`leading-relaxed text-lg transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            <p>
                                I have always found a quiet magic in building things, which is exactly why I ended up in Computer Science. I am captivated by technology and AI, not just for the code, but for its potential to breathe intelligence into the everyday. I want to craft solutions that actually make life simpler and smarter. It is a practice of purpose, where I strive to create technology that feels inevitable.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className={`py-16 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'
                }`}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-12"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                            }`}>Education</h2>
                        <div className="w-24 h-0.5 bg-brand-600 mx-auto"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className={`p-6 rounded-2xl border shadow-sm transition-colors duration-300 max-w-2xl mx-auto ${darkMode
                            ? 'bg-gray-800 border-gray-700'
                            : 'bg-white border-gray-200'
                            }`}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 text-center sm:text-left">
                            <img
                                src={`${import.meta.env.BASE_URL}ufpb-logo.png`}
                                alt="UFPB Logo"
                                className="w-16 h-16 object-contain rounded-lg mx-auto sm:mx-0"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                            <div className="flex-1">
                                <h3 className={`text-xl font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Bachelor of Computer Science
                                </h3>
                                <p className={`font-medium transition-colors duration-300 ${darkMode ? 'text-brand-300' : 'text-brand-600'
                                    }`}>
                                    Federal University of Paraíba (UFPB)
                                </p>
                                <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                    2024 - Present
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interests Section */}
            <section className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'
                }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            Areas of Focus
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                                className={`p-6 rounded-xl transition-all duration-300 border shadow-sm group hover:-translate-y-1 hover:shadow-md hover:border-brand-300/50 ${darkMode
                                    ? 'bg-gray-900 border-gray-800'
                                    : 'bg-white border-gray-200'
                                    }`}
                            >
                                <service.icon className="text-brand-300 mb-4" size={28} />
                                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {service.title}
                                </h3>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Sculpture Section */}
            <section className={`h-[600px] w-full relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}>
                <div className="absolute inset-0">
                    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                        <ambientLight intensity={0.5} />
                        <DataSculpture darkMode={darkMode} />
                    </Canvas>
                </div>
            </section>
        </div>
    )
}

export default Home
