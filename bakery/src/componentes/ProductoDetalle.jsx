import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { 
  FaHeart, 
  FaShoppingCart, 
  FaTag, 
  FaCalendarCheck, 
  FaBookmark, 
  FaStar, 
  FaStarHalfAlt 
} from "react-icons/fa";
import { ReservasContext } from "./../context/ReservasContext";

import pastelesData from "./../productos/pasteles.json";
import panesData from "./../productos/panes.json";
import eventosData from "./../productos/eventos.json";
import galletasData from "./../productos/galletas.json";
const ProductoDetalle = () => {
  const { categoria, id } = useParams();
  const { agregarReserva } = useContext(ReservasContext);

  const [botonReservado, setBotonReservado] = useState(false);

  const productos = {
    pasteles: pastelesData,
    panes: panesData,
    eventos: eventosData,
    galletas :galletasData,
  };

  const producto = productos[categoria]?.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReserva = () => {
    agregarReserva(producto);


    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `${producto.nombre} se ha reservado correctamente.`,
      showConfirmButton: false,
      timer: 2000,
    });


    setBotonReservado(true);
  };

  // Función para renderizar las estrellas
  const renderEstrellas = (calificacion) => {
    const estrellas = [];
    const estrellasCompletas = Math.floor(calificacion);
    const tieneMediaEstrella = calificacion % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < estrellasCompletas) {
        estrellas.push(
          <FaStar key={i} className="text-yellow-400 text-xl" />
        );
      } else if (i === estrellasCompletas && tieneMediaEstrella) {
        estrellas.push(
          <FaStarHalfAlt key={i} className="text-yellow-400 text-xl" />
        );
      } else {
        estrellas.push(
          <FaStar key={i} className="text-gray-300 text-xl" />
        );
      }
    }
    return estrellas;
  };

  if (!producto) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center h-screen"
      >
        <h2 className="text-2xl text-pink-600">Producto no encontrado</h2>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 mt-[60px] max-w-6xl mx-auto relative"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10" />
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 20px 20px, #fce7f3 2px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-pink-200 relative overflow-hidden">
        {/* Decoración de bordes irregulares */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300" 
          style={{clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)"}} 
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4 border-pink-100"
            />
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-4xl font-bold text-pink-600 pb-3 border-b-2 border-pink-200"
            >
              {producto.nombre}
            </motion.h1>

            {/* Sección de calificación */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200"
            >
              <div className="flex gap-1">
                {renderEstrellas(producto.calificacion)}
              </div>
              <span className="text-gray-600 font-medium ml-2">
                ({producto.calificacion} / 5)
              </span>
            </motion.div>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-pink-300"
            >
              {producto.descripcion}
            </motion.p>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 bg-pink-50 p-4 rounded-lg border-2 border-pink-200"
            >
              <FaTag className="text-pink-500 text-xl" />
              <p className="text-3xl font-bold text-pink-600">${producto.precio}</p>
            </motion.div>

            {producto.descuento > 0 && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 bg-green-50 p-4 rounded-lg border-2 border-green-200"
              >
                <FaTag className="text-green-500 text-xl" />
                <p className="text-lg font-semibold text-green-600">
                  ¡{producto.descuento}% de descuento!
                </p>
              </motion.div>
            )}

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 mt-8"
            >
              <button
                onClick={handleReserva}
                disabled={botonReservado}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl shadow-lg transition-all duration-300 transform ${
                  botonReservado
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 hover:scale-105"
                }`}
              >
                <FaCalendarCheck className="text-xl" />
                <span className="font-semibold">Reservar Ahora</span>
              </button>

            
            </motion.div>

          
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductoDetalle;