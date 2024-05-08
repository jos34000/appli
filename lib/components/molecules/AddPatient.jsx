import { format } from "date-fns"
import { fr } from "date-fns/locale"

export default function AddPatient({
  firstname,
  onFirstChange,
  lastName,
  onLastChange,
  age,
  onAgeChange,
  timeslot,
  onTimeChange,
  timeslots,
  email,
  onEmailChange,
  handleOkClick,
  onCancelClick,
}) {
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
                  Nouveau patient
                </h3>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Prénom"
                    value={firstname}
                    onChange={onFirstChange}
                    className="bg-white text-black rounded-sm mb-2 mr-2"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    value={lastName}
                    onChange={onLastChange}
                    className="bg-white text-black rounded-sm mb-2"
                  />
                  <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={onAgeChange}
                    className="bg-white text-black rounded-sm mb-2 mr-2"
                  />
                  <select
                    value={timeslot}
                    onChange={onTimeChange}
                    className="bg-white text-black rounded-sm mb-2"
                  >
                    <option value="">Choisir votre créneau</option>
                    {timeslots.map((timeslot, index) => {
                      const date = new Date(timeslot.timeslot)
                      const utcDate = new Date(
                        date.getUTCFullYear(),
                        date.getUTCMonth(),
                        date.getUTCDate(),
                        date.getUTCHours(),
                        date.getUTCMinutes()
                      )
                      const formattedDate = format(
                        utcDate,
                        "EEEE dd MMMM - HH:mm",
                        { locale: fr }
                      )

                      return (
                        <option key={index} value={timeslot.dispoId}>
                          {formattedDate}
                        </option>
                      )
                    })}
                  </select>
                  <input
                    type="email"
                    placeholder="Email du patient"
                    value={email}
                    onChange={onEmailChange}
                    className="bg-white text-black rounded-sm mb-2"
                  />
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
