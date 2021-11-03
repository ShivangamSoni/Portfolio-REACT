import LinkButton from "../Button/LinkButton";
import style from "./style.module.css";

const Project = (props) => {
  const { title, desc, image, live } = props.project;

  return (
    <div className={style.project}>
      <img className={style.image} src={image} alt={title} />
      <div className={style.details}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.desc}>{desc}</p>
        <div className={style.btnGroup}>
          <LinkButton color="green" href={live} target="_blank">
            Live Demo
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Project;
