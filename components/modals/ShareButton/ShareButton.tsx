import styles from "./ShareButton.module.css";
import CloseButton from "@/assets/images/close button.svg";
import Facebook from "@/assets/images/Facebook (outlined).svg";
import Instagram from "@/assets/images/Instagram.svg";
import Email from "@/assets/images/Email.svg";
import { nunito } from "@/helpers/fonts";
import { useState } from "react";

type ShareButtonModalProps = {
  onClick: () => void;
};

const ShareButtonModal = ({ onClick }: ShareButtonModalProps) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div onClick={onClick} className={styles.main}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close_button_con}>
          <img onClick={onClick} src={CloseButton.src} alt="Close Button" />
        </div>
        <h2 className={nunito.className}>
          Pasidalink šia auklės nuoroda su kitais
        </h2>
        <div className={styles.content_con}>
          <div className={styles.copy_url_con}>
            <h5>Auklės profilio nuoroda</h5>
            <div className={styles.copy_url}>
              <input type="text" readOnly value={currentUrl} />
              <button onClick={handleCopy}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
          <div className={styles.or_con}>Arba</div>
          <div className={styles.social_media}>
            <button>
              <img src={Facebook.src} alt="Facebook" />
              Facebook
            </button>
            <button>
              <img src={Instagram.src} alt="Instagram" />
              Instagram
            </button>
            <button>
              <img src={Email.src} alt="Email" />
              El.paštu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareButtonModal;
