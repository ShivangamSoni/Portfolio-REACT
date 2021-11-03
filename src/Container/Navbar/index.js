import style from "./style.module.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.navList}>
        <li>
          <HashLink smooth to="#" className={style.navLink}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className={style.navLink}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#portfolio" className={style.navLink}>
            Portfolio
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#resume" className={style.navLink}>
            Resume
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className={style.navLink}>
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
