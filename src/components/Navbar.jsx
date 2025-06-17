import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "/src/logo.png"
import meclogo from "/src/mec logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-60 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
    

        <Link to="/" className="text-2xl font-techno text-purple-400 tracking-wide flex">
          <img className="w-20" src={logo}/> 
          SHASTRA 2025
        </Link>
        <img className="w-20" src={meclogo}/>
 
        <nav className="hidden md:flex gap-6 text-sm font-semibold text-white">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/schedule" className="hover:text-purple-400 transition">Schedule</Link>
          <Link to="/events" className="hover:text-purple-400 transition">Events</Link>
          <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
        </nav>

        
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>

 
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-4 text-center">
          <Link to="/" className="block hover:text-purple-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/schedule" className="block hover:text-purple-400" onClick={() => setIsOpen(false)}>Schedule</Link>
          <Link to="/events" className="block hover:text-purple-400" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/contact" className="block hover:text-purple-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
