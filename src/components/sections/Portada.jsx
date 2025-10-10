import imgPortada from "../../assets/img/horse.png";
import sello from "../../assets/img/sello3.png";
import { motion } from "framer-motion";

const Portada = () => {
  return (
    <div className="portada mt-15 sm:mt-10 md:mt-0 h-[500px] sm:h-[600px] md:h-[660px] bg-black flex items-center justify-center relative overflow-hidden">
      <img
        src={imgPortada}
        alt="caballo"
        className="w-full h-[500px] sm:h-[600px] md:h-[660px] object-cover object-center bg-black"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/25 sm:bg-black/30 md:bg-black/40 flex items-center">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full h-full relative px-4 sm:px-10 md:px-0">
          {/* COLUMNA DE TEXTO */}
          <motion.div
            className="relative flex-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="px-4 sm:px-6 md:px-13 py-4 md:py-30 text-center md:text-left">
              {/* Breadcrumb */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base mt-5">
                <p className="text-[#606164] font-bold">DSB</p>
                <i className="bi bi-chevron-right text-[#ff7300]"></i>
                <p className="text-[#606164] font-bold">PERUANA</p>
                <i className="bi bi-chevron-right text-[#ff7300]"></i>
                <p className="text-[#606164] font-bold">ALTANERA</p>
              </div>

              {/* Título */}
              <h1 className="text-3xl sm:text-4xl text-white font-bold my-5  md:mt-0">
                ALTANERA <span className="text-[#ff7300]">DSB</span>
              </h1>

              {/* Datos */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start flex-wrap mt-10 px-2 gap-4 sm:gap-8 md:gap-10 h-[150px] md:h-auto">
                <div className="hidden md:block">
                  <p className="text-[#5c5c5f] md:text-[#3e3f43] font-bold text-sm sm:text-base">
                    GÉNERO
                  </p>
                  <p className="text-white font-bold text-sm sm:text-base">
                    Hembra
                  </p>
                </div>
                <div className="hidden md:block">
                  <p className="text-[#5c5c5f] md:text-[#3e3f43] font-bold text-sm sm:text-base">
                    NACIMIENTO
                  </p>
                  <p className="text-white font-bold text-sm sm:text-base">
                    2022-01-01
                  </p>
                </div>
                <div className="hidden md:block">
                  <p className="text-[#5c5c5f] md:text-[#3e3f43] font-bold text-sm sm:text-base">
                    ALTURA
                  </p>
                  <p className="text-white font-bold text-sm sm:text-base">
                    1,60
                  </p>
                </div>
              </div>

              {/* Descripción + botón */}
              <div className="w-full sm:w-[400px] md:w-[350px] text-white px-2 sm:px-0  mt-5 md:mt-7 mx-auto md:mx-0 text-sm sm:text-base">
                <p>
                  Majestuoso y equilibrado, este caballo destaca por su
                  elegancia, potencia y temperamento noble. Su conformación
                  armoniosa y su andar firme reflejan años de cuidado y
                  entrenamiento.
                </p>
                <div className="mt-7 flex justify-center md:justify-start">
                  <button className="border border-[#ff7300] text-white py-2 px-10 sm:px-14 md:px-16 hover:bg-[#ff7300] cursor-pointer transition-colors duration-300">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SELLO (oculto en móviles, visible desde tablet grande) */}
          <motion.div
            className="relative hidden lg:block px-20"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-[250px] lg:w-[300px] h-full flex items-center justify-start">
              <img src={sello} alt="sello" className="max-w-full pt-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portada;
