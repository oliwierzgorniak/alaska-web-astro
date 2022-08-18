const Error = () => (
  <div className="flex flex-col h-[100vh] justify-center items-center">
    <img className="w-62 mb-6" src="/images/404.svg" alt="404" />
    <span className="text-2xl mb-3">strona nie znaleziona</span>
    <a className="text-xl p-3 underline text-primary" href="/">
      strona główna
    </a>
  </div>
);

export default Error;
