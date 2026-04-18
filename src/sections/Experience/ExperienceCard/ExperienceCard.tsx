import Chip from "../../../components/Chip/Chip";
import styles from "./ExperienceCard.module.css";

interface ExperienceCardProps {
  date: string;
  jobTitle: string;
  company: string;
  description: string;
  skills?: readonly string[];
  isHidden?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  date,
  jobTitle,
  company,
  description,
  skills = [],
  isHidden = false,
}) => {
  return (
    <article
      className={`${styles.container} ${isHidden ? styles.containerHidden : ""}`}
    >
      <div className={styles.meta}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.jobTitle}>{jobTitle}</h3>
        <span className={styles.company}>{company}</span>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>{description}</p>

        {skills.length > 0 && (
          <div className={styles.skills}>
            {skills.map((skill) => (
              <Chip label={skill} key={`${skill}-chip`} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ExperienceCard;
