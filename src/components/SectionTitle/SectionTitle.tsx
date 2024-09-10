import "./SectionTitle.css"

interface SectionTitleProps {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="section-title-container">
      <div className="section-title">{title}</div>
    </div>
  )
}
