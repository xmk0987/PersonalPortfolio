import styles from "./CurrentlyWorkingOn.module.css";

interface CurrentlyWorkingOnProps {
  title: string;
  description: string;
  projectHref?: string;
  tag?: string;
}

const CurrentlyWorkingOn: React.FC<CurrentlyWorkingOnProps> = ({
  title,
  description,
  projectHref = "#projects",
  tag = "Currently working on",
}) => {
  return (
    <a href={projectHref} className={styles.card}>
      <div className={styles.header}>
        <span className={styles.tag}>{tag}</span>
        <span className={styles.link}>View project</span>
      </div>

      <div className={styles.preview} aria-hidden="true">
        <div className={styles.previewTopBar}>
          <span className={styles.previewDot} />
          <span className={styles.previewDot} />
          <span className={styles.previewDot} />
        </div>

        <div className={styles.previewBody}>
          <div className={styles.previewSidebar}>
            <div className={styles.previewSidebarItem} />
            <div className={styles.previewSidebarItem} />
            <div className={styles.previewSidebarItem} />
          </div>

          <div className={styles.previewContent}>
            <div className={styles.previewTitle} />
            <div className={styles.previewLine} />
            <div className={styles.previewLineShort} />

            <div className={styles.previewGrid}>
              <div className={styles.previewBlock} />
              <div className={styles.previewBlock} />
              <div className={styles.previewBlock} />
              <div className={styles.previewBlock} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};

export default CurrentlyWorkingOn;
