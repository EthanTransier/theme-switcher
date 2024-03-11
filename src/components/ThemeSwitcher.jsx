import {useContext} from 'react'
import {ThemeContext} from '../App'

const ThemeSwitcher = ({children}) => {
  const {darkTheme, setDarkTheme} = useContext(ThemeContext)

  function toggleTheme(){
    console.log(darkTheme)
    setDarkTheme(!darkTheme)
    console.log(darkTheme)
  }

  return (
    <button onClick={() => toggleTheme()}>Switch</button>
  )
}

export default ThemeSwitcher