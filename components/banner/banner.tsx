import styles from "./banner.module.css";
import AppleButton from "@/assets/images/Download app apple button.png";
import GoogleButton from "@/assets/images/Download app google button.png";
import HappyNanny from "@/assets/images/banner-img.png";
import { nunito } from "@/helpers/fonts";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.gradient}></div>
      <img
        className={styles.banner_img}
        src={HappyNanny.src}
        alt="Happy Nanny"
      />
      <div className={styles.banner_heading}>
        <h2 className={nunito.className}>Norite išsikviesti šia auklę?</h2>
        <h4>Atsisųskite Nannow programelę!</h4>
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

export default Banner;
