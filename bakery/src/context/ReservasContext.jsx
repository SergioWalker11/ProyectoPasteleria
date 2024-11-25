import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const ReservasContext = createContext();

// Proveedor del contexto
export const ReservasProvider = ({ children }) => {
  const [reservas, setReservas] = useState(() => {
    // Recuperar reservas desde localStorage al cargar
    const storedReservas = localStorage.getItem("reservas");
    return storedReservas ? JSON.parse(storedReservas) : [];
  });

  useEffect(() => {
    // Guardar reservas en localStorage cuando cambian
    localStorage.setItem("reservas", JSON.stringify(reservas));
  }, [reservas]);

  // Agregar producto a las reservas
  const agregarReserva = (producto) => {
    if (!reservas.find((p) => p.id === producto.id)) {
      setReservas([...reservas, producto]);
    }
  };

  // Eliminar producto de las reservas
  const eliminarReserva = (id) => {
    setReservas(reservas.filter((producto) => producto.id !== id));
  };

  return (
    <ReservasContext.Provider value={{ reservas, agregarReserva, eliminarReserva }}>
      {children}
    </ReservasContext.Provider>
  );
};
