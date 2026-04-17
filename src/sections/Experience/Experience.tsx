import PageSection from "../../layout/PageSection";
import styles from "./Experience.module.css";

const Experience: React.FC = () => {
  return (
    <PageSection id="experience" className={styles.section}>
      <div className={styles.content}>
        <h2>Experience</h2>
        <p>Add your experience content here.</p>
      </div>
    </PageSection>
  );
};

export default Experience;
