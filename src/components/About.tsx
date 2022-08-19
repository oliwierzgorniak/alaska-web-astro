import about from "../data/about.json";

type Props = {
  lang: string;
};

const About = ({ lang }: Props) => (
  <section
    className="flex justify-center gap-7 px-6 pt-16 pb-12 bg-background md:pb-10 lg:pb-8"
    id={about[lang].sectionId}
  >
    <img
      className="self-end h-[10vw] min-h-[3.5rem] max-w-[6rem]"
      src="/images/forrest.svg"
      alt="las"
    />
    <div className="max-w-[30rem] leading-6 pb-12 md:pb-16 lg:pb-20">
      <h2 className="mb-2">{about[lang].title}</h2>
      <p>{about[lang].text}</p>
    </div>
  </section>
);

export default About;
