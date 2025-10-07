import React from "react";
import Portada from "../components/sections/Portada";
import Informacion from "../components/sections/Informacion";
import Galeria from "../components/sections/Galeria";
import Origen from "../components/sections/Origen";

const Home = () => {
  return (
    <div className="main">
      <Portada></Portada>
      <section className="my-25">
        <Informacion></Informacion>
      </section>
      <section>
       <Galeria></Galeria>
      </section>
      <section>
        <Origen></Origen>
      </section>
    </div>
  );
};

export default Home;
