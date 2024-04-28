"use client"
import { useState, useEffect } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "@/lib/styles/styles.css"

export default function Calendrier({ onDateChange }) {
  const [value, setValue] = useState(new Date())

  const handleChange = (date) => {
    const dateWithoutTimezone = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    )

    setValue(dateWithoutTimezone)
    if (onDateChange) {
      onDateChange(dateWithoutTimezone)
    }
  }

  return (
    <Calendar
      onChange={handleChange}
      value={value}
      className="react-calendar"
      tileClassName={({ date, view }) => {
        if (
          date.getDate() === new Date().getDate() &&
          date.getMonth() === new Date().getMonth()
        ) {
          return "react-calendar__tile--now"
        }
        if (date.getDate() === value.getDate()) {
          return "react-calendar__tile--active"
        }
      }}
    />
  )
}
