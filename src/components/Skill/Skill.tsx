import styles from "./Skill.module.css"

interface SkillProps {
  name: string
  image: string
}

export const Skill = ({ name, image }: SkillProps) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.name}>{name}</div>
    </div>
  )
}
