import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Boxes, GitMerge, ShieldCheck, Calculator, Calendar, FileSearch, Building, Cog } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Boxes,
      title: "Modelagem BIM 3D",
      description: "Criação de modelos tridimensionais inteligentes e parametrizados de todas as disciplinas do projeto.",
      details: "Desenvolvemos modelos BIM completos em LOD 300, 350 e 400, incluindo arquitetura, estrutura, instalações hidráulicas, elétricas, SPDA, AVAC e outras disciplinas especializadas."
    },
    {
      icon: GitMerge,
      title: "Coordenação de Projetos",
      description: "Gestão integrada de todas as disciplinas para garantir coerência e qualidade do projeto.",
      details: "Realizamos reuniões de coordenação, análise de interferências, validação de projetos e alinhamento entre todas as disciplinas envolvidas no empreendimento."
    },
    {
      icon: ShieldCheck,
      title: "Compatibilização BIM",
      description: "Identificação e resolução de conflitos entre diferentes disciplinas do projeto.",
      details: "Utilizamos software especializado para detectar interferências físicas e lógicas, gerando relatórios detalhados e propostas de solução para garantir a construtibilidade do projeto."
    },
    {
      icon: Calculator,
      title: "Orçamento 5D",
      description: "Extração automática de quantitativos e integração com custos para orçamentação precisa.",
      details: "Vinculamos o modelo BIM a bases de dados de custos, permitindo orçamentos mais precisos, análise de cenários e controle rigoroso do investimento."
    },
    {
      icon: Calendar,
      title: "Planejamento 4D",
      description: "Simulação visual da sequência construtiva integrando o modelo 3D ao cronograma.",
      details: "Criamos animações que demonstram a evolução temporal da obra, facilitando o planejamento logístico, identificação de conflitos de execução e comunicação com stakeholders."
    },
    {
      icon: FileSearch,
      title: "As Built BIM",
      description: "Modelagem da construção conforme executada, documentando fielmente o que foi construído.",
      details: "Atualizamos os modelos BIM durante ou após a execução da obra, garantindo um registro preciso para operação, manutenção e futuras intervenções."
    },
    {
      icon: Building,
      title: "Consultoria BIM",
      description: "Assessoria estratégica para implementação e otimização de processos BIM.",
      details: "Apoiamos empresas na estruturação de seus departamentos BIM, definição de padrões, treinamento de equipes e melhoria contínua de processos."
    },
    {
      icon: Cog,
      title: "Projeto de Produção",
      description: "Detalhamento executivo e racionalização de processos construtivos.",
      details: "Desenvolvemos projetos de produção para alvenaria, fôrmas, armaduras, fachadas e outros sistemas, otimizando a execução e reduzindo desperdícios."
    }
  ];

  return (
    <div className="min-h-screen dark">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Nossos Serviços
            </h1>
            <p className="text-lg lg:text-xl opacity-90">
              Soluções completas em BIM para todas as etapas do seu projeto, da concepção à manutenção.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:border-primary">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-12 text-center text-foreground">
            Nossa Metodologia BIM
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Planejamento", desc: "Definição de escopo, LOD e cronograma" },
                { step: "02", title: "Modelagem", desc: "Desenvolvimento dos modelos 3D inteligentes" },
                { step: "03", title: "Coordenação", desc: "Compatibilização e resolução de interferências" },
                { step: "04", title: "Entrega", desc: "Documentação e transferência de conhecimento" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                    {phase.step}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-secondary-foreground">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/30" style={{ transform: 'translateX(50%)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
