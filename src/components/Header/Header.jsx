import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg"
        alt="logo"
      />
    </header>
  );
};

export default Header;
