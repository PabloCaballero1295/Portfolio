import { SectionTitle } from "../SectionTitle/SectionTitle"
import "./About.css"

export const About = () => {
  return (
    <div>
      <SectionTitle title="Sobre mí" />
      <div className="about-content">
        ¡Hola! mi nombre es Pablo Caballero y soy un desarrollador web
        apasionado en la creación de soluciones innovadores y también que sean
        responsive para adaptarse a todo tipo de dispositivos. Me considero un
        desarrollador que puede aprender a utilizar muchos lenguajes o
        frameworks para realizar mi trabajo.
        <br />
        <br />
        Conseguí mi grado de ingeniería informática en la universidad de La
        Laguna, concretamente en el itinerario de las tecnologías de la
        información. Mi trabajo de fin de Grado fue sobre la{" "}
        <a href="/TFG_Pablo_Caballero.pdf" target="_blank">
          generación procedimental de entornos exteriores para videojuegos 3D
        </a>{" "}
        utilizando el motor gráfico Unity.
      </div>
    </div>
  )
}
