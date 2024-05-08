"use client"
import { useEffect, useState } from "react"
import SidebarLink from "@/lib/components/atoms/SidebarLink"
import AddRdv from "@/lib/components/molecules/AddRdv"
import useDeco from "@/lib/hooks/useDeco"

export default function Sidepannel() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [patient, setPatient] = useState("")

  return (
    <aside className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full max-h-96">
      <nav className="flex flex-col grow justify-between p-4 mx-auto w-full text-sm font-medium leading-5 text-white bg-neutral-900 max-md:mt-6">
        {isModalOpen && <AddRdv onCancelClick={() => setIsModalOpen(false)} />}
        <SidebarLink
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/19a097b61bd5a9c658091861d8dba577f1499d5b43b230ef0a797fcb719853ec?apiKey=3f0228c97dfd4d3398207a5ad823f317&"
          text="Accueil"
          destination="/home"
        />
        <SidebarLink
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3d1ad04ddb7015629255ccaeb1389d72137aa918cdc516c521f397761a2a8216?apiKey=3f0228c97dfd4d3398207a5ad823f317&"
          text="Rendez-vous"
          destination="/rdv"
        />
        <SidebarLink
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0336d694a54c8fb9ff5e7f72e82c8d2540c0d1a95f223037af7d1f0f4cb387ab?apiKey=3f0228c97dfd4d3398207a5ad823f317&"
          text="Patients"
          destination="/patients"
        />

        <SidebarLink
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c0ba607c757ed75216e2e337f83ca8f727e1f6cd2278ce0686bb83282ad06981?apiKey=3f0228c97dfd4d3398207a5ad823f317&"
          text="Statistiques"
          destination="/stats"
        />
        <div className="flex flex-col justify-center px-4 py-2.5 mt-6 font-bold tracking-wide bg-green-400 rounded-lg text-neutral-900 max-md:px-5 max-md:mt-10">
          <button
            className="justify-center bg-green-400 max-md:mx-1"
            onClick={(first) => setIsModalOpen(true)}
          >
            Nouvelle consultation
          </button>
        </div>
        <div className="flex flex-col justify-center px-4 py-2.5 mt-6 font-bold tracking-wide bg-rose-400 rounded-lg text-neutral-900 max-md:px-5 max-md:mt-10">
          <button
            className="justify-center bg-rose-400 max-md:mx-1"
            onClick={useDeco}
          >
            Se déconnecter
          </button>
        </div>
      </nav>
    </aside>
  )
}
