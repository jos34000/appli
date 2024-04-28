import { confirm } from "@tauri-apps/api/dialog"
import { fetch, Body } from "@tauri-apps/api/http"

const handleSignin = async (formValues) => {
  const {
    prenom,
    nom,
    email,
    confirmEmail,
    mdp,
    confirmMdp,
    specialite,
    mentions,
  } = formValues

  if (
    !prenom ||
    !nom ||
    !email ||
    !confirmEmail ||
    !mdp ||
    !confirmMdp ||
    !specialite
  ) {
    const erreur = await confirm(
      "Merci de remplir tous les champs obligatoires",
      { title: "HealthCare", type: "error", cancelLabel: "Retour" }
    )

    return
  }

  if (mentions !== true) {
    const erreur = await confirm("Merci d'accepter les mentions légales", {
      title: "HealthCare",
      type: "warning",
      cancelLabel: "Retour",
    })
    return
  }

  if (email !== confirmEmail) {
    const erreur = await confirm("L'e-mail ne correspond pas", {
      title: "HealthCare",
      type: "warning",
      cancelLabel: "Retour",
    })
    return
  }

  if (mdp !== confirmMdp) {
    const erreur = await confirm("Les mots de passe ne sont pas identiques", {
      title: "HealthCare",
      type: "warning",
      cancelLabel: "Retour",
    })
    return
  }
  const data = {
    prenom,
    nom,
    email,
    mdp,
    specialite,
  }
  fetch("http://192.168.1.3:3000/api/createDoctor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: Body.json(data),
  }).then(async (response) => {
    if (!response.ok) {
      const erreur = await confirm(
        "Une erreur est survenue lors de la création de votre compte",
        { title: "HealthCare", type: "error", cancelLabel: "Retour" }
      )
    } else {
      window.location.href = "/login"
    }
  })

  return handleSignin
}

export default handleSignin
