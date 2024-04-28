import { useState, useEffect } from "react"
import { fetch, ResponseType, Body } from "@tauri-apps/api/http"

export default function useDoctor() {
  const [doctor, setDoctor] = useState("")
  const [token, setToken] = useState(null)

  // Surveiller les changements de token
  useEffect(() => {
    const token = localStorage.getItem("Cookie")
    setToken(token)
  }, [])

  useEffect(() => {
    if (token) {
      // Si le token existe, faire la requête
      const data = { token }

      fetch("http://192.168.1.3:3000/api/WhoAmI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        responseType: ResponseType.JSON,
        body: Body.json(data),
      }).then((response) => {
        setDoctor(response.data)
      })
    }
  }, [token]) // Dépendances de useEffect

  return { doctor }
}
