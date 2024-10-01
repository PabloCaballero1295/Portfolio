import { SectionTitle } from "../SectionTitle/SectionTitle"

import TFG_FILE from "../../assets/PDF/TFG_Pablo_Caballero.pdf"
import PersonIcon from "@mui/icons-material/Person"

import styles from "./About.module.css"

export const About = () => {
  return (
    <div className={styles.about_wrapper}>
      <div className="container">
        <SectionTitle icon={PersonIcon} title="Sobre mí" />
        <div className={styles.about_content}>
          ¡Hola! mi nombre es Pablo Caballero y soy un desarrollador web
          apasionado en la creación de soluciones innovadores y también que sean
          responsive para adaptarse a todo tipo de dispositivos. Me considero un
          desarrollador con una gran capacidad de adaptación, que puede aprender
          a utilizar muchos lenguajes o frameworks en poco tiempo.
          <br />
          <br />
          Realicé mis estudios en la universidad de La Laguna donde logré
          graduarme en ingeniería informática, concretamente en el itinerario de
          las tecnologías de la información. Mi trabajo de fin de Grado fue
          sobre la{" "}
          <a
            href={TFG_FILE}
            target="_blank"
            title="Abrir Trabajo final de grado"
          >
            generación procedimental de entornos exteriores para videojuegos 3D
          </a>{" "}
          utilizando el motor gráfico Unity.
          <br />
          <br />
          Hablo español nativo y en cuanto al inglés me considero que tengo un
          nivel medio. Soy una persona que consume mucho contenido audiovisual
          en inglés y casi todas las consultas que uno puede hacer en internet
          las hago en ese idioma. Además, he trabajado un par de años en el
          sector turístico y he tenido que comunicarme con personas de diversas
          nacionalidades haciendo uso del inglés.
        </div>
      </div>
    </div>
  )
}
