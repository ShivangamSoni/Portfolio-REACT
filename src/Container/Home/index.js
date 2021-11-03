import LinkButton from "../../Components/Button/LinkButton";
import style from "./style.module.css";

const Profile = () => {
  return (
    <div className={style.container} id="#">
      <div className={style.details}>
        <div>
          <h2>
            Hi, I am <strong className={style.name}>Shivangam Soni</strong>
          </h2>
          <p>A Front-End Developer</p>
        </div>

        <div className={style.hire}>
          <span>Get ready to turn ideas into reality.</span>

          <div className={style.btnGroup}>
            <LinkButton type="hash" href="#contact" color="green">
              Hire Me
            </LinkButton>

            <LinkButton color="yellow" download="ShivangamSoni-Resume.pdf" href={require("../../Assets/Resume.pdf").default}>
              Get Resume
            </LinkButton>
          </div>
        </div>
      </div>

      <div className={style.image}>
        <img src={require("../../Assets/ShivangamSoni.jpg").default} alt="Shivangam Soni" />
      </div>
    </div>
  );
};

export default Profile;
