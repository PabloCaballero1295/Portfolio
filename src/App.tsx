import "./App.css"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { NavBar } from "./components/NavBar/NavBar"
import { TopContent } from "./components/TopContent/TopContent"

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div id="home"></div>
        <TopContent />
        <div id="about"></div>
        <About />
        <div id="experience"></div>
        <Experience />
        <div id="projects">Proyectos</div>

        <div id="contact">Contact</div>
      </div>
    </>
  )
}

export default App
