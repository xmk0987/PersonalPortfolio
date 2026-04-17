import styles from "./Header.module.css";

interface HeaderProps {
  isHidden: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHidden }) => {
  return (
    <header
      className={`${styles["site-header"]} ${
        isHidden ? styles["site-header--hidden"] : ""
      }`}
    >
      <div className={styles["site-header__inner"]}>
        <div className={styles["site-header__logo"]}>Your Name</div>

        <nav className={styles["site-header__nav"]}>
          <a href="#hero">Home</a>
          <a href="#project-one">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
