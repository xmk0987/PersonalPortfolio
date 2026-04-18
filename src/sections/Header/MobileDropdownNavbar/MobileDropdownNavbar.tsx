import { NAV_ITEMS } from "../header.utils";
import styles from "./MobileDropdown.module.css";

interface MobileDropdownNavbarProps {
  isOpen: boolean;
  onNavigate: () => void;
}

const MobileDropdownNavbar: React.FC<MobileDropdownNavbarProps> = ({
  isOpen,
  onNavigate,
}) => {
  return (
    <nav
      id="mobile-navigation"
      className={`${styles["mobile-dropdown-navbar"]} ${
        isOpen ? styles["mobile-dropdown-navbar--open"] : ""
      }`}
      aria-hidden={!isOpen}
    >
      {NAV_ITEMS.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={styles["mobile-dropdown-navbar__link"]}
          >
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default MobileDropdownNavbar;
