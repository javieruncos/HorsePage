import React from "react";

const Origen = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <main className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* <div
          className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-xl bg-cover bg-center p-8 text-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJIjlqxqEgsqETdBnafAHpE-_Td2V8pC5un_mx9KMXSqvExLPP6gJd_NP9CtHfSFmQc9v_UN5SX8bxpqt3pZS2GWs2P5zKPUSRz6IoT18Hh6EPw9KzTvxiqLGnitdMGJqg1SbRra9OryJMMC0HN8C457w6K4_DTED8bJbgGGB0YiP3HmueKMp6eOgrdh0diqoIN7zJFD_jEPwrqFNGlTWmjcVs-oy5nxwA7J06bHip1F6yyVDIKY6GrYCha9o5BO5e1SNNbwDoTsLK')",
          }}
        >
          <div className="flex max-w-2xl flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Champion Bloodline
            </h1>
            <p className="text-base font-normal text-white/90 sm:text-lg">
              Discover the lineage of a champion. Our horses come from a long
              line of winners, ensuring top performance and exceptional quality.
            </p>
          </div>
          <button className="mt-8 flex h-12 min-w-[84px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg transition-transform hover:scale-105">
            <span className="truncate">View Pedigree</span>
          </button>
        </div> */}

        {/* SECTION: PEDIGREE & AWARDS */}
        {/* <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="px-4 pb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pedigree & Lineage
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-600 rounded-lg overflow-hidden">
                <thead className="bg-[#ff7300] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">
                      Generación
                    </th>
                    <th className="px-6 py-3 text-left font-semibold">Padre</th>
                    <th className="px-6 py-3 text-left font-semibold">Madre</th>
                  </tr>
                </thead>
                <tbody className="bg-[#1a1a1a]">
                  <tr className="border-b border-gray-700">
                    <td className="px-6 py-3">1°</td>
                    <td className="px-6 py-3">Storm Dancer</td>
                    <td className="px-6 py-3">Golden Flame</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-6 py-3">2°</td>
                    <td className="px-6 py-3">Thunder Wind</td>
                    <td className="px-6 py-3">Silver Rose</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">3°</td>
                    <td className="px-6 py-3">Night Runner</td>
                    <td className="px-6 py-3">Moonlight Star</td>
                  </tr>
                </tbody>
              </table>
            </div>
    
          </div>

          <div>
            <h2 className="px-4 pb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Awards & Competitions
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-600 rounded-lg overflow-hidden">
                <thead className="bg-[#ff7300] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Año</th>
                    <th className="px-6 py-3 text-left font-semibold">
                      Evento
                    </th>
                    <th className="px-6 py-3 text-left font-semibold">
                      Premio
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#1a1a1a]">
                  <tr className="border-b border-gray-700">
                    <td className="px-6 py-3">2024</td>
                    <td className="px-6 py-3">National Horse Show</td>
                    <td className="px-6 py-3">Best Stallion</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-6 py-3">2023</td>
                    <td className="px-6 py-3">Andalusian Classic</td>
                    <td className="px-6 py-3">Gold Medal</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">2022</td>
                    <td className="px-6 py-3">Equestrian Excellence</td>
                    <td className="px-6 py-3">Champion Stallion</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
        <div className="container mx-auto px-5 py-10 text-white text-center">
          <h3 className="text-4xl font-semibold mb-10">Pedigree</h3>

          <div className="flex flex-col items-center space-y-10">
            {/* Generación 3 - Abuelos */}
            <div className="grid grid-cols-4 gap-6 w-full max-w-5xl">
              <div className="bg-[#1a1a1a] border border-gray-200 rounded-lg py-4">
                <p className="font-semibold text-[#ff7300]">Thunder Wind</p>
                <p className="text-sm">Abuelo paterno</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-200 rounded-lg py-4">
                <p className="font-semibold text-[#ff7300]">Silver Rose</p>
                <p className="text-sm">Abuela paterna</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg py-4">
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
            <div className="grid grid-cols-2 gap-10 w-full max-w-3xl">
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
              <h4 className="text-2xl font-bold">Romancera</h4>
              <p className="text-sm text-black font-semibold">
                Ejemplar principal
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Origen;
