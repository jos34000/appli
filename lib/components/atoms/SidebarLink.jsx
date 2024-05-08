/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link"

function SidebarLink({ icon, text, destination }) {
  let isActive
  if (typeof window !== "undefined") {
    isActive = window.location.pathname === destination
  }
  return (
    <div
      className={`flex gap-3 px-3 py-2 whitespace-nowrap ${
        isActive ? "bg-zinc-800" : ""
      }`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
      <Link href={destination} legacyBehavior>
        {text}
      </Link>
    </div>
  )
}
export default SidebarLink
