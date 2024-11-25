import React from 'react';
import { Award, Clock, Heart, Star, Users } from 'lucide-react';
import img22 from './../../public/imagenes/fotoqr.png';
const SobreNosotros = () => {
    const valores = [
        {
            icon: <Heart className="w-8 h-8 text-pink-500" />,
            titulo: "Pasión por la Calidad",
            descripcion: "Seleccionamos los mejores ingredientes para crear productos excepcionales."
        },
        {
            icon: <Star className="w-8 h-8 text-pink-500" />,
            titulo: "Excelencia Artesanal",
            descripcion: "Cada producto es elaborado con técnicas tradicionales y amor al detalle."
        },
        {
            icon: <Users className="w-8 h-8 text-pink-500" />,
            titulo: "Servicio Personalizado",
            descripcion: "Nos esforzamos por brindar una experiencia única a cada cliente."
        },
        {
            icon: <Clock className="w-8 h-8 text-pink-500" />,
            titulo: "Frescura Garantizada",
            descripcion: "Horneamos diariamente para asegurar la máxima frescura."
        }
    ];

    const equipo = [
        {
            nombre: "María González",
            cargo: "Chef Pastelera Principal",
            descripcion: "Con 15 años de experiencia en pastelería fina."
        },
        {
            nombre: "Carlos Rodríguez",
            cargo: "Maestro Panadero",
            descripcion: "Especialista en panes artesanales y masa madre."
        },
        {
            nombre: "Ana López",
            cargo: "Decoradora de Pasteles",
            descripcion: "Artista culinaria especializada en diseños personalizados."
        }
    ];

    return (
        <div className="bg-[#f5efe9] min-h-screen pt-20">
            <div className="relative bg-gradient-to-r from-pink-500 to-pink-600 py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Nuestra Historia
                        </h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">
                             Nuestra pasteleria ha estado endulzando la vida de nuestros clientes con las más deliciosas creaciones artesanales.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Una Tradición de Excelencia
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Lo que comenzó como una pequeña panadería familiar se ha convertido en un referente de
                                la pastelería artesanal en la ciudad. Nuestra dedicación a la calidad y la innovación
                                nos ha permitido crecer mientras mantenemos la esencia que nos caracteriza.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Cada día nos esforzamos por mantener vivas las recetas tradicionales mientras
                                incorporamos nuevas técnicas y sabores para sorprender a nuestros clientes.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-pink-100 rounded-lg p-6 text-center">
                                <div className="text-3xl font-bold text-pink-600">8+</div>
                                <div className="text-gray-600">Años de Experiencia</div>
                            </div>
                            <div className="bg-pink-100 rounded-lg p-6 text-center">
                                <div className="text-3xl font-bold text-pink-600">1000+</div>
                                <div className="text-gray-600">Clientes Felices</div>
                            </div>
                            <div className="bg-pink-100 rounded-lg p-6 text-center">
                                <div className="text-3xl font-bold text-pink-600">50+</div>
                                <div className="text-gray-600">Productos Únicos</div>
                            </div>
                            <div className="bg-pink-100 rounded-lg p-6 text-center">
                                <div className="text-3xl font-bold text-pink-600">5⭐</div>
                                <div className="text-gray-600">Calificación</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Nuestros Valores
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valores.map((valor, index) => (
                            <div key={index}
                                 className="bg-white rounded-xl shadow-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                                <div
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-4">
                                    {valor.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{valor.titulo}</h3>
                                <p className="text-gray-600">{valor.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div>
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Nuestro Equipo
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {equipo.map((miembro, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="p-6 text-center">
                                    <div
                                        className="w-24 h-24 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <Users className="w-12 h-12 text-pink-500"/>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{miembro.nombre}</h3>
                                    <div className="text-pink-500 font-medium mb-2">{miembro.cargo}</div>
                                    <p className="text-gray-600">{miembro.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg w-10/2 flex justify-center  ">

                        <img src={img22} />

                </div>
            </div>
        </div>
    );
};

export default SobreNosotros;