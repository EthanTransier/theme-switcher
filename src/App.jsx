import {createContext, useState} from 'react'
import './App.css';
import './styles/css/index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
// import { ThemeSwitcher } from './components/ThemeSwitcher';

export const ThemeContext = createContext()

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <>
      <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
        <div className="App">
          <Header></Header>
          <MainContent></MainContent>
          <Footer></Footer>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
