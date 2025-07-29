import styles from "./raiting.module.css";
import startLowImg from "../../assets/images/star-low.svg";
import startHighImg from "../../assets/images/star-mid.svg";
import startMidImg from "../../assets/images/star-high.svg";

type RaitingProps = {
  raiting: number;
  reviewCount: number;
};

const Raiting = ({ raiting, reviewCount }: RaitingProps) => {
  const title = "Geriausia auklė";

  return (
    <div className={styles.raiting_con}>
      <div className={styles.heading}>
        <h2>Reitingas</h2>
      </div>

      <div className={styles.raiting_data}>
        <h2 className={styles.raiting}>{raiting}</h2>
        <div className={styles.title}>
          <img src={startLowImg.src} />
          <img src={startMidImg.src} />
          <img src={startHighImg.src} />
          <h4 className={styles.title_text}>{title}</h4>
          <img src={startHighImg.src} />
          <img src={startMidImg.src} />
          <img src={startLowImg.src} />
        </div>
        <div>
          <span className={styles.description}>Remiantis</span>{" "}
          <span className={styles.review_count}>
            {reviewCount} atsiliepimais
          </span>
        </div>
      </div>
    </div>
  );
};

export default Raiting;
