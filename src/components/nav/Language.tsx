import { useRef } from "react";

type Props = {
  lang: string;
};

const Language = ({ lang }: Props) => {
  let selectRef = useRef(null);

  return (
    <div className="flex border border-black p-2 gap-2 items-center h-min">
      <img src="/images/languages.svg" alt="ikonka języków" />
      <select
        ref={selectRef}
        onChange={() => (location.pathname = "/" + selectRef.current.value)}
        className="bg-[transparent]"
      >
        <option selected={lang === "pl"} value="pl">
          polski
        </option>
        <option selected={lang === "en"} value="en">
          english
        </option>
      </select>
    </div>
  );
};

export default Language;
