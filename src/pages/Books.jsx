import { motion } from 'framer-motion'

const Books = ({ darkMode }) => {
    const books = [
        {
            title: 'Grokking Algorithms',
            author: 'Aditya Y. Bhargava',
            year: '2016',
            cover: 'entend_alg.jpg',
            reading: false
        },
        {
            title: 'The Pragmatic Programmer',
            author: 'Andrew Hunt, David Thomas',
            year: '2019',
            cover: 'prag_pro.jpg',
            reading: false
        },
        {
            title: 'Fundamentals of Software Architecture',
            author: 'Mark Richards, Neal Ford',
            year: '2020',
            cover: 'fund_arq.jpg',
            reading: false
        },
        {
            title: 'Data Science from Scratch',
            author: 'Joel Grus',
            year: '2019',
            cover: 'data_scra.jpg',
            reading: false
        },
        {
            title: 'Designing Data-Intensive Applications',
            author: 'Martin Kleppmann',
            year: '2017',
            cover: 'datades.jpg',
            reading: true
        },
        {
            title: 'The Silmarillion',
            author: 'J.R.R. Tolkien',
            year: '1977',
            cover: 'sillma.jpg',
            reading: true
        }
    ]

    return (
        <div className="min-h-screen px-12 py-24">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-4xl"
            >
                {/* Header */}
                <div className="mb-16">
                    <h1 className={`text-2xl font-light mb-2 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        Books
                    </h1>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {books.map((book, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Book Cover */}
                            <div className="relative aspect-[2/3] rounded overflow-hidden bg-gray-100">
                                <img
                                    src={`${import.meta.env.BASE_URL}${book.cover}`}
                                    alt={book.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Hover Overlay */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 ${
                                    darkMode ? 'bg-black/80' : 'bg-white/90'
                                }`}>
                                    <h3 className={`text-xs font-normal mb-1 line-clamp-2 ${
                                        darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {book.title}
                                    </h3>
                                    <p className={`text-xs font-light ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {book.author}
                                    </p>
                                    {book.reading && (
                                        <p className={`text-xs font-light mt-2 ${
                                            darkMode ? 'text-gray-500' : 'text-gray-400'
                                        }`}>
                                            Reading
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Books
