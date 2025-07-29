import styles from "./languages.module.css";
import Language from "../language/language";

type LanguagesProps = {
  languages: string[];
};

const Languages = ({ languages }: LanguagesProps) => {
  return (
    <div>
      <h2 className={styles.title}>Kalbos</h2>
      <div className={styles.languages_wrapper}>
        {languages.map((l) => (
          <Language key={l} id={l} />
        ))}
      </div>
    </div>
  );
};

export default Languages;
