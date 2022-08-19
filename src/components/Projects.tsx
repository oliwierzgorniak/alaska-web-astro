// Copyright (c) 2022 by Piccalilli (https://codepen.io/piccalilli/pen/zXXxXa)
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

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

      <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] flex-wrap justify-between mx-6">
        {projects[lang].projects.map(
          ({ name, description, link, github, image }) => {
            return (
              <div key={link}>
                <Project
                  name={name}
                  description={description}
                  link={link}
                  github={github}
                  image={image}
                />
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
