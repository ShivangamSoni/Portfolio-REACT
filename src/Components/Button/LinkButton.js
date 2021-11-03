import { HashLink } from "react-router-hash-link";
import style from "./style.module.css";
const LinkButton = (props) => {
  const classes = `${style.btn}  ${style[props.color]}`;
  return (
    <>
      {!props.type ? (
        <a className={classes} download={props.download} target={props.target} href={props.href}>
          {props.children}
        </a>
      ) : (
        <HashLink className={classes} smooth to={props.href}>
          {props.children}
        </HashLink>
      )}
    </>
  );
};

export default LinkButton;
