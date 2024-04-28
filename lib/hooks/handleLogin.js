import { confirm } from "@tauri-apps/api/dialog"
import { fetch, Body, ResponseType } from "@tauri-apps/api/http"

const handleLogin = async (formValues) => {
  const { email, mdp } = formValues

  if (!email || !mdp) {
    const erreur = await confirm(
      "Merci de remplir tous les champs obligatoires",
      { title: "HealthCare", type: "error", cancelLabel: "Retour" }
    )

    return
  }

  const data = {
    email,
    mdp,
  }
  fetch("http://192.168.1.3:3000/api/connectDoctor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: Body.json(data),
    responseType: ResponseType.JSON,
  }).then(async (response) => {
    if (!response.ok) {
      const erreur = await confirm(
        "Une erreur est survenue lors de la connexion",
        { title: "HealthCare", type: "error", cancelLabel: "Retour" }
      )
    } else {
      console.log(response)

      const { token } = response.data
      localStorage.setItem("Cookie", token)
      window.location.href = "/home"
    }
  })

  return handleLogin
}

export default handleLogin
