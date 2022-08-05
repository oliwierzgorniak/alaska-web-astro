import projects from "../data/projects";
import Project from "./projects/Project";

const Projects = () => (
  <section>
    <div>
      <img src="/wave.svg" alt="fala" />
      <h2>Projekty</h2>
      <img src="/wave.svg" alt="fala" />
    </div>

    {projects.map(({ name, description, link, github, image }) => (
      <Project
        name={name}
        description={description}
        link={link}
        github={github}
        image={image}
      />
    ))}
  </section>
);

export default Projects;
