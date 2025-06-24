import Icon from "@/components/ui/icon";

const Contact = () => {
  const contacts = [
    {
      name: "Email",
      value: "developer@example.com",
      icon: "Mail",
      link: "mailto:developer@example.com",
    },
    {
      name: "GitHub",
      value: "github.com/developer",
      icon: "Github",
      link: "https://github.com",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/developer",
      icon: "Linkedin",
      link: "https://linkedin.com",
    },
    {
      name: "Telegram",
      value: "@developer",
      icon: "MessageCircle",
      link: "https://t.me/developer",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 terminal-green-glow">
          <span className="text-terminal-green">{"<"}</span>
          <span className="text-white">Contact</span>
          <span className="text-terminal-green">{" />"}</span>
        </h2>
        <p className="text-matrix-green/80 text-lg font-code max-w-2xl mx-auto">
          <span className="text-terminal-green">{"/* "}</span>
          Готов к новым вызовам и интересным проектам. Свяжитесь со мной для
          обсуждения сотрудничества!
          <span className="text-terminal-green">{" */"}</span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="project-card p-6 rounded-lg group flex items-center space-x-4 hover:border-matrix-green transition-all duration-300"
            >
              <Icon
                name={contact.icon as any}
                className="text-matrix-green group-hover:text-terminal-green"
                size={32}
              />
              <div>
                <h3 className="text-white font-bold font-code group-hover:text-matrix-green transition-colors">
                  {contact.name}
                </h3>
                <p className="text-matrix-green/80 text-sm font-code">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="project-card p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4 font-code">
              <span className="text-terminal-green">{"$ "}</span>
              Готов к работе
            </h3>
            <p className="text-matrix-green/80 mb-6 font-code">
              Открыт для freelance, remote работы и интересных проектов
            </p>
            <button className="border border-matrix-green px-8 py-3 hover:bg-matrix-green hover:text-hack-black transition-all duration-300 font-code">
              <Icon name="Send" className="inline mr-2" size={20} />
              Написать мне
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-matrix-green/20">
        <p className="text-matrix-green/60 font-code text-sm">
          <span className="text-terminal-green">{"/* "}</span>
          Создано с 💚 и много кофе
          <span className="text-terminal-green">{" */"}</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
