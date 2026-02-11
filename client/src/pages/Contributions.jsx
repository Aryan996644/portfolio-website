import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import CountUp from 'react-countup';
import axios from 'axios';

const Contributions = () => {
  const username = 'Aryan996644';
  const [stats, setStats] = useState({
    public_repos: 0,
    followers: 0,
    commits: 0,
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const userRes = await axios.get(`https://api.github.com/users/${username}`);
        const repoRes = await axios.get(`https://api.github.com/search/commits?q=author:${username}`, {
          headers: {
            Accept: 'application/vnd.github.cloak-preview',
          },
        });

        setStats({
          public_repos: userRes.data.public_repos,
          followers: userRes.data.followers,
          commits: repoRes.data.total_count || 0,
        });
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 bg-[#0f172a] text-white text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1 mb-4 rounded-full border border-indigo-500 bg-indigo-100/10 text-indigo-400 text-sm font-medium tracking-widest uppercase"
      >
        Open Source
      </motion.div>

      {/* Heading with Typewriter */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 text-indigo-200"
      >
        <Typewriter
          words={['Contributions & GitHub Stats']}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>

      <p className="text-lg text-indigo-300 mb-10 max-w-3xl mx-auto">
        Here’s a snapshot of my coding journey — from contributions to commits, and everything in between.
      </p>

      {/* 🔢 Animated Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <p className="text-sm text-indigo-400 mb-2">Total Commits</p>
          <h3 className="text-3xl font-bold text-white">
            <CountUp end={stats.commits} duration={2} separator="," />
          </h3>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <p className="text-sm text-indigo-400 mb-2">Public Repos</p>
          <h3 className="text-3xl font-bold text-white">
            <CountUp end={stats.public_repos} duration={2} />
          </h3>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <p className="text-sm text-indigo-400 mb-2">Followers</p>
          <h3 className="text-3xl font-bold text-white">
            <CountUp end={stats.followers} duration={2} />
          </h3>
        </div>
      </div>

      {/* 🔥 GitHub Streak */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#1e293b] p-4 rounded-lg shadow-lg mb-10"
      >
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true`}
          alt="GitHub Streak"
          className="mx-auto w-full max-w-3xl rounded"
        />
      </motion.div>

      {/* 📊 GitHub Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-[#1e293b] p-4 rounded-lg shadow-lg mb-10"
      >
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&count_private=true`}
          alt="GitHub Stats"
          className="mx-auto w-full max-w-3xl rounded"
        />
      </motion.div>

      {/* 📈 GitHub Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-[#1e293b] p-4 rounded-lg shadow-lg"
      >
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=1a1b27&color=79ffe1&line=79ffe1&point=ffffff&area=true&hide_border=true`}
          alt="GitHub Contribution Graph"
          className="mx-auto w-full max-w-4xl rounded"
        />
      </motion.div>

      {/* GitHub Link */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-indigo-400 hover:underline text-lg font-medium"
        >
          👉 View my GitHub profile
        </a>
      </motion.div>
    </section>
  );
};

export default Contributions;
