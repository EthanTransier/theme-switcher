import Navbar from '../components/Navbar'
import {useContext} from 'react'
import {ThemeContext} from '../App'
import ThemeSwitcher from '../components/ThemeSwitcher'

const Header = () => {
  let {darkTheme} = useContext(ThemeContext)
    return (
      <header className={darkTheme ? 'darkHeader' : 'lightHeader'}>
          <h1>THEME SWITCHER OOH-RAH</h1>
          <ThemeSwitcher/>
          <Navbar></Navbar>
      </header>
    )
}

export default Header

