import styles from "./Project.module.css"
import github from "../../assets/technologies/github.png"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

interface ProjectProps {
  image: string
  name: string
  desc: string
  technologies: string[]
  demoURL: string
  githubURL: string
}

export const Project = ({
  image,
  name,
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
        <img src={image} className={styles.image} />
        <div className={styles.project_info_wrapper}>
          <div className={styles.name}>{name}</div>
          <div className={styles.technologies_wrapper}>
            {technologies.map((tec) => (
              <img className={styles.technology} src={tec} />
            ))}
          </div>
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
              <img className={styles.button_icon} src={github} />
              Github
            </button>
          </div>
        </div>
        {/*
        <div className="project-left">
          <div className="project-name">{name}</div>
          <div className="project-description">{desc}</div>
          <div className="project-links">
            <button
              className="custom-button"
              onClick={() => {
                OpenURL(demoURL)
              }}
            >
              Demo
            </button>
            <button
              className="custom-button github-button"
              onClick={() => {
                OpenURL(githubURL)
              }}
            >
              Github
            </button>
          </div>
        </div>
        <div className="project-right">
          <img src={image} className="project-image" />
        </div>
        */}
      </div>
    </>
  )
}
