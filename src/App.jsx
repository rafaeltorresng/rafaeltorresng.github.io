import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [darkMode, setDarkMode] = useState(false) // Start in light mode

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    const isDark = savedMode === null ? false : savedMode === 'true' // Default to light mode
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
      <div className={`min-h-screen transition-colors duration-300 ${darkMode
        ? 'bg-black text-white'
        : 'bg-white text-gray-900'
        }`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/experiences" element={<Experiences darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  )
}

export default App