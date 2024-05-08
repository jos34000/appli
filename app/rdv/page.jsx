/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
/* Imports de libarairies */
import { useState } from "react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

/* Imports de fichiers locaux */
import Calendrier from "@/lib/components/atoms/Calendrier"
import Sidepannel from "@/lib/components/molecules/Sidepannel"
import RdvCard from "@/lib/components/atoms/RdvCard"
import useRdv from "@/lib/hooks/useRdv"

function Rdv() {
  const [date, setDate] = useState(new Date().toISOString())
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  const { rdvs } = useRdv(date)

  const handleDateChange = (date) => {
    const isoDate = date.toISOString()
    setDate(isoDate)
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center w-full bg-neutral-900 max-md:max-w-full">
        <div className="justify-center px-6 py-5 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Sidepannel />
            <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-5 justify-center p-4 text-white max-md:flex-wrap max-md:max-w-full">
                  <div className="text-3xl font-bold tracking-tighter">
                    Aujourd'hui
                  </div>
                  <div className="flex flex-col justify-center self-start px-4 py-1.5 text-sm font-medium leading-5 rounded-lg bg-zinc-800">
                    <div className="justify-center bg-zinc-800">
                      Vue mensuelle
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center px-16 py-4 max-md:px-5 max-md:max-w-full">
                  <div className="max-w-full w-[696px]">
                    <Calendrier onDateChange={handleDateChange} />
                  </div>
                </div>
                <div className="self-start mt-5 ml-4 text-2xl font-bold tracking-tight text-white max-md:ml-2.5">
                  Rendez-vous du jour
                </div>
                {rdvs.length < 1 ? (
                  <div>
                    {"Aucun rendez-vous " +
                      format(new Date(date), "eeee dd MMMM", { locale: fr })}
                  </div>
                ) : (
                  rdvs.map((rdv, index) => (
                    <RdvCard
                      key={index}
                      name={
                        rdv.patient
                          ? rdv.patient.firstname + " " + rdv.patient.lastname
                          : ""
                      }
                      time={
                        rdv.dispo
                          ? new Date(rdv.dispo.timeslot).getUTCHours() +
                            "H" +
                            new Date(rdv.dispo.timeslot)
                              .getUTCMinutes()
                              .toString()
                              .padStart(2, "0")
                          : ""
                      }
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
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rdv
