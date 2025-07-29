import styles from "./header.module.css";
import Logo from "@/assets/images/logo.svg";
import Link from "next/link";
import SimpleButton from "../buttons/SimpleButton/SimpleButton";
import LanguageButton from "../buttons/LanguageButton/LanguageButton";
import HamburgerMenu from "@/assets/images/Hamburger Menu.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo_con}>
        <img className={styles.logo} src={Logo.src} alt="Logo" />
      </div>
      <ul className={styles.header_nav}>
        <li>
          <Link href="#">Apie Nannow</Link>
        </li>
        <li>
          <Link href="#">Ieškau Auklės</Link>
        </li>
        <li>
          <Link href="#">Noriu būti auklė</Link>
        </li>
        <li>
          <Link href="#">Kaip veikia</Link>
        </li>
        <li>
          <Link href="#">Savybės</Link>
        </li>
        <li>
          <Link href="#">Įkurėjai</Link>
        </li>
        <li>
          <Link href="#">DUK</Link>
        </li>
      </ul>
      <div className={styles.button_wrapper}>
        <SimpleButton title="Registruokis" />
        <LanguageButton
          onSelectedLanguage={(language) =>
            console.log(`Selected language ${language}`)
          }
        />
      </div>
      <div className={styles.mobile_menu}>
        <img src={HamburgerMenu.src} alt="Menu" />
      </div>
    </div>
  );
};

export default Header;
