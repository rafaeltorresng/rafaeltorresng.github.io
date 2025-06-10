import { motion } from 'framer-motion'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-24 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Rafael Torres
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mt-4 leading-relaxed">
                Computer Science student specializing in software development and modern web technologies
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="resume.pdf"
                download="Rafael_Torres_Resume.pdf"
                className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium shadow-lg text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors font-medium"
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
                src="eu.jpg"
                alt="Rafael Torres - Computer Science Student"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-white"
                style={{
                  objectFit: 'cover',
                  objectPosition: '60% 20%',
                  transform: 'scale(1.4)'
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
  )
}

export default Hero 