import styles from "./ReviewModal.module.css";
import CloseButton from "@/assets/images/close button.svg";
import startImg from "@/assets/images/review-star.svg";
import { nunito } from "@/helpers/fonts";

type ReviewModalProps = {
  name: string;
  subtitle: string;
  rating: number;
  text: string;
  imgUrl: string;
  onClick: () => void;
};

const ReviewModal = ({
  name,
  subtitle,
  rating,
  text,
  imgUrl,
  onClick,
}: ReviewModalProps) => {
  return (
    <div className={styles.main} onClick={onClick}>
      <div onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
        <div onClick={onClick} className={styles.close_button_con}>
          <img src={CloseButton.src} alt="Close Button" />
        </div>
        <div className={styles.reviewer}>
          <img className={styles.user_avatars} src={imgUrl} alt="" />
          <div>
            <h5 className={nunito.className}>{name}</h5>
            <h6>{subtitle}</h6>
          </div>
        </div>

        <div className={styles.review}>
          <div className={styles.rating}>
            <h4 className={nunito.className}>Įvertinimas</h4>
            <div className={styles.stars}>
              {Array.from({ length: rating }).map((_, i) => (
                <img
                  className={styles.star}
                  key={i}
                  src={startImg.src}
                  alt="star"
                />
              ))}
            </div>
          </div>

          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
