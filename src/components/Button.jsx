import "./button.css";

const Button = ({ children, onClick }) => {
  return (
    <button id="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
