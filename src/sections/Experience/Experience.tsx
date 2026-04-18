import { useMemo, useState } from "react";
import PageSection from "../../layout/PageSection";
import ResumeEntryCard, {
  type ResumeEntryCardProps,
} from "../../components/ResumeEntryCard/ResumeEntryCard";
import styles from "./Experience.module.css";

const JOBS: readonly ResumeEntryCardProps[] = [
  {
    date: "1.5.2025 - Present",
    title: "Full Stack Developer",
    organization: "Bitwise Oy - Tampere",
    description:
      "Maintaining and improving customer applications through bug fixes, feature development, client discussions, and technical consulting.",
    tags: ["Angular", "TypeScript", "Scala", "Java", "PostgreSQL"],
  },
  {
    date: "12.2024 - Present",
    title: "Full Stack Developer",
    organization: "Opitco Oy - Tampere",
    description:
      "Designed, developed, and maintained the Todo Groups web application. The platform is built to help teachers with classroom management while supporting student focus, engagement, and motivation during lessons.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "SEO", "AWS S3"],
  },
  {
    date: "9.2024 - 10.2024 (Project)",
    title: "IT Support",
    organization: "Barona / Accountor - Tampere",
    description:
      "Participated in supporting Accountor's new login system and helped customers through the authentication process.",
    tags: ["IT Support", "Customer Support", "Problem Solving"],
  },
  {
    date: "10.2023 - 12.2023",
    title: "IT Support",
    organization: "Teleperformance / Google - Athens",
    description:
      "Contributed to Google's customer service operations by resolving customer inquiries and issues related to Google products.",
    tags: ["IT Support", "Customer Support", "Problem Solving"],
  },
  {
    date: "5.2024 - 8.2024 (Project)",
    title: "Sales Specialist",
    organization: "Soldem / Telia - Tampere",
    description:
      "Worked in a target-driven sales role that strengthened my communication, customer-facing confidence, and ability to understand needs and discuss solutions clearly.",
    tags: ["Sales", "Communication", "Customer Service"],
    isSecondary: true,
  },
] as const;

const Experience: React.FC = () => {
  const [showAllJobs, setShowAllJobs] = useState(false);

  const visibleJobs = useMemo(() => {
    if (showAllJobs) {
      return JOBS;
    }

    return JOBS.filter((job) => !job.isSecondary);
  }, [showAllJobs]);

  const hasSecondaryJobs = JOBS.some((job) => job.isSecondary);

  function handleLoadMore(): void {
    setShowAllJobs(true);
  }

  return (
    <PageSection id="experience">
      <div className={styles.content}>
        <h2 className={styles.title}>Experience</h2>

        <div className={styles.experienceContainer}>
          {visibleJobs.map((job) => (
            <ResumeEntryCard
              key={`${job.organization}-${job.title}-${job.date}`}
              date={job.date}
              title={job.title}
              organization={job.organization}
              description={job.description}
              tags={job.tags}
              isSecondary={job.isSecondary}
            />
          ))}
        </div>

        {!showAllJobs && hasSecondaryJobs && (
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.loadMoreButton}
              onClick={handleLoadMore}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </PageSection>
  );
};

export default Experience;
