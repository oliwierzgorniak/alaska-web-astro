const Language = () => (
  <div className="flex border border-black p-2 gap-2 items-center h-min">
    <img src="/images/languages.svg" alt="ikonka języków" />
    <select className="bg-transparent" id="language-select">
      <option value="polish">polski</option>
      <option value="english">english</option>
    </select>
  </div>
);

export default Language;
