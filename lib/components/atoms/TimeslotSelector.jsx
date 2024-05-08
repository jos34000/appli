/* Import des librairies */
import { useState } from "react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

/* Composant */
export default function TimeslotSelector({ onTimeChange, timeslots }) {
  const [timeslot, setTimeslot] = useState(
    new Date().toISOString().split("T")[0]
  )

  /* Gestion du changement de la valeur */
  const handleTimeChange = (e) => {
    setTimeslot(e.target.value)
    onTimeChange && onTimeChange(e.target.value)
  }

  return (
    <div>
      <select
        value={timeslot.timeslot}
        onChange={handleTimeChange}
        className="bg-white text-black rounded-sm mb-2"
      >
        <option value="">Choisir votre créneau</option>
        {timeslots &&
          timeslots.length > 0 &&
          timeslots.map((timeslot, index) => {
            const date = new Date(timeslot.timeslot)
            const utcDate = new Date(
              date.getUTCFullYear(),
              date.getUTCMonth(),
              date.getUTCDate(),
              date.getUTCHours(),
              date.getUTCMinutes()
            )
            const formattedDate = format(utcDate, "EEEE dd MMMM - HH:mm", {
              locale: fr,
            })

            return (
              <option key={index} value={timeslot.timeslot}>
                {formattedDate}
              </option>
            )
          })}
      </select>
    </div>
  )
}
