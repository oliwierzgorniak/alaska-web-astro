import contact from "../data/contact.json";

type Props = {
  lang: string;
};

const Contact = ({ lang }: Props) => (
  <section className="pb-20" id={contact[lang].sectionId}>
    <img
      className="w-full"
      src="/images/contact.svg"
      alt={contact[lang].imgAlt}
    />
    <div className="flex flex-col items-center my-[-2rem] pb-[2rem] xl:my-[-4rem] xl:pb-[4rem] 2xl:my-[-5rem] 2xl:pb-[5rem]">
      <h2 className="text-3xl mb-10">{contact[lang].title}</h2>
      <span className="text-center font-semibold mb-10 text-xl">
        Email: <br />
        <span className="font-normal">oliwier.zgorniak@protonmail.com</span>
      </span>
      <a
        href="mailto:oliwier.zgorniak@protonmail.com"
        className="bg-accent flex gap-4 p-5 text-[white] font-semibold tracking-wide text-lg items-center rounded-sm"
      >
        {contact[lang].buttonText}
        <img className="h-6" src="/images/email.svg" alt="email" />
      </a>
    </div>
  </section>
);

export default Contact;
