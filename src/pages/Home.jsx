import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import DataSculpture from '../components/3d/DataSculpture'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import AnimatedText from '../components/AnimatedText'
import TerminalPrompt from '../components/TerminalPrompt'

const Home = ({ darkMode }) => {
    const { language } = useLanguage()
    const t = translations[language].home

    return (
        <div>
            {/* Hero Section */}
            <div className="min-h-screen flex items-center justify-center px-8 py-16">
                <div className="max-w-4xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        {/* Hero Text */}
                        <div className="space-y-6">
                            <div>
                                <div className="mb-4">
                                    <TerminalPrompt darkMode={darkMode} command="whoami" />
                                </div>
                                <h1 className={`text-5xl md:text-6xl font-bold mb-2 transition-colors ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                    <AnimatedText>{t.title}</AnimatedText>
                                </h1>
                                <p className={`text-xl md:text-2xl font-light ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    <AnimatedText>{t.subtitle}</AnimatedText>
                                </p>
                            </div>
                            
                            <div className={`space-y-4 text-base md:text-lg max-w-2xl ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                <p className="leading-relaxed">
                                    <AnimatedText>{t.intro1}</AnimatedText>{' '}
                                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                                        <AnimatedText>{t.softwareEngineering}</AnimatedText>
                                    </span>{' '}
                                    <AnimatedText>{t.and}</AnimatedText>{' '}
                                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                                        <AnimatedText>{t.machineLearning}</AnimatedText>
                                    </span>.
                                </p>
                                
                                <p className="leading-relaxed">
                                    <AnimatedText>{t.intro2}</AnimatedText>
                                </p>
                            </div>
                        </div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`p-6 rounded-lg border ${
                                darkMode
                                    ? 'bg-[#1a1a1a] border-[#2a2a2a]'
                                    : 'bg-gray-50 border-gray-200'
                            }`}
                        >
                            <p className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                                darkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                                <AnimatedText>{t.education}</AnimatedText>
                            </p>
                            <div className="flex items-start space-x-4">
                                <img
                                    src={`${import.meta.env.BASE_URL}ufpb-logo.png`}
                                    alt="UFPB"
                                    className="w-12 h-12 object-contain rounded"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                                <div>
                                    <h3 className={`font-semibold mb-1 ${
                                        darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        <AnimatedText>{t.degree}</AnimatedText>
                                    </h3>
                                    <p className={`text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        <AnimatedText>{t.university}</AnimatedText>
                                    </p>
                                    <p className={`text-xs font-mono mt-1 ${
                                        darkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>
                                        <AnimatedText>{t.period}</AnimatedText>
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Areas of Focus */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <p className={`text-xs font-mono uppercase tracking-wider mb-4 ${
                                darkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                                <AnimatedText>{t.areasOfFocus}</AnimatedText>
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                {[t.area1, t.area2, t.area3].map((area, index) => (
                                    <div
                                        key={`area-${index}`}
                                        className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg ${
                                            darkMode
                                                ? 'bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#3a3a3a]'
                                                : 'bg-white border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <span className={`text-xs font-mono ${
                                            darkMode ? 'text-gray-500' : 'text-gray-500'
                                        }`}>
                                            0{index + 1}
                                        </span>
                                        <h3 className={`mt-2 font-semibold ${
                                            darkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            <AnimatedText key={`area-text-${index}`}>{area}</AnimatedText>
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                to="/projects"
                                className={`group flex items-center space-x-2 px-6 py-3 rounded-lg font-mono text-sm transition-all ${
                                    darkMode
                                        ? 'bg-white text-black hover:bg-gray-200'
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                }`}
                            >
                                <AnimatedText as="span">{t.viewProjects}</AnimatedText>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className={`px-6 py-3 rounded-lg font-mono text-sm border transition-all ${
                                    darkMode
                                        ? 'border-gray-700 text-white hover:bg-gray-900'
                                        : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                <AnimatedText>{t.getInTouch}</AnimatedText>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Data Sculpture Section */}
            <section className={`h-[600px] w-full relative overflow-hidden transition-colors duration-300 ${
                darkMode ? 'bg-[#0a0a0a]' : 'bg-white'
            }`}>
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
