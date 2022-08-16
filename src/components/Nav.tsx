import { useState } from "react";

import Language from "./nav/Language";
import MenuButton from "./nav/MenuButton";
import Menu from "./nav/Menu";
import { AnimatePresence } from "framer-motion";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="m-6 mb-36 flex justify-between">
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {menuOpen && <Menu menuOpen={menuOpen} />}
      </AnimatePresence>
      <img className="w-22" src="/images/logo-dark.svg" alt="logo Alaska Web" />
      <div className="flex gap-9">
        <Language />
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  );
};

export default Nav;
