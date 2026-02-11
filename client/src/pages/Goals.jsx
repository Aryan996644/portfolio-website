import React from 'react';
import { FaLaptopCode, FaServer, FaCrown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const goals = [
  {
    icon: <FaLaptopCode size={28} className="text-teal-400" />,
    title: 'Short-Term Goal',
    description:
      'To land a dynamic Full Stack Developer role where I can apply my knowledge of React, Node.js, and MongoDB, contribute to meaningful projects, and build beautiful, responsive UIs with a focus on user-centric design.',
  },
  {
    icon: <FaServer size={28} className="text-teal-400" />,
    title: 'Mid-Term Goal',
    description:
      'To master cloud technologies like AWS and become a go-to engineer for scalable backend systems, while also mentoring junior developers and enhancing product performance and design accessibility.',
  },
  {
    icon: <FaCrown size={28} className="text-teal-400" />,
    title: 'Long-Term Goal',
    description:
      'To become a Technical Leader or CTO who shapes product vision, architects scalable full-stack platforms, and inspires innovation through strategic thinking, design leadership, and technical mentorship.',
  },
];

const Goals = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d9488] text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1 mb-4 rounded-full border border-indigo-500 bg-cyan-100/10 text-indigo-400 text-sm font-medium tracking-widest uppercase"

        >
          My Roadmap
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold mb-2"
        >
          Career Goals
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12"
        />

        {/* Grid with Motion */}
        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{goal.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
              <p className="text-gray-300 text-sm">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
