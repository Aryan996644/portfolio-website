import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16 flex flex-col justify-center items-center text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-gray-300 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hello! I’m Md Kamar Rza Khan, a Computer Science student passionate about building modern web apps and immersive experiences. I specialize in React, Node.js, and UI/UX design. I’m on a mission to craft beautiful, scalable, and accessible digital solutions that solve real problems.
      </motion.p>

      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
          <p className="text-gray-400">B.Tech in Computer Science, LPU</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">💻 Expertise</h3>
          <p className="text-gray-400">React, Node.js, TailwindCSS, MongoDB</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🌍 Location</h3>
          <p className="text-gray-400">Koderma, Jharkhand, India</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
