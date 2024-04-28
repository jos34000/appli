function RdvCard({ name, time, reason, history }) {
  return (
    <div className="flex flex-col justify-center items-start py-3 pr-20 pl-4 mt-3.5 bg-neutral-900 max-md:pr-5 max-md:max-w-full">
      <div className="text-base font-medium leading-6 text-white">{name}</div>
      <div className="text-sm leading-5 text-stone-300">
        Heure du rendez-vous: {time}
        <br />
        Motif de consultation: {reason}
        <br />
        Antécédents: {history}
      </div>
      <div className="flex gap-3 mt-2 align-start">
        <button label="Annuler" className="bg-rose-500" />
      </div>
    </div>
  )
}

export default RdvCard
