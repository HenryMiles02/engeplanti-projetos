import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Sobre a Engeplanti
            </h1>
            <p className="text-lg lg:text-xl opacity-90">
              Líder em soluções BIM, transformando a engenharia brasileira com tecnologia e excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-8 text-center">
              Nossa Trajetória
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                A <span className="text-foreground font-semibold">Engeplanti Engenharia</span> nasceu com a missão de revolucionar o setor de projetos de engenharia em Santa Catarina. Ao longo dos anos, nos consolidamos como a maior empresa de projetos BIM do estado, oferecendo soluções inovadoras que integram tecnologia de ponta e expertise técnica.
              </p>
              <p className="mb-6">
                Nossa jornada é marcada pela busca constante por excelência operacional e pela satisfação de nossos clientes. Com uma equipe altamente qualificada e processos rigorosos de controle de qualidade, entregamos projetos que superam expectativas.
              </p>
              <p>
                Hoje, com <span className="text-primary font-semibold">mais de 1 milhão de m² projetados</span> e atuação em todo o território nacional, continuamos expandindo nossos horizontes e estabelecendo novos padrões no mercado de engenharia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-10 pb-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Fornecer soluções em projetos BIM que superem as expectativas dos nossos clientes, utilizando tecnologia de ponta e uma equipe altamente qualificada.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-10 pb-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como a empresa mais confiável e inovadora em projetos BIM no Brasil, estabelecendo novos padrões de qualidade e eficiência.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-10 pb-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Excelência, Inovação, Comprometimento, Integridade e Trabalho em Equipe. Esses são os pilares que guiam nossas ações diariamente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-12 text-center">
            Nossa Força em Números
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "+1M", label: "m² Projetados" },
              { number: "+10", label: "Disciplinas BIM" },
              { number: "100%", label: "Nacional" },
              { number: "#1", label: "Santa Catarina" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground font-medium">
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

export default About;
