import footer from "../data/footer.json";

type Props = {
  lang: string;
};

const Footer = ({ lang }: Props) => (
  <footer className="bg-primary flex justify-between px-6 py-8 mt-[2rem]">
    <img
      className="w-28"
      src="/images/logo-light.svg"
      alt={footer[lang].logoAlt}
    />
    <div className="flex items-center">
      <a
        className="p-[9px]"
        href="https://twitter.com/oliwierzgorniak"
        target="_blank"
      >
        <img
          className="w-[34px] h-[34px]"
          src="/images/Github-white.png"
          alt={footer[lang].github}
        />
      </a>
      <a
        className="p-[9px]"
        href="https://github.com/oliwierzgorniak"
        target="_blank"
      >
        <img
          className="w-[34px]"
          src="/images/Twitter-white.svg"
          alt={footer[lang].twitter}
        />
      </a>
    </div>
  </footer>
);

export default Footer;
