import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import About from './About.jsx';

const particlesInit = async (main) => {
  await loadFull(main);
};

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white">
 
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-400 rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute top-[50%] left-[40%] w-[200px] h-[200px] bg-indigo-500 rounded-full blur-2xl opacity-20 z-0" />

 
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000000" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "repulse" },
              onHover: { enable: true, mode: "grab" },
            },
            modes: {
              repulse: { distance: 100 },
              grab: { distance: 140 },
            },
          },
          particles: {
            color: { value: "#8b5cf6" },
            links: {
              enable: true,
              color: "#8b5cf6",
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 1.5 },
            number: { value: 60 },
            size: { value: 2 },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
 
      <Navbar />

      <div className="h-screen flex flex-col items-center justify-center text-center px-4 pt-16 relative z-10">
        <motion.h1
          className="text-6xl md:text-7xl font-techno text-purple-500 mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SHASTRA 2025
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-sci max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Enter a world where innovation meets imagination. Gear up for the ultimate tech fest experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <Link
            to="/events"
            className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            Explore Events
          </Link>
        </motion.div>
      </div>
 
      <div className="relative z-10">
        <About />
      </div>
    </div>
  );
}
