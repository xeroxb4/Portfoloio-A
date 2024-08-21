import { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaLanguage } from "react-icons/fa";

const skills = [
  { name: "JavaScript", level: 76.5 },
  { name: "HTML", level: 70 },
  { name: "CSS", level: 80 },
  
];

const languages = [
  { name: "English", level: 90 },
  { name: "Ga", level: 100 },
  { name: "Twi ", level: 50 },
  
];

const experiences = [
  {
    company: "Beiersdorf Ghana Ltd",
    role: "Territory Sales Manager",
    duration: "2021-2023",
  },
  {
    company: "Gold Medal Ltd",
    role: "Sales Executive",
    duration: "2019-2021",
  },
  {
    company: "National Identification Authority",
    role: "Senior Registration Officer",
    duration: "2019-2020",
  },
  {
    company: "Accra Institute of Technology",
    role: "Marketing Officer",
    duration: "2018",
  },
  {
    company: "DeepDyve Ltd",
    role: "Research Assistant",
    duration: "2016-2018",
  },
];

const education = [
  {
    institution: "MeltWater Entreprenuerial School of Technology",
    year: "2024",
    major: "Back-End Web Developer",
  },
  {
    institution: "Wisconsin International University College",
    year: "2013-2015",
    major: "BSc Human Resource Management",
  },
  {
    institution: "University Of Professional Studies",
    year: "2010-2012",
    major: "Tertiary Diploma In Marketing",
  },
  
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabVariants = {
    active: { scale: 1.1, y: -5 },
    inactive: { scale: 1, y: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="resume"
      className="bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-16"
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h1>

      <div className="flex justify-center mb-8">
        {["education", "experience", "skills", "languages"].map((tab) => (
          <motion.button
            key={tab}
            className={`mx-2 px-4 py-2 rounded-full ${
              activeTab === tab ? "bg-white text-black" : "bg-gray-800"
            }`}
            onClick={() => setActiveTab(tab)}
            variants={tabVariants}
            animate={activeTab === tab ? "active" : "inactive"}
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
        {activeTab === "experience" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center">
              <FaBriefcase className="mr-2" /> Experience
            </h2>
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

        {activeTab === "skills" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaCode className="mr-2" /> Software Skills
            </h2>
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
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "languages" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaLanguage className="mr-2" /> Languages
            </h2>
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
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${language.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "education" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center">
              <FaBriefcase className="mr-2" /> Education
            </h2>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-gray-400">{edu.major}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Resume;
