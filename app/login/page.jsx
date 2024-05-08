/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from "react"
import Link from "next/link"
import InputField from "@/lib/components/atoms/InputField"
import handleLogin from "@/lib/hooks/handleLogin.js"

function Login() {
  const [formValues, setFormValues] = useState({})

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleLogin(formValues)
  }

  return (
    <div className="flex flex-col justify-center text-base leading-6 bg-white text-stone-300">
      <div className="flex justify-center items-center px-16 py-5 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col px-4 py-5 max-w-full w-[512px]">
          <form onSubmit={handleSubmit}>
            <InputField
              label="Email"
              placeholder="Entrez votre Email"
              name="email"
              onChange={handleInputChange}
            />
            <InputField
              label="Mot de passe"
              placeholder="Entrez votre mot de passe"
              name="mdp"
              type="password"
              onChange={handleInputChange}
            />

            <InputField choice="button" type="submit" label="Se connecter" />
          </form>
          <div className="self-center mt-4 text-sm text-center">
            Vous avez oublié votre mot de passe ?
          </div>
          <div className="self-center mt-4 mb-60 text-sm text-center max-md:mb-10">
            <Link href="/" legacyBehavior>
              Vous n'avez pas encore de compte ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
