import "./App.css"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { NavBar } from "./components/NavBar/NavBar"
import { Projects } from "./components/Projects/Projects"
import { TopContent } from "./components/TopContent/TopContent"

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div id="home"></div>
        <TopContent />
        <div className="scroll-to" id="about"></div>
        <About />
        <div className="scroll-to" id="experience"></div>
        <Experience />
        <div className="scroll-to" id="projects"></div>
        <Projects />
      </div>
      <div className="scroll-to" id="contact"></div>
      <Contact />
    </>
  )
}

export default App