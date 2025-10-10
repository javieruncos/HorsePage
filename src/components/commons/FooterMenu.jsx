import React from "react";

const FooterMenu = () => {
  return (
    // <div className="py-10 bg-[#1a1a1a] mt-25">
    //   <div className="flex justify-center items-center">
    //     <h1 className="text-2xl font-bold text-white">DSB PERUANA <span className="text-[#ff7300]">ALTANERA</span></h1>
    //   </div>
    // </div>
    <div className="bg-[#1a1a1a] mt-25 text-white">
      {/* Sección superior */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-2">
            DSB PERUANA <span className="text-[#ff7300]">ALTANERA</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-xs text-center md:text-left">
            Majestuoso y elegante, destacando por su temperamento noble y su
            andar firme.
          </p>

          {/* Redes sociales */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-[#ff7300]">
              <i className="bi bi-facebook text-2xl"></i>
            </a>
            <a href="#" className="hover:text-[#ff7300]">
              <i className="bi bi-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-[#ff7300]">
              <i className="bi bi-youtube text-2xl"></i>
            </a>
            <a href="#" className="hover:text-[#ff7300]">
              <i className="bi bi-twitter text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">Secciones</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-[#ff7300] cursor-pointer transition-all duration-300 relative group">
              Inicio
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ff7300] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="hover:text-[#ff7300] cursor-pointer transition-all duration-300 relative group">
              Sobre Nosotros
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ff7300] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="hover:text-[#ff7300] cursor-pointer transition-all duration-300 relative group">
              Galería
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ff7300] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="hover:text-[#ff7300] cursor-pointer transition-all duration-300 relative group">
              Contacto
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ff7300] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
        {/* Contacto */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4">Contacto</h2>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <i className="bi bi-geo-alt-fill"></i> Córdoba, Argentina
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <i className="bi bi-envelope-fill"></i> contacto@dsbaltanera.com
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <i className="bi bi-telephone-fill"></i> +54 9 351 123 4567
          </p>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="border-t border-gray-700 py-4">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DSB PERUANA ALTANERA. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default FooterMenu;
