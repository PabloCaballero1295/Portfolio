import { SectionTitle } from "../SectionTitle/SectionTitle"
import "./Contact.css"

export const Contact = () => {
  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/pablo-sebasti%C3%A1n-caballero-88054289/",
      "_blank"
    )
  }

  const openGitHub = () => {
    window.open("https://github.com/PabloCaballero1295", "_blank")
  }

  return (
    <div className="contact-container">
      <SectionTitle title="Contacto" />
      <div className="contact-text">
        Para ponerse en contacto conmigo puede utlizar los siguientes métodos
      </div>
      <div className="contact-flex">
        <div className="contact-box">
          <img src="email.png" className="contact-img" />
          pablocaballero1295@gmail.com
        </div>
        <br />
        <div className="contact-box">
          <img src="phone.png" className="contact-img" />
          <div>+34 616 51 38 13</div>
        </div>
        <br />
        <div className="contact-box">
          <img
            src="linkedin_logo.webp"
            className="contact-img clickable"
            onClick={openLinkedIn}
          />
          LinkedIn
        </div>
        <br />
        <div className="contact-box">
          <img
            src="github-logo.png"
            className="contact-img clickable"
            onClick={openGitHub}
          />
          GitHub
        </div>
      </div>
    </div>
  )
}
