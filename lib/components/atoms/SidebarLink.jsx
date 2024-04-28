/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

function SidebarLink({ icon, text, destination }) {
  return (
    <div className="flex gap-3 px-3 py-2 mt-2 whitespace-nowrap">
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
