
import styles from "./Generic.module.scss";

const Row = ({ children, gap }: any) => {
  return (
    <div className={styles.Row} style={{ gap }}>
      {children}
    </div>
  );
};
const Column = ({ children, gap }: any) => {
  return (
    <div className={styles.Column} style={{ gap }}>
      { children}
    </div>
  );
};
const JusConSpaBet = ({ children }: any) => {
  return (
    <div className={styles.JusConSpaBet} >
      { children}
    </div>
  );
};

export { Row, Column,JusConSpaBet };
