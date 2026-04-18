import { GitHubIcon, LinkedInIcon } from "../../assets/icons";
import styles from "./SocialLinks.module.css";

// TODO UPDATE TO REAL LINKS
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

type SocialLinkLabel = (typeof SOCIAL_LINKS)[number]["label"];

interface SocialLinksProps {
  visibleLabels?: readonly SocialLinkLabel[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ visibleLabels }) => {
  const filteredLinks = visibleLabels
    ? SOCIAL_LINKS.filter((link) => visibleLabels.includes(link.label))
    : SOCIAL_LINKS;

  return (
    <div className={styles.socialLinks} aria-label="Social media links">
      {filteredLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={styles.socialLink}
        >
          <Icon size={30} className={styles.socialLinkIcon} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
