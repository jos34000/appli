import { useState, useEffect } from "react"
import { fetch, ResponseType, Body } from "@tauri-apps/api/http"

export default function useStats() {
  const [stats, setStats] = useState([])
  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("Cookie")
    setToken(token)
    fetch("http://192.168.1.3:3000/api/stats", {
      method: "POST",
      responseType: ResponseType.JSON,
      body: Body.json({ token }),
    }).then((response) => {
      setStats(response.data)
    })
  }, [token])

  return { stats }
}
