import PageSection from "../../layout/PageSection";
import styles from "./Education.module.css";

const Education: React.FC = () => {
  return (
    <PageSection id="education" className={styles.section}>
      <div className={styles.content}>
        <h2>Education</h2>
        <p>Add your education content here.</p>
      </div>
    </PageSection>
  );
};

export default Education;
