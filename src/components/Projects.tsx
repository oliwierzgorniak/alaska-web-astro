import projects from "../data/projects.json";
import Project from "./projects/Project";

type Props = {
  lang: string;
};

const Projects = ({ lang }: Props) => {
  return (
    <section
      className="flex flex-col items-center px-6 py-16"
      id={projects[lang].sectionId}
    >
      <div className="flex gap-2 m-auto mb-7">
        <img src="/images/wave.svg" alt="fala" />
        <h2 className="mb-2">{projects[lang].title}</h2>
        <img src="/images/wave.svg" alt="fala" />
      </div>

      {projects[lang].projects.map(
        ({ name, description, link, github, image }) => {
          return (
            <Project
              name={name}
              description={description}
              link={link}
              github={github}
              image={image}
            />
          );
        }
      )}
    </section>
  );
};

export default Projects;
