import "./texto.css";

const Texto = ({ color, textTransform }) => {
  return (
    <p
      className="texto"
      style={{
        color: color,
        textTransform: textTransform,
      }}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
      temporibus sapiente voluptas error. Assumenda officiis commodi laborum qui
      eligendi temporibus nesciunt optio incidunt odit reiciendis accusantium
      vero harum, ipsam voluptatum?
    </p>
  );
};

export default Texto;
