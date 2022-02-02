import './App.css'
import axios from 'axios'
import { ThemeProvider } from './Context/ThemeContext'
import { WeatherProvider } from './Context/WeatherContext'
import Container from './Components/Container'

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </ThemeProvider>
  )
}

export default App
