/* Import de librairies */
import { useState, useEffect } from "react"
import { fetch, Body, ResponseType } from "@tauri-apps/api/http"

/* Import de fichiers locaux */
import SearchPatient from "@/lib/components/molecules/SearchPatient"
import DateSelector from "@/lib/components/atoms/DateSelector"
import TimeslotSelector from "@/lib/components/atoms/TimeslotSelector"

export default function AddRdv({ onCancelClick }) {
  /* Values à envoyer pour add a rdv  */
  const token = localStorage.getItem("Cookie")
  const [patientId, setPatientId] = useState(null)
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])
  const [timeslot, setTimeslot] = useState("")
  const [motif, setMotif] = useState("")

  const onMotifChange = (e) => {
    setMotif(e.target.value)
  }

  /* Value à récupérer pour fetch les timeslots */
  const [timeslots, setTimeslots] = useState([])

  /* Fetch à chaque changement de la date pour récupérer les dispos de la journée */
  useEffect(() => {
    fetch("http://192.168.1.3:3000/api/findTimeslots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: Body.json({
        token,
        date,
      }),
      responseType: ResponseType.JSON,
    })
      .then((data) => {
        setTimeslots(data.data)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [date])

  /* Formulaire final à envoyer pour ajouter le RDV  */
  const handleOkClick = async () => {
    const response = await fetch("http://192.168.1.3:3000/api/addRdv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: Body.json({
        patientId,
        timeslot,
        motif,
        token,
      }),
      responseType: ResponseType.JSON,
    })
    console.log(response)

    /* Fermeture de la modale */
    if (response.ok) {
      onCancelClick()
    }
  }

  useEffect(() => {
    console.log(timeslot)
  }, [timeslot])

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          className="inline-block align-bottom bg-zinc-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-zinc-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-green-400"
                  id="modal-headline"
                >
                  Nouvelle consultation
                </h3>
                <div className="mt-2">
                  <SearchPatient onPatientIdChange={setPatientId} />
                  <DateSelector onDateChange={setDate} />
                  <TimeslotSelector
                    onTimeChange={setTimeslot}
                    timeslots={timeslots}
                  />

                  <div>
                    <input
                      type="text"
                      placeholder="Motif de consultation"
                      value={motif}
                      onChange={onMotifChange}
                      className="bg-white text-black rounded-sm mb-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-400 text-base font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleOkClick}
            >
              OK
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onCancelClick}
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
