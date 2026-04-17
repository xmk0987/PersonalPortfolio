import PageSection from "../../layout/PageSection";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <PageSection id="about" className={styles.section}>
      <div className={styles.content}>
        <h2>About</h2>
        <p>Add your about content here.</p>
      </div>
    </PageSection>
  );
};

export default About;
