import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/1">Dima</NavLink>
        </div>
        <div className={styles.dialog + ' ' + styles.active}>
          <NavLink to="/dialogs/2">Leha</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/3">Ilona</NavLink>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>How is yuor</div>
        <div className={styles.message}>Yo</div>
      </div>
    </div>
  )
}

export default Dialogs;