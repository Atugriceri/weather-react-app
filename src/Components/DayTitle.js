import React from 'react'

const DayTitle = ({day, theme}) => {

  return (
    <h2 className={`day-title text-${theme}`}>{day}</h2>
  )
}

export default DayTitle
