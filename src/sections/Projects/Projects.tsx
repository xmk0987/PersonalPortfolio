import PageSection from "../../layout/PageSection";
import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  return (
    <PageSection id={"projects"} fullHeight className={styles.projectSection}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <h2>Projects</h2>
          <p>Project preview</p>
        </div>

        <div className={styles.preview}>Project preview</div>
      </div>
    </PageSection>
  );
};

export default Projects;
