import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Calendar } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import AnimatedText from '../components/AnimatedText'
import TerminalPrompt from '../components/TerminalPrompt'

const Experiences = ({ darkMode }) => {
    const { language } = useLanguage()
    const t = translations[language].experiences
    
    const experience = t.experiences.map((exp, idx) => ({
        ...exp,
        current: idx < 3,
        logo: ['SB.png', 'aria.png', 'tail.png', 'deco.png', 'mgitech-logo.jpeg', 'tril-logo.png', 'trilha.png'][idx],
        link: idx === 4 ? 'https://pt.linkedin.com/feed/update/urn:li:activity:7356288758721183745' : 
              idx === 6 ? 'https://www.linkedin.com/feed/update/urn:li:activity:7289706489248641025/?originalSubdomain=pt' : null,
        asset: idx === 4 ? 'mgi.png' : idx === 6 ? 'Trilhahack.png' : null
    }))

    return (
        <div className="min-h-screen py-16 px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <div className="mb-12">
                    <div className="mb-4">
                        <TerminalPrompt darkMode={darkMode} command="cat experience.log" />
                    </div>
                    <h1 className={`text-4xl font-bold mb-4 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        <AnimatedText>{t.title}</AnimatedText>
                    </h1>
                    <p className={`text-lg font-mono ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        <AnimatedText>{t.subtitle}</AnimatedText>
                    </p>
                </div>

                <div className="space-y-6">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ x: 4 }}
                            className={`elegant-card p-6 rounded-lg border transition-all duration-300 hover:shadow-xl group ${
                                darkMode
                                    ? 'bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#3a3a3a]'
                                    : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-start gap-4">
                                {/* Logo */}
                                <div className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-white border border-gray-200 overflow-hidden">
                                    {exp.logo ? (
                                        exp.company === 'SeverinoBiu' ? (
                                            <a
                                                href="https://severinobiu.com.br/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                                            >
                                                <img
                                                    src={`${import.meta.env.BASE_URL}${exp.logo}`}
                                                    alt={`${exp.company} Logo`}
                                                    className="w-full h-full object-contain p-1"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextElementSibling.style.display = 'flex';
                                                    }}
                                                />
                                            </a>
                                        ) : (
                                            <img
                                                src={`${import.meta.env.BASE_URL}${exp.logo}`}
                                                alt={`${exp.company} Logo`}
                                                className="w-full h-full object-contain p-1"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextElementSibling.style.display = 'flex';
                                                }}
                                            />
                                        )
                                    ) : null}
                                    <span className={`text-xl font-bold ${
                                        exp.logo ? 'hidden' : 'flex'
                                    } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {exp.company.charAt(0)}
                                    </span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <div>
                                            <h3 className={`text-lg font-bold ${
                                                darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                                <AnimatedText>{exp.title}</AnimatedText>
                                            </h3>
                                            <p className={`font-medium ${
                                                darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                                <AnimatedText>{exp.company}</AnimatedText>
                                            </p>
                                        </div>
                                        {exp.current && (
                                            <span className={`px-2 py-1 text-xs font-mono rounded ${
                                                darkMode
                                                    ? 'bg-green-900/30 text-green-400'
                                                    : 'bg-green-100 text-green-700'
                                            }`}>
                                                <AnimatedText>{t.current}</AnimatedText>
                                            </span>
                                        )}
                                    </div>

                                    <div className={`flex flex-wrap gap-3 text-sm mb-3 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        <span className="flex items-center gap-1 font-mono text-xs">
                                            <Calendar size={14} />
                                            <AnimatedText>{exp.period}</AnimatedText>
                                        </span>
                                        {exp.location && (
                                            <span className="flex items-center gap-1 font-mono text-xs">
                                                <MapPin size={14} />
                                                <AnimatedText>{exp.location}</AnimatedText>
                                            </span>
                                        )}
                                    </div>

                                    <p className={`leading-relaxed text-sm ${
                                        darkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        <AnimatedText>{exp.description}</AnimatedText>
                                    </p>

                                    {/* Linked Asset */}
                                    {exp.link && exp.asset && (
                                        <div className="mt-4">
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block group"
                                            >
                                                <div className={`relative overflow-hidden rounded border ${
                                                    darkMode ? 'border-gray-800' : 'border-gray-200'
                                                }`}>
                                                    <img
                                                        src={`${import.meta.env.BASE_URL}${exp.asset}`}
                                                        alt="Reference"
                                                        className="h-20 w-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                                        <ExternalLink size={14} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Experiences
