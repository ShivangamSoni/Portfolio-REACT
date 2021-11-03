import Skills from "../../Components/SkillsCard";
import style from "./style.module.css";

const About = () => {
  return (
    <div className={style.about} id="about">
      <div className={style.container}>
        <div className={style.aboutDetails}>
          <h3 className={style.title}>About Me</h3>
          <div className={style.details}>
            <p>
              I'm an Aspiring Web Developer who enjoys writing Code. I have strong Technical Skills &amp; an Academic Background in Computer Science Engineering. I'm interested in
              Front-End Web Development. I enjoy Developing a Web Design into a beautiful Web Site.
            </p>
            <p>
              But on a Longer Run my Focus is to be a Full Stack Web Developer &amp; as the first step towards my Dream I'm Learning <strong>MERN Stack Development</strong>.
            </p>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
