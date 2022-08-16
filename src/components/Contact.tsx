const Contact = () => (
  <section className="py-6">
    <img className="w-full" src="/images/contact.svg" alt="góry i las" />
    <div className="flex flex-col items-center my-[-2rem]">
      <h2 className="text-3xl mb-10">Kontakt</h2>
      <span className="text-center font-semibold mb-10 text-xl">
        Email: <br />
        <span className="font-normal">oliwier.zgorniak@protonmail.com</span>
      </span>
      <button className="bg-accent flex gap-4 p-5 text-[white] font-semibold tracking-wide text-lg items-center rounded-sm">
        wyślij maila
        <img className="h-6" src="/images/email.svg" alt="ikonka email" />
      </button>
    </div>
  </section>
);

export default Contact;
