import "./App.css";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Footer from "./sections/Footer/Footer";
import Honors from "./sections/honors/HonorsCertificates";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Honors />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
