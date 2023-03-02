import React from "react";
import styles from "./OpcionMenu.module.scss";
interface IntOpcionMenu {
  icon: string,
  width:string,
  height:string

}
const OpcionMenu = ({ icon , width, height }: IntOpcionMenu) => {
  return (
    <div className={styles.OpcionMenu} style={{width, height}}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
  );
};

export default OpcionMenu;
