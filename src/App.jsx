import "./index.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Socials from "./Components/Socials";

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Socials />
    </main>
  );
}

export default App;
