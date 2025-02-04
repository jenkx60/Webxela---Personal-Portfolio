import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";

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

        <div id="projects" className="section">
          <Projects />
        </div>

        <div id="contact" className="section">
          <ContactForm />
        </div>
      
      <Footer />
    </div>
  );
}

export default Page;
