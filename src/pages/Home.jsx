import React from "react";
import Portada from "../components/sections/Portada";
import Informacion from "../components/sections/Informacion";
import Galeria from "../components/sections/Galeria";
import Origen from "../components/sections/Origen";
import VideoDescription from "../components/sections/VideoDescription";

const Home = () => {
  return (
    <div className="main">
      <Portada></Portada>
      <section>
        <Informacion></Informacion>
      </section>
      <section className="my-30">
       <Galeria></Galeria>
      </section>
      <section>
        <VideoDescription></VideoDescription>
      </section>
    </div>
  );
};

export default Home;
