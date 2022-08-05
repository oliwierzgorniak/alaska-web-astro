import Language from "./nav/Language";
import Menu from "./nav/Menu";

const Nav = () => (
  <nav className="m-6 flex justify-between">
    <img className="w-22" src="/images/logo-dark.svg" alt="logo Alaska Web" />
    <div className="flex gap-9">
      <Language />
      <Menu />
    </div>
  </nav>
);

export default Nav;
