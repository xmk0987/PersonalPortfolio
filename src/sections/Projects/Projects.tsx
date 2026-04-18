import { useMemo, useState } from "react";
import PageSection from "../../layout/PageSection";
import styles from "./Projects.module.css";
import Project, { type ProjectVariant } from "./Project/Project";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

interface ProjectItem {
  id: string;
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  projectUrl: string;
  skills: readonly string[];
  variant?: ProjectVariant;
}

const PROJECTS: readonly ProjectItem[] = [
  {
    id: "todo-groups",
    title: "Todo Groups",
    description: [
      "Todo Groups is a learning platform designed to help teachers create, manage, and share assignments more effectively with their students.",
      "Originally started as a side project, it has grown into a real product with hundreds of registered teachers and thousands of students.",
      "I have built and maintained the platform end-to-end, covering everything from application architecture and development to infrastructure and ongoing product improvements.",
    ],
    imageSrc: "/images/todo-groups.png",
    imageAlt: "Todo Groups preview",
    projectUrl: "https://todogroups.com",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS S3",
      "Socket.io",
    ],
    variant: "todogroups",
  },
  {
    id: "music-theory-visualizer",
    title: "Music Theory Visualizer",
    description: [
      "Music Theory Visualizer is a tool built to help guitarists better understand the fretboard through scales, chord shapes, and visual pattern learning.",
      "I created it from a personal need to make music theory easier to explore in a practical and interactive way.",
      "The project reflects my interest in building useful tools around real problems, even when they come from my own hobbies and day-to-day frustrations.",
    ],
    imageSrc: "/images/music-theory.png",
    imageAlt: "Music Theory Visualizer",
    projectUrl: "https://www.musictheoryvisualizer.com/",
    skills: ["React", "TypeScript"],
  },
] as const;

const Projects: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const currentProject = PROJECTS[currentProjectIndex];

  const nextProjectLabel = useMemo(() => {
    const nextIndex = (currentProjectIndex + 1) % PROJECTS.length;
    return `Show ${PROJECTS[nextIndex].title}`;
  }, [currentProjectIndex]);

  function handleNextProjectClick(): void {
    setCurrentProjectIndex((prev) => (prev + 1) % PROJECTS.length);
  }

  return (
    <PageSection id="projects">
      <div className={styles.sectionInner}>
        <div className={styles.header}>
          <h2>Projects</h2>
          <SocialLinks visibleLabels={["GitHub"]} />
        </div>

        <Project
          title={currentProject.title}
          description={currentProject.description}
          imageSrc={currentProject.imageSrc}
          imageAlt={currentProject.imageAlt}
          projectUrl={currentProject.projectUrl}
          skills={currentProject.skills}
          nextProjectLabel={nextProjectLabel}
          onNextProjectClick={handleNextProjectClick}
          variant={currentProject.variant}
        />
      </div>
    </PageSection>
  );
};

export default Projects;
