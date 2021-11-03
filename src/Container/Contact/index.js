import ContactForm from "../../Components/ContactForm/index";
import style from "./style.module.css";

const Contact = () => {
  return (
    <div className={style.contact} id="contact">
      <h3>Contact Me</h3>
      <div className={style.container}>
        <div className={style.details}>
          <h4 className={style.title}>Let's Connect</h4>
          <div className={style.connect}>
            <p>
              <i className="fas fa-at "></i>
              <span>shivangamsoni99@gmail.com</span>
            </p>

            <p>
              <i className="fab fa-whatsapp"></i>
              <span>94183-01568</span>
            </p>

            <p>
              <i className="fas fa-mobile-alt"></i>
              <span>98577-31099</span>
            </p>
          </div>
          <div className={style.socials}>
            <a href="https://www.linkedin.com/in/shivangam-soni/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/ShivangamSoni/" aria-label="GitHub" target="_blank" rel="noreferrer">
              <i className="fab fa-github-square"></i>
            </a>
            <a href="https://codepen.io/shivangamsoni" aria-label="CodePen" target="_blank" rel="noreferrer">
              <i className="fab fa-codepen"></i>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
