import { GitHubIcon, LinkedInIcon } from "../../assets/icons";
import styles from "./SocialLinks.module.css";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    Icon: LinkedInIcon,
  },
] as const;

const SocialLinks: React.FC = () => {
  return (
    <div className={styles.socialLinks} aria-label="Social media links">
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={styles.socialLink}
        >
          <Icon size={20} className={styles.socialLinkIcon} />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
