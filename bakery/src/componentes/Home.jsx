import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cake, Coffee, IceCream, ChevronLeft, ChevronRight } from "lucide-react";
import pastelesData from "./../productos/pasteles.json";
import panesData from "./../productos/panes.json";
import eventosData from "./../productos/eventos.json";
import galletasData from "./../productos/galletas.json";


import { 
  FaShoppingCart,
  FaTag, 
  FaCalendarCheck, 
  FaBookmark,
  FaStar,
  FaStarHalfAlt,
  FaBirthdayCake,
  FaBreadSlice,
  FaCookie,
  FaGift 
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredItems = pastelesData.slice(0, 5);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { name: "Pasteles Clasicos", target: "pasteles", icon: <FaBirthdayCake /> },
    { name: "Panes", target: "panes", icon: <FaBreadSlice /> },
    { name: "Pasteles Eventos", target: "eventos", icon: <FaGift /> },
    { name: "Galletas", target: "galletas", icon: <FaCookie /> },
  ];
  const handleClick = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      const offsetTop = element.offsetTop - 60;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
      <div className="flex min-h-screen">
        <aside className="fixed w-64 h-screen bg-white border-r border-gray-200 shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
              Menú
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-pink-500"></div>
            </h2>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                  <li key={index} className="group">
                    <a
                        href={`#${item.target}`}
                        onClick={(e) => handleClick(e, item.target)}
                        className="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-pink-50 group-hover:translate-x-2"
                    >
                      <span className="text-pink-500 mr-3">{item.icon}</span>
                      <div>
                        <span className="block font-semibold text-gray-800">{item.name}</span>
                        <span className="text-sm text-gray-500">
                      Explora deliciosos {item.name.toLowerCase()}
                    </span>
                      </div>
                    </a>
                  </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="ml-64 flex-1 bg-gray-50">
          <div className="relative h-[600px] w-full overflow-hidden">
            {featuredItems.map((item, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
                        index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
                >
                  <div className="relative h-full w-full flex">

                    <div className="absolute z-10 left-0 top-0 w-1/2 h-full flex flex-col justify-center px-16">

                      <div
                          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent backdrop-blur-sm"></div>


                      <div className="relative z-20">

                        <div className="w-16 h-1 bg-pink-500 mb-8"></div>


                        <h2 className="text-6xl font-bold mb-6 text-white">
                          {item.nombre}
                        </h2>


                        <p className="text-lg text-white/90 mb-8 line-clamp-4 leading-relaxed bg-black/20 p-6 rounded-lg border-l-4 border-pink-500">
                          {item.descripcion}
                        </p>


                        <button
                            onClick={() => navigate(`/producto/pasteles/${item.id}`)}
                            className="relative overflow-hidden bg-pink-500 text-white px-10 py-4 rounded-lg transition-all duration-300 hover:bg-pink-600 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
                        >
                          Ver más
                        </button>
                      </div>
                    </div>


                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
                      <img
                          src={item.imagen}
                          alt={item.nombre}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent"></div>
                    </div>
                  </div>
                </div>
            ))}


            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 z-20"
            >
              <ChevronLeft className="w-6 h-6 text-white"/>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 z-20"
            >
              <ChevronRight className="w-6 h-6 text-white"/>
            </button>


            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {featuredItems.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 ${
                          index === currentSlide
                              ? "w-12 h-3 bg-pink-500"
                              : "w-3 h-3 bg-white/50 hover:bg-white"
                      } rounded-full`}
                  />
              ))}
            </div>
          </div>


          <div className="p-8">
            {["pasteles", "panes", "eventos", "galletas" ].map((section) => {
              const data = {
                pasteles: pastelesData,
                panes: panesData,
                eventos: eventosData,
                galletas : galletasData
              }[section];

              return (
                  <section id={section} key={section} className="mb-16 relative">
                    <div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-200 via-pink-500 to-pink-200"></div>
                    <div
                        className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-pink-500"></div>

                    <h1 className="text-4xl font-bold text-center my-12 relative inline-block">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                      <div
                          className="absolute -right-6 -top-6 w-12 h-12 border-4 border-pink-200 rounded-full opacity-50"></div>
                      <div
                          className="absolute -left-4 -bottom-4 w-8 h-8 border-4 border-pink-300 rounded-full opacity-50"></div>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {data.map((item, index) => (
                          <div
                              key={index}
                              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                          >
                            <div
                                className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                            <div className="relative h-48 overflow-hidden">
                              <img
                                  src={item.imagen}
                                  alt={item.nombre}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {item.descuento > 0 && (
                                  <div
                                      className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                    -{item.descuento}%
                                  </div>
                              )}
                            </div>

                            <div className="p-6">
                              <h3 className="text-xl font-bold mb-2">{item.nombre}</h3>
                              <p className="text-gray-600 mb-4">{item.descripcion}</p>

                              <div className="flex justify-between items-center mb-4">
                                <div>
                                  <span className="text-sm text-gray-500">Precio:</span>
                                  {item.descuento > 0 ? (
                                      <div className="flex items-center gap-2">
                                        <span className="line-through text-gray-400">${item.precio}</span>
                                        <span className="text-lg font-bold text-pink-500">
                                  ${(item.precio - item.precio * (item.descuento / 100)).toFixed(2)}
                                </span>
                                      </div>
                                  ) : (
                                      <span className="text-lg font-bold text-pink-500">${item.precio}</span>
                                  )}
                                </div>
                                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                            {item.sabor || item.tipo}
                          </span>
                              </div>

                              <button
                                  onClick={() => navigate(`/producto/${section}/${item.id}`)}
                                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 rounded-lg transition-all duration-300 hover:from-pink-600 hover:to-pink-700 transform hover:scale-105"
                              >
                                Ver más
                              </button>
                            </div>
                          </div>
                      ))}
                    </div>
                  </section>
              );
            })}
          </div>
        </main>
      </div>
  );
};

export default Home;