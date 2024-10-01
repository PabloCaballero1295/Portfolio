import { useState } from "react"
import Modal from "@mui/material/Modal"
import CloseIcon from "@mui/icons-material/Close"

import styles from "./JobCard.module.css"

interface JobCardProps {
  title: string
  company: string
  image: string
  period: string
  type: string
  text: string
  technologies: string[]
}

export const JobCard = ({
  title,
  company,
  image,
  period,
  type,
  text,
  technologies,
}: JobCardProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  console.log(technologies)

  return (
    <div className={styles.wrapper}>
      <div onClick={handleOpen}>
        <img className={styles.image} src={image} />
        <div className={styles.info_wrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.company}>{company}</div>
          <div className={styles.period}>{period}</div>
          <div className={styles.type}>{type}</div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className={styles.modal_wrapper}>
          <div className={styles.modal_header} onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </div>
          <div className={styles.modal_content}>
            <img className={styles.image} src={image} />

            <div className={styles.technologies_wrapper}>
              {technologies.map((tec, index) => (
                <img
                  key={index}
                  className={styles.technology_image}
                  src={tec}
                />
              ))}
            </div>

            <div className={styles.job_data_wrapper}>
              <div>{title}</div>
              <div>{period}</div>
              <div>{type}</div>
            </div>

            <div className={styles.modal_text}>
              {text.split("\n").map((line, index) => (
                <div key={index}>
                  {line}
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
