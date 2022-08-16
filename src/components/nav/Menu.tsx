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
    className="fixed top-0 left-0 h-full w-full"
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
      className="fixed top-0 left-0 translate-x-[-100%] h-full bg-[white] p-10 drop-shadow-xl
    "
    >
      <ul>
        <li className="mb-4">
          <a className="text-2xl" href="#projekty">
            projekty
          </a>
        </li>
        <li className="mb-4">
          <a className="text-2xl mb-2" href="#projekty">
            projekty
          </a>
        </li>
        <li className="mb-4">
          <a className="text-2xl mb-2" href="#projekty">
            projekty
          </a>
        </li>
        <li className="mb-4">
          <a className="text-2xl mb-2" href="#projekty">
            projekty
          </a>
        </li>
      </ul>
    </motion.div>
  </div>
);

export default Menu;
