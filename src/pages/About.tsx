import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";
import project1 from "@/assets/project-1.jpg";

const About = () => {
  return (
    <div className="min-h-screen dark">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Quem Somos
            </h1>
            <p className="text-lg lg:text-xl opacity-90">
              Líder em soluções BIM, transformando a engenharia brasileira com tecnologia e excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container flex items-center justify-around gap-14 px-5 sm:px-7 lg:px-9">
          <div className="max-w-2xl">
            <h2 className="font-heading text-foreground font-bold text-3xl lg:text-4xl mb-8 text-center">
              Nossa História
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                A <span className="text-foreground font-semibold">Engeplanti Engenharia</span> nasceu da visão de transformar o mercado de projetos de engenharia através da tecnologia BIM (Building Information Modeling)
              </p>
              <p className="mb-6">
                Com sede em Santa Catarina, nos tornamos a maior empresa de projetos BIM do estado, atendendo clientes em todo o território nacional com soluções de ponta em modelagem, coordenação e compatibilização de projetos.
              </p>
              <p>
                Nossa equipe multidisciplinar é formada por profissionais especializados que dominam <span className="text-primary font-semibold">mais de 10 disciplinas BIM</span>, garantindo integração perfeita e qualidade superior em cada projeto.
              </p>
            </div>
          </div>
          <div className="h-72">
            <img 
              src={project1}
              alt="Equipe Engeplanti"
              className="w-full h-full object-cover rounded-xl"
            />
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
    </div>
  );
};

export default About;
