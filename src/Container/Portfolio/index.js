import Project from "../../Components/Project";
import SectionHeading from "../../Components/SectionHeading";
import style from "./style.module.css";

const Projects = () => {
  const projectData = [
    {
      id: 7,
      title: "Blog Web Site Front-End",
      desc: "A Blog App Created created using REACT, react-router & Context API",
      image: require("../../Assets/Projects/BlogReact.png").default,
      live: "https://blog-react-shivangam-soni.netlify.app/",
    },
    {
      id: 8,
      title: "YouTube Video Viewer",
      desc: "YouTube Video Viewer created using React, Redux, React-Redux, Redux-Thunk, Axios & Google YouTube Data APIv3",
      image: require("../../Assets/Projects/YouTube.png").default,
      live: "https://shivi-youtube.netlify.app/",
    },
    {
      id: 1,
      title: "Todo React",
      desc: "Todo App Created Using REACT, HTML & CSS.",
      image: require("../../Assets/Projects/TodoReact.png").default,
      live: "https://shivi-todo-react.netlify.app/",
    },
    {
      id: 2,
      title: "Todo JS",
      desc: "Todo App Created using HTML, CSS & JS",
      image: require("../../Assets/Projects/TodoApp.png").default,
      live: "https://shivi-todo-app.netlify.app/",
    },
    {
      id: 3,
      title: "Clock Timer",
      desc: "A Clock & Timer Web App Created using HTML, CSS & JS",
      image: require("../../Assets/Projects/ClockTimer.png").default,
      live: "https://shivi-clock-timer.netlify.app/",
    },
    {
      id: 4,
      title: "Tribute Page",
      desc: "Tribute Page for Robert Downey Jr.(RDJ) created using HTML & CSS. I made this project as part of Free Code Camp Front-End Developer Certification",
      image: require("../../Assets/Projects/RDJTributePage.png").default,
      live: "https://shivangamsoni.github.io/FreeCodeCamp/Responsive-Web-Design/Tribute-Page/",
    },
    {
      id: 5,
      title: "Personal Portfolio Webpage",
      desc: "A Personal Portfolio Web Page made using HTML & CSS. I made this project as part of Free Code Camp Front-End Developer Certification",
      image: require("../../Assets/Projects/PersonalPortfolioWebPage.png").default,
      live: "https://shivangamsoni.github.io/FreeCodeCamp/Responsive-Web-Design/Personal-Portfolio-Webpage/",
    },
    {
      id: 6,
      title: "Product Landing Page",
      desc: "A Product Landing Web Page made using HTML & CSS. I made this project as part of Free Code Camp Front-End Developer Certification",
      image: require("../../Assets/Projects/ProductLandingPage.png").default,
      live: "https://shivangamsoni.github.io/FreeCodeCamp/Responsive-Web-Design/Product-Landing-Page/",
    },
  ];

  return (
    <div className={style.container} id="portfolio">
      <SectionHeading>Portfolio</SectionHeading>
      <div className={style.projects}>
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
