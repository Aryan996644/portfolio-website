// 1. Hero.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-animate text-white">
      {/* 3D Background */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5}>
          <mesh scale={1.2}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="hotpink" wireframe />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
      </Canvas>

      {/* Left Side Icons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-20">
        <a
          href="https://github.com/Aryan996644"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition text-white bg-white/10 p-3 rounded-full"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-kamar-rza-khan-0372b2298/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition text-white bg-white/10 p-3 rounded-full"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:qamarrza1@gmail.com"
          className="hover:scale-110 transition text-white bg-white/10 p-3 rounded-full"
        >
          <FaEnvelope size={20} />
        </a>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gradient-animate animate-text-fade">
          Hi, I'm Md Kamar Rza Khan
        </h1>

        <p className="mt-4 text-lg max-w-xl animate-text-fade delay-200 text-gray-300">
          I build <span className="text-pink-400 font-semibold">modern</span>,{' '}
          <span className="text-purple-400 font-semibold">immersive</span> web experiences
          using <span className="text-blue-400 font-semibold">React</span>,{' '}
          <span className="text-green-400 font-semibold">Node.js</span>, and{' '}
          <span className="text-yellow-400 font-semibold">3D interactions</span>.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 animate-text-fade delay-300">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;