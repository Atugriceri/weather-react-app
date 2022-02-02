import React from 'react'

const ForecastCard = (props) => {
  return (
    <section className={`card ${props.isToday ? "is-today-true" : "is-today-false"}`}>
      {props.children}
    </section>
  )}

export default ForecastCard
