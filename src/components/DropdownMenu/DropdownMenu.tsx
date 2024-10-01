import { useState, useRef, MouseEvent } from "react"

import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import "./DropdownMenu.css"

export const DropdownMenu = () => {
  const menuButtonRef = useRef<HTMLDivElement>(null)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  function scrollToElement(id: string) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      handleClose()
    }
  }

  return (
    <div>
      <i
        ref={menuButtonRef}
        className="fa-solid fa-bars"
        onClick={handleClick}
      ></i>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            scrollToElement("home")
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToElement("about")
          }}
        >
          Sobre mí
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToElement("skills")
          }}
        >
          Habilidades
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToElement("experience")
          }}
        >
          Experiencia
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToElement("projects")
          }}
        >
          Proyectos
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToElement("contact")
          }}
        >
          Contacto
        </MenuItem>
      </Menu>
    </div>
  )
}
