import intro from "../data/introduction.json";

type Props = {
  lang: string;
};

const Introduction = ({ lang }: Props) => (
  <header className="mx-6 grid grid-cols-[1fr_auto] grid-rows-[repeat(2,auto)]">
    <h1 className="mr-[-1.5em] leading-9">
      <span className="text-xl inline-block mb-1">{intro[lang].text[0]}</span>
      <br />
      {intro[lang].text[1]}
    </h1>
    <img
      className="w-48 col-start-2 row-start-1 row-end-3 self-end block"
      src="/images/me.png"
      alt={intro[lang].myImgAlt}
    />
    <a
      href={intro[lang].contactLink}
      className="self-start justify-self-center"
    >
      <img className="h-40" src={intro[lang].img} alt={intro[lang].imgAlt} />
    </a>
  </header>
);

export default Introduction;
