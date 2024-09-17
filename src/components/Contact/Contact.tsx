//import { SectionTitle } from "../SectionTitle/SectionTitle"
import "./Contact.css"
import email_icon from "../../assets/email.png"
import phone_icon from "../../assets/phone.png"
import linkedin_icon from "../../assets/linkedin_logo.webp"
import github_icon from "../../assets/github-logo.png"

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
      {/*<SectionTitle title="Contacto" />*/}
      <div className="contact-title">Contacto</div>
      <div className="contact-flex">
        <div className="contact-box">
          <img src={email_icon} className="contact-img" />
          pablocaballero1295@gmail.com
        </div>
        <br />
        <div className="contact-box">
          <img src={phone_icon} className="contact-img" />
          <div>+34 616 51 38 13</div>
        </div>
        <br />
        <div className="contact-box clickable" onClick={openLinkedIn}>
          <img src={linkedin_icon} className="contact-img" />
          LinkedIn
        </div>
        <br />
        <div className="contact-box clickable" onClick={openGitHub}>
          <img src={github_icon} className="contact-img" />
          GitHub
        </div>
      </div>
    </div>
  )
}
