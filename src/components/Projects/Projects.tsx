import { Project } from "../Project/Project"
import { SectionTitle } from "../SectionTitle/SectionTitle"
import "./Projects.css"

import sudoku_web from "../../assets/Sudoku-web.png"
import valorant_web from "../../assets/Valorant-web.png"

const projects = [
  {
    name: "Sudoku-web",
    desc: "Es una web hecha con React y TypeScript que nos permite jugar una partida de Sudoku. Se han hecho indicadores visuales para mostrar la casilla seleccionada, las columnas, las filas y regiones que se ven afectadas al colocar un número en la casilla. ",
    image: sudoku_web,
    demoURL: "https://pablocaballero1295.github.io/Sudoku-web/",
    githubURL: "https://github.com/PabloCaballero1295/Sudoku-web",
  },
  {
    name: "Valorant-web",
    desc: "Es una web hecha con React y TypeScript que se utiliza para mostrar información sobre los agentes, mapas y armas que existen en Valorant. Los datos son obtenidos de Valorant-Api ",
    image: valorant_web,
    demoURL: "https://pablocaballero1295.github.io/Valorant-web/",
    githubURL: "https://github.com/PabloCaballero1295/Valorant-web",
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
      {projects.map((project) => (
        <Project
          image={project.image}
          name={project.name}
          desc={project.desc}
          demoURL={project.demoURL}
          githubURL={project.githubURL}
        />
      ))}
    </div>
  )
}
