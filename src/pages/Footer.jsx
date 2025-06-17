import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-purple-400">SHASTRA 2025</h3>
          <p className="text-sm mt-1">© {new Date().getFullYear()} Model Egineering College. All rights reserved.</p>
        </div>

        <div className="flex gap-6 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-purple-500">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-500">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-500">
            <FaGithub />
          </a>
        </div>

         
      </div>
    </footer>
  );
}
