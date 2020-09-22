import React from "react";
import styles from "./Dialogs.module.css"

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog}>
          Dima
        </div>
        <div className={styles.dialog + ' ' + styles.active}>
          Leha
        </div>
        <div className={styles.dialog}>
          Ilona
        </div>
        <div className={styles.dialog}>
          Dimych
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