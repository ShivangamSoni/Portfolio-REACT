import style from "./style.module.css";
import { HashLink } from "react-router-hash-link";

const Navbar = (props) => {
  const navClasses = `${style.navbar} ${props.isActive ? style.active : ""}`;

  const close = () => {
    if (props.isActive) {
      props.close();
    }
  };

  return (
    <nav className={navClasses}>
      <ul className={style.navList}>
        <li>
          <HashLink onClick={close} smooth to="#" className={style.navLink}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink onClick={close} smooth to="#about" className={style.navLink}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink onClick={close} smooth to="#portfolio" className={style.navLink}>
            Portfolio
          </HashLink>
        </li>
        <li>
          <HashLink onClick={close} smooth to="#resume" className={style.navLink}>
            Resume
          </HashLink>
        </li>
        <li>
          <HashLink onClick={close} smooth to="#contact" className={style.navLink}>
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
