import { moviepic, mental, eventpic, healthconnect, me} from '../assets/images'
import { useState } from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
 
  {
    title: 'Movie Web Application',
    description: 'Built a responsive e-commerce web application with product listings, shopping cart functionality, and a checkout process.',
    technologies: ['HTML', 'CSS' ],
    image: moviepic,
    link: 'https://github.com/xeroxb4/Friday-Project/'
  },
  {
    title: 'Mental Wellness Web Application',
    description: 'Developed an interior decor web application that had design ideas as well as product listings for users looking to shop.',
    technologies: ['HTML', 'CSS'],
    image: mental,
    link: 'https://github.com/xeroxb4/Mental-Wellbeing-1-Original/'
  },
  {
    title: ' Event Hive Web Application',
    description: 'Created an anual event calendar showcasing events happening in Ghana throughout the year with event cards and location/ price filters. ',
    technologies: [ 'JavaScript','Node.js', 'Express.js', 'MongoDB'],
    image: eventpic,
    link: 'https://github.com/Team-Jambo/event-hive-api/'
  },
  {
    title: 'Health Connect Website',
    description: 'Developed a website for a photography studio to showcase their work and their awesome team',
    technologies: [ 'JavaScript','Node.js', 'Express.js', 'MongoDB'],
    image: healthconnect,
    link: 'https://healthconnectdemo.netlify.app/'
  },
  {
    title: 'Portfolio Website',
    description: 'Designed and developed a personal portfolio website to showcase my skills, projects, and work experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'CSS'],
    image: me,
    link: 'https://amon-erasmos.netlify.app/'
  },
];

const Projects = () => {
//   console.log(heroBg)
  const [filter, setFilter] = useState('All');
  const allTechnologies = ['All', ...new Set(projects.flatMap(project => project.technologies))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    // <ScrollAnimation>
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-black py-20 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[#2F4644]  z-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#000" fillOpacity="0.1" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allTechnologies.map((tech) => (
              <motion.button
                key={tech}
                className={`px-4 py-2 rounded-full ${filter === tech ? 'bg-black text-white' : 'bg-white text-black'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tech)}
              >
                {tech}
              </motion.button>
            ))}
          </div>

          {/* Project grid */}
          <AnimatePresence>
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  className="bg-[#474C48] rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-white mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    // </ScrollAnimation>
  );
};

export default Projects;
