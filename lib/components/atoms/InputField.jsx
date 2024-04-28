const InputField = ({
  choice,
  label,
  name,
  placeholder,
  type,
  onChange,
  array,
  id,
  element,
}) => {
  let inputElement

  switch (choice) {
    case "select":
      inputElement = (
        <select
          onChange={(event) => onChange(name, event.target.value)}
          className="w-full flex gap-5 justify-between p-4 mt-2 rounded-lg border border-solid bg-neutral-800 border-neutral-700 leading-[150%] text-stone-300 max-md:flex-wrap max-md:max-w-full"
        >
          <option value={placeholder} className="text-stone-300">
            {placeholder}
          </option>
          {array.map((option, index) => (
            <option key={index} value={option[id]}>
              {option[element]}
            </option>
          ))}
        </select>
      )
      break

    case "checkbox":
      inputElement = (
        <div className="flex items-center">
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={(event) => onChange(name, event.target.checked)}
            className="mr-2"
          />
          <label>{label}</label>
        </div>
      )
      label = null
      break

    case "button":
      inputElement = (
        <button
          type={type}
          className="w-full flex justify-center items-center px-4 py-2.5 mt-3 text-sm font-bold tracking-wide leading-5 bg-green-400 rounded-lg text-neutral-900 max-md:px-5 max-md:max-w-full"
        >
          <div className="justify-center px-px bg-green-400">{label}</div>
        </button>
      )
      label = null
      break

    default:
      inputElement = (
        <input
          onChange={(event) => onChange(name, event.target.value)}
          type={type}
          placeholder={placeholder}
          className="w-full flex gap-5 justify-between p-4 mt-2 rounded-lg border border-solid bg-neutral-800 border-neutral-700 leading-[150%] text-stone-300 max-md:flex-wrap max-md:max-w-full"
        />
      )
  }

  return (
    <>
      <div className="mt-6 font-medium leading-[150%] max-md:max-w-full">
        {label}
      </div>
      {inputElement}
    </>
  )
}

export default InputField
