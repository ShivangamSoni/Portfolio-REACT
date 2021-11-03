import Button from "../Button/Button";
import style from "./style.module.css";

const ContactForm = () => {
  return (
    <form className={style.form}>
      <h4 className={style.title}>Send me a Message</h4>
      <label>
        Name<span className={style.required}>*</span>
        <input type="text" required />
      </label>

      <label>
        Phone Number<span className={style.required}>*</span>
        <input type="text" required />
      </label>

      <label>
        Email<span className={style.required}>*</span>
        <input type="text" required />
      </label>

      <label>
        Message<span className={style.required}>*</span>
        <textarea required></textarea>
      </label>

      <Button type="submit" color="yellow">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
