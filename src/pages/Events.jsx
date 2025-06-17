import Navbar from '../components/Navbar.jsx';
import { motion } from 'framer-motion';

const events = [
  {
    title: "Code Wars",
    description: "Compete in high-intensity coding battles.",
  },
  {
    title: "Circuit Craze",
    description: "Build circuits and solve real-world hardware problems.",
  },
  {
    title: "Robo Rumble",
    description: "Show off your bots in an all-out robot showdown.",
  },
  {
    title: "Tech Quiz",
    description: "Flex your brainpower in a high-speed tech trivia event.",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-28 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-500 text-center mb-12">Events</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative group bg-gray-900 p-6 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-purple-500/40"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
               
              <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none">
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

              
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-10 transition duration-500"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                <p className="text-sm text-gray-300">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
