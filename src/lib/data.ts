export interface IExperiencesData {
  title: string;
  description: string | string[];
  duration: string;
  logo: string;
  link?: string;
}

export interface ICommonMenu {
  name: string;
  href: string;
}

export interface IHeaderMenu extends ICommonMenu {
  isAnchor: boolean;
}

export const links: IHeaderMenu[] = [
  {
    name: "Home",
    href: "/",
    isAnchor: true,
  },
  {
    name: "About",
    href: "/#about",
    isAnchor: true,
  },
  {
    name: "Experience",
    href: "/#experience",
    isAnchor: true,
  },
  {
    name: "Projects",
    href: "/projects",
    isAnchor: false,
  },
];

export const PROJECTS: ICommonMenu[] = [
  {
    name: "Vietlot",
    href: "/projects/vietlot",
  },
];

export const skillIcons = [
  "html",
  "css",
  "javascript",
  "typescript",
  "nextjs",
  "react",
  "vue",
  "java",
  "spring",
  "jira",
];

export const experiencesData: IExperiencesData[] = [
  {
    title: "Fullstack developer at ETC",
    description: [
      "Develop a new Evisa web-app for foreigner to registering visa, cadres to approve, visa issuance and workflow management. I have the chance to serve as a scrum master and front end team lead in addition to my development responsibilities.",
      "Develop the Viet Nam Traffic Police Department for handling violations in the field of traffic, new vehicle registration and dispatch management.",
    ],
    duration: "2021 - Presents",
    logo: "/etc-logo.png",
  },
  {
    title: "Fresher Developer at VMO Group",
    description: "Maintain and develop new feature for Amperfii web app.",
    duration: "2020 - 2021",
    link: "https://www.amperfii.com/",
    logo: "/vmo-logo.png",
  },
  {
    title: "Internship at FPT Software",
    description:
      "Web developer for Japanese customer. Learning HTML, CSS, Javascript, Typescript under mentorship. Build new web-app to support local Pizza Restaurant.",
    duration: "2020",
    logo: "/fsoft-logo.png",
  },
];
