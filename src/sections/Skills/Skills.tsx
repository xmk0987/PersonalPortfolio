import { useMemo, useState } from "react";
import PageSection from "../../layout/PageSection";
import Chip from "../../components/Chip/Chip";
import SkillCard from "./SkillCard/SkillCard";
import { SKILL_CATEGORIES } from "./skills-utils";
import styles from "./Skills.module.css";

const Skills: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryOptions = useMemo(
    () => ["All", ...SKILL_CATEGORIES.map((category) => category.title)],
    [],
  );

  const filteredCategories = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    return SKILL_CATEGORIES.filter((category) => {
      const matchesCategoryFilter =
        selectedCategory === "All" || category.title === selectedCategory;

      if (!matchesCategoryFilter) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      const matchesTitle = category.title
        .toLowerCase()
        .includes(normalizedSearch);
      const matchesSkill = category.skills.some((skill) =>
        skill.name.toLowerCase().includes(normalizedSearch),
      );

      return matchesTitle || matchesSkill;
    });
  }, [searchValue, selectedCategory]);

  return (
    <PageSection id="skills">
      <div className={styles.content}>
        <h2>Skills</h2>

        <p className={styles.description}>
          A categorized overview of the technologies, tools, and development
          areas I work with most across frontend, backend, databases, testing,
          and platform-related work, along with others I use occasionally or
          have explored more lightly.
        </p>

        <div className={styles.controls}>
          <input
            type="text"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search skills or categories"
            className={styles.searchInput}
          />

          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className={styles.categorySelect}
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <Chip label="Actively used" variant="success" />
          </div>

          <div className={styles.legendItem}>
            <Chip label="Used occasionally" variant="warning" />
          </div>

          <div className={styles.legendItem}>
            <Chip label="Familiar with" variant="default" />
          </div>
        </div>

        <div className={styles.grid}>
          {filteredCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <p className={styles.emptyState}>No matching skills found.</p>
        )}
      </div>
    </PageSection>
  );
};

export default Skills;
