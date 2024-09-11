import "./Project.css"

interface ProjectProps {
  image: string
  name: string
  desc: string
  demoURL: string
  githubURL: string
}

export const Project = ({
  image,
  name,
  desc,
  demoURL,
  githubURL,
}: ProjectProps) => {
  const OpenURL = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <>
      <div className="project-container">
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
        <img src={image} className="project-image" />
      </div>
    </>
  )
}
