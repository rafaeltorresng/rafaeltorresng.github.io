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
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useState(true) // Start in dark mode

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    const isDark = savedMode === null ? true : savedMode === 'true'
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
        darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <Sidebar darkMode={darkMode} />
          </div>

          {/* Mobile Navigation */}
          <MobileNav darkMode={darkMode} />

          {/* Main Content */}
          <main className="flex-1 lg:ml-80">
            {/* Theme Toggle - Fixed top right */}
            <motion.button
              onClick={toggleDarkMode}
              className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-colors ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
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