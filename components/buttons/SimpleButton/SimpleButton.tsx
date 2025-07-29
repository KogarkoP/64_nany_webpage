import styles from "./SimpleButton.module.css";

type SimpleButtonProps = {
  title: string;
};

const SimpleButton = ({ title }: SimpleButtonProps) => {
  return <button className={styles.button}>{title}</button>;
};

export default SimpleButton;
