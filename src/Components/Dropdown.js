import Cities from '../Data/Cities'
import { useWeather } from '../Context/WeatherContext'

const Dropdown = ({theme}) => {
  const { city, setCity, weatherData } = useWeather()
  
  return (
    <nav>
      <select
        name="cities"
        className={`dropdown ${theme}`}
        onChange={(e) => setCity(Cities[e.target.selectedIndex])}
        defaultValue={Cities[0]}
      >
      {
        Cities.map(({name, id}) => {
          return (
            <option 
              className={`text-${theme === "dark" ? "light" : "dark"} scroll-bg-${theme}`}
              key={`cities-${id}`} 
              value={name}
            >
              {name}
            </option>
          )  
        })
      }
      </select>
    </nav>
  )
}

export default Dropdown