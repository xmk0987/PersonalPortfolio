export type SkillLevel = "active" | "occasional" | "familiar";

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  skills: readonly SkillItem[];
}

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "active" },
      { name: "Angular", level: "active" },
      { name: "TypeScript", level: "active" },
      { name: "JavaScript", level: "active" },
      { name: "CSS", level: "active" },
      { name: "SCSS", level: "active" },
      { name: "HTML", level: "active" },
      { name: "Redux", level: "active" },
      { name: "Zustand", level: "active" },
      { name: "NGRX", level: "active" },
      { name: "Accessibility", level: "occasional" },
      { name: "Next.js", level: "occasional" },
      { name: "Vue.js", level: "familiar" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "active" },
      { name: "Express", level: "active" },
      { name: "Websockets", level: "active" },
      { name: "Java", level: "occasional" },
      { name: "Scala", level: "occasional" },
      { name: "Python", level: "familiar" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: "active" },
      { name: "SQL", level: "active" },
      { name: "MySQL", level: "occasional" },
      { name: "MongoDB", level: "familiar" },
      { name: "Redis", level: "familiar" },
    ],
  },
  {
    title: "Tools & Platform",
    skills: [
      { name: "Git", level: "active" },
      { name: "AWS S3", level: "active" },
      { name: "AWS SES", level: "active" },
      { name: "REST APIs", level: "active" },
      { name: "Jira", level: "active" },
      { name: "Docker", level: "active" },
      { name: "SEO", level: "occasional" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Cypress", level: "active" },
      { name: "Jest", level: "active" },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", level: "active" },
      { name: "Responsive Design", level: "active" },
    ],
  },
] as const;
