import React from "react";
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", name: "Instagram" },
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: "+591 78236743" },
    { icon: <Mail className="w-5 h-5" />, text: "info@pasteleria.com" },
    { icon: <MapPin className="w-5 h-5" />, text: "Plazuela Sucre" },
    { icon: <Clock className="w-5 h-5" />, text: "Lun - Dom: 9:00 AM - 9:00 PM" },
  ];

  const quickLinks = [
    "Sobre Nosotros",
    "Menú Completo",
    "Reservaciones",
    "Eventos Especiales",
    "Blog de Repostería",
    "Políticas de Privacidad",
  ];

  const services = [
    "Pasteles Personalizados",
    "Catering para Eventos",
    "Clases de Repostería",
    "Pedidos Corporativos",
    "Delivery",
    "Gift Cards",
  ];

  return (
    <footer className="bg-gradient-to-b from-pink-50 to-white relative pt-20 pb-6">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="relative h-20">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
          </div>
          <svg className="absolute top-0 left-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-pink-100 opacity-50"
            ></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 relative inline-block">
              Sobre Nosotros
              <div className="absolute -bottom-1 left-0 w-12 h-1 bg-pink-400"></div>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              En esta pasteleria, horneamos felicidad desde siempre. Cada creación está hecha con amor y los ingredientes más frescos para endulzar tus momentos especiales.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>


          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 relative inline-block">
              Enlaces Rápidos
              <div className="absolute -bottom-1 left-0 w-12 h-1 bg-pink-400"></div>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-pink-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-300 rounded-full mr-2 group-hover:w-2 group-hover:bg-pink-500 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 relative inline-block">
              Servicios
              <div className="absolute -bottom-1 left-0 w-12 h-1 bg-pink-400"></div>
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-pink-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-300 rounded-full mr-2 group-hover:w-2 group-hover:bg-pink-500 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 relative inline-block">
              Contacto
              <div className="absolute -bottom-1 left-0 w-12 h-1 bg-pink-400"></div>
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-600">
                  <span className="text-pink-500">{info.icon}</span>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="border-t border-pink-100 pt-8 pb-4">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Suscríbete a nuestro Newsletter</h4>
            <p className="text-gray-600 mb-4">
              Recibe nuestras últimas noticias y ofertas especiales directamente en tu bandeja de entrada.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-pink-600 transition-colors duration-300">
                Suscribirse
              </button>
            </form>
          </div>
        </div>


        <div className="border-t border-pink-100 mt-8 pt-8 text-center">
          <p className="text-gray-600 flex items-center justify-center">
            © 2023 Strawberry Cupcakes. Hecho con
            <Heart className="w-4 h-4 mx-1 text-pink-500 fill-current" />
            en Sweet City
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;