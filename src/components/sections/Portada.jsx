import imgPortada from "../../assets/img/horse.png";
import sello from "../../assets/img/sello3.png";

const Portada = () => {
  return (
    <div className="portada md:h-[660px] bg-black flex items-center justify-center relative md:overflow-hidden">
      <img
        src={imgPortada}
        alt="caballo"
        className="w-full h-[500px] sm:h-[600px] md:h-[660px] object-contain md:object-cover object-center bg-black "
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/35 md:bg-black/40 flex items-center">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full h-full relative">
          {/* COLUMNA DE TEXTO */}
          <div className="px-6 md:px-10 py-10 md:py-20 flex-1 z-10 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 text-sm md:text-base">
              <p className="text-[#3e3f43] font-bold">DSB</p>
              <i className="bi bi-chevron-right text-[#ff7300]"></i>
              <p className="text-[#3e3f43] font-bold">PERUANA</p>
              <i className="bi bi-chevron-right text-[#ff7300]"></i>
              <p className="text-[#3e3f43] font-bold">ALTANERA</p>
            </div>

            <h1 className="text-3xl md:text-4xl text-white font-bold my-5">
              ALTANERA <span className="text-[#ff7300]">DSB</span>
            </h1>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start flex-wrap mt-10 px-2 gap-6 md:gap-10 h-[200px] md:h-auto">
              <div className="hidden md:block">
                <p className="text-[#5c5c5f] md:text-[#3e3f43] font-bold text-sm md:text-base">
                  GENERO
                </p>
                <p className="text-white font-bold text-sm md:text-base">
                  Hembra
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[#5c5c5f] md:text-[#3e3f43] font-bold text-sm md:text-base">
                  NACIMIENTO
                </p>
                <p className="text-white font-bold text-sm md:text-base">
                  2022-01-01
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[#5c5c5f] md:text-[#3e3f43] font-bold text-sm md:text-base">
                  ALTURA
                </p>
                <p className="text-white font-bold text-sm md:text-base">
                  1,60
                </p>
              </div>
            </div>

            <div className="w-full md:w-[350px] text-white px-2 mt-7 mx-auto md:mx-0 text-sm md:text-base">
              <p>
                Majestuoso y equilibrado, este caballo destaca por su elegancia,
                potencia y temperamento noble. Su conformación armoniosa y su
                andar firme reflejan años de cuidado y entrenamiento.
              </p>
              <div className="mt-7 flex justify-center md:justify-start">
                <button className="border border-[#ff7300] text-white py-2 px-12 md:px-16 hover:bg-[#ff7300] cursor-pointer">
                  Ver mas
                </button>
              </div>
            </div>
          </div>
          <div className="px-30  relative hidden md:block ">
            <div className="w-[300px] h-full  text-amber-50 flex items-center justify-start">
              <div className="relative pt-50 ">
                <img src={sello} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portada;
