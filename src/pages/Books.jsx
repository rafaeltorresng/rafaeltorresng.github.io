import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import AnimatedText from '../components/AnimatedText'
import TerminalPrompt from '../components/TerminalPrompt'

const Books = ({ darkMode }) => {
    const { language } = useLanguage()
    const t = translations[language].books
    
    const books = t.books.map((book, idx) => ({
        ...book,
        reading: idx === 4,
        cover: ['entend_alg.jpg', 'prag_pro.jpg', 'fund_arq.jpg', 'data_scra.jpg', 'sillma.jpg'][idx]
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
                        <TerminalPrompt darkMode={darkMode} command="ls ~/library" />
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

                <div className="space-y-8">
                    {books.length === 0 ? (
                        <div className={`text-center py-20 ${
                            darkMode ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                            <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
                            <p className="font-mono text-sm"><AnimatedText>{t.noBooks}</AnimatedText></p>
                        </div>
                    ) : (
                        books.map((book, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.01 }}
                                className={`elegant-card p-6 rounded-lg border transition-all duration-300 hover:shadow-xl group ${
                                    darkMode
                                        ? 'bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#3a3a3a]'
                                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {book.cover && (
                                        <div className="w-32 h-48 flex-shrink-0 rounded overflow-hidden shadow-md">
                                            <img
                                                src={`${import.meta.env.BASE_URL}${book.cover}`}
                                                alt={book.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h3 className={`text-2xl font-bold ${
                                                darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                                <AnimatedText>{book.title}</AnimatedText>
                                            </h3>
                                            {book.reading && (
                                                <span className={`px-3 py-1 text-xs font-mono rounded whitespace-nowrap ${
                                                    darkMode
                                                        ? 'bg-blue-900/30 text-blue-400'
                                                        : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                    <AnimatedText>{t.currentlyReading}</AnimatedText>
                                                </span>
                                            )}
                                        </div>
                                        <p className={`text-sm font-mono mb-4 ${
                                            darkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            <AnimatedText>{book.author}</AnimatedText> • <AnimatedText>{book.year}</AnimatedText>
                                        </p>

                                        {book.review && (
                                            <p className={`leading-relaxed ${
                                                darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                                <AnimatedText>{book.review}</AnimatedText>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default Books
