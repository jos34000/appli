import { useState } from "react"

export default function DateSelector({ onDateChange }) {
  const handleDateChange = (e) => {
    setDate(e.target.value)
    onDateChange && onDateChange(e.target.value)
  }

  const [date, setDate] = useState(new Date().toISOString().split("T")[0])

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="bg-white text-black rounded-sm mb-2"
      />
    </div>
  )
}
