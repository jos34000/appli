import { useState, useEffect } from "react"
import { fetch, ResponseType, Body } from "@tauri-apps/api/http"

export default function useRdv(isoDate) {
  const [rdvs, setRdvs] = useState([])
  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("Cookie")
    setToken(token)
  }, [])

  useEffect(() => {
    if (token) {
      const date = new Date(isoDate)
      const data = { token, date: date.toISOString() }

      fetch("http://192.168.1.3:3000/api/findRdvs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        responseType: ResponseType.JSON,
        body: Body.json(data),
      }).then((response) => {
        setRdvs(response.data)
      })
    }
  }, [token, isoDate])

  useEffect(() => {
    console.log(rdvs)
  }, [rdvs])

  return { rdvs }
}
