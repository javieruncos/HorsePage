import horse from "../../assets/img/horse.png";

const Informacion = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 container px-5 py-5  bg-opacity-60 rounded-2xl ">
        <div className="flex justify-center">
          <img src={horse} alt="Caballo" className="w-full rounded-xl" />
        </div>

        <div className="text-white pl-8">
          <h3 className="text-3xl font-semibold mb-4">Título Descripcion</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            molestias cupiditate consectetur hic numquam. A repudiandae quisquam
            optio voluptas eveniet. Beatae optio sint, ad at velit quam ullam,
            laudantium animi nostrum vel deserunt illum maiores corporis harum
            doloremque autem modi nihil ratione fugiat. A odio exercitationem
            saepe vel. Quasi maiores labore modi fugit ut debitis earum porro
            beatae repudiandae quisquam! Quos saepe necessitatibus sapiente ut
            quam velit ad fugiat! Sint omnis rem dignissimos impedit voluptates
            repellendus, ex error expedita magnam ratione maiores fugiat nemo
            inventore voluptate eaque incidunt consequuntur ea. Reiciendis
            facilis sit fuga? Et odit sunt quod perferendis voluptate!
          </p>
          <div className="mt-7">
            <button className="border-2 border-[#ff7300] py-2 px-7 ">Ver mas</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
