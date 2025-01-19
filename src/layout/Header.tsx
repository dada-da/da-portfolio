"use client";

import { motion } from "framer-motion";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

import { useActiveSection } from "@/components/helpers/ActiveSectionProvider";
import { links } from "@/lib/data";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  const router = useRouter();
  const segment = useSelectedLayoutSegment();

  const isHomepage = !segment;

  const linkActiveClass = (name: string, link: string): string => {
    if (isHomepage) {
      return name === activeSection ? "text-black" : "";
    } else return link.includes(segment) ? "text-black bg-primary" : "";
  };

  const handleClickLink = (name: string, link: string, isAnchor: boolean) => {
    if (isAnchor) {
      if (name === "/#home" && !isHomepage) {
        router.push("/");
      }
      setActiveSection(name);
      setTimeOfLastClick(Date.now());
    } else {
      router.push(link);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="bg-overlay fixed w-full top-0 z-20 backdrop-blur-sm"
    >
      <nav className="text-sm">
        <ul className=" flex py-5 justify-center items-center gap-2 lg:gap-5">
          {links.map(({ name, href, isAnchor }) => (
            <li key={name}>
              <Link
                href={href}
                className={`block relative px-4 py-2 transition-colors hover:link-hover ${linkActiveClass(name, href)}`}
                onClick={() => handleClickLink(name, href, isAnchor)}
              >
                {name}
                {name === activeSection && isHomepage && (
                  <motion.span
                    className="bg-primary absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
