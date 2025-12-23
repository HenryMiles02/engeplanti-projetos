import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-graphite text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              Engeplanti <span className="text-primary">Engenharia</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A maior empresa de projetos BIM de Santa Catarina, oferecendo soluções inovadoras em modelagem, coordenação e compatibilização de projetos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Modelagem BIM</li>
              <li>Coordenação de Projetos</li>
              <li>Compatibilização</li>
              <li>Orçamento 5D</li>
              <li>Planejamento 4D</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Rua Cristóvão Nunes Píres, 110 Centro Florianópolis | SC</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">(48) 3364-2209</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">administrativo@engeplanti.com.br</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">comercial@engeplanti.com.br</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-8 text-center flex items-center justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Engeplanti Engenharia. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400">
            Desenvolvido por SolidDev Solution
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
