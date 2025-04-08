import "./CardOption.scss";

 const CardOption = ({className, title, cardImg, imgAlt}) => {
  return (
    <button className={`sex-btn ${className}`}>
        <img src={cardImg} alt={imgAlt} />
        <span className='sex-btn__title'>{title}</span>
    </button>
  )
}

export default CardOption;