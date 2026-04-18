import styles from "./HeroActions.module.css";

const HeroActions: React.FC = () => {
  return (
    <div className={styles.actions}>
      <a href="#projects" className="primaryButton">
        Show Projects
      </a>

      <a href="#about" className="secondaryButton">
        About Me
      </a>
    </div>
  );
};

export default HeroActions;
