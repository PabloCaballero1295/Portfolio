import { NavBarButton } from "../NavBarButton/NavBarButton"
import "./NavBar.css"
import { DropdownMenu } from "../DropdownMenu/DropdownMenu"

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-left-content">Pablo Caballero</div>

        <div className="navbar-right-content">
          <NavBarButton text="Home" scrollTo="home" />
          <NavBarButton text="Sobre mí" scrollTo="about" />
          <NavBarButton text="Experiencia" scrollTo="experience" />
          <NavBarButton text="Proyectos" scrollTo="projects" />
          <NavBarButton text="Contacto" scrollTo="contact" />
        </div>

        <div className="navbar-right-content-mobile">
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}
