import Navbar from "../components/Navbar"

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white px-6 py-20 md:px-24">
        <Navbar />
  <h2 className="text-4xl md:text-5xl text-purple-400 font-bold mb-10 text-center">
    Contact Us
  </h2>

  <form className="max-w-3xl mx-auto space-y-6">
    <div className="flex flex-col md:flex-row gap-6 ">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
    <textarea
      rows="5"
      placeholder="Your Message"
      className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
    ></textarea>
    <button
      type="submit"
      className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-md font-semibold"
    >
      Send Message
    </button>
  </form>
</section>

  )}

 