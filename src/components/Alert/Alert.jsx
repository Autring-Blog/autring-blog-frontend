import styles from "./Alert.module.css";

function Alert({ title }) {
  return (
    <div className={styles.alert}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
}

export default Alert;
