import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div>
        <img
          src="https://everlife.ai/images/muscari/header-image-muscari.png"
          alt="logo"
        />
        <span>Social network</span>
      </div>
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>

    </header>
  );
};

export default Header;
