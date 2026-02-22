import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

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

    const articles = [
        { title: 'The Grug Brained Developer', url: 'https://grugbrain.dev' },
        { title: 'No Silver Bullet: Essence and Accident in Software Engineering', url: 'https://www.cgl.ucsf.edu/Outreach/pc204/NoSilverBullet.html' },
        { title: 'Choose Boring Technology', url: 'https://mcfunley.com/choose-boring-technology' },
        { title: 'You and Your Research', url: 'https://www.cs.virginia.edu/~robins/YouAndYourResearch.html' },
        { title: 'Worse is Better', url: 'https://www.dreamsongs.com/WorseIsBetter.html' },
        { title: 'Inventing on Principle', url: 'https://vimeo.com/36579366' },
        { title: 'Teach Yourself Programming in Ten Years', url: 'https://norvig.com/21-days.html' },
        { title: 'The Quality Without a Name (Patterns of Software)', url: 'https://dreamsongs.com/Files/PatternsOfSoftware.pdf' },
        { title: 'Taste is the New Technical Skill', url: 'https://www.humansandalgorithms.ai/blog/why-taste-is-the-new-technical-skill' },
        { title: 'Parse, Don\'t Validate', url: 'https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/' },
        { title: 'The Bitter Lesson', url: 'http://www.incompleteideas.net/IncIdeas/BitterLesson.html' },
        { title: 'The Cathedral and the Bazaar', url: 'http://www.catb.org/~esr/writings/cathedral-bazaar/cathedral-bazaar.html' },
        { title: 'Write Code That Is Easy to Delete, Not Easy to Extend', url: 'https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to' },
        { title: 'The Majestic Monolith', url: 'https://m.signalvnoise.com/the-majestic-monolith/' },
        { title: 'Machines of Loving Grace', url: 'https://www.darioamodei.com/essay/machines-of-loving-grace' },
        { title: 'High Agency (Manifesto)', url: 'https://www.highagency.com' },
        { title: 'AI as an Exoskeleton', url: 'https://www.kasava.dev/blog/ai-as-exoskeleton' },
        { title: 'Lessons Learned After 10 Years as Engineering Manager', url: 'https://www.jampa.dev/p/lessons-learned-after-10-years-as' },
        { title: 'Collaboration Sucks', url: 'https://newsletter.posthog.com/p/collaboration-sucks' },
        { title: 'Stop Coding and Start Planning', url: 'https://every.to/source-code/stop-coding-and-start-planning' },
        { title: 'Thinking Functionally', url: 'https://fsharpforfunandprofit.com/series/thinking-functionally/' },
        { title: 'Great Work', url: 'https://www.paulgraham.com/greatwork.html' },
        { title: 'How to Get Rich (Without Getting Lucky)', url: 'https://nav.al/rich' },
        { title: 'How to Be Successful', url: 'https://blog.samaltman.com/how-to-be-successful' },
        { title: 'F# for Fun and Profit', url: 'https://fsharpforfunandprofit.com/' },
        { title: 'Matt Shumer — AI, Agents and Taste (Thread)', url: 'https://x.com/mattshumer_/status/2021256989876109403' },
        { title: 'Systems Thinking (Programmer\'s Paradox)', url: 'https://theprogrammersparadox.blogspot.com/2026/02/systems-thinking.html?m=1' },
        { title: 'The Broken Window Theory', url: 'https://blog.codinghorror.com/the-broken-window-theory/' },
        { title: 'AI and the Future of Work (YouTube Talk)', url: 'https://www.youtube.com/watch?v=LCEmiRjPEtQ' }
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
                    <h1 className={`text-xl font-normal mb-2 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        Refs
                    </h1>
                </div>

                {/* Books Section */}
                <div className="mb-20">
                    <h2 className={`text-base font-normal mb-6 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                        Books
                    </h2>
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
                                        <h3 className={`text-sm font-normal mb-1 line-clamp-2 ${
                                            darkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            {book.title}
                                        </h3>
                                        <p className={`text-sm font-normal ${
                                            darkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {book.author}
                                        </p>
                                        {book.reading && (
                                            <p className={`text-sm font-normal mt-2 ${
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
                </div>

                {/* Articles Section */}
                <div>
                    <h2 className={`text-base font-normal mb-6 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                        Stuff
                    </h2>
                    <div className="space-y-3">
                        {articles.map((article, index) => (
                            <a
                                key={index}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-2"
                            >
                                <span className={`text-base font-normal transition-opacity duration-200 group-hover:opacity-60 ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    {article.title}
                                </span>
                                <ExternalLink 
                                    size={14} 
                                    className={`flex-shrink-0 mt-1 transition-opacity duration-200 group-hover:opacity-60 ${
                                        darkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Books
