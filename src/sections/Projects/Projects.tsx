import PageSection from "../../layout/PageSection";
import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  return (
    <PageSection id={"projects"} fullHeight className={styles.projectSection}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.label}>Projects</p>
        </div>

        <div className={styles.preview}>Project preview</div>
      </div>
    </PageSection>
  );
};

export default Projects;
