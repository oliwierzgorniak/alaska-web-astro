type Props = {
  name: string;
  description: string;
  link?: string;
  github?: string;
  image: string;
};

const Project = ({ name, description, link, github, image }: Props) => (
  <div key={link} className="border-2 px-10 py-10">
    <h3 className="mb-3 font-semibold">{name}</h3>
    <p className="mb-5">{description}</p>
    <div className="flex gap-1 mb-8">
      <a className="p-2" href={link}>
        <img
          className="h-10"
          src="/images/external-link.svg"
          alt="ikonka zewnętrznego linku"
        />
      </a>
      <a className="p-2" href={github}>
        <img
          className="h-10"
          src="/images/Github-black.png"
          alt="ikonka Githuba"
        />
      </a>
    </div>
    <img src={image} alt="zdjęcie projektu" />
  </div>
);

export default Project;
