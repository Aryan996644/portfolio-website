import React, { useEffect, useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

const Resume = () => {
  const [resumeUrl, setResumeUrl] = useState(
  'https://drive.google.com/file/d/15oyRQIVFyyGbxjO9rxUkMQAPBB8k3O7o/view?usp=drive_link'
);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestResume = async () => {
      try {
        const res = await axios.get('http://localhost:5000/resume/latest');
        if (res.data.success && res.data.url) {
          setResumeUrl(res.data.url);
        }
      } catch (err) {
        console.error('❌ Failed to fetch resume:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestResume();
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 bg-[#0f172a] text-white flex flex-col items-center justify-center text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1 mb-4 rounded-full border border-indigo-500 bg-indigo-100/10 text-indigo-400 text-sm font-medium tracking-widest uppercase"
      >
        My Resume
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-4"
      >
        Professional CV
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-gray-300 mb-6 max-w-xl"
      >
        Download or view my up-to-date resume. I’m open to exciting frontend and full-stack roles.
      </motion.p>

      {/* Buttons */}
      {loading ? (
        <p className="text-gray-400 mt-4">Loading resume...</p>
      ) : resumeUrl ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-md transition"
          >
            <FaFilePdf />
            View Resume
          </a>
          <a
            href={resumeUrl}
            download="Aftab-Alam-Resume.pdf"
            className="flex items-center gap-2 border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            <FaFilePdf />
            Download Resume
          </a>
        </motion.div>
      ) : (
        <p className="text-gray-400 mt-4">🚫 No resume uploaded yet.</p>
      )}
    </section>
  );
};

export default Resume;
