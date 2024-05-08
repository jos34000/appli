/* Import de librairies */
import { useState, useEffect } from "react"
import { fetch, Body } from "@tauri-apps/api/http"

export default function searchPatient({ onPatientIdChange }) {
  const [search, setSearch] = useState("")
  const [patients, setPatients] = useState([])
  const [patientId, setPatientId] = useState()
  const token = localStorage.getItem("Cookie")
  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    console.log(patientId)
  }, [patientId])

  const handlePatientClick = (patient) => {
    setPatientId(patient.patientId)
    setSearch(`${patient.patient.firstname} ${patient.patient.lastname}`)
    onPatientIdChange && onPatientIdChange(patient.patientId)
  }

  useEffect(() => {
    fetch("http://192.168.1.3:3000/api/findPatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: Body.json({
        search,
        token,
      }),
    }).then((response) => setPatients(response.data))
  }, [search])

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Rechercher un patient"
        value={search}
        onChange={onSearchChange}
        className="bg-white text-black rounded-sm mb-2"
      />
      {search && (
        <div className="absolute bg-white text-black rounded-sm">
          {patients.map((patient, index) => (
            <div
              key={index}
              onClick={() => handlePatientClick(patient)}
              className="cursor-pointer p-2 hover:bg-gray-200"
            >
              {patient.patient.firstname} {patient.patient.lastname}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
