import { useState, useEffect } from 'react'
import { darkImages, lightImages, darkAccents, lightAccents } from './constants/images'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import Books from './pages/Books'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import ThemeToggle from './components/ThemeToggle'
import MobileLayout from './components/MobileLayout'
import { useIsMobile } from './hooks/useIsMobile'

const getInitialDarkMode = () => {
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode !== null) return savedMode === 'true'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function AnimatedRoutes({ darkMode, accentColor, isMobile }) {
  const location = useLocation()

  if (isMobile) {
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key="mobile-routes">
          <Route path="/" element={<PageTransition><MobileLayout darkMode={darkMode} accentColor={accentColor} /></PageTransition>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home darkMode={darkMode} accentColor={accentColor} /></PageTransition>} />
        <Route path="/experiences" element={<PageTransition><Experiences darkMode={darkMode} accentColor={accentColor} /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects darkMode={darkMode} accentColor={accentColor} /></PageTransition>} />
        <Route path="/books" element={<PageTransition><Books darkMode={darkMode} accentColor={accentColor} /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact darkMode={darkMode} accentColor={accentColor} /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)
  const [darkIndex, setDarkIndex] = useState(0)
  const [lightIndex, setLightIndex] = useState(0)
  const isMobile = useIsMobile()

  const accentColor = darkMode ? darkAccents[darkIndex] : lightAccents[lightIndex]

  useEffect(() => {
    const isDark = darkMode
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
    document.body.classList.toggle('dark', isDark)
    document.body.classList.toggle('light', !isDark)
  }, [darkMode])

  useEffect(() => {
    const interval = setInterval(() => {
      setDarkIndex((prev) => (prev + 1) % darkImages.length)
      setLightIndex((prev) => (prev + 1) % lightImages.length)
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-[#f5f5f5] text-gray-900'
        }`}>
        <div className="flex">
          {/* Desktop Sidebar */}
          {!isMobile && (
            <div className="hidden lg:block">
              <Sidebar
                darkMode={darkMode}
                darkIndex={darkIndex}
                lightIndex={lightIndex}
                accentColor={accentColor}
              />
            </div>
          )}

          {/* Main Content */}
          <main className={`flex-1 ${!isMobile ? 'lg:ml-64' : ''}`}>
            <ThemeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              accentColor={accentColor}
            />

            <AnimatedRoutes darkMode={darkMode} accentColor={accentColor} isMobile={isMobile} />

            {/* Scroll to Top Button */}
            <ScrollToTopButton darkMode={darkMode} accentColor={accentColor} />
          </main>
        </div>
      </div>
    </Router>
  )
}


export default App