import imgPortada from "../../assets/img/horse.png";
import sello from "../../assets/img/sello3.png";

const Portada = () => {
  return (
    //seccion portada
    <div className="portada h-[660px] bg-black flex items-center justify-center relative">
      <img
        src={imgPortada}
        alt="caballo"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 ">
        <div className="flex justify-between h-full relative">
          <div className="px-10 py-20 ">
            <div className="flex gap-3">
              <p className="text-1xl text-[#3e3f43] font-bold">DSB</p>
              <i className="bi bi-chevron-right text-[#ff7300]"></i>
              <p className="text-1xl text-[#3e3f43] font-bold">PERUANA</p>
              <i class="bi bi-chevron-right text-[#ff7300]"></i>
              <p className="text-1xl text-[#3e3f43] font-bold">ROMANCERA</p>
            </div>
            <h1 className="text-4xl text-white font-bold my-5">
              ROMANCERA <span className="text-[#ff7300]">HORSE</span>
            </h1>
            <div className="flex mt-15 px-2 gap-10">
              <div>
                <p className="text-1xl text-[#3e3f43] font-bold">GENERO</p>
                <p className="text-1xl text-white font-bold">Hembra</p>
              </div>
              <div>
                <p className="text-1xl text-[#3e3f43] font-bold">NACIMIENTO</p>
                <p className="text-1xl text-white font-bold">2022-01-01</p>
              </div>
              <div>
                <p className="text-1xl text-[#3e3f43] font-bold">ALTURA</p>
                <p className="text-1xl text-white font-bold">1,60</p>
              </div>
            </div>
            <div className="w-[350px] text-white px-2 mt-7">
              <p>
                Majestuoso y equilibrado, este caballo destaca por su elegancia,
                potencia y temperamento noble. Su conformación armoniosa y su
                andar firme reflejan años de cuidado y entrenamiento. 
              </p>
              <div className="mt-7">
                <button className="border border-[#ff7300] text-white py-2 px-16 hover:bg-[#ff7300] cursor-pointer">
                  Ver mas
                </button>
              </div>
            </div>
          </div>

          <div className="px-30  relative ">
            <div className="w-[300px] h-full  text-amber-50 flex items-center justify-start">
              <div className="relative pt-50 ">
                {/* <hr className="border-1 w-[300px] border-[#3e3f43] my-3" />
                <p className="text-[#666769]">
                  Majestuoso y equilibrado, este caballo destaca por su
                  elegancia, potencia y temperamento noble. Su conformación
                  armoniosa y su andar firme reflejan años de cuidado y
                  entrenamiento. Con una genética excepcional y un carácter
                  dócil, es ideal para la exhibición.
                </p> */}
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
