import PageSection from "../../layout/PageSection";
import styles from "./Skills.module.css";

const Skills: React.FC = () => {
  return (
    <PageSection id="skills" className={styles.section}>
      <div className={styles.content}>
        <h2>Skills</h2>
        <p>Add your skills content here.</p>
      </div>
    </PageSection>
  );
};

export default Skills;
