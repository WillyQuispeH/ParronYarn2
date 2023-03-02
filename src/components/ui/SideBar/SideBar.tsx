import React from 'react'
import styles from './SideBar.module.scss'

const SideBar = ({children, left}:any) => {
  return (
    <div className={styles.SideBar} style={{left}}>
    {children}
    </div>
  )
}

export default SideBar