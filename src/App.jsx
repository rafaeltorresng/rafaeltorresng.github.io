import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Globe,
  Brain,
  Server,
  Phone
} from 'lucide-react'
import TiltedCard from './components/TiltedCard'


function App() {
  const [darkMode, setDarkMode] = useState(true) // Start in dark mode
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    const isDark = savedMode === null ? true : savedMode === 'true' // Default to dark mode
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

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const services = [
    {
      title: 'Software Engineering',
      description: 'Building robust, scalable applications using modern development practices, clean code principles, and efficient architectures.',
      icon: Code
    },
    {
      title: 'Data Science',
      description: 'Analyzing complex datasets to extract meaningful insights and patterns using statistical methods and visualization techniques.',
      icon: Database
    },
    {
      title: 'Machine Learning',
      description: 'Implementing computer vision and data analysis solutions that solve complex real-world challenges using AI algorithms.',
      icon: Brain
    }
  ]

  const experience = [
    {
      title: 'AI Engineering Intern',
      company: 'MGITech',
      period: '04/2025 - Present',
      description: 'Implementing AI models into company systems, collaborating with engineering teams to integrate machine learning solutions into production environments. Contributing to system architecture, data engineering, and model deployment across multiple domains.',
      current: true
    },
    {
      title: 'Student Member',
      company: 'TAIL (Technology and Artificial Intelligence League)',
      period: '06/2025 - Present',
      description: 'Tail is the first AI student league in the northeast region of Brazil. As a Trainee, I am advancing my skills in Machine Learning, Data Science, and Deep Learning by developing diverse AI and technology projects.',
      current: true
    },
    {
      title: 'Volunteer Researcher',
      company: 'TRIL Lab',
      period: '12/2024 - 04/2025',
      description: 'Assisted in AI research projects including data collection, preprocessing, and exploratory analysis. Implemented multi-agent systems for sales pipelines and contact automation. Learned machine learning techniques and mastered CrewAI frameworks.',
      current: false
    },
    {
      title: 'Treinee',
      company: 'Trilha Program',
      period: '08/2024 - 12/2024',
      description: 'Developed foundational skills in artificial intelligence, programming logic, and Python libraries (pandas, NumPy). Learned essential software development tools and best practices for mentorship. Led the TARG project for stock-forecasting website development.',
      current: false
    },
    {
      title: 'Workshop Facilitator',
      company: 'LAGID/UFPB GPT API Workshop',
      period: '2024',
      description: 'Conducted comprehensive workshop on GPT API usage, covering authentication, endpoint calls, and prompting strategies. Implemented a Database-Integrated Chatbot project demonstrating practical applications of AI integration.',
      current: false
    }
  ]

  const projects = [
    {
      title: 'TARG (Time-series Analysis Report Generator)',
      description: 'An advanced stock forecasting platform that predicts stock prices for the next 5 days using sophisticated LSTM time series models. Integrates real-time financial news through web scraping with sentiment analysis to enhance prediction accuracy and provide comprehensive market insights.',
      image: 'targ-presentation.png',
      tech: ['Python', 'LSTM', 'NLP', 'Web Scraping', 'Time Series', 'Sentiment Analysis'],
      github: 'https://github.com/Vitoreism/TARG'
    },
    {
      title: 'Blonded AI',
      description: 'An intelligent music recommendation system built using Spotify audio embeddings and PCA. Features a sophisticated feature extraction pipeline, similarity computation algorithms, and a personalized recommendation engine with Spotify integration.',
      image: 'blonded-ai.png',
      tech: ['Python', 'Spotify API', 'PCA', 'Audio Processing', 'Machine Learning', 'Embeddings'],
      github: 'https://github.com/rafaeltorresng/Blonded-AI'
    },
    {
      title: 'GuardAzul',
      description: 'A mobile app designed to protect the coastal ecosystems of Paraíba, Brazil. This project integrates a React Native (Expo) mobile application with a Python (FastAPI) RESTful API and a PostgreSQL database. The platform leverages Google\'s AI (Gemini and Vision) to power an informative chatbot and to automatically validate environmental reports submitted by users.',
      image: 'Login(1).png',
      tech: ['React Native', 'FastAPI', 'PostgreSQL', 'Google AI', 'Docker', 'TypeScript'],
      github: 'https://github.com/luigischmitt/GuardAzul'
    },
    {
      title: 'Brazilian Championship Simulator',
      description: 'A comprehensive football simulation platform that recreates the Brazilian Championship experience. Features intelligent match algorithms, real-time league standings, and dynamic team management with an intuitive web interface built on Java Spring Boot.',
      image: 'brasileirao-adr.png',
      tech: ['Java', 'Spring Boot', 'OOP', 'Web Application', 'Database', 'Sports Simulation'],
      github: 'https://github.com/arturpereira12/poo_brasileirao'
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    }`}>
            {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-sm z-50 border-b transition-colors duration-300 ${
        darkMode 
          ? 'bg-black/95 border-gray-800' 
          : 'bg-white/95 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.h1 
              className={`text-xl font-semibold transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              RT.
            </motion.h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors font-medium ${
                    darkMode 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
              
              {/* Dark/Light Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                  darkMode ? 'bg-gray-700' : 'bg-blue-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ${
                    darkMode ? 'translate-x-0' : 'translate-x-6'
                  }`}
                  animate={{ x: darkMode ? 0 : 24 }}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: darkMode ? 0 : 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {darkMode ? (
                      <Moon size={14} className="text-gray-700" />
                    ) : (
                      <Sun size={14} className="text-yellow-500" />
                    )}
                  </motion.div>
                </motion.div>
              </motion.button>
            </div>

            <div className="flex items-center space-x-4 md:hidden">
              {/* Mobile Dark/Light Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                  darkMode ? 'bg-gray-700' : 'bg-blue-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center`}
                  animate={{ x: darkMode ? 0 : 24 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {darkMode ? (
                    <Moon size={10} className="text-gray-700" />
                  ) : (
                    <Sun size={10} className="text-yellow-500" />
                  )}
                </motion.div>
              </motion.button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'hover:bg-gray-800 text-gray-300 hover:text-white'
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className={`md:hidden border-t transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-900 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-6 py-4 space-y-2">
              {['About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                    darkMode 
                      ? 'text-gray-300 hover:bg-gray-800' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-24 pb-20 transition-colors duration-300 ${
        darkMode ? 'bg-black' : 'bg-white'
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
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Rafael Torres
                </h1>
                <p className={`text-xl md:text-2xl mt-4 leading-relaxed transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Computer Science student passionate about exploring the realms of Software Engineering and Machine Learning.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Rafael_Torres_Resume.pdf"
                  className={`px-8 py-3 rounded-lg transition-colors font-medium shadow-lg text-center ${
                    darkMode 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download CV
                </motion.a>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-3 rounded-lg transition-colors font-medium border ${
                    darkMode 
                      ? 'border-white text-white hover:bg-white hover:text-black' 
                      : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.button>
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
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-white"
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
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-4xl md:text-6xl shadow-2xl border-4 border-white" 
                  style={{display: 'none'}}
                >
                  RT
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>About Me</h2>
            <div className="w-24 h-1 bg-brand-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className={`leading-relaxed text-lg transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <p>
              I am a Computer Science undergraduate at the Federal University of Paraíba (UFPB), passionate about solving real-world problems through intelligent systems, with a focus on Data Science and Software Development; currently working as an AI Research Intern at MGI Tech (in collaboration with LASER and LAGID labs), developing machine learning applications for demand forecasting and sentiment analysis, while also leading personal projects like TARG (a stock prediction and news sentiment analysis platform) and Blonded AI (a music recommendation system using Spotify embeddings and PCA), reflecting my dedication to combining technical knowledge with creativity and usability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Interests
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                className={`p-6 rounded-xl transition-all duration-300 border group ${
                  darkMode 
                    ? 'bg-gray-900 hover:bg-gray-800 border-gray-800' 
                    : 'bg-white hover:bg-gray-100 border-gray-200'
                }`}
              >
                <service.icon className="text-brand-300 mb-4" size={28} />
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Academic & Professional Experience
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                className={`p-8 rounded-2xl border shadow-md transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.title} at {exp.company}
                    </h3>
                                         {exp.current && (
                       <span className={`inline-block px-3 py-1 text-sm rounded-full mt-2 font-medium transition-colors duration-300 ${
                         darkMode 
                           ? 'bg-brand-900 text-brand-200' 
                           : 'bg-brand-100 text-brand-800'
                       }`}>
                         Current
                       </span>
                     )}
                  </div>
                  <span className={`font-medium mt-2 md:mt-0 transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-center mb-16 px-6 lg:px-8"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A selection of projects that showcase my skills and experience
            </p>
          </motion.div>

          {/* Horizontal Scrollable Projects Container */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-8 pb-4 px-6" style={{ width: 'max-content' }}>
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.0 + index * 0.1 }}
                    className={`rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700' 
                        : 'bg-white border-gray-200'
                    }`}
                    style={{ minWidth: '350px', maxWidth: '350px', height: '550px', display: 'flex', flexDirection: 'column' }}
                  >
                    {/* Fixed Image Container */}
                    <div className="relative" style={{ height: '192px', flexShrink: 0 }}>
                      <TiltedCard
                        imageSrc={`${import.meta.env.BASE_URL}${project.image}`}
                        altText={project.title}
                        containerHeight="192px"
                        containerWidth="100%"
                        imageHeight="192px"
                        imageWidth="100%"
                        scaleOnHover={1.05}
                        rotateAmplitude={10}
                        showMobileWarning={false}
                        showTooltip={false}
                      />
                    </div>
                    
                    {/* Fixed Content Container */}
                    <div className="p-6" style={{ height: 'calc(550px - 192px)', display: 'flex', flexDirection: 'column' }}>
                      <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`mb-6 leading-relaxed text-sm transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`} style={{ flex: 1, overflow: 'hidden' }}>
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center transition-colors ${
                            darkMode 
                              ? 'text-gray-400 hover:text-brand-300' 
                              : 'text-gray-600 hover:text-brand-600'
                          }`}
                        >
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-colors cursor-pointer ${
                            darkMode 
                              ? 'text-gray-500 hover:text-brand-300' 
                              : 'text-gray-600 hover:text-brand-600'
                          }`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Get In Touch
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow tech enthusiasts
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className={`text-2xl font-semibold mb-6 text-center transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Let's Connect</h3>
                
                <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      darkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`}>
                      <Mail className="text-brand-300" size={24} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors duration-300 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>Email</p>
                      <a 
                        href="mailto:rafaeltorresng@gmail.com" 
                        className={`transition-colors text-sm ${
                          darkMode 
                            ? 'text-gray-400 hover:text-brand-300' 
                            : 'text-gray-700 hover:text-brand-600'
                        }`}
                      >
                        rafaeltorresng@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      darkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`}>
                      <Phone className="text-brand-300" size={24} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors duration-300 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>Phone</p>
                      <p className={`text-sm transition-colors duration-300 ${
                        darkMode ? 'text-gray-400' : 'text-gray-700'
                      }`}>+55 81 98251-2792</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      darkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`}>
                      <Linkedin className="text-brand-300" size={24} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors duration-300 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/rafaeltng" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`transition-colors text-sm ${
                          darkMode 
                            ? 'text-gray-400 hover:text-brand-300' 
                            : 'text-gray-700 hover:text-brand-600'
                        }`}
                      >
                        linkedin.com/in/rafaeltng
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      darkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`}>
                      <Github className="text-brand-300" size={24} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors duration-300 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>GitHub</p>
                      <a 
                        href="https://github.com/rafaeltorresng" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`transition-colors text-sm ${
                          darkMode 
                            ? 'text-gray-400 hover:text-brand-300' 
                            : 'text-gray-700 hover:text-brand-600'
                        }`}
                      >
                        github.com/rafaeltorresng
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4 className={`text-lg font-medium mb-4 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Languages</h4>
                <div className="flex justify-center space-x-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🇧🇷</span>
                    <span className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Portuguese (Native)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🇺🇸</span>
                    <span className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>English (Fluent)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🇪🇸</span>
                    <span className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Spanish (Basic)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open to Opportunities Section */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.0 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Open to Opportunities
            </h2>
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm always eager to dive into new projects—whether it's exploring machine learning, building full-stack solutions, or developing cutting-edge AI applications. I'm especially drawn to opportunities where technology drives meaningful, real-world change.
            </p>
          </motion.div>
        </div>
      </section>


    </div>
  )
}

export default App