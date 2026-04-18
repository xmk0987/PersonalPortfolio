import { useMemo, useState } from "react";
import PageSection from "../../layout/PageSection";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import styles from "./Experience.module.css";

interface JobItem {
  date: string;
  jobTitle: string;
  company: string;
  description: string;
  skills: readonly string[];
  isHidden?: boolean;
}

const JOBS: readonly JobItem[] = [
  {
    date: "1.5.2025 – Present",
    jobTitle: "Full Stack Developer",
    company: "Bitwise Oy - Tampere",
    description:
      "Maintaining and improving customer applications through bug fixes, feature development, client discussions, and technical consulting.",
    skills: [
      "Angular",
      "TypeScript",
      "Scala",
      "Java",
      "PostgreSQL",
    ],
  },
  {
    date: "12.2024 – Present",
    jobTitle: "Full Stack Developer",
    company: "Opitco Oy - Tampere",
    description:
      "Designed, developed, and maintained the Todo Groups web application. The platform is built to help teachers with classroom management while supporting student focus, engagement, and motivation during lessons.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "SEO",
      "AWS S3",
    ],
  },
  {
    date: "9.2024 – 10.2024 (Project)",
    jobTitle: "IT Support",
    company: "Barona / Accountor - Tampere",
    description:
      "Participated in supporting Accountor's new login system and helped customers through the authentication process.",
    skills: ["IT Support", "Customer Support", "Problem Solving"],
  },
  {
    date: "10.2023 – 12.2023",
    jobTitle: "IT Support",
    company: "Teleperformance / Google - Athens",
    description:
      "Contributed to Google's customer service operations by resolving customer inquiries and issues related to Google products.",
    skills: ["IT Support", "Customer Support", "Problem Solving"],
  },
  {
    date: "5.2024 – 8.2024 (Project)",
    jobTitle: "Sales Specialist",
    company: "Soldem / Telia - Tampere",
    description:
      "Worked in a target-driven sales role that strengthened my communication, customer-facing confidence, and ability to understand needs and discuss solutions clearly.",
    skills: ["Sales", "Communication", "Customer Service"],
    isHidden: true,
  },
] as const;

const Experience: React.FC = () => {
  const [showAllJobs, setShowAllJobs] = useState(false);

  const visibleJobs = useMemo(() => {
    if (showAllJobs) {
      return JOBS;
    }

    return JOBS.filter((job) => !job.isHidden);
  }, [showAllJobs]);

  const hasHiddenJobs = JOBS.some((job) => job.isHidden);

  function handleLoadMore(): void {
    setShowAllJobs(true);
  }

  return (
    <PageSection id="experience">
      <div className={styles.content}>
        <h2 className={styles.title}>Experience</h2>

        <div className={styles.experienceContainer}>
          {visibleJobs.map((job) => (
            <ExperienceCard
              key={`${job.company}-${job.jobTitle}-${job.date}`}
              date={job.date}
              jobTitle={job.jobTitle}
              company={job.company}
              description={job.description}
              skills={job.skills}
              isHidden={job.isHidden}
            />
          ))}
        </div>

        {!showAllJobs && hasHiddenJobs && (
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
