import styles from "./Avatar.module.sass";
const Avatar = ({ host }) => {
  const { picture, name } = host;
  const parsedName = () => {
    const splitName = name.split(" ");
    return (
      <>
        <span>{splitName[0]}</span>
        <br />
        <span>{splitName[1]}</span>
      </>
    );
  };
  return (
    <div className={styles.avatar}>
      <p className={styles.avatar__name}>{parsedName()}</p>
      <img className={styles.avatar__picture} src={picture} alt="host avatar" />
    </div>
  );
};

export default Avatar;
