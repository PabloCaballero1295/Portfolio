import { SectionTitle } from "../SectionTitle/SectionTitle"
//import { Technology } from "../Technology/Technology"
import WorkIcon from "@mui/icons-material/Work"

import styles from "./Experience.module.css"

export const Experience = () => {
  return (
    <div className={styles.experience_wrapper}>
      <div className="container">
        <SectionTitle icon={WorkIcon} title="Experiencia" />
        <div className={styles.jobs_wrapper}>
          <div className={styles.job_header}>
            <div className={styles.job_title}>Práticas de empresa</div>
            <div className={styles.job_time}>Marzo 2018 - Junio 2018</div>
          </div>
          Realice las prácticas de empresa en Turitop. En ese tiempo estuve
          desarrollando un app mobile con React Native. Esta app consistía en el
          almacenamiento de unas imágenes en AWS para que el cliente pudiera
          venderlas. Las fotos se tomaban con una cámara profesional a las
          personas que estaban disfrutando de una experiencia en el mar, como
          las motos de aguas o ver los delfines. De ahí se transferían al móvil
          mediante Bluetooth, y a partir de aquí se podían transferir a un
          bucket de AWS, donde se almacenaban en su correspondiente carpeta del
          grupo que se había asignado en el App.
          <div className={styles.job_header}>
            <div className={styles.job_title}>Kode</div>
            <div className={styles.job_time}>Mayo 2021 - Enero 2023</div>
          </div>
          Trabajé en el desarrollo de un app iOS de fitness, agrgando multitud
          de funcionalidades, corrigiendo bugs y también me encargué de la
          localización de los textos estáticos del app. Para este app también
          tuve que encargarme del mantenimiento y desarrollo del backend con
          nodejs y express. Además gestioné la base de datos en Firebase,
          creando scripts para modificar gran cantidad de documentos de la base
          de datos, así como haciendo algunos diseños para nuevas colecciones de
          datos.
          <br /> <br />
          Me ocupé de la creación de la versión web del app de fitness con React
          y TypeScript. Esta web se diseñó principalmente para que los
          entrenadores creasen su perfil y compartieran sus rutinas de
          entrenamiento. Se estuvo utilizando React Redux y localstorage para la
          persistencia de algunos datos.
          <br />
          <br />
          Participé en el desarrollo exclusivo del Front-End de una web para la
          gestión de los fármacos de las farmacias de Italia.
          <br /> <br />
          Creación de una web con Vue para la gestión de los apartamentos de un
          hotel. Esta web se creó para que los dueños del hotel pudieran
          controlar las reservas y también la organización de la limpieza diaria
          de las habitaciones.
          <br /> <br />
          Desarrollo de una web de comercio online con Vue y StripeJS como
          plataforma de pagos. En dicha web un usuario podía crear una cuenta
          como propietario de un comercio y vender sus productos asi como
          personalizar algunos aspectos de la web, como los colores de los
          botones, barra de navigación o añadir su logo.{" "}
          <div className={styles.job_header}>
            <div className={styles.job_title}>Kode - Freelance</div>
            <div className={styles.job_time}>Enero 2024 - Marzo 2024</div>
          </div>
          Colaboré en el desarrollo de una plataforma de comercio online usando
          Odoo. Implementé mejoras en el diseño de la interfaz de usuario,
          optimizando la experiencia del usuario y la usabilidad. <br />
          <br />
          Realicé informes con datos de la plataforma de comercio online
          utilizando Google Analytics y Google Tag Manager. Estos informes se
          usaron para poder mejorar el flujo de usuarios por la web.
        </div>
      </div>
    </div>
  )
}
