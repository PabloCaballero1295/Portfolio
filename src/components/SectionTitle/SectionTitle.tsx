import { SvgIconComponent } from "@mui/icons-material"
import styles from "./SectionTitle.module.css"

interface SectionTitleProps {
  title: string
  icon?: SvgIconComponent
}

export const SectionTitle = ({ title, icon: Icon }: SectionTitleProps) => {
  return (
    <div className={styles.section_title_container}>
      <div className={styles.section_title}>
        {Icon ? <Icon className={styles.icon} fontSize="large" /> : null}
        {title}
      </div>
    </div>
  )
}
