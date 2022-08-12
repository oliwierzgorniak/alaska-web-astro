const Introduction = () => (
  <header className="mx-6 grid grid-cols-[1fr_auto] grid-rows-[repeat(2,auto)]">
    <h1 className="mr-[-1.5em] leading-9">
      <span className="text-xl inline-block mb-1">
        Hej, nazywam się Oliwier
      </span>
      <br />
      Zajmuję się tworzeniem stron internetowych
    </h1>
    <img
      className="w-48 col-start-2 row-start-1 row-end-3 self-end block"
      src="/images/me.png"
      alt="moje zdjęcie"
    />
    <button className="self-start justify-self-center">
      <img
        className="h-40"
        src="/images/contact-button.svg"
        alt="grafika kontaktu ze mną"
      />
    </button>
  </header>
);

export default Introduction;
