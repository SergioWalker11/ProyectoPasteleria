import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ShoppingCart, 
  Search, 
  Phone, 
  Calendar, 
  Info, 
  Mail, 
  User, 
  Heart,
  Clock,
  Menu,
  X,
  Facebook, // Importa el icono de Facebook
  Instagram, // Importa el icono de Instagram
  Twitter,
  Cake ,
  Home
} from 'lucide-react';

const Encabezado = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">

      


      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">

            <NavLink to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Cake className="w-8 h-8 text-pink-500" />
                <Heart className="absolute -top-1 -right-1 w-4 h-4 text-pink-400 fill-current" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800">Pasteleria</span>
                <span className="text-2xl font-light text-pink-500">Cayetana</span>
              </div>
            </NavLink>


            <nav className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-1 group ${
                    isActive ? 'text-pink-500' : 'text-gray-600'
                  }`
                }
              >
                <Home className="w-5 h-5" />
                <span className="group-hover:text-pink-500 transition-colors duration-300">Inicio</span>
              </NavLink>
              <NavLink
                to="/reservas"
                className={({ isActive }) =>
                  `flex items-center space-x-1 group ${
                    isActive ? 'text-pink-500' : 'text-gray-600'
                  }`
                }
              >
                <Calendar className="w-5 h-5" />
                <span className="group-hover:text-pink-500 transition-colors duration-300">Reservaciones</span>
              </NavLink>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  `flex items-center space-x-1 group ${
                    isActive ? 'text-pink-500' : 'text-gray-600'
                  }`
                }
              >
                <Mail className="w-5 h-5" />
                <span className="group-hover:text-pink-500 transition-colors duration-300">Contacto</span>
              </NavLink>
              <NavLink
                to="/nosotros"
                className={({ isActive }) =>
                  `flex items-center space-x-1 group ${
                    isActive ? 'text-pink-500' : 'text-gray-600'
                  }`
                }
              >
                <Info className="w-5 h-5" />
                <span className="group-hover:text-pink-500 transition-colors duration-300">Nosotros</span>
              </NavLink>
            </nav>


            <div className="flex items-center space-x-4">

              

            


              <button 
                className="md:hidden p-2 hover:bg-pink-50 rounded-full transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>


      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded-lg ${
                    isActive ? 'bg-pink-50 text-pink-500' : 'text-gray-600'
                  }`
                }
              >
                <Home className="w-5 h-5" />
                <span>Inicio</span>
              </NavLink>
              <NavLink
                to="/reservas"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded-lg ${
                    isActive ? 'bg-pink-50 text-pink-500' : 'text-gray-600'
                  }`
                }
              >
                <Calendar className="w-5 h-5" />
                <span>Reservaciones</span>
              </NavLink>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded-lg ${
                    isActive ? 'bg-pink-50 text-pink-500' : 'text-gray-600'
                  }`
                }
              >
                <Mail className="w-5 h-5" />
                <span>Contacto</span>
              </NavLink>
              <NavLink
                to="/nosotros"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded-lg ${
                    isActive ? 'bg-pink-50 text-pink-500' : 'text-gray-600'
                  }`
                }
              >
                <Info className="w-5 h-5" />
                <span>Nosotros</span>
              </NavLink>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Encabezado;