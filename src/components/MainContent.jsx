import CardList from './CardList'
import {useContext} from 'react'
import {ThemeContext} from '../App'

const MainContent = () => {
  let {darkTheme} = useContext(ThemeContext)
  return (
    <main className={darkTheme ? 'darkMain' : 'lightMain'}>
      <h1>Ships, as seen in Star Wars:</h1>
      <CardList></CardList>
    </main>
  )
}

export default MainContent