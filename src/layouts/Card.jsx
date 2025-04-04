
// eslint-disable-next-line react/prop-types
function Card({ children, variant = 'default' }) {
  const baseStyles = "cards flex flex-col"
  
  const variantStyles = {
    default: "",
    project: " max-w-2xl mx-auto",
    profile: "max-w-3xl",
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </div>
  )
}

export default Card