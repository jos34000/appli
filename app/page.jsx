"use client"
/* eslint-disable react/no-unescaped-entities */
import { useState, React } from "react"
import useSpecialites from "@/lib/hooks/useSpecialites"
import handleSignin from "@/lib/hooks/handleSignin"
import InputField from "@/lib/components/atoms/InputField"
import Link from "next/link"

function Signin() {
  const { specialites } = useSpecialites()
  const [formValues, setFormValues] = useState({})

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleSignin(formValues)
  }

  return (
    <div className="flex flex-col justify-center text-base text-white bg-white ">
      <div className="flex justify-center items-center px-16 py-5 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col px-4 py-5 max-w-full w-[512px]">
          <h1 className="self-center text-2xl font-bold tracking-tight text-center">
            Créer votre compte
          </h1>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              label="Prénom"
              placeholder="Entrez votre prénom"
              name="prenom"
              onChange={handleInputChange}
            />
            <InputField
              type="text"
              label="Nom de famille"
              placeholder="Entrez votre nom de famille"
              name="nom"
              onChange={handleInputChange}
            />
            <InputField
              type="email"
              label="Email"
              placeholder="Entrez votre Email"
              name="email"
              onChange={handleInputChange}
            />
            <InputField
              type="email"
              label="Confirmer l'email"
              placeholder="Confirmez votre Email"
              name="confirmEmail"
              onChange={handleInputChange}
            />
            <InputField
              type="password"
              label="Mot de passe"
              placeholder="Entrez votre mot de passe"
              name="mdp"
              onChange={handleInputChange}
            />
            <InputField
              type="password"
              label="Confirmer le mot de passe"
              placeholder="Confirmez votre mot de passe"
              name="confirmMdp"
              onChange={handleInputChange}
            />

            <InputField
              choice="select"
              label="Spécialité"
              name="specialite"
              placeholder="Choisissez votre spécialité"
              onChange={handleInputChange}
              array={specialites}
              id="specialiteId"
              element="specialite"
            />

            <InputField
              choice="checkbox"
              label="J'accepte les termes et conditions"
              name="mentions"
              onChange={handleInputChange}
            />
            <InputField choice="button" type="submit" label="Créer un compte" />
          </form>
          <div className="self-center mt-4 text-sm leading-5 text-center text-stone-300">
            <Link href="/login" legacyBehavior>
              Déjà un compte ? Connectez-vous
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
