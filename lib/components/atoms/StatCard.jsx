const StatCard = ({ value, label, change }) => (
  <div className="flex flex-col grow items-start p-6 text-base font-medium text-white rounded-lg border border-solid border-neutral-700 max-md:px-5 max-md:mt-8">
    <div className="leading-[150%]">{value}</div>
    <div className="mt-2 text-2xl font-bold tracking-tight">{label}</div>
    <div
      className={`mt-2 leading-[150%] ${
        change >= 0 ? "text-green-400" : "text-rose-500"
      }`}
    >
      {change >= 0 ? "+" : ""}
      {change}%
    </div>
  </div>
)
export default StatCard
