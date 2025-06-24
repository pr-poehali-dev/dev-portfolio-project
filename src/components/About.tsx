import Icon from "@/components/ui/icon";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Angular", "TypeScript", "Next.js"],
    },
    { category: "Backend", items: ["Node.js", "Python", "Java", "C#", "Go"] },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"],
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
    },
    { category: "Tools", items: ["Git", "Webpack", "Vite", "Jest", "Cypress"] },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 terminal-green-glow">
          <span className="text-terminal-green">{"<"}</span>
          <span className="text-white">About</span>
          <span className="text-terminal-green">{" />"}</span>
        </h2>
        <div className="text-matrix-green/80 text-lg max-w-3xl mx-auto font-code">
          <p className="mb-4">
            <span className="text-terminal-green">const</span> developer = {"{"}
          </p>
          <p className="ml-8 mb-2">
            name: <span className="text-white">"Utsy"</span>,
          </p>
          <p className="ml-8 mb-2">
            experience: <span className="text-white">"5+ лет"</span>,
          </p>
          <p className="ml-8 mb-2">
            passion:{" "}
            <span className="text-white">"Создание инновационных решений"</span>
            ,
          </p>
          <p className="ml-8 mb-2">
            mission: <span className="text-white">"Превращать идеи в код"</span>
          </p>
          <p className="mb-4">{"};"}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="project-card p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Icon
                name="Terminal"
                className="text-matrix-green mr-3"
                size={24}
              />
              <h3 className="text-xl font-bold text-white font-code">
                {skillGroup.category}
              </h3>
            </div>
            <div className="space-y-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center">
                  <span className="text-terminal-green mr-2">&gt;</span>
                  <span className="text-matrix-green/80 font-code">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
