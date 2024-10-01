import styles from "./TopContent.module.css"
import image from "../../assets/web-design-3.png"

import PABLO_CABALLERO_CV from "../../assets/Pablo_Caballero_CV.pdf"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import GitHubIcon from "@mui/icons-material/GitHub"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import { useState } from "react"

import { Snackbar } from "@mui/material"

export const TopContent = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const getCV = () => {
    window.open(PABLO_CABALLERO_CV, "_blank")
  }

  /*
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  */

  const copyMailToClipboard = () => {
    setOpen(true)
    setMessage("Correo electrónico copiado")
    navigator.clipboard.writeText("pablocaballero1295@gmail.com")
  }

  const copyPhoneToClipboard = () => {
    setOpen(true)
    setMessage("Teléfono copiado")
    navigator.clipboard.writeText("+34616513813")
  }

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

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
    <div className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <div className={styles.introduction}>
          <div>Hola</div>
          <div className={styles.name_wrapper}>
            <div>Soy</div> <div className={styles.name}>Pablo Caballero</div>
          </div>
          <div className={styles.workstation}>Desarrollador web</div>
          <div className={styles.buttons_row}>
            <button className={styles.about_button} onClick={scrollToAbout}>
              Sobre mí
            </button>
            <button className={styles.get_cv_button} onClick={getCV}>
              Obtener CV
            </button>
          </div>
          <div className={styles.contact_wrapper}>
            <div
              className={`${styles.contact_info_wrapper} ${styles.link}`}
              onClick={copyMailToClipboard}
              title="Copiar correo electrónico"
            >
              <EmailIcon className={styles.icon} fontSize="large" />{" "}
              <span>pablocaballero1295@gmail.com</span>
            </div>
            <div
              className={`${styles.contact_info_wrapper} ${styles.link}`}
              onClick={copyPhoneToClipboard}
              title="Copiar Teléfono"
            >
              <PhoneIcon className={styles.icon} fontSize="large" />
              <span>+34 616 51 38 13</span>
            </div>
            <div
              className={`${styles.contact_info_wrapper} ${styles.link}`}
              onClick={openLinkedIn}
              title="Visitar mi LinkedIn"
            >
              <LinkedInIcon className={styles.icon} fontSize="large" />
              <span>LinkedIn</span>
            </div>
            <div
              className={`${styles.contact_info_wrapper} ${styles.link}`}
              onClick={openGitHub}
              title="Visitar mi GitHub"
            >
              <GitHubIcon className={styles.icon} fontSize="large" />
              <span>GitHub</span>
            </div>
          </div>
        </div>
        <div className={styles.my_image_wrapper}>
          <img src={image} className={styles.my_image} />
        </div>
      </div>

      <div className={styles.see_more_container} onClick={scrollToAbout}>
        <div className={styles.see_more_text}>Ver más</div>
        <div>
          <ArrowDownwardIcon
            className={styles.down_arrow}
            fontSize="large"
            sx={{ color: "#ee6c4d" }}
          />
          <ArrowDownwardIcon
            className={styles.down_arrow}
            fontSize="large"
            sx={{ color: "#ee6c4d" }}
          />
          <ArrowDownwardIcon
            className={styles.down_arrow}
            fontSize="large"
            sx={{ color: "#ee6c4d" }}
          />
        </div>
      </div>
      <Snackbar
        message={message}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </div>
  )
}
