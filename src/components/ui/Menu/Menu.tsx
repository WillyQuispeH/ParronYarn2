import React from 'react'
import styles from "./Menu.module.scss"

const Menu = ({children}:any) => {
  return (
    <div className={styles.Menu} >
        {children}
    </div>
  )
}

export default Menu