import React from 'react'

const ForecastIcon = ({ icon, iconDescription }) => {
  return (
      <img src={require(`../Icons/${icon}.svg`)} alt={iconDescription} />
  )}

export default ForecastIcon
