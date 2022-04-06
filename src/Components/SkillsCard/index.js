import style from "./style.module.css";

const Skills = () => {
  const skillsList = [
    {
      id: 1,
      label: "HTML",
      image: require("../../Assets/icons/html5.svg").default,
    },
    {
      id: 2,
      label: "CSS",
      image: require("../../Assets/icons/css3.svg").default,
    },
    {
      id: 3,
      label: "JavaScript",
      image: require("../../Assets/icons/javascript.svg").default,
    },
    {
      id: 4,
      label: "REACT",
      image: require("../../Assets/icons/react.svg").default,
    },
    {
      id: 5,
      label: "REDUX",
      image: require("../../Assets/icons/redux.svg").default,
    },
    {
      id: 6,
      label: "SASS/SCSS",
      image: require("../../Assets/icons/sass.svg").default,
    },
    {
      id: 7,
      label: "Node.JS",
      image: require("../../Assets/icons/nodejs.svg").default,
    },
    {
      id: 8,
      label: "Express.JS",
      image: require("../../Assets/icons/express.svg").default,
    },
    {
      id: 9,
      label: "MongoDB",
      image: require("../../Assets/icons/mongodb.svg").default,
    },
    {
      id: 10,
      label: "Git",
      image: require("../../Assets/icons/git.svg").default,
    },
    {
      id: 11,
      label: "GitHub",
      image: require("../../Assets/icons/github.svg").default,
    },
    {
      id: 12,
      label: "Linux Basics",
      image: require("../../Assets/icons/linux.svg").default,
    },
  ];

  return (
    <div className={style.container}>
      <h3 className={style.title}>Languages / Libraries / Technologies</h3>
      <div className={style.skills}>
        {skillsList.map((skill) => (
          <div key={skill.id} className={style.skill}>
            <img alt="HTML" src={skill.image} />
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
