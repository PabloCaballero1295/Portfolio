import styles from "./Contact.module.css"

import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import GitHubIcon from "@mui/icons-material/GitHub"

import { SectionTitle } from "../SectionTitle/SectionTitle"

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
    <div className={styles.wrapper}>
      <div className={styles.inner_wrapper}>
        <SectionTitle title="Contacto" />
        <div className={styles.contact_flex}>
          <div className={styles.contact_box}>
            <EmailIcon fontSize="large" className={styles.icon} />
            pablocaballero1295@gmail.com
          </div>
          <div className={styles.contact_box}>
            <PhoneIcon fontSize="large" className={styles.icon} />
            <div>+34 616 51 38 13</div>
          </div>
          <div
            className={`${styles.contact_box} ${styles.clickable}`}
            onClick={openLinkedIn}
          >
            <LinkedInIcon fontSize="large" className={styles.icon} />
            LinkedIn
          </div>
          <div
            className={`${styles.contact_box} ${styles.clickable}`}
            onClick={openGitHub}
          >
            <GitHubIcon fontSize="large" className={styles.icon} />
            GitHub
          </div>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.bottom_content}>Hecho por Pablo Caballero</div>
    </div>
  )
}
