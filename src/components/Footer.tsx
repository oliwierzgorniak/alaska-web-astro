import footer from "../data/footer.json";

type Props = {
  lang: string;
};

const Footer = ({ lang }: Props) => (
  <footer className="bg-primary flex justify-between px-6 py-8">
    <img
      className="w-28"
      src="/images/logo-light.svg"
      alt={footer[lang].logoAlt}
    />
    <div className="flex items-center">
      <a
        className="p-[11px] xl:p-[15px]"
        href="https://github.com/oliwierzgorniak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-[34px] h-[34px] xl:w-[52px] xl:h-[52px]"
          src="/images/Github-white.png"
          alt={footer[lang].github}
        />
      </a>
      <a
        className="p-[11px] xl:-[15px]"
        href="https://twitter.com/oliwierzgorniak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-[34px] xl:w-[52px]"
          src="/images/Twitter-white.svg"
          alt={footer[lang].twitter}
        />
      </a>
    </div>
  </footer>
);

export default Footer;
