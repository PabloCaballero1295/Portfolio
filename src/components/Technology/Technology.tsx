import "./Technology.css"

interface TechnologyProps {
  name: string
  color: string
  textColor?: string
}

export const Technology = ({
  name,
  color,
  textColor = "black",
}: TechnologyProps) => {
  return (
    <div
      className="technology-container"
      style={{ backgroundColor: color, color: textColor }}
    >
      <span className="technology-name">{name}</span>
    </div>
  )
}
