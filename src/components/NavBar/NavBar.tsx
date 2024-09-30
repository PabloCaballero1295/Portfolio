import { NavBarButton } from "../NavBarButton/NavBarButton"
import styles from "./NavBar.module.css"
import { DropdownMenu } from "../DropdownMenu/DropdownMenu"

export const NavBar = () => {
  function scrollToElement(id: string) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_content}>
        <div
          className={styles.navbar_left_content}
          onClick={() => {
            scrollToElement("home")
          }}
        >
          Pablo Caballero
        </div>

        <div className={styles.navbar_right_content}>
          <NavBarButton text="Home" scrollTo="home" />
          <NavBarButton text="Sobre mí" scrollTo="about" />
          <NavBarButton text="Experiencia" scrollTo="experience" />
          <NavBarButton text="Proyectos" scrollTo="projects" />
          <NavBarButton text="Contacto" scrollTo="contact" />
        </div>

        <div className={styles.navbar_right_content_mobile}>
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}
