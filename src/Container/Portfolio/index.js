import Project from "../../Components/Project";
import style from "./style.module.css";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Todo React",
      desc: "Some Detail",
      image: require("../../Assets/Projects/TodoReact.png").default,
      live: "",
      source: "",
    },
    {
      id: 2,
      title: "Todo JS",
      desc: "Some Detail",
      image: require("../../Assets/Projects/TodoReact.png").default,
      live: "",
      source: "",
    },
    {
      id: 3,
      title: "Clock Timer",
      desc: "Some Detail",
      image: require("../../Assets/Projects/TodoReact.png").default,
      live: "",
      source: "",
    },
    {
      id: 4,
      title: "Tribute Page",
      desc: "Some Detail",
      image: require("../../Assets/Projects/TodoReact.png").default,
      live: "",
      source: "",
    },
  ];

  return (
    <div className={style.projects} id="portfolio">
      {projectData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
