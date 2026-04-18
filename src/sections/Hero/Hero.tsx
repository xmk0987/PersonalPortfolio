import PageSection from "../../layout/PageSection";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import HeroActions from "./HeroActions/HeroActions";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <PageSection id="hero" fullHeight className={styles.heroSection}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Full Stack Developer</p>

          <h1 className={styles.title}>Hey, I&apos;m Onni!</h1>

          <p className={styles.description}>
            I build modern web applications with clean structure, thoughtful UX,
            and strong attention to detail, with a focus on solving real-world
            problems and building products that hopefully make a meaningful
            difference to people.
          </p>

          <div className={styles.bottom}>
            <HeroActions />
            <SocialLinks />
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Hero;
