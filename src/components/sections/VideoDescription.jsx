import ReactPlayer from "react-player";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoDescription = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleOpen = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  return (
    <div className="my-10 container px-5 mx-auto">
      <div className="my-5">
        <h1 className="text-3xl text-center md:text-start font-bold mb-3 text-white">
          Video descripción
        </h1>
      </div>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
        <div
          onClick={() =>
            handleOpen("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
          }
          className="cursor-pointer rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl my-6"
        >
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem at magni voluptatibus ratione excepturi placeat numquam
              enim! Voluptatem, tenetur tempora.
            </p>
          </div>
        </div>

        <div
          onClick={() => handleOpen("/videos/entrenamiento.mp4")}
          className="cursor-pointer rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl my-6"
        >
          <div className="h-[300px] overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/461717/pexels-photo-461717.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Amanzamiento</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem at magni voluptatibus ratione excepturi placeat numquam
              enim! Voluptatem, tenetur tempora.
            </p>
          </div>
        </div>

        <div
          onClick={() =>
            handleOpen("https://www.youtube.com/watch?v=jNQXAC9IVRw")
          }
          className="cursor-pointer rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl my-6"
        >
          <div className="h-[300px] overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/1996330/pexels-photo-1996330.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Entrenamiento</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem at magni voluptatibus ratione excepturi placeat numquam
              enim! Voluptatem, tenetur tempora.
            </p>
          </div>
        </div>
      </div>

      {/* MODAL VIDEO CON ANIMACIÓN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90%] max-w-3xl rounded-lg overflow-hidden
             h-[60vh] sm:h-[70vh] md:h-[80vh]"
            >
              <ReactPlayer
                url={videoUrl}
                controls
                playing
                width="100%"
                height="100%"
              />
              {/* BOTÓN CERRAR */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black px-3 py-1 rounded-full"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoDescription;
