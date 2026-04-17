import type { PropsWithChildren } from "react";
import styles from "./PageSection.module.css";

interface PageSectionProps extends PropsWithChildren {
  id: string;
  fullHeight?: boolean;
  className?: string;
}

const PageSection: React.FC<PageSectionProps> = ({
  id,
  fullHeight = false,
  className = "",
  children,
}) => {
  const sectionClassName = [
    styles.pageSection,
    fullHeight ? styles.fullHeight : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
};

export default PageSection;
