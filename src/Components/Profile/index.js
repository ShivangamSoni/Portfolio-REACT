import style from "./style.module.css";

const ProfileCard = () => {
  return (
    <div className={style.profile}>
      <div className={style.image}>
        <img src={require("../../Assets/ShivangamSoni.jpg").default} alt="Shivangam Soni" />
      </div>
      <div className={style.socials}>
        <a title="LinkedIn" href="https://www.linkedin.com/in/shivangam-soni/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in fa-2x"></i>
        </a>
        <a title="CodePen" href="https://codepen.io/ShivangamSoni" target="_blank" rel="noreferrer" aria-label="CodePen">
          <i class="fab fa-codepen fa-2x"></i>
        </a>
        <a title="GitHub" href="https://github.com/ShivangamSoni" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i class="fab fa-github-alt fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
