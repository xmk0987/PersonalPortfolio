import { useEffect, useRef, useState } from "react";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Education from "./sections/Education/Education";
import About from "./sections/About/About";

import "./App.css";
import styles from "./AppShell.module.css";

function App() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const lastScrollTopRef = useRef(0);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    /**
     * Hides the header when scrolling down and shows it when scrolling up.
     */
    function handleScroll(): void {
      if (!element) return;

      const currentScrollTop = element.scrollTop;
      const previousScrollTop = lastScrollTopRef.current;

      if (currentScrollTop <= 24) {
        setIsHeaderHidden(false);
        lastScrollTopRef.current = currentScrollTop;
        return;
      }

      setIsHeaderHidden(currentScrollTop > previousScrollTop);
      lastScrollTopRef.current = currentScrollTop;
    }

    element.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles["appShell"]}>
      <Header isHidden={isHeaderHidden} />

      <div ref={scrollRef} className={styles["appContent"]}>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <About />
      </div>
    </div>
  );
}

export default App;
