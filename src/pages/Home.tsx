import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bim.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite/70 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              A maior empresa de projetos BIM de{" "}
              <span className="text-primary">Santa Catarina</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200">
              Modelagem, coordenação e compatibilização de projetos com excelência e tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/servicos">
                <Button size="lg" className="w-full sm:w-auto text-base font-heading">
                  CONHEÇA NOSSOS SERVIÇOS
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base font-heading bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-graphite">
                  FALE CONOSCO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4 text-foreground">
              Por que escolher a Engeplanti?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combinamos experiência técnica com tecnologia de ponta para entregar projetos excepcionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Excelência Operacional</h3>
                <p className="text-muted-foreground">
                  Mais de 1 milhão de m² projetados com a mais alta qualidade e precisão técnica.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Disponibilidade Total</h3>
                <p className="text-muted-foreground">
                  Atendimento ágil e suporte completo em todas as etapas do seu projeto.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Liderança em Serviços</h3>
                <p className="text-muted-foreground">
                  Referência em projetos BIM com atuação em mais de 10 disciplinas diferentes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Nossos Serviços</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluções completas em BIM para todas as etapas do seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Modelagem BIM 3D",
              "Coordenação de Projetos",
              "Compatibilização",
              "Orçamento 5D",
              "Planejamento 4D",
              "As Built"
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:border-primary">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-heading font-semibold text-lg">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/servicos">
              <Button size="lg" variant="outline" className="font-heading">
                VER TODOS OS SERVIÇOS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Projetos em Destaque</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conheça alguns dos projetos que demonstram nossa capacidade técnica e inovação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: project1, title: "Edifício Comercial" },
              { img: project2, title: "Complexo Industrial" },
              { img: project3, title: "Residencial Premium" },
              { img: project4, title: "Obra Pública" }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading font-semibold text-white text-lg">{project.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/projetos">
              <Button size="lg" variant="outline" className="font-heading">
                VER TODOS OS PROJETOS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
            Quer inovar com tecnologia BIM?
          </h2>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como podemos transformar seu projeto em realidade.
          </p>
          <Link to="/contato">
            <Button size="lg" variant="secondary" className="font-heading text-base">
              FALE COM NOSSOS ESPECIALISTAS
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
