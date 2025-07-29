import styles from "./ButtonWithIcon.module.css";

type ButtonWithIconProps = {
  title: string;
  imgSrc: string;
  onClick: () => void;
};

const ButtonWithIcon = ({ title, imgSrc, onClick }: ButtonWithIconProps) => {
  return (
    <button onClick={onClick} className={styles.main}>
      <img src={imgSrc} />
      <span>{title}</span>
    </button>
  );
};

export default ButtonWithIcon;
