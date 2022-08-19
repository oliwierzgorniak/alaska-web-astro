import intro from "../data/introduction.json";

type Props = {
  lang: string;
};

const Introduction = ({ lang }: Props) => (
  <main>
    <header className="max-w-[1000px] px-6 mx-auto grid grid-cols-[1fr_auto] grid-rows-[repeat(2,auto)] xl:max-w-[1250px] 2xl:max-w-[1450px]">
      <h1 className="mr-[-1.5em] leading-7 text-[1.16rem] xs:text-[1.58rem] xs:leading-9 md:text-[2.05rem] md:leading-[2.8rem] lg:text-[2.5rem] lg:leading-[2.9rem]">
        <span className="text-[1rem] inline-block xs:text-[1.3rem] xs:mb-1 md:text-[1.4rem] md:mb-0 lg:text-[1.6rem]">
          {intro[lang].text[0]}
        </span>
        <br />
        {intro[lang].text[1]}
      </h1>
      <img
        className="w-[40vw] max-w-[300px] col-start-2 row-start-1 row-end-3 self-end block xl:max-w-[350px] 2xl:max-w-[400px]"
        src="/images/me.png"
        alt={intro[lang].myImgAlt}
      />
      <a
        href={intro[lang].contactLink}
        className="self-start justify-self-center m-4 xl:m-8"
      >
        <img
          className="w-[30vw] max-w-[220px] xl:max-w-[250px] 2xl:max-w-[300px]"
          src={intro[lang].img}
          alt={intro[lang].imgAlt}
        />
      </a>
    </header>
  </main>
);

export default Introduction;
