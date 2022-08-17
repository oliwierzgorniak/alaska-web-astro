import { motion } from "framer-motion";

const bar1 = {
  closed: {
    rotate: "0",
  },
  open: {
    rotate: "45deg",
    y: "15px",
  },
};

const bar2 = {
  closed: {},
  open: {
    opacity: 0,
  },
};

const bar3 = {
  closed: {
    rotate: "0",
  },
  open: {
    rotate: "-45deg",
    y: "-9px",
  },
};

type Props = { menuOpen: boolean; setMenuOpen: (menuOpen: boolean) => void };

const MenuButton = ({ menuOpen, setMenuOpen }: Props) => (
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="flex flex-col gap-[6px] h-min p-[5px] mr-[-5px] mt-[-5px]"
  >
    <motion.div
      transition={{ type: "tween" }}
      animate={menuOpen ? "open" : "closed"}
      variants={bar1}
      className="w-[40px] h-[6px] bg-primary"
    ></motion.div>
    <motion.div
      transition={{ duration: 0.15 }}
      animate={menuOpen ? "open" : "closed"}
      variants={bar2}
      className="w-[40px] h-[6px] bg-primary"
    ></motion.div>
    <motion.div
      transition={{ type: "tween" }}
      animate={menuOpen ? "open" : "closed"}
      variants={bar3}
      className="w-[40px] h-[6px] bg-primary"
    ></motion.div>
  </button>
);

export default MenuButton;
