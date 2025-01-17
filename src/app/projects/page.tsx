import { PROJECTS } from "@/lib/data";

const Projects = () => {
  return (
    <div className="container">
      {PROJECTS.map(({ name, href }) => (
        <a href={href}>{name}</a>
      ))}
    </div>
  );
};

export default Projects;
