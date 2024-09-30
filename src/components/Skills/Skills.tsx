import { SectionTitle } from "../SectionTitle/SectionTitle"
import { Skill } from "../Skill/Skill"
import styles from "./Skills.module.css"

import nodejs from "../../assets/technologies/nodejs.png"
import javascript from "../../assets/technologies/javascript.png"
import typescript from "../../assets/technologies/typescript.png"
import firebase from "../../assets/technologies/firebase.png"
import react from "../../assets/technologies/react.png"
import vue from "../../assets/technologies/vuejs.png"
import google_tag from "../../assets/technologies/Google-tag.png"
import google_analytics from "../../assets/technologies/google-analytics.png"
import python from "../../assets/technologies/python.png"
import html5 from "../../assets/technologies/html5.png"
import css3 from "../../assets/technologies/css3.png"
import swift from "../../assets/technologies/swift.png"
import redux from "../../assets/technologies/redux.png"
import git from "../../assets/technologies/git.png"
import github from "../../assets/technologies/github.png"

import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices"

export const Skills = () => {
  return (
    <div className={styles.skills_wrapper}>
      <div className="container">
        <SectionTitle icon={ImportantDevicesIcon} title="Habilidades" />
        <div className={styles.skills_grid}>
          <Skill name="HTML5" image={html5} />
          <Skill name="CSS3" image={css3} />
          <Skill name="JavaScript" image={javascript} />
          <Skill name="TypeScript" image={typescript} />
          <Skill name="NodeJS" image={nodejs} />
          <Skill name="Firebase" image={firebase} />
          <Skill name="React" image={react} />
          <Skill name="Vue" image={vue} />
          <Skill name="Redux" image={redux} />
          <Skill name="Swift" image={swift} />
          <Skill name="Python" image={python} />
          <Skill name="Git" image={git} />
          <Skill name="GitHub" image={github} />
          <Skill name="Google Analytics" image={google_analytics} />
          <Skill name="Google Tag Manager" image={google_tag} />
        </div>
      </div>
    </div>
  )
}
