import { useState } from 'react';
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaLanguage } from "react-icons/fa";

const skills = [
  { name: 'React', level: 80 },
  { name: 'JavaScript', level: 65 },
  { name: 'HTML', level: 70 },
  { name: 'CSS', level: 80 },
  { name: 'Tailwind', level: 75 },
  { name: 'Git', level: 60 },
];

const languages = [
  {name: 'English', level: 95 },
  { name: 'French', level: 70 },
  { name: 'Twi ', level: 90 },
  { name: 'Ewe', level: 70 },
];

const experiences = [
  {
    company: 'Peduase Valley Resort',
    role: 'Brand Strategist',
    duration: '2022-2023',
  },
  {
    company: 'Upwork Inc',
    role: 'Freelancer',
    duration: '2020-2021',
  },
  {
    company: 'Giddins Innove',
    role: 'Brand Strategist',
    duration: '2019',
  },
  {
    company: 'Appen Global',
    role: 'Social Media Evaluator/Content Curator',
    duration: '2018',
  },
  {
    company: 'School Of Public Health',
    role: 'National Service Personnel',
    duration: '2015',
  },
  // Add other experiences here in the same format
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabVariants = {
    active: { scale: 1.1, y: -5 },
    inactive: { scale: 1, y: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="resume" className="bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h1>

      <div className="flex justify-center mb-8">
        {["experience", "skills", "languages"].map((tab) => (
          <motion.button
            key={tab}
            className={`mx-2 px-4 py-2 rounded-full ${activeTab === tab ? 'bg-white text-black' : 'bg-gray-800'}`}
            onClick={() => setActiveTab(tab)}
            variants={tabVariants}
            animate={activeTab === tab ? 'active' : 'inactive'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </div>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center"><FaBriefcase className="mr-2" /> Experience</h2>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-gray-400">{exp.role}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center"><FaCode className="mr-2" /> Software Skills</h2>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="mb-4"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="mb-1">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'languages' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center"><FaLanguage className="mr-2" /> Languages</h2>
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                className="mb-4"
                initial={{ width: 0 }}
                animate={{ width: `${language.level}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="mb-1">{language.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${language.level}%` }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Resume;