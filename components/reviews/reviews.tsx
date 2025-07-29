import styles from "./reviews.module.css";
import Review, { ReviewType } from "../review/review";
import ButtonWithIcon from "../buttons/ButtonWithIcon/ButtonWithIcon";
import arrowDownImg from "../../assets/images/arrow-down.svg";
import arrowUpImg from "@/assets/images/arrow-up.svg";
import { useState } from "react";
import { useEffect } from "react";

type RewiesProps = {
  reviews: ReviewType[];
};

const Reviews = ({ reviews }: RewiesProps) => {
  const reviewCount = reviews.length;
  const [isExpanded, setExpanded] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const shortenedReviews = isExpanded
    ? reviews
    : width < 834
    ? reviews.slice(0, 2)
    : reviews.slice(0, 3);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.reviews_con}>
      <h2>Atsiliepimai ({reviewCount})</h2>
      <div className={styles.reviews_wrapper}>
        {shortenedReviews.map((r) => {
          return (
            <Review
              key={r.id}
              id={r.id}
              name={r.name}
              subtitle={r.subtitle}
              text={r.text}
              rating={r.rating}
              imgUrl={r.imgUrl}
            />
          );
        })}
      </div>
      {reviews.length > 3 && (
        <div className={styles.expand_button_wrapper}>
          {isExpanded ? (
            <ButtonWithIcon
              title="Rodyti mažiau"
              imgSrc={arrowUpImg.src}
              onClick={() => setExpanded((prevState) => !prevState)}
            />
          ) : (
            <ButtonWithIcon
              title="Rodyti daugiau"
              imgSrc={arrowDownImg.src}
              onClick={() => setExpanded((prevState) => !prevState)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Reviews;
