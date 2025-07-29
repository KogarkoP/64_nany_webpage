import { useState } from "react";
import styles from "./LanguageButton.module.css";

type LanguageButtonProps = {
  onSelectedLanguage: (language: string) => void;
};

const LanguageButton = ({ onSelectedLanguage }: LanguageButtonProps) => {
  const [language, setLanguage] = useState<string>("LT");

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    onSelectedLanguage(newLanguage);
  };

  return (
    <select
      className={styles.language_button}
      value={language}
      onChange={selectHandler}
    >
      <option value="LT">LT</option>
      <option value="EN">EN</option>
    </select>
  );
};

export default LanguageButton;
