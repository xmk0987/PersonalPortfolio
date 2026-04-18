import Chip from "../../../components/Chip/Chip";
import styles from "./SkillCard.module.css";
import type { SkillCategory, SkillLevel } from "../skills-utils";

interface SkillCardProps {
  title: SkillCategory["title"];
  skills: SkillCategory["skills"];
}

const CHIP_VARIANT_BY_LEVEL: Record<
  SkillLevel,
  "default" | "success" | "warning"
> = {
  active: "success",
  occasional: "warning",
  familiar: "default",
};

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.skills}>
        {skills.map((skill) => (
          <Chip
            key={`${title}-${skill.name}`}
            label={skill.name}
            variant={CHIP_VARIANT_BY_LEVEL[skill.level]}
          />
        ))}
      </div>
    </article>
  );
};

export default SkillCard;
