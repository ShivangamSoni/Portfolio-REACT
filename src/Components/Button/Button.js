import style from "./style.module.css";
const Button = (props) => {
  const classes = `${style.btn}  ${style[props.color]}`;

  return (
    <button type={props.type} className={classes}>
      {props.children}
    </button>
  );
};

export default Button;
