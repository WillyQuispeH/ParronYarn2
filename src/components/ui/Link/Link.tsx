import styles from "./Link.module.scss"
interface IntLink{
    valor:string
}
const Link = ({valor}:IntLink) => {
  return (
    <div className={styles.Link}>
        <a href="#">{valor}</a>
    </div>
  )
}

export default Link