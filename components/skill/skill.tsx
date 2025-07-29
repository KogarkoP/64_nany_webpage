import styles from "./skill.module.css";
import { skills } from "@/data/skills";

type SkillProps = {
  id: string;
};

const Skill = ({ id }: SkillProps) => {
  const skill = skills.find((s) => s.id === id);
  return (
    <div className={styles.skill_wrapper}>
      <img className={styles.icon} src={skill?.icon.src} alt={skill?.title} />
      <h3 className={styles.title}>{skill?.title}</h3>
    </div>
  );
};

export default Skill;
