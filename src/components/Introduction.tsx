import intro from "../data/introduction.json";

type Props = {
  lang: string;
};

const Introduction = ({ lang }: Props) => (
  <main>
    <header className="mx-6 grid grid-cols-[1fr_auto] grid-rows-[repeat(2,auto)]">
      <h1 className="mr-[-1.5em] leading-7 text-[1.16rem]">
        <span className="text-[1rem] inline-block">{intro[lang].text[0]}</span>
        <br />
        {intro[lang].text[1]}
      </h1>
      <img
        className="w-[40vw] col-start-2 row-start-1 row-end-3 self-end block"
        src="/images/me.png"
        alt={intro[lang].myImgAlt}
      />
      <a
        href={intro[lang].contactLink}
        className="self-start justify-self-center m-4"
      >
        <img
          className="w-[30vw]"
          src={intro[lang].img}
          alt={intro[lang].imgAlt}
        />
      </a>
    </header>
  </main>
);

export default Introduction;
