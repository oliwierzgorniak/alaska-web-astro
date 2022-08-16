import styles from "../../styles/menu.module.scss";

type Props = { menuOpen: boolean; setMenuOpen: (menuOpen: boolean) => void };

const MenuButton = ({ menuOpen, setMenuOpen }: Props) => (
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="flex flex-col gap-[6px] h-min p-[5px] mr-[-5px] mt-[-5px]"
  >
    <div className="w-[40px] h-[6px] bg-primary"></div>
    <div className="w-[40px] h-[6px] bg-primary"></div>
    <div className="w-[40px] h-[6px] bg-primary"></div>
  </button>
);

export default MenuButton;
