import { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState("light")

  const toggleMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  useEffect(() => {
    if(theme === "dark") {
      document.body.classList.add("body-dark")
      document.body.classList.remove("body-light")
    } else {
      document.body.classList.add("body-light")
      document.body.classList.remove("body-dark")
    }
  }, [theme])

  const values = {
    theme,
    setTheme,
    toggleMode,
  }

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

