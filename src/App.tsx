import "./App.css"
import { About } from "./components/About/About"
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

        <div className="scroll-to" id="contact">
          Contact
        </div>
      </div>
    </>
  )
}

export default App
