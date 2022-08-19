import { useRef } from "react";

type Props = {
  lang: string;
};

const Language = ({ lang }: Props) => {
  let selectRef = useRef(null);

  return (
    <div className="flex border border-black p-2 gap-2 items-center h-min">
      <img
        className="min-w-[22px] w-[1.5vw] "
        src="/images/languages.svg"
        alt="ikonka języków"
      />
      <select
        value={lang}
        ref={selectRef}
        onChange={() => (location.pathname = "/" + selectRef.current.value)}
        className="bg-[transparent]"
      >
        <option value="pl">polski</option>
        <option value="en">english</option>
      </select>
    </div>
  );
};

export default Language;
