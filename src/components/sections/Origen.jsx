import React from "react";

const Origen = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="container mx-auto px-5 py-10 text-white text-center">
          <h3 className="text-4xl font-semibold mb-10">Pedigree</h3>
          <div className="flex flex-col items-center space-y-10">
            {/* Generación 3 - Abuelos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
              <div className="bg-[#1a1a1a] border border-gray-200 rounded-lg py-4">
                <p className="font-semibold text-[#ff7300]">Thunder Wind</p>
                <p className="text-sm">Abuelo paterno</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-200 rounded-lg py-4">
                <p className="font-semibold text-[#ff7300]">Silver Rose</p>
                <p className="text-sm">Abuela paterna</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-200 rounded-lg py-4">
                <p className="font-semibold text-[#ff7300]">Night Runner</p>
                <p className="text-sm">Abuelo materno</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-200 rounded-lg py-4">
                <p className="font-semibold text-[#ff7300]">Moonlight Star</p>
                <p className="text-sm">Abuela materna</p>
              </div>
            </div>

            {/* Conexión visual */}
            <div className="w-1 h-10 bg-[#ff7300]"></div>

            {/* Generación 2 - Padres */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
              <div className="bg-[#1a1a1a] border border-gray-200 rounded-lg py-5">
                <p className="font-semibold text-[#ff7300]">Storm Dancer</p>
                <p className="text-sm">Padre</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-200 rounded-lg py-5">
                <p className="font-semibold text-[#ff7300]">Golden Flame</p>
                <p className="text-sm">Madre</p>
              </div>
            </div>

            {/* Conexión visual */}
            <div className="w-1 h-10 bg-[#ff7300]"></div>

            {/* Generación 1 - Animal principal */}
            <div className="bg-[#ff7300] rounded-lg py-6 px-10 shadow-lg w-fit">
              <h4 className="text-2xl font-bold">ALTANERA</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Origen;
