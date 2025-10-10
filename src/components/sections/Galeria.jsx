import horse from "../../assets/img/horse.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/style/styleSlider.css";

const Galeria = () => {
  return (
    <div className="relative h-[660px] flex items-center justify-center overflow-hidden">
      {/* Fondo */}
      <img
        src="https://images.pexels.com/photos/1996332/pexels-photo-1996332.jpeg"
        alt="Fondo"
        className="absolute top-0 left-0 h-full w-full object-cover filter grayscale"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-full max-w-7xl px-5 md:px-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-10"
          >
            <SwiperSlide>
              <div className="h-[420px] sm:h-[500px] rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1838569/pexels-photo-1838569.jpeg"
                  alt="Caballo 1"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[420px] sm:h-[500px] rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/171256/pexels-photo-171256.jpeg"
                  alt="Caballo 2"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[420px] sm:h-[500px] rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1996332/pexels-photo-1996332.jpeg"
                  alt="Caballo 3"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[420px] sm:h-[500px] rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/53114/horse-arabs-stallion-ride-53114.jpeg"
                  alt="Caballo 4"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
