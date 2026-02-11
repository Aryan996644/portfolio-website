import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const skills = [
  {
    category: 'Frontend Development',
    list: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: '3+ years', percent: 95 },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: '3+ years', percent: 90 },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: '2+ years', percent: 90 },
      { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: '2+ years', percent: 88 },
      { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', level: '1.5+ years', percent: 85 },
    ],
  },
  {
    category: 'Backend & Database',
    list: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: '2+ years', percent: 85 },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: '2+ years', percent: 80 },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: '2+ years', percent: 78 },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: '1+ year', percent: 75 },
    ],
  },
  {
    category: 'Tools & Technologies',
    list: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: '3+ years', percent: 90 },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', level: '2+ years', percent: 85 },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: '1+ year', percent: 70 },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: '1+ year', percent: 65 },
      { name: 'REST API', icon: 'https://cdn-icons-png.flaticon.com/512/1161/1161711.png', level: '2+ years', percent: 90 },
      { name: 'Responsive Design', icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png', level: '3+ years', percent: 95 },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allCategories = ['All', ...skills.map((group) => group.category)];

  const filteredSkills =
    selectedCategory === 'All' ? skills : skills.filter((group) => group.category === selectedCategory);

  return (
    <section className="min-h-screen py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1 mb-4 rounded-full border border-indigo-500 bg-indigo-100/10 text-indigo-400 text-sm font-medium tracking-widest uppercase"
        >
          Technologies & Expertise
        </motion.div>

        {/* Typewriter Title */}
        <h2 className="text-4xl font-bold mb-3 text-white">
          <Typewriter
            options={{
              strings: ['My Skills'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 40,
            }}
          />
        </h2>
        <div className="w-20 h-1 mx-auto bg-indigo-500 rounded-full mb-10" />

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm font-medium border ${
                selectedCategory === cat
                  ? 'bg-indigo-500 border-indigo-500 text-white'
                  : 'border-white/20 text-white hover:bg-white/10'
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence>
          {filteredSkills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-6 underline underline-offset-4 decoration-indigo-400">
                {group.category}
              </h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                {group.list.map((skill, i) => (
                  <div
                    key={skill.name}
                    className="bg-[#1e293b] w-full rounded-lg p-4 hover:shadow-xl border border-white/10"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                        title={`${skill.level} experience`}
                      />
                      <div className="flex flex-col items-start text-left">
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full transition-all"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-xs text-indigo-300 mt-1">{skill.percent}%</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
