import "./TopContent.css"

import PABLO_CABALLERO_CV from "../../assets/Pablo_Caballero_CV.pdf"

export const TopContent = () => {
  const getCV = () => {
    window.open(PABLO_CABALLERO_CV, "_blank")
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="hello-text">
      <div>Hola</div>
      <div className="name-container">
        <div>Soy</div> <div className="name">Pablo Caballero</div>
      </div>
      <div className="job">Desarrollador web junior</div>
      <div>
        <button className="contact-button" onClick={scrollToContact}>
          Contacto
        </button>
        <button className="get-cv-button" onClick={getCV}>
          Obtener CV
        </button>
      </div>
    </div>
  )
}
