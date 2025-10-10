import horse from "../../assets/img/horse.png";

const Informacion = () => {
  return (
    <div className="text-white container px-5 mx-auto md:mt-20">
      {/* SECCIÓN PRINCIPAL */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-10">
        {/* TEXTO */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left">
            Caracteristicas Destacadas
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-justify md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            fugit omnis culpa sint laborum, eligendi deserunt ex rerum, soluta
            corrupti impedit est adipisci commodi facilis ipsam facere?
            Consequatur odio numquam eveniet minima minus ipsum nulla laborum
            corrupti impedit explicabo. Facere, ducimus? Id quisquam aperiam
            cum? Impedit quasi rerum sint alias? Quidem vitae consequuntur porro
            voluptas placeat fuga, maxime doloremque iure delectus ducimus
            fugiat aliquam unde eos quod libero totam error illo veritatis
            provident ipsa molestias. Natus sequi nihil eum. Deleniti, vero
            explicabo porro ipsam adipisci cum. Tenetur quod sint aperiam? Id
            eius non similique quia nam at, itaque accusamus ducimus, dolorem
            tempora molestias laudantium perspiciatis unde commodi adipisci sed
            corporis veritatis. Ipsum, numquam at fugiat veniam pariatur
            incidunt vero cupiditate nesciunt recusandae labore est temporibus
            hic aperiam dignissimos illum itaque?
          </p>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center md:justify-end">
          <img
            src={horse}
            alt=""
            className="w-full  h-auto rounded-lg object-contain"
          />
        </div>
      </div>

      {/* TABLAS DE INFORMACIÓN */}
      <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Columna 1 */}
        <div className="rounded-xl shadow-md pt-6 bg-black/20">
          <h2 className="text-xl font-bold text-orange-500 mb-4 text-center md:text-left">
            Características
          </h2>
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex justify-between border-b pb-2 flex-wrap">
              <span className="font-medium">Nombre</span>
              <span>Altanera DSB</span>
            </div>
            <div className="flex justify-between border-b pb-2 flex-wrap">
              <span className="font-medium">Raza</span>
              <span>Peruano</span>
            </div>
            <div className="flex justify-between border-b pb-2 flex-wrap">
              <span className="font-medium">Edad</span>
              <span>6 años</span>
            </div>
            <div className="flex justify-between border-b pb-2 flex-wrap">
              <span className="font-medium">Sexo</span>
              <span>Hembra</span>
            </div>
            <div className="flex justify-between border-b pb-2 flex-wrap">
              <span className="font-medium">Altura</span>
              <span>1.68 m</span>
            </div>
          </div>
          
        </div>
        {/* Columna 2 */}
        <div className="rounded-xl shadow-md pt-6 bg-black/20">
          <h2 className="text-xl font-bold text-orange-500 mb-4 text-center md:text-left">
            Más Información
          </h2>
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex justify-between border-b pb-2 flex-wrap">
              <span className="font-medium">Peso</span>
              <span>520 kg</span>
            </div>
            <div className="flex justify-between border-b pb-2 flex-wrap">
              <span className="font-medium">Color</span>
              <span>Alazán oscuro</span>
            </div>
            <div className="flex justify-between border-b pb-2 flex-wrap">
              <span className="font-medium">Temperamento</span>
              <span>Noble, enérgico y obediente</span>
            </div>
            <div className="flex justify-between border-b pb-2 flex-wrap">
              <span className="font-medium">Procedencia</span>
              <span>Córdoba, Argentina</span>
            </div>
            <div className="flex justify-between border-b pb-2 flex-wrap">
              <span className="font-medium">Disponibilidad</span>
              <span>En venta y disponible para competencias</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
