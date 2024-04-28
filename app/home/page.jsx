"use client"
/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Sidepannel from "@/lib/components/molecules/Sidepannel"
import RdvCard from "@/lib/components/atoms/RdvCard"
import useRdv from "@/lib/hooks/useRdv"
import useDoctor from "@/lib/hooks/useDoctor"

function Home() {
  const [date, setDate] = useState(new Date())
  const { rdvs } = useRdv(date)
  const { doctor } = useDoctor()

  return (
    <div className="justify-center px-6 py-5 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <Sidepannel />
        <main className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pb-20 max-md:mt-6 max-md:max-w-full">
            <header className="flex flex-col items-start py-4 pr-20 pl-4 max-md:pr-5 max-md:max-w-full">
              <h1 className="text-4xl font-black tracking-tighter text-white">
                Bonjour, Dr. {doctor.lastname || "Smith"}
              </h1>
              <p className="mt-3 text-base leading-6 text-stone-300">
                Vos rendez-vous de la journée
              </p>
            </header>
            <h2 className="self-start mt-8 ml-4 text-2xl font-bold tracking-tight text-white max-md:ml-2.5">
              Rendez-vous
            </h2>
            {rdvs &&
              rdvs.length > 0 &&
              rdvs.map((rdv, index) => (
                <RdvCard
                  key={index}
                  name={
                    rdv.patient
                      ? rdv.patient.firstname + " " + rdv.patient.lastname
                      : ""
                  }
                  time={rdv.dispo ? rdv.dispo.timeslot : ""}
                  reason={rdv.motif || "Aucun motif renseigné"}
                  history={
                    rdv.patient &&
                    rdv.patient.Patienthistory &&
                    rdv.patient.Patienthistory[0] &&
                    rdv.patient.Patienthistory[0].history
                      ? rdv.patient.Patienthistory[0].history.antecedent
                      : "Aucun"
                  }
                />
              ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
