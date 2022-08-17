import projects from "../data/projects";
import Project from "./projects/Project";

type Props = {
  lang: string;
};

const Projects = (props: Props) => {
  return (
    <section
      className="flex flex-col items-center px-6 py-16"
      id={projects[props.lang].sectionId}
    >
      <div className="flex gap-2 m-auto mb-7">
        <img src="/images/wave.svg" alt="fala" />
        <h2 className="mb-2">{projects[props.lang].title}</h2>
        <img src="/images/wave.svg" alt="fala" />
      </div>

      {projects[props.lang].projs.map(
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
