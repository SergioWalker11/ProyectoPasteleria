import React, { useContext } from "react";
import Swal from "sweetalert2";
import { ReservasContext } from "./../context/ReservasContext";
import { FaTrash, FaCreditCard, FaLock, FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion";

const Reservas = () => {
  const { reservas, eliminarReserva } = useContext(ReservasContext);

  const total = reservas.reduce((sum, item) => sum + item.precio, 0);
  const shipping = 5;
  const finalTotal = total + shipping;
  const handlePago = () => {

    Swal.fire({
      icon: "success",
      title: "Pago realizado",
      text: "Su pago se ha procesado correctamente.",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <div className="max-w-6xl mx-auto p-6 mt-[60px] grid md:grid-cols-2 gap-8 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10" />
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 20px 20px, #fce7f3 2px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* Sección del carrito */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-pink-200 relative"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300" 
          style={{clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)"}} 
        />

        <div className="flex items-center gap-3 mb-6">
          <FaShoppingBag className="text-2xl text-pink-500" />
          <h2 className="text-2xl font-bold text-pink-600">Mis Reservas</h2>
        </div>

        <div className="space-y-4">
          {reservas.map((producto) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={producto.id}
              className="flex items-center justify-between bg-pink-50/50 rounded-xl p-4 border border-pink-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-20 h-20 rounded-lg object-cover border-2 border-pink-200"
                />
                <div>
                  <h3 className="font-semibold text-lg text-pink-700">{producto.nombre}</h3>
                  <p className="text-sm text-pink-500">{producto.descripcion}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="font-bold text-pink-600">${producto.precio}</span>
                <button
                  onClick={() => eliminarReserva(producto.id)}
                  className="text-pink-400 hover:text-pink-600 transition-colors"
                >
                  <FaTrash />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sección de detalles de pago */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-pink-200 h-fit relative"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300" 
          style={{clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)"}} 
        />

        <div className="flex items-center gap-3 mb-6">
          <FaCreditCard className="text-2xl text-pink-500" />
          <h2 className="text-2xl font-bold text-pink-600">Detalles de Pago</h2>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-pink-600 mb-2">Métodos de pago aceptados</p>
            <div className="flex gap-2 bg-pink-50 p-3 rounded-lg border border-pink-100">
              <img src="/../public/imagenes/pago1.jpg" alt="Mastercard" className="h-8"/>
              <img src="/../public/imagenes/pago2.jpg" alt="Visa" className="h-8"/>
              <img src="/../public/imagenes/pago3.jpg" alt="PayPal" className="h-8"/>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-pink-600">Nombre en la tarjeta</label>
            <input
                type="text"
                className="w-full mt-1 p-3 rounded-lg bg-pink-50/50 border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                placeholder="Nombre completo"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-pink-600">Número de tarjeta</label>
            <input
                type="text"
                className="w-full mt-1 p-3 rounded-lg bg-pink-50/50 border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                placeholder="**** **** **** ****"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-pink-600">Fecha de expiración</label>
              <input
                  type="text"
                  className="w-full mt-1 p-3 rounded-lg bg-pink-50/50 border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  placeholder="MM/AA"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-pink-600">CVV</label>
              <input
                  type="text"
                  className="w-full mt-1 p-3 rounded-lg bg-pink-50/50 border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  placeholder="***"
              />
            </div>
          </div>

          <div className="border-t border-pink-200 pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-pink-600">Subtotal</span>
              <span className="font-semibold text-pink-700">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-pink-600">Envío</span>
              <span className="font-semibold text-pink-700">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-pink-200">
              <span className="text-pink-600">Total (IVA incl.)</span>
              <span className="font-bold text-lg text-pink-700">${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
              onClick={handlePago}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-pink-200 flex items-center justify-center gap-2 font-semibold"
          >
            <FaLock className="text-sm"/>
            Pagar ahora
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Reservas;