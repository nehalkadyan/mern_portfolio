import About from "./components/about-section/About";
import Contact from "./components/contact-section/Contact";
import HeroSection from "./components/hero-section/HeroSection";
import Navbar from "./components/navbar/Navbar";
import "./App.js";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
