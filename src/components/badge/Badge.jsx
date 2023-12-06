import styles from "./Badge.module.sass";
const Badge = ({ text }) => {
  return (
    <div className={styles.badge}>
      <span>{text}</span>
    </div>
  );
};

export default Badge;
