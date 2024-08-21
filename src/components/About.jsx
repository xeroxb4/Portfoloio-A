import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { backend, landingBg } from '../assets/images'; // Update with your actual image path

const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const accentColor = '#FFDEAD'; // A subtle blue accent color

  return (
    <section
      id="about"
      className={`relative min-h-screen flex flex-col justify-center items-center ${
        darkMode ? 'bg-black text-white' : 'bg-[#227572] text-white'
      } transition-all duration-500`}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{ backgroundImage: `url(${landingBg})` }}
      ></div>
      <div className="container mx-auto px-4 z-10">
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className={`absolute top-4 right-4 p-3 rounded-full ${
            darkMode ? 'bg-white text-black' : 'bg-black text-white'
          } transition-all duration-300`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? '☀️' : '🌙'}
        </motion.button>

        <div className="grid md:grid-cols-2 gap-12 items-center pl-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={backend}
              alt="Profile"
              className="w-full max-w-md rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              whileHover={{ scale: 1.05 }}
              style={{ color: accentColor }}
            >
              About Me
            </motion.h2>
            <p className="text-lg  leading-relaxed mb-6">
            Hello! I&apos;m a dedicated backend developer with a strong foundation in server-side technologies, particularly in Node.js, Express, and MongoDB. My expertise extends to building scalable, secure, and efficient backend systems that drive the functionality of modern web applications. In addition to my backend skills, I also have a solid understanding of front-end technologies like HTML and CSS, which allows me to create seamless integrations between the front-end and back-end. I take pride in writing clean, maintainable code and solving complex problems. Whether it&apos;s designing RESTful APIs, optimizing database queries, or ensuring smooth client-server interactions, I&apos;m committed to delivering robust solutions that enhance user experience and drive business growth. Let&apos;s build something amazing together!            </p>
            <motion.ul
              className="list-none mb-6 space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
            
            </motion.ul>
            <motion.a
              href="#contact"
              className={`inline-block px-6 py-3 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-full shadow-lg hover:shadow-xl transition duration-300`}
              whileHover={{ scale: 1.05, backgroundColor: accentColor, color: 'white' }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
