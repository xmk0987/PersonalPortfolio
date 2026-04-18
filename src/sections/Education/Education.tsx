import ResumeEntryCard, {
  type ResumeEntryCardProps,
} from "../../components/ResumeEntryCard/ResumeEntryCard";
import PageSection from "../../layout/PageSection";
import styles from "./Education.module.css";

const EDUCATION_ENTRIES: readonly ResumeEntryCardProps[] = [
  {
    date: "1.2024 - 6.2025",
    title: "Master of Science (M.S.) in Information Technology",
    organization: "Tampere University",
    description: "Majored in software development.",
  },
  {
    date: "9.2020 — 12.2023",
    title: "Bachelor of Science (B.S.) in Information Technology",
    organization: "Tampere University",
    description:
      "Majored in software development and minored in data technologies.",
  },
  {
    date: "8.2016 — 6.2019",
    title: "Matriculation Examination",
    organization: "Kotka Lyseo Lukio",
    description:
      "Completed upper secondary education and the Finnish matriculation examination.",
    isSecondary: true,
  },
] as const;

const Education: React.FC = () => {
  return (
    <PageSection id="education" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Education</h2>

        <div className={styles.educationContainer}>
          {EDUCATION_ENTRIES.map((school) => (
            <ResumeEntryCard
              key={`${school.organization}-${school.title}-${school.date}`}
              date={school.date}
              title={school.title}
              organization={school.organization}
              description={school.description}
              tags={school.tags}
              isSecondary={school.isSecondary}
              layout="stacked"
            />
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default Education;
