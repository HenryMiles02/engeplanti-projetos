import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("Todos");

  const projects = [
    { img: project1, title: "Edifício Comercial Premium", type: "Privado", area: "15.000 m²" },
    { img: project2, title: "Complexo Industrial", type: "Industrial", area: "35.000 m²" },
    { img: project3, title: "Residencial Alto Padrão", type: "Residencial", area: "12.000 m²" },
    { img: project4, title: "Centro Educacional", type: "Público", area: "8.500 m²" },
    { img: project1, title: "Shopping Center", type: "Privado", area: "42.000 m²" },
    { img: project2, title: "Parque Tecnológico", type: "Industrial", area: "28.000 m²" },
    { img: project3, title: "Condomínio Residencial", type: "Residencial", area: "22.000 m²" },
    { img: project4, title: "Hospital Municipal", type: "Público", area: "18.000 m²" }
  ];

  const filters = ["Todos", "Público", "Privado", "Residencial", "Industrial"];

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="dark min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Nossos Projetos
            </h1>
            <p className="text-lg lg:text-xl opacity-90">
              Portfólio que demonstra nossa capacidade técnica e experiência em diferentes segmentos.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                onClick={() => setFilter(f)}
                className="font-heading"
              >
                {f}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/50 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold mb-2">
                      {project.type}
                    </span>
                    <h3 className="font-heading font-bold text-xl mb-1">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.area}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "+200", label: "Projetos Entregues" },
              { number: "+1M", label: "m² Modelados" },
              { number: "+50", label: "Clientes Atendidos" },
              { number: "100%", label: "Satisfação" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
