import style from "./style.module.css";

const Skills = () => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Languages / Libraries / Technologies</h3>
      <div className={style.skills}>
        <div className={style.skill}>
          <img alt="HTML" src={require("../../Assets/html5.png").default} />
          <span>HTML</span>
        </div>

        <div className={style.skill}>
          <img alt="CSS" src={require("../../Assets/html5.png").default} />
          <span>CSS</span>
        </div>

        <div className={style.skill}>
          <img alt="JavaScript" src={require("../../Assets/html5.png").default} />
          <span>JavaScript</span>
        </div>

        <div className={style.skill}>
          <img alt="REACT" src={require("../../Assets/html5.png").default} />
          <span>REACT</span>
        </div>

        <div className={style.skill}>
          <img alt="Git" src={require("../../Assets/html5.png").default} />
          <span>Git</span>
        </div>

        <div className={style.skill}>
          <img alt="Bootstrap" src={require("../../Assets/html5.png").default} />
          <span>Bootstrap</span>
        </div>

        <div className={style.skill}>
          <img alt="SASS" src={require("../../Assets/html5.png").default} />
          <span>SASS</span>
        </div>

        <div className={style.skill}>
          <img alt="GitHub" src={require("../../Assets/html5.png").default} />
          <span>GitHub</span>
        </div>

        <div className={style.skill}>
          <img alt="Linux" src={require("../../Assets/html5.png").default} />
          <span>Linux</span>
        </div>

        <div className={style.skill}>
          <img alt="Googling" src={require("../../Assets/html5.png").default} />
          <span>Googling</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
