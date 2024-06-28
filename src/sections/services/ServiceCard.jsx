import "./serviceCard.css";

const ServiceCard = ({ children, className, onClick }) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  );
};

export default ServiceCard;
