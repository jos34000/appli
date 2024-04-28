import { fetch, ResponseType, Body } from "@tauri-apps/api/http"

export default function useExportPatient(
  firstName,
  lastName,
  age,
  timeslot,
  email
) {
  const token = localStorage.getItem("Cookie")

  if (token) {
    fetch("http://192.168.1.3:3000/api/addPatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: ResponseType.JSON,
      body: Body.json({ token, firstName, lastName, age, timeslot, email }),
    })
  }

  return
}
