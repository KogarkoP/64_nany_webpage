import styles from "./profile.module.css";
import { nunito } from "@/helpers/fonts";
import ButtonWithIcon from "../buttons/ButtonWithIcon/ButtonWithIcon";
import { useState } from "react";
import hearthIcon from "../../assets/images/hearth.svg";
import shareIcon from "../../assets/images/share.svg";
import SaveButtonModal from "../modals/SaveButton/SaveButton";
import ShareButtonModal from "../modals/ShareButton/ShareButton";

type ProfileProps = {
  imgUrl: string;
  name: string;
  intro: string;
  pageUrl: string;
};

const Profile = ({ imgUrl, name, intro, pageUrl }: ProfileProps) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [isOpenSaveButton, setOpenSaveButton] = useState<boolean>(false);
  const [isOpenShareButton, setOpenShareButton] = useState<boolean>(false);

  const maxLength = 600;

  const expandDisplay = intro.length > maxLength;

  const introText = isExpanded
    ? intro
    : intro.length > maxLength
    ? intro.slice(0, maxLength).trimEnd() + "..."
    : intro;

  const SaveButtonHandle = () => {
    setOpenSaveButton((prevState) => !prevState);
  };

  const ShareButtonHandle = () => {
    setOpenShareButton((prevState) => !prevState);
  };

  return (
    <div className={styles.main}>
      <div className={styles.avatar_wrapper}>
        <img src={imgUrl} alt={name} />
      </div>
      <div className={styles.profile_data}>
        <h5 className={styles.subtitle}>AUKLĖS INFORMACIJA</h5>
        <div className={styles.profile_heading}>
          <h2 className={`${styles.title} ${nunito.className}`}>{name}</h2>
          <div className={styles.buttons_wrapper}>
            <ButtonWithIcon
              onClick={SaveButtonHandle}
              title="Išsaugoti"
              imgSrc={hearthIcon.src}
            />
            <ButtonWithIcon
              onClick={ShareButtonHandle}
              title="Dalintis"
              imgSrc={shareIcon.src}
            />
          </div>
        </div>
        <p className={styles.intro}>
          <span>{introText}</span>
          {expandDisplay && (
            <button
              className={styles.expand_button}
              onClick={() => setExpanded((prevState) => !prevState)}
            >
              {isExpanded ? <>Suskleisti </> : <>Daugiau</>}
            </button>
          )}
        </p>
      </div>
      {isOpenSaveButton && <SaveButtonModal onClick={SaveButtonHandle} />}
      {isOpenShareButton && <ShareButtonModal onClick={ShareButtonHandle} />}
    </div>
  );
};

export default Profile;
