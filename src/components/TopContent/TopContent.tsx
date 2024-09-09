import "./TopContent.css"

export const TopContent = () => {
  const getCV = () => {
    window.open("/Pablo_Caballero_CV.pdf", "_blank")
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
