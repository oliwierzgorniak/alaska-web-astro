import { motion, AnimatePresence } from "framer-motion";

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
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
};

const Menu = ({ menuOpen, setMenuOpen }: Props) => (
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
            className="text-3xl underline transition ease-in-out hover:text-accent block hover:translate-x-1 hover:duration-300"
            href="#projekty"
          >
            #o mnie
          </a>
        </li>
        <li className="mb-10">
          <a
            className="text-3xl underline transition ease-in-out hover:text-accent block hover:translate-x-1 hover:duration-300"
            href="#projekty"
          >
            #projekty
          </a>
        </li>
        <li className="mb-10">
          <a
            className="text-3xl underline transition ease-in-out hover:text-accent block hover:translate-x-1 hover:duration-300"
            href="#projekty"
          >
            #kontakt
          </a>
        </li>
      </ul>
      <div className="flex items-center mb-4">
        <a
          className="p-[9px]"
          href="https://twitter.com/oliwierzgorniak"
          target="_blank"
        >
          <img
            className="w-[34px] h-[34px]"
            src="/images/Github-black.png"
            alt="logo Githuba"
          />
        </a>
        <a
          className="p-[9px]"
          href="https://github.com/oliwierzgorniak"
          target="_blank"
        >
          <img
            className="w-[34px]"
            src="/images/Twitter-black.svg"
            alt="logo Twittera"
          />
        </a>
      </div>
    </motion.div>
  </div>
);

export default Menu;
