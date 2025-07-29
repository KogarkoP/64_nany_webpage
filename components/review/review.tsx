import styles from "./review.module.css";
import startImg from "../../assets/images/review-star.svg";
import ReviewModal from "@/components/modals/ReviewModal/ReviewModal";
import { useState } from "react";

export type ReviewType = {
  id: number;
  name: string;
  subtitle: string;
  rating: number;
  text: string;
  imgUrl: string;
};

const Review = ({ id, name, subtitle, rating, text, imgUrl }: ReviewType) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const MAX_CONTRACTED_REVIEW_LENGTH = 200;

  const handleModalDisplay = () => {
    setOpen((prevState) => !prevState);
  };

  const review = isExpanded
    ? text
    : text.length > MAX_CONTRACTED_REVIEW_LENGTH
    ? text.slice(0, 260).trimEnd() + "..."
    : text;
  return (
    <>
      <div onClick={handleModalDisplay} className={styles.main}>
        <div className={styles.reviewer}>
          <img className={styles.user_avatars} src={imgUrl} alt="" />
          <div>
            <h5>{name}</h5>
            <h6>{subtitle}</h6>
          </div>
        </div>
        <div className={styles.rating}>
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
        <div onClick={(e) => e.stopPropagation()} className={styles.review}>
          <p>{review}</p>
          {text.length > MAX_CONTRACTED_REVIEW_LENGTH && (
            <button
              onClick={() => setExpanded((prevState) => !prevState)}
              className={styles.expand_bttn}
            >
              {isExpanded ? "Rodyti mažiau" : "Rodyti daugiau"}
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <ReviewModal
          name={name}
          subtitle={subtitle}
          rating={rating}
          text={text}
          imgUrl={imgUrl}
          onClick={handleModalDisplay}
        />
      )}
    </>
  );
};

export default Review;
