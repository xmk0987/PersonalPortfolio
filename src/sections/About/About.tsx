import SocialLinks from "../../components/SocialLinks/SocialLinks";
import PageSection from "../../layout/PageSection";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <PageSection id="about" className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>About</h2>
          <SocialLinks visibleLabels={["LinkedIn"]} />
        </div>

        <blockquote className={styles.quote}>
          <p>
            “So don't see how many decisions you can get out of, see how many
            you can get into. That's where the adventure is.”
          </p>
          <cite className={styles.quoteAuthor}>Jim Rohn</cite>
        </blockquote>

        <div className={styles.text}>
          <p>
            I'm a full stack developer who enjoys solving problems, learning, 
            and building useful products. I'm especially
            motivated by projects that require attention to detail, big-picture
            thinking, and creative problem-solving.
          </p>

          <p>
            I graduated with a Master's degree in Software Engineering from
            Tampere University in 2025.
          </p>

          <p>
            Alongside my full-time work as a software developer, I'm also currently
            building Todo Groups, as a startup project.
          </p>

          <p>
            I enjoy learning new things and adapting to new challenges, both in
            my work and in my personal life. That mindset shapes how I approach
            growth, problem-solving, and continuous improvement.
          </p>
        </div>
      </div>
    </PageSection>
  );
};

export default About;
