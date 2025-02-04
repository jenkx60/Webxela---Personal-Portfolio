import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";
// import SkillWall from "./components/SkillWall";

const Page = () => {

  return (
    <div>
      <Navbar />
        <div id="home" className="section">
          <Hero />
        </div>

        <div id="about" className="section">
          <About />
        </div>

        <div id="skills" className="section">
          {/* <SkillWall /> */}
        </div>

        <div id="projects" className="section">
          <Projects />
        </div>

        <div id="contact" className="section">
          <ContactForm />
        </div>
      
      {/* <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer /> */}
      <Footer />
    </div>
  );
}

export default Page;
