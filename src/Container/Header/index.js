import { useState } from "react";
import style from "./style.module.css";
import Navbar from "../Navbar";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <header className={style.header}>
      <h1>
        <HashLink smooth to="#" className={style.logo}>
          Shivangam Soni
        </HashLink>
      </h1>
      <Navbar isActive={navActive} close={() => setNavActive(!navActive)} />
      <span onClick={() => setNavActive(!navActive)} className={`${style.hamburger} ${navActive ? "fab fa-mixer" : "fa fa-bars"}`}></span>
    </header>
  );
};

export default Header;
