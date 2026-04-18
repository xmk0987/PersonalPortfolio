import Chip from "../Chip/Chip";
import styles from "./ResumeEntryCard.module.css";

export interface ResumeEntryCardProps {
  date: string;
  title: string;
  organization: string;
  description?: string;
  tags?: readonly string[];
  isSecondary?: boolean;
  layout?: "split" | "stacked";
}

const ResumeEntryCard: React.FC<ResumeEntryCardProps> = ({
  date,
  title,
  organization,
  description,
  tags = [],
  isSecondary = false,
  layout = "split",
}) => {
  const containerClassName = [
    styles.container,
    isSecondary ? styles.containerSecondary : "",
    layout === "stacked" ? styles.containerStacked : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={containerClassName}>
      <div className={styles.meta}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.organization}>{organization}</span>
      </div>

      <div className={styles.content}>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}

        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Chip label={tag} key={`${tag}-chip`} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ResumeEntryCard;
