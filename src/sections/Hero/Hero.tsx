import PageSection from "../../layout/PageSection";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <PageSection id="hero" fullHeight className={styles.heroSection}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Full Stack Developer</p>
        <h1 className={styles.title}>Hi, I&apos;m Your Name</h1>
        <p className={styles.description}>
          I build modern web applications with clean structure, thoughtful UX,
          and strong attention to detail.
        </p>
      </div>
    </PageSection>
  );
};

export default Hero;
