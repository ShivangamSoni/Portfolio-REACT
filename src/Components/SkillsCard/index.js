import style from "./style.module.css";

const Skills = () => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Languages / Libraries / Technologies</h3>
      <div className={style.skills}>
        <div className={style.skill}>
          <img alt="HTML" src={require("../../Assets/icons/html5.svg").default} />
          <span>HTML</span>
        </div>

        <div className={style.skill}>
          <img alt="CSS" src={require("../../Assets/icons/css3.svg").default} />
          <span>CSS</span>
        </div>

        <div className={style.skill}>
          <img alt="JavaScript" src={require("../../Assets/icons/javascript.svg").default} />
          <span>JavaScript</span>
        </div>

        <div className={style.skill}>
          <img alt="REACT" src={require("../../Assets/icons/react.svg").default} />
          <span>REACT</span>
        </div>

        <div className={style.skill}>
          <img alt="Git" src={require("../../Assets/icons/git.svg").default} />
          <span>Git</span>
        </div>

        <div className={style.skill}>
          <img alt="SASS" src={require("../../Assets/icons/sass.svg").default} />
          <span>SASS</span>
        </div>

        <div className={style.skill}>
          <img alt="GitHub" src={require("../../Assets/icons/github.svg").default} />
          <span>GitHub</span>
        </div>

        <div className={style.skill}>
          <img alt="Linux" src={require("../../Assets/icons/linux.svg").default} />
          <span>Linux</span>
        </div>

        <div className={style.skill}>
          <img alt="Googling" src={require("../../Assets/icons/google.svg").default} />
          <span>Googling</span>
        </div>

        <div className={style.skill}>
          <img alt="AWS" src={require("../../Assets/icons/aws.svg").default} />
          <span>AWS</span>
        </div>

        <div className={style.skill}>
          <img alt="Redux" src={require("../../Assets/icons/redux.svg").default} />
          <span>Redux</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
