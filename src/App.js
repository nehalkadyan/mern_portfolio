import About from "./components/about-section/About";
import Contact from "./components/contact-section/Contact";
import HeroSection from "./components/hero-section/HeroSection";
import Navbar from "./components/navbar/Navbar";
import "./App.js"

function App() {
  return (
    <div className="App">
   <Navbar />
   <HeroSection />
   <About />
   <Contact /> 
   </div>
  );
}

export default App;
