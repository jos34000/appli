"use client"
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import Sidepannel from "@/lib/components/molecules/Sidepannel"
import PatientCard from "@/lib/components/atoms/PatientCard"
import AddPatient from "@/lib/components/molecules/AddPatient"
import usePatients from "@/lib/hooks/usePatients"
import useExportPatient from "@/lib/hooks/useExportPatient"

export default function Patients() {
  const { patients } = usePatients()

  const [search, setSearch] = useState("")
  const [filteredPatients, setFilteredPatients] = useState([])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const [timeslot, setTimeslot] = useState("")
  const [email, setEmail] = useState("")

  const handleOkClick = () => {
    useExportPatient(firstName, lastName, age, timeslot, email)
    setIsModalOpen(false)
  }

  useEffect(() => {
    setFilteredPatients(
      patients.filter(
        (patient) =>
          patient.patient.firstname
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          patient.patient.lastname.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, patients])

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center w-full bg-neutral-900 max-md:max-w-full">
        <div className="justify-center px-6 py-5 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Sidepannel />
            <main className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-20 max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-5 justify-center p-4 text-white max-md:flex-wrap max-md:max-w-full">
                  <h1 className="text-3xl font-bold tracking-tighter">
                    Patients
                  </h1>
                  <div className="flex flex-col justify-center self-start px-4 py-1.5 text-sm font-medium leading-5 rounded-lg bg-zinc-800">
                    <button
                      className="justify-center bg-zinc-800"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Nouveau patient
                    </button>
                  </div>
                  {isModalOpen && (
                    <AddPatient
                      firstname={firstName}
                      onFirstChange={(e) => setFirstName(e.target.value)}
                      lastName={lastName}
                      onLastChange={(e) => setLastName(e.target.value)}
                      age={age}
                      onAgeChange={(e) => setAge(e.target.value)}
                      timeslot={timeslot}
                      onTimeChange={(e) => setTimeslot(e.target.value)}
                      email={email}
                      onEmailChange={(e) => setEmail(e.target.value)}
                      handleOkClick={handleOkClick}
                      onCancelClick={() => setIsModalOpen(false)}
                    />
                  )}
                </div>
                <form className="flex gap-3 px-4 py-3 mx-4 mt-3 text-base leading-6 rounded-lg bg-zinc-800 text-stone-300 max-md:flex-wrap max-md:mr-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6df88360f17ab1aeb0d2a83ca3f900b7789d760e9e63c7ca0bdf2b106f38a91a?apiKey=3f0228c97dfd4d3398207a5ad823f317&"
                    alt=""
                    className="shrink-0 w-6 aspect-square"
                  />
                  <label htmlFor="search" className="sr-only">
                    Rechercher des patients par nom
                  </label>
                  <input
                    type="search"
                    id="search"
                    placeholder="Rechercher des patients par nom"
                    aria-label="Rechercher des patients par nom"
                    className="bg-transparent focus:outline-none w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </form>
                {filteredPatients &&
                  filteredPatients.length > 0 &&
                  filteredPatients.map((patient, index) => (
                    <PatientCard
                      key={index}
                      firstname={patient.patient.firstname}
                      lastname={patient.patient.lastname}
                      age={patient.patient.age}
                      icon={patient.patient.firstname}
                    />
                  ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
