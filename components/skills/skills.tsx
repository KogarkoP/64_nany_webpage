import styles from "./skills.module.css";
import Skill from "../skill/skill";

type SkillsProps = {
  skills: string[];
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div>
      <h2 className={styles.title}>Kitos savybės</h2>
      <div className={styles.skills_wrapper}>
        {skills.map((s) => {
          return <Skill key={s} id={s} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
