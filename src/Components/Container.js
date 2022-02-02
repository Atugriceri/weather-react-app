import React from 'react'
import { useWeather } from '../Context/WeatherContext'
import { useTheme } from '../Context/ThemeContext'
import Dropdown from './Dropdown'
import Footer from './Footer'
import ForecastCard from './ForecastCard'
import DayTitle from './DayTitle'
import ForecastIcon from './ForecastIcon'
import TempInfo from './TempInfo'
import ForecastSection from './ForecastSection'
import Header from './Header'
import ThemeButton from './ThemeButton'

const Container = () => {
  const { weatherData } = useWeather()
  const { theme, toggleMode } = useTheme()

  return (
    <main className="container">
      <Header>
        <Dropdown theme={theme} />
        <ThemeButton toggleMode={toggleMode} />
      </Header>
        <ForecastSection>
          {
            weatherData && weatherData.map(({ day, temp_max, temp_min, icon, iconDescription, isToday}, index) => {
              return (
                <ForecastCard isToday={isToday} key={`forecast-0${index}`} >
                  <DayTitle day={day} theme={theme}/>
                  <ForecastIcon icon={icon} iconDescription={iconDescription} />
                  <TempInfo temp_max={temp_max} temp_min={temp_min} theme={theme} />
                </ForecastCard>
              )
            })
          }
        </ForecastSection>
      <Footer theme={theme} />
    </main>
)}

export default Container
