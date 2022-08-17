import about from "../data/about.json";

type Props = {
  lang: string;
};

const About = ({ lang }: Props) => (
  <section
    className="flex gap-7 px-6 py-16 bg-background"
    id={about[lang].sectionId}
  >
    <img className="self-end" src="/images/forrest.svg" alt="las" />
    <div>
      <h2>{about[lang].title}</h2>
      <p>
        Strony internetowe to moja pasja. Zajmuję się nimi prawie codziennie. Z
        moją pomocą możesz mieć własną stronę w internecie bez technicznych
        umiejętności. Potrafię projektować, kodować i hostować strony
        internetowe.
      </p>
    </div>
  </section>
);

export default About;
