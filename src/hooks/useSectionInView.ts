import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

import { useActiveSection } from "@/components/helpers/ActiveSectionProvider";
import type { SectionName } from "@/lib/types";

export const useSectionInView = (sectionName: SectionName) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      if (isInView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
