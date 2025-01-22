import { Project } from "../Project/Project"
import { SectionTitle } from "../SectionTitle/SectionTitle"
import styles from "./Projects.module.css"

import sudoku_web from "../../assets/Sudoku-web.png"
import valorant_web from "../../assets/Valorant-web.png"
import board from "../../assets/board.png"
import words from "../../assets/words.png"
import WebIcon from "@mui/icons-material/Web"

import typescript from "../../assets/technologies/typescript.png"
import react from "../../assets/technologies/react.png"
import redux from "../../assets/technologies/redux.png"

const projects = [
  {
    name: "Adivina la palabra",
    desc: "Es una página web que se basa en la de Wordle, en la que hay que adivinar una palabra oculta con un máximo de 6 intentos ",
    image: words,
    technologies: [
      { name: "Typescript", image: typescript },
      { name: "React", image: react },
    ],
    demoURL: "https://pablocaballero1295.github.io/words-game/",
    githubURL: "https://github.com/PabloCaballero1295/words-game",
  },

  {
    name: "Sudoku",
    desc: "Es una web hecha con React y TypeScript que nos permite jugar una partida de Sudoku.",
    image: sudoku_web,
    technologies: [
      { name: "Typescript", image: typescript },
      { name: "React", image: react },
      { name: "Redux", image: redux },
    ],
    demoURL: "https://pablocaballero1295.github.io/Sudoku-web/",
    githubURL: "https://github.com/PabloCaballero1295/Sudoku-web",
  },
  {
    name: "Valorant",
    desc: "Es una web que se utiliza para mostrar información sobre los agentes, mapas y armas que existen en Valorant. Los datos son obtenidos a través de un API llamada Valorant-Api.",
    image: valorant_web,
    technologies: [
      { name: "Typescript", image: typescript },
      { name: "React", image: react },
      { name: "Redux", image: redux },
    ],
    demoURL: "https://pablocaballero1295.github.io/Valorant-web/",
    githubURL: "https://github.com/PabloCaballero1295/Valorant-web",
  },
  {
    name: "Task board",
    desc: "Es una web que contiene un tablero para organizar tareas con diferentes columns",
    image: board,
    technologies: [
      { name: "Typescript", image: typescript },
      { name: "React", image: react },
    ],
    demoURL: "https://pablocaballero1295.github.io/board_task/",
    githubURL: "https://github.com/PabloCaballero1295/board_task",
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
