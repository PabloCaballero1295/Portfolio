import { Project } from "../Project/Project"
import { SectionTitle } from "../SectionTitle/SectionTitle"
import "./Projects.css"

const projects = [
  {
    name: "Sudoku-web",
    desc: "Es una web hecha con React y TypeScript que nos permite jugar una partida de Sudoku. Se han hecho indicadores visuales para mostrar la casilla seleccionada, las columnas, las filas y regiones que se ven afectadas al colocar un número en la casilla. ",
    image: "/Sudoku-web.png",
    demoURL: "https://pablocaballero1295.github.io/Sudoku-web/",
    githubURL: "https://github.com/PabloCaballero1295/Sudoku-web",
  },
]

export const Projects = () => {
  return (
    <div className="projects-container">
      <SectionTitle title="Proyectos" />
      <div className="projects-top-text">
        A continuación se muestran proyectos en los que he trabajado los últimos
        meses.
      </div>
      <Project
        image={projects[0].image}
        name={projects[0].name}
        desc={projects[0].desc}
        demoURL={projects[0].demoURL}
        githubURL={projects[0].githubURL}
      />
    </div>
  )
}