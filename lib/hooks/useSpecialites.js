import { useState, useEffect } from "react"
import { fetch, ResponseType } from "@tauri-apps/api/http"

export default function useSpecialites() {
  const [specialites, setSpecialites] = useState([])

  useEffect(() => {
    fetch("http://192.168.1.3:3000/api/findSpecialites", {
      method: "GET",
      responseType: ResponseType.JSON,
    }).then((response) => {
      setSpecialites(response.data)
      console.log(specialites)
    })
  }, [])

  return { specialites }
}
