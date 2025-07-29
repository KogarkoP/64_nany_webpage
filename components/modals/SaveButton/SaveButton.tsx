import styles from "./SaveButton.module.css";
import CloseButton from "@/assets/images/close button.svg";
import AppleButton from "@/assets/images/Download app apple button.png";
import GoogleButton from "@/assets/images/Download app google button.png";
import { nunito } from "@/helpers/fonts";

type SaveButtonModalProps = {
  onClick: () => void;
};

const SaveButtonModal = ({ onClick }: SaveButtonModalProps) => {
  return (
    <div onClick={onClick} className={styles.main}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close_button_con}>
          <img onClick={onClick} src={CloseButton.src} alt="Close Button" />
        </div>
        <h2 className={nunito.className}>
          Norite išsaugoti ateičiai šia auklė?
        </h2>
        <h4>Atsisiųskite Nannow programelę!!!</h4>
        <div className={styles.download_app_con}>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.apple}>
              <img src={AppleButton.src} alt="Apple App Store" />
            </div>
          </a>
          <a
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.google}>
              <img src={GoogleButton.src} alt="Google Play" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaveButtonModal;
