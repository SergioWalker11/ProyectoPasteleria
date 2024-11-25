import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Swal from 'sweetalert2';

const Contacto = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Mensaje enviado",
            text: "Tu mensaje ha sido enviado correctamente.",
            showConfirmButton: false,
            timer: 2000,
        });
    };
    return (
        <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-64 mb-16">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('./../../public/imagenes/fondo2.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
                    <p className="text-lg text-center max-w-2xl px-4">
                        Escribenos si tiene alguna consulta o visitanos te estamos esperando.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 relative inline-block">
                                Información de Contacto
                                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-pink-400"></div>
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                                        <Phone className="w-6 h-6"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Teléfono</h3>
                                        <p className="text-gray-600">+591 75818282</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                                        <Mail className="w-6 h-6"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Email</h3>
                                        <p className="text-gray-600">info@pasteleria.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                                        <MapPin className="w-6 h-6"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Dirección</h3>
                                        <p className="text-gray-600">Plazuela Sucre</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                                        <Clock className="w-6 h-6"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Horario</h3>
                                        <p className="text-gray-600">Lun - Dom: 9:00 AM - 9:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white p-4 rounded-2xl shadow-lg">
                            <div className="w-full h-64 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d927.8258050320904!2d-64.73244947084727!3d-21.534995840663846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1732069865063!5m2!1ses-419!2sbo"
                                    width="100%"
                                    height="100%"
                                    style={{border: 0}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>

                            </div>
                        </div>

                    </div>


                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 relative inline-block">
                            Envíanos un Mensaje
                            <div className="absolute -bottom-1 left-0 w-12 h-1 bg-pink-400"></div>
                        </h2>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500"
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500"
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500"
                                    placeholder="Asunto del mensaje"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500"
                                    placeholder="Tu mensaje..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg transition-all duration-300 hover:from-pink-600 hover:to-pink-700 transform hover:scale-105"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;