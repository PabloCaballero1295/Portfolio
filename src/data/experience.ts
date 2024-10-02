import kode from "../assets/kode.png"
import turitop from "../assets/turitop.png"

import nodejs from "../assets/technologies/nodejs.png"
import javascript from "../assets/technologies/javascript.png"
import typescript from "../assets/technologies/typescript.png"
import firebase from "../assets/technologies/firebase.png"
import react from "../assets/technologies/react.png"
import vue from "../assets/technologies/vuejs.png"
import google_tag from "../assets/technologies/Google-tag.png"
import google_analytics from "../assets/technologies/google-analytics.png"
import swift from "../assets/technologies/swift.png"
import odoo from "../assets/technologies/odoo.webp"

export const experience = [
  {
    id: 1,
    title: "Prácticas de empresa",
    company: "Turitop",
    image: turitop,
    period: "Marzo 2018 - Junio 2018",
    type: "Prácticas",
    text: "Realice las prácticas de empresa en Turitop. En ese tiempo estuve desarrollando un app mobile con React Native. Esta app consistía en el almacenamiento de unas imágenes en AWS para que el cliente pudiera venderlas. Las fotos se tomaban con una cámara profesional a las personas que estaban disfrutando de una experiencia en el mar, como las motos de aguas o ver los delfines.\n\nDe ahí se transferían al móvil mediante Bluetooth, y a partir de aquí se podían transferir a un bucket de AWS, donde se almacenaban en su correspondiente carpeta delgrupo que se había asignado en el App.",
    technologies: [
      { name: "JavaScript", image: javascript },
      { name: "React", image: react },
    ],
  },
  {
    id: 2,
    title: "Desarrollador web/iOS",
    company: "Kode",
    image: kode,
    period: "Mayo 2021 - Enero 2023",
    type: "Indefinido - Híbrido",
    text: "Trabajé en el desarrollo de un app iOS de fitness, agrgando multitud de funcionalidades, corrigiendo bugs y también me encargué de la localización de los textos estáticos del app.\n\nPara este app también tuve que encargarme del mantenimiento y desarrollo del backend con nodejs y express. Además gestioné la base de datos en Firebase, creando scripts para modificar gran cantidad de documentos de la base de datos, así como haciendo algunos diseños para nuevas colecciones de datos.\n\n Me ocupé de la creación de la versión web del app de fitness con React y TypeScript. Esta web se diseñó principalmente para que los entrenadores creasen su perfil y compartieran sus rutinas de entrenamiento. Se estuvo utilizando React Redux y localstorage para la persistencia de algunos datos.\n\nParticipé en el desarrollo exclusivo del Front-End de una web para la gestión de los fármacos de las farmacias de Italia.\n\nCreación de una web con Vue para la gestión de los apartamentos de un hotel. Esta web se creó para que los dueños del hotel pudieran controlar las reservas y también la organización de la limpieza diaria de las habitaciones.\n\nDesarrollo de una web de comercio online con Vue y StripeJS como plataforma de pagos. En dicha web un usuario podía crear una cuenta como propietario de un comercio y vender sus productos asi como personalizar algunos aspectos de la web, como los colores de los botones, barra de navigación o añadir su logo.",
    technologies: [
      { name: "JavaScript", image: javascript },
      { name: "TypeScript", image: typescript },
      { name: "NodeJS", image: nodejs },
      { name: "Swift", image: swift },
      { name: "React", image: react },
      { name: "Vue", image: vue },
      { name: "Firebase", image: firebase },
    ],
  },
  {
    id: 3,
    title: "Desarrollador web",
    company: "Kode",
    image: kode,
    period: "Enero 2024 - Marzo 2024",
    type: "Freelance - Remoto",
    text: "Colaboré en el desarrollo de una plataforma de comercio online usando Odoo. Implementé mejoras en el diseño de la interfaz de usuario, optimizando la experiencia del usuario y la usabilidad.\n\nRealicé informes con datos de la plataforma de comercio online utilizando Google Analytics y Google Tag Manager. Estos informes se usaron para poder mejorar el flujo de usuarios por la web.",
    technologies: [
      { name: "JavaScript", image: javascript },
      { name: "Odoo", image: odoo },
      { name: "Google Analytics", image: google_analytics },
      { name: "Google Tag Manager", image: google_tag },
    ],
  },
]
