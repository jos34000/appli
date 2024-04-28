/* eslint-disable @next/next/no-img-element */
const PatientCard = ({ firstname, lastname, age, antecedents, icon }) => (
  <div className="flex gap-5  px-4 py-3.5 bg-neutral-900 leading-[150%] max-md:flex-wrap max-md:max-w-full">
    <div className="flex flex-col justify-center">
      <div className="text-base font-medium text-white">
        {firstname} {lastname}
      </div>
      <div className="text-sm text-stone-300">{age}ans</div>
    </div>
  </div>
)
export default PatientCard
