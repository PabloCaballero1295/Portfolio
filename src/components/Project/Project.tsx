import styles from "./Project.module.css"
import github from "../../assets/technologies/github.png"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { TechnologyType } from "../../types/Technology"

interface ProjectProps {
  image: string
  name: string
  desc: string
  technologies: TechnologyType[]
  demoURL: string
  githubURL: string
}

export const Project = ({
  image,
  name,
  desc,
  demoURL,
  technologies,
  githubURL,
}: ProjectProps) => {
  const OpenURL = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <>
      <div className={styles.wrapper}>
        <img src={image} className={styles.image} alt={name} />
        <div className={styles.project_info_wrapper}>
          <div className={styles.name}>{name}</div>
          <div className={styles.technologies_wrapper}>
            {technologies.map((tec, index) => (
              <img
                key={index}
                className={styles.technology}
                src={tec.image}
                alt={tec.name}
              />
            ))}
          </div>
          <div className={styles.description}>{desc}</div>
          <div className={styles.buttons}>
            <button
              className={styles.custom_button}
              onClick={() => {
                OpenURL(demoURL)
              }}
            >
              <OpenInNewIcon
                className={styles.button_icon}
                sx={{ fontSize: "1em" }}
              />
              Demo
            </button>
            <button
              className={styles.custom_button}
              onClick={() => {
                OpenURL(githubURL)
              }}
            >
              <img className={styles.button_icon} src={github} alt="GitHub" />
              Github
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
