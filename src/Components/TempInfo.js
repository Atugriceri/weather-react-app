import React from 'react'

const TempInfo = ({ temp_max, temp_min, theme }) => {
  return (
         <p className={`temp text-${theme}`}>
           <span className="temp-max">{`${temp_max}°C`}</span>
           &nbsp;
           &nbsp;
           <span className="temp-min">{`${temp_min}°C`}</span>
         </p>
         )
}

export default TempInfo
