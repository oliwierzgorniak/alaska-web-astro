import { useState } from "react";

import Language from "./nav/Language";
import MenuButton from "./nav/MenuButton";
import Menu from "./nav/Menu";
import { AnimatePresence } from "framer-motion";

type Props = {
  lang: string;
};

const Nav = ({ lang }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" m-6 mb-36 flex justify-between items-center">
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {menuOpen && <Menu lang={lang} setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
      <img
        className="min-w-[70px] w-[18vw] max-w-[140px]"
        src="/images/logo-dark.svg"
        alt="logo Alaska Web"
      />
      <div className="flex gap-2 items-center md:gap-8">
        <Language lang={lang} />
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  );
};

export default Nav;
