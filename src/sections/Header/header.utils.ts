import {
  AboutIcon,
  EducationIcon,
  ExperienceIcon,
  HomeIcon,
  SkillsIcon,
} from "../../assets/icons";

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "#hero",
    icon: HomeIcon,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: HomeIcon,
  },
  {
    label: "Experience",
    href: "#experience",
    icon: ExperienceIcon,
  },
  {
    label: "Education",
    href: "#education",
    icon: EducationIcon,
  },
  {
    label: "Skills",
    href: "#skills",
    icon: SkillsIcon,
  },
  {
    label: "About",
    href: "#about",
    icon: AboutIcon,
  },
] as const;
