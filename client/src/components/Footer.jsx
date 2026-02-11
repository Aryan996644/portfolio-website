import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-gradient-animate">Md Kamar Rza Khan</h2>
          <p className="mt-2 text-gray-400">Building creative & immersive web experiences.</p>
        </div>

        {/* Center - Navigation */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold underline underline-offset-4 decoration-cyan-400">Navigate</h3>
          <div className="flex flex-col gap-1 text-gray-400">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>

        {/* Right - Social */}
        <div className="flex justify-center md:justify-end gap-6 text-2xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaLinkedin />
          </a>
          <a href="mailto:aftab1alam01@gmail.com" className="hover:text-cyan-400">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Md Kamar Rza Khan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
