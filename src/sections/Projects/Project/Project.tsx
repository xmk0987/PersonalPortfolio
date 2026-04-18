import styles from "./Project.module.css";

export type ProjectVariant = "todogroups";

interface ProjectProps {
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  projectUrl: string;
  skills: readonly string[];
  nextProjectLabel: string;
  onNextProjectClick: () => void;
  variant?: ProjectVariant;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  projectUrl,
  skills,
  nextProjectLabel,
  onNextProjectClick,
  variant = "default",
}) => {
  const variantClassName =
    variant === "todogroups" ? styles.variantTodogroups : styles.variantDefault;

  return (
    <article className={`${styles.projectShowcase} ${variantClassName}`}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.title}>{title}</h3>

          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.projectLink}
          >
            Visit Project
          </a>
        </div>

        <div className={styles.descriptions}>
          {description.map((desc, index) => (
            <p className={styles.description} key={`${title}-desc-${index}`}>
              {desc}
            </p>
          ))}
        </div>

        <div className={styles.skills}>
          {skills.map((skill) => (
            <span key={skill} className={styles.skillChip}>
              {skill}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.nextProjectButton}
            onClick={onNextProjectClick}
          >
            {nextProjectLabel}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Project;
