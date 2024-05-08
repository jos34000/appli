import { useState, useEffect } from "react"
import { fetch, Body, ResponseType } from "@tauri-apps/api/http"

export default function useTimeslots() {
  const [timeslots, setTimeslots] = useState([])

  useEffect(() => {
    const date = new Date().toISOString().split("T")[0]
    const token = localStorage.getItem("Cookie")

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
  }, [])

  return timeslots
}
