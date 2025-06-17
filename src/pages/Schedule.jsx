import Navbar from '../components/Navbar.jsx';
import { useState } from 'react';
import { motion } from 'framer-motion';

const scheduleData = {
  "Day 1": [
    { time: "10:00 AM", event: "Inauguration Ceremony" },
    { time: "11:30 AM", event: "Tech Quiz Round 1" },
    { time: "2:00 PM", event: "Code Wars Qualifiers" },
    { time: "4:00 PM", event: "Paper Presentation" },
  ],
  "Day 2": [
    { time: "9:00 AM", event: "Robo Rumble" },
    { time: "11:00 AM", event: "Workshops" },
    { time: "2:00 PM", event: "Code Wars Finals" },
    { time: "5:00 PM", event: "Closing Ceremony & Awards" },
  ],
};

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Day 1");

  return (
    <div className="min-h-screen bg-black text-white">
      
      <Navbar />
      <div className="pt-28 px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-10 text-center">Schedule</h1>

   
        <div className="flex justify-center gap-4 mb-10">
          {Object.keys(scheduleData).map(day => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2 rounded-full border-2 transition-all duration-300 
                ${selectedDay === day ? 'bg-purple-600 border-purple-600 text-white' : 'border-purple-400 text-purple-400 hover:bg-purple-800'}`}
            >
              {day}
            </button>
          ))}
        </div>
 
        <motion.div
          className="space-y-6 max-w-3xl mx-auto"
          key={selectedDay}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {scheduleData[selectedDay].map((item, index) => (
            <div key={index} className="bg-gray-900 border-l-4 border-purple-500 pl-4 py-3 px-4 rounded-xl shadow-md hover:bg-gray-800">
              <p className="text-purple-400 font-semibold">{item.time}</p>
              <p className="text-lg">{item.event}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
