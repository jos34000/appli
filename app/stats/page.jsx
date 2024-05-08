"use client"
import Sidepannel from "@/lib/components/molecules/Sidepannel"
import StatCard from "@/lib/components/atoms/StatCard"
import useStats from "@/lib/hooks/useStats"
import exportStats from "@/lib/hooks/exportStats.js"

function Stats() {
  const { stats } = useStats()

  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col justify-center w-full bg-neutral-900 max-md:max-w-full">
        <div className="justify-center px-6 py-5 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Sidepannel />
            <main className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-20 max-md:mt-6 max-md:max-w-full">
                <header className="flex gap-5 justify-center p-4 text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <h1 className="text-3xl font-bold tracking-tighter">
                    Statistiques
                  </h1>
                  <button
                    className="flex flex-col justify-center self-start px-4 py-1.5 text-sm font-medium leading-5 rounded-lg bg-zinc-800"
                    onClick={exportStats}
                  >
                    Exportation
                  </button>
                </header>
                <div className="flex gap-3 py-3 pr-20 pl-3 text-sm font-medium leading-5 text-white whitespace-nowrap max-md:flex-wrap max-md:pr-5">
                  <button className="justify-center px-4 py-1.5 rounded-lg bg-zinc-800">
                    Consultations
                  </button>
                  <button className="justify-center px-4 py-1.5 rounded-lg bg-zinc-800">
                    Rendez-vous
                  </button>
                  <button className="justify-center px-4 py-1.5 rounded-lg bg-zinc-800">
                    Patients
                  </button>
                </div>

                <section className="justify-center p-4 mt-3 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {stats &&
                      Object.entries(stats).map(([key, value], index) => (
                        <div
                          key={index}
                          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                        >
                          <StatCard
                            label={key}
                            value={value.Nombre}
                            change={value["Pourcentage de changement"]}
                          />
                        </div>
                      ))}
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Stats
