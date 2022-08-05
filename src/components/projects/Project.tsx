type Props = {
  name: string;
  description: string;
  link?: string;
  github?: string;
  image: string;
};

const Project = ({ name, description, link, github, image }: Props) => (
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={link}>
      <img src="/images/external-link.svg" alt="ikonka zewnętrznego linku" />
    </a>
    <a href={github}>
      <img src="/images/Github-black.png" alt="ikonka Githuba" />
    </a>
    <img src={image} alt="zdjęcie projektu" />
  </div>
);

export default Project;
