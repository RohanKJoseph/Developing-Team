import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-purple-400 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About SHASTRA
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          SHASTRA is the premier technical fest of Model Engineering Collage, where innovation meets imagination.
          Join us for 3 electrifying days of hackathons, workshops, speaker sessions, robotics challenges,
          and creative coding battles. This year, we're unlocking the future with an immersive theme of 
            "Digital Frontiers & AI Renaissance".
        </motion.p>
      </div>

 
      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { title: "500+ Participants", icon: "👥" },
          { title: "30+ Events", icon: "⚙️" },
          { title: "Tech Talks & Celebs", icon: "🎤" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 border border-purple-800 rounded-xl p-6 text-center shadow-xl hover:shadow-purple-500/30 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold text-purple-300">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
