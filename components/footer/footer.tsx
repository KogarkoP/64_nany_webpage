import styles from "./footer.module.css";
import Logo from "@/assets/images/logo2.svg";
import Link from "next/link";
import AppleButton from "@/assets/images/Download app apple button.png";
import GoogleButton from "@/assets/images/Download app google button.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <div className={styles.logo_con}>
          <img src={Logo.src} alt="Logo" />
        </div>
        <p>
          &copy; 2025 Nannow.app. <br />
          Visos teisės saugomos. <br />
          <br />
          Pagaminta su ❤️ Lietuvoje
        </p>
      </div>
      <div className={styles.pages_wrapper}>
        <div className={styles.about}>
          <h3>Nannow</h3>
          <ul>
            <li>
              <Link href="#">Apie Nannow</Link>
            </li>
            <li>
              <Link href="#">Kam skirta</Link>
            </li>
            <li>
              <Link href="#">Kaip veikia</Link>
            </li>
            <li>
              <Link href="#">Savybės</Link>
            </li>
            <li>
              <Link href="#">Komanda</Link>
            </li>
            <li>
              <Link href="#">DUK</Link>
            </li>
          </ul>
        </div>
        <div className={styles.social_media}>
          <h3>Tinklai</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.information}>
          <h3>Informacija</h3>
          <ul>
            <li>
              <Link href="#">Naudojimo sąlygos</Link>
            </li>
            <li>
              <Link href="#">Privatumo politika</Link>
            </li>
          </ul>
        </div>
        <div className={styles.help}>
          <h3>Pagalba</h3>
          <ul>
            <li>
              <Link href="#">Parašyk mums</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.download_app}>
        <h3>Atsisiųskite programelę</h3>
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

export default Footer;
