import { Project } from "../Project/Project"
import { SectionTitle } from "../SectionTitle/SectionTitle"
import styles from "./Projects.module.css"

import sudoku_web from "../../assets/Sudoku-web.png"
import valorant_web from "../../assets/Valorant-web.png"
import WebIcon from "@mui/icons-material/Web"

import typescript from "../../assets/technologies/typescript.png"
import react from "../../assets/technologies/react.png"

const projects = [
  {
    name: "Sudoku",
    desc: "Es una web hecha con React y TypeScript que nos permite jugar una partida de Sudoku. Se han hecho indicadores visuales para mostrar la casilla seleccionada, las columnas, las filas y regiones que se ven afectadas al colocar un número en la casilla. ",
    image: sudoku_web,
    technologies: [typescript, react],
    demoURL: "https://pablocaballero1295.github.io/Sudoku-web/",
    githubURL: "https://github.com/PabloCaballero1295/Sudoku-web",
  },
  {
    name: "Valorant",
    desc: "Es una web hecha con React y TypeScript que se utiliza para mostrar información sobre los agentes, mapas y armas que existen en Valorant. Los datos son obtenidos a través de un API llamada Valorant-Api ",
    image: valorant_web,
    technologies: [typescript, react],
    demoURL: "https://pablocaballero1295.github.io/Valorant-web/",
    githubURL: "https://github.com/PabloCaballero1295/Valorant-web",
  },
]

export const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <SectionTitle icon={WebIcon} title="Proyectos" />
        <div className={styles.projects_wrapper}>
          {projects.map((project, index) => (
            <Project
              key={index}
              image={project.image}
              name={project.name}
              desc={project.desc}
              technologies={project.technologies}
              demoURL={project.demoURL}
              githubURL={project.githubURL}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
