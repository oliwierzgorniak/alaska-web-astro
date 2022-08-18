import nav from "../../data/nav.json";

import { motion } from "framer-motion";

const slideIn = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: "0",
  },
  exit: {
    x: "-100%",
  },
};

type Props = {
  setMenuOpen: (menuOpen: boolean) => void;
  lang: string;
};

const Menu = ({ setMenuOpen, lang }: Props) => (
  <div
    onClick={() => setMenuOpen(false)}
    className="fixed top-0 left-0 h-full w-full bg-[#00000022]"
  >
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
      }}
      transition={{ type: "tween" }}
      variants={slideIn}
      inital="hidden"
      animate="visible"
      exit="exit"
      className="fixed top-0 left-0 translate-x-[-100%] h-full bg-[white] px-16 drop-shadow-xl z-20 flex flex-col  justify-between
    "
    >
      <ul className="mt-12">
        <li className="mb-10">
          <a
            onClick={() => setMenuOpen(false)}
            className="text-3xl underline transition ease-in-out hover:text-accent block hover:translate-x-1 hover:duration-300"
            href={nav[lang].menuLinks[0]}
          >
            {nav[lang].menuList[0]}
          </a>
        </li>
        <li className="mb-10">
          <a
            onClick={() => setMenuOpen(false)}
            className="text-3xl underline transition ease-in-out hover:text-accent block hover:translate-x-1 hover:duration-300"
            href={nav[lang].menuLinks[1]}
          >
            {nav[lang].menuList[1]}
          </a>
        </li>
        <li className="mb-10">
          <a
            onClick={() => setMenuOpen(false)}
            className="text-3xl underline transition ease-in-out hover:text-accent block hover:translate-x-1 hover:duration-300"
            href={nav[lang].menuLinks[2]}
          >
            {nav[lang].menuList[2]}
          </a>
        </li>
      </ul>
      <div className="flex items-center mb-4">
        <a
          className="p-[9px]"
          href="https://twitter.com/oliwierzgorniak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[34px] h-[34px]"
            src="/images/Github-black.png"
            alt={nav[lang].menuImgs.github}
          />
        </a>
        <a
          className="p-[9px]"
          href="https://github.com/oliwierzgorniak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[34px]"
            src="/images/Twitter-black.svg"
            alt={nav[lang].menuImgs.twitter}
          />
        </a>
      </div>
    </motion.div>
  </div>
);

export default Menu;
