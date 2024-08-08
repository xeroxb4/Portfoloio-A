
import { useState } from 'react';
import { Link as ScrollLink} from 'react-scroll';
import { motion } from 'framer-motion';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              className="flex items-center h-16"
              whileHover={{ scale: 1.1 }}
            >
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="cursor-pointer">
             <h3 className='text-white font-bold text-2xl'>My Portfolio</h3>
              </ScrollLink>
            </motion.div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['About', 'Resume', 'Projects', 'Contact'].map((item) => (
                <motion.div
                  key={item}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    {item}
                  </ScrollLink>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['About', 'Resume', 'Projects', 'Contact'].map((item) => (
              <motion.div
                key={item}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
              <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </ScrollLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
