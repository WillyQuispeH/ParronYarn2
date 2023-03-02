import React from "react";
import styles from "./ComboBox.module.scss"
interface IntComboBox{
    width:string,
    label:string
}
const ComboBox = ({width,label}:IntComboBox) => {
  return (
    <div className={styles.ComboBox} style={{width}} >
      <label >{label}</label>
      <select >
        <option value="0">:: Seleccione ::</option>
        <option value="1">sentence 2</option>
        <option value="2">sentence 3</option>
      </select>
      <div >
        <span className="material-symbols-outlined"> expand_more </span>
      </div>
    </div>
  );
};

export default ComboBox;
