type Props = {
  name: string;
  description: string;
  link?: string;
  github?: string;
  image: string;
};

const Project = ({ name, description, link, github, image }: Props) => (
  <div key={link} className="w-full max-w-[25rem] border-2 px-10 py-10">
    <h3 className="mb-3 font-semibold">{name}</h3>
    <p className="mb-5">{description}</p>
    <div className="flex gap-1 mb-8">
      <a className="p-2" href={link} rel="noopener noreferrer">
        <img
          className="h-9"
          src="/images/external-link.svg"
          alt="ikonka zewnętrznego linku"
        />
      </a>
      <a className="p-2" href={github} rel="noopener noreferrer">
        <img
          className="h-9"
          src="/images/Github-black.png"
          alt="ikonka Githuba"
        />
      </a>
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <picture>
        <source
          srcset={image + "-670.avif"}
          media="(min-width: 1700px)"
          type="image/avif"
        />
        <source
          srcset={image + "-670.png"}
          media="(min-width: 1700px)"
          type="image/png"
        />
        <source
          srcset={image + "-420.avif"}
          media="(min-width: 500px)"
          type="image/avif"
        />
        <source
          srcset={image + "-420.png"}
          media="(min-width: 500px)"
          type="image/png"
        />
        <source srcset={image + "-230.avif"} type="image/avif" />
        <img src={image + "-230.png"} alt="zdjęcie projektu" />
      </picture>
    </a>
  </div>
);

export default Project;
