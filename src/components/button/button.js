import "./button.css";

const Button = ({ label, showAlert }) => {
  return (
    <button 
        className="btn" 
        onClick={() => showAlert(label)}
    >
      {label}
    </button>
  );
};

export default Button;
