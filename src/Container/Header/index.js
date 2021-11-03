import style from "./style.module.css";
import Navbar from "../Navbar";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className={style.header}>
      <h1>
        <HashLink smooth to="#" className={style.logo}>
          Shivangam Soni
        </HashLink>
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
