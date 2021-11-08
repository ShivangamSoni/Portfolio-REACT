import ContactForm from "../../Components/ContactForm/index";
import SectionHeading from "../../Components/SectionHeading";
import style from "./style.module.css";

const Contact = () => {
  return (
    <div className={style.contact} id="contact">
      <SectionHeading>Contact Me</SectionHeading>
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
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
