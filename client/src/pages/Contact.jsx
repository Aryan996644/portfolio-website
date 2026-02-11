import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-[#0f172a] text-white flex items-center justify-center">
      <div className="w-full max-w-3xl text-center">

        {/* Badge (same as before) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1 mb-4 rounded-full border border-indigo-500 bg-indigo-100/10 text-indigo-400 text-sm font-medium tracking-widest uppercase"
        >
          Let’s Connect
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold mb-4"
        >
          Contact Me
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 mb-10 max-w-xl mx-auto"
        >
          Click below to connect with me directly.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-5 max-w-xl mx-auto"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/919508739423?text=Hi%20md kamar rza khan,%20I%20visited%20your%20portfolio%20and%20want%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-md font-medium transition text-center"
          >
            💬 Message on WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:qamarrza1@gmail.com"
            className="w-full border border-white text-white px-6 py-4 rounded-md hover:bg-white hover:text-black transition text-center"
          >
            📧 Send Email
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
