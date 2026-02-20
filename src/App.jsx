import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import Books from './pages/Books'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import { motion } from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useState(false) // Start in light mode

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    const isDark = savedMode === null ? false : savedMode === 'true'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
    document.body.classList.toggle('dark', isDark)
    document.body.classList.toggle('light', !isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
    document.documentElement.classList.toggle('light', !newDarkMode)
    document.body.classList.toggle('dark', newDarkMode)
    document.body.classList.toggle('light', !newDarkMode)
  }

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-[#f5f5f5] text-gray-900'
      }`}>
        <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <Sidebar darkMode={darkMode} />
          </div>

          {/* Mobile Navigation */}
          <MobileNav darkMode={darkMode} />

          {/* Main Content */}
          <main className="flex-1 lg:ml-64">
            {/* Theme Toggle - Fixed top right */}
            <motion.button
              onClick={toggleDarkMode}
              className={`fixed top-6 right-6 z-50 px-3 py-2 text-xs font-light transition-opacity duration-200 hover:opacity-60 ${
                darkMode
                  ? 'text-gray-500'
                  : 'text-gray-400'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {darkMode ? 'Dark' : 'Light'}
            </motion.button>

            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/experiences" element={<Experiences darkMode={darkMode} />} />
              <Route path="/projects" element={<Projects darkMode={darkMode} />} />
              <Route path="/books" element={<Books darkMode={darkMode} />} />
              <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            </Routes>

            {/* Scroll to Top Button */}
            <ScrollToTopButton darkMode={darkMode} />
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App