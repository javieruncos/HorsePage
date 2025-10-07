import imgPortada from "../../assets/img/horse.png";

const Portada = () => {
  return (
    <div className="portada h-[660px] bg-black flex items-center justify-center relative">
      <img
        src={imgPortada}
        alt="caballo"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 ">
        <div className="px-10 py-30">
          <div className="flex gap-3">
            <p className="text-1xl text-[#3e3f43] font-bold">DSV</p>
            <p className="text-1xl text-[#3e3f43] font-bold">PERUANA</p>
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
              andar firme reflejan años de cuidado y entrenamiento. Con una
              genética excepcional y un carácter dócil, es ideal para la
              exhibición.
            </p>
            <div className="mt-7">
              <button className="border border-[#ff7300] text-white py-2 px-16 hover:bg-[#ff7300] cursor-pointer">Ver mas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portada;
