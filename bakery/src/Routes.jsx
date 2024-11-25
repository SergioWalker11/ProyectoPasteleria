import { BrowserRouter, Route, Routes } from "react-router-dom";



import Home from "./componentes/Home.jsx";
import ProductoDetalle from "./componentes/ProductoDetalle.jsx";
import Encabezado from "./componentes/Encabezado.jsx";
import Footer from "./componentes/Footer.jsx";
import Reservas from "./componentes/Reservas.jsx";

import Contacto from "./componentes/Contacto.jsx";
import Acercanosotros from "./componentes/Acercanosotros.jsx";

const MisRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Encabezado/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/producto/:categoria/:id" element={<ProductoDetalle />} />
                    <Route path="/reservas" element={<Reservas />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/nosotros" element={<Acercanosotros />} />





                </Routes>
               
            </BrowserRouter>
            <Footer/>
        </>
    );
};

export default MisRoutes; 