import style from "./style.module.css";

const SectionHeading = (props) => {
  return <h3 className={style.sectionHeading}>{props.children}</h3>;
};

export default SectionHeading;
