import "./NavBarButton.css"

interface NavBarButtonProps {
  text: string
  scrollTo: string
}

export const NavBarButton = ({ text, scrollTo }: NavBarButtonProps) => {
  function scrollToElement(id: string) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <a className="navbar-button" onClick={() => scrollToElement(scrollTo)}>
      {text}
    </a>
  )
}
