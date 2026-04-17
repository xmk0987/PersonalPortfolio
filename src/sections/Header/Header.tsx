import { useEffect, useState } from "react";
import MobileDropdownNavbar from "./MobileDropdownNavbar/MobileDropdownNavbar";
import styles from "./Header.module.css";
import { NAV_ITEMS } from "./header.utils";

interface HeaderProps {
  isHidden: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHidden }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu(): void {
    setIsMobileMenuOpen((prev) => !prev);
  }

  function closeMobileMenu(): void {
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    function handleResize(): void {
      if (window.innerWidth >= 1040) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles["site-header"]} ${
          isHidden ? styles["site-header--hidden"] : ""
        }`}
      >
        <div className={styles["site-header__inner"]}>
          <div className={styles["site-header__logo"]}>OV</div>

          <nav className={styles["site-header__nav"]}>
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className={styles["site-header__menu-button"]}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
          >
            <span
              className={`${styles["site-header__menu-line"]} ${
                isMobileMenuOpen
                  ? styles["site-header__menu-line--top-open"]
                  : ""
              }`}
            />
            <span
              className={`${styles["site-header__menu-line"]} ${
                isMobileMenuOpen
                  ? styles["site-header__menu-line--middle-open"]
                  : ""
              }`}
            />
            <span
              className={`${styles["site-header__menu-line"]} ${
                isMobileMenuOpen
                  ? styles["site-header__menu-line--bottom-open"]
                  : ""
              }`}
            />
          </button>
        </div>
      </header>

      <MobileDropdownNavbar
        isOpen={isMobileMenuOpen && !isHidden}
        onNavigate={closeMobileMenu}
      />
    </>
  );
};

export default Header;
