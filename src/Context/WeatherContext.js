import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import Cities from '../Data/Cities'

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(Cities[0]) 
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    const getWeatherData = async () => {
      await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        let data = res.data.daily.slice(0,7)
        let forecast = data.map(({ dt, temp, weather, e}) => {
          let weeksDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          return {
            day: weeksDay[new Date(dt * 1000).getDay()],
            temp_max: Math.round(temp.max),
            temp_min: Math.round(temp.min),
            icon: weather[0].icon,
            iconDescription: weather[0].main,
            isToday: weeksDay[new Date().getDay()] === weeksDay[new Date(dt * 1000).getDay()]
          }
        })
        setWeatherData(forecast)
      })
      .catch(e => console.log(e))
    }
    getWeatherData()
  }, [city])

  if (weatherData === undefined) {
    return null
  }

  const values = {
    city,
    setCity,
    weatherData,
    setWeatherData,
  }
  
  return ( 
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>)
}

export const useWeather = () => useContext(WeatherContext)
