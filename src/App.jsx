import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Landing from "./pages/Landing";
import Events from "./pages/Events";
import About from "./pages/About";
import Schedule from './pages/Schedule.jsx';
import Contact from './pages/Contact.jsx';
import Footer from "./pages/Footer.jsx"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className="bg-black min-h-screen">
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/events" element={<Events/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default App;
