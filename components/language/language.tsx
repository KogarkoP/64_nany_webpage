import styles from "./language.module.css";
import { languages } from "@/data/languages";

type LanguageProps = {
  id: string;
};

const Language = ({ id }: LanguageProps) => {
  const language = languages.find((l) => l.id === id);

  return (
    <div className={styles.language_wrapper}>
      <img
        className={styles.icon}
        src={language?.icon.src}
        alt={language?.title}
      />
      <div className={styles.con}>
        <h3 className={styles.title}>{language?.title}</h3>
        {language?.native ? <h4 className={styles.subtitle}>Gimtoji</h4> : ""}
      </div>
    </div>
  );
};

export default Language;
