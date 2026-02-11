import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';

const Hero3D = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />

        {/* 3D Floating Object */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh>
            <icosahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial color="hotpink" wireframe />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
      </Canvas>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          🚀 Md Kamar Rza Khan 3D Portfolio
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Passion for code, creativity & immersive web.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-indigo-600 px-6 py-2 rounded hover:bg-indigo-500 font-semibold transition">
            View Projects
          </button>
          <button className="border border-indigo-400 px-6 py-2 rounded hover:bg-indigo-600 transition">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero3D;
