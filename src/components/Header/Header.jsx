import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://everlife.ai/images/muscari/header-image-muscari.png"
        alt="logo"
      />
      <span>Social network</span> 
    </header>
  );
};

export default Header;
