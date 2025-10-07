import horse from "../../assets/img/horse.png";

const Galeria = () => {
  return (
    <div className="h-[660px]  flex items-center justify-center relative">
      <img
        src="https://images.pexels.com/photos/1996332/pexels-photo-1996332.jpeg"
        alt=""
        className="h-full w-full object-cover filter grayscale"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center">
        <div className=" w-full bg-black/70 mx-auto absolute grid grid-cols-3 gap-3 px-10">
          <div className="text-white h-[500px]">
            <img
              src="https://images.pexels.com/photos/1838569/pexels-photo-1838569.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-white h-[500px]">
            <img
              src="https://images.pexels.com/photos/171256/pexels-photo-171256.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-white h-[500px]">
            <img
              src="https://images.pexels.com/photos/1996332/pexels-photo-1996332.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
