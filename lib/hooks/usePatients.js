"use client"
import { useState, useEffect } from "react"
import { fetch, ResponseType, Body } from "@tauri-apps/api/http"

export default function usePatients() {
  const [patients, setPatients] = useState([])
  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("Cookie")
    setToken(token)
  }, [])

  useEffect(() => {
    if (token) {
      fetch("http://192.168.1.3:3000/api/findPatients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        responseType: ResponseType.JSON,
        body: Body.json({ token }),
      }).then((response) => {
        const uniquePatients = response.data.reduce((unique, patient) => {
          if (!unique.some((item) => item.patientId === patient.patientId)) {
            unique.push(patient)
          }
          return unique
        }, [])
        setPatients(uniquePatients)
      })
    }
  }, [token])

  return { patients }
}
