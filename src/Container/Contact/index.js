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
              <i className="fal fa-mobile-android"></i>
              <span>94183-01568</span>
            </p>

            <p>
              <i className="fal fa-mobile-android-alt"></i>
              <span>98577-31099</span>
            </p>
          </div>
          <div className={style.socials}>
            <i>LinkedIn</i>
            <i>GitHub</i>
            <i>CodePen</i>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
