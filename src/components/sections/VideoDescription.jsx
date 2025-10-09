import React from "react";

const VideoDescription = () => {
  return (

    <div className="my-10 container px-5 mx-auto">
      <div className="my-10">
        <h1 className="text-3xl  text-center md:text-start font-bold mb-4 text-white">
          Video descripcion
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18 md:gap-6 text-white">
        {/* Card 1 */}
        <div className=" rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-102 hover:shadow-2xl">
          <div className="h-[300px] overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/1838569/pexels-photo-1838569.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Andanza en montura</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              reprehenderit, laudantium dignissimos perspiciatis magni itaque
              ratione minima similique ipsa tempore temporibus.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className=" rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-102 hover:shadow-2xl">
          <div className="h-[300px] overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/1838569/pexels-photo-1838569.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Amanzamiento</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              reprehenderit, laudantium dignissimos perspiciatis magni itaque
              ratione minima similique ipsa tempore temporibus.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className=" rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-102 hover:shadow-2xl">
          <div className="h-[300px] overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/1838569/pexels-photo-1838569.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Andanza en montura</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              reprehenderit, laudantium dignissimos perspiciatis magni itaque
              ratione minima similique ipsa tempore temporibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
