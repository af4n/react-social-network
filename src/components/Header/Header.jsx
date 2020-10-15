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
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={"/login"}>Log in</NavLink>}
      </div>

    </header>
  );
};

export default Header;
