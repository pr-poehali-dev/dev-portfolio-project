import Icon from "@/components/ui/icon";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Полнофункциональная платформа электронной коммерции с микросервисной архитектурой",
      tech: ["React", "Node.js", "MongoDB", "Docker"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time Chat App",
      description:
        "Мессенджер в реальном времени с видеозвонками и файловым обменом",
      tech: ["Vue.js", "Socket.io", "Express", "WebRTC"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "Дашборд для анализа данных с машинным обучением и визуализацией",
      tech: ["Angular", "Python", "TensorFlow", "D3.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Mobile Banking App",
      description: "Безопасное мобильное приложение для банковских операций",
      tech: ["React Native", "Firebase", "Stripe", "JWT"],
      github: "#",
      demo: "#",
    },
    {
      title: "DevOps Pipeline",
      description:
        "Автоматизированный CI/CD пайплайн с мониторингом и логированием",
      tech: ["Jenkins", "Kubernetes", "Prometheus", "Grafana"],
      github: "#",
      demo: "#",
    },
    {
      title: "Blockchain DApp",
      description:
        "Децентрализованное приложение на блокчейне с смарт-контрактами",
      tech: ["Solidity", "Web3.js", "Ethereum", "IPFS"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 terminal-green-glow">
          <span className="text-terminal-green">{"{"}</span>
          <span className="text-white">Projects</span>
          <span className="text-terminal-green">{"}"}</span>
        </h2>
        <p className="text-matrix-green/80 text-lg font-code">
          <span className="text-terminal-green">//</span> Некоторые из моих
          работ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card p-6 rounded-lg group">
            <div className="flex items-center justify-between mb-4">
              <Icon name="Folder" className="text-matrix-green" size={32} />
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  className="text-matrix-green/60 hover:text-matrix-green transition-colors"
                >
                  <Icon name="Github" size={20} />
                </a>
                <a
                  href={project.demo}
                  className="text-matrix-green/60 hover:text-matrix-green transition-colors"
                >
                  <Icon name="ExternalLink" size={20} />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 font-code group-hover:text-matrix-green transition-colors">
              {project.title}
            </h3>

            <p className="text-matrix-green/80 mb-4 text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-1 border border-matrix-green/30 text-matrix-green/80 rounded font-code"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
