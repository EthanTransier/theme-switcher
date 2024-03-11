import React from 'react'
import {useContext} from 'react'
import {ThemeContext} from '../App'
const Footer = () => {
  let {darkTheme} = useContext(ThemeContext)
  return (
    <footer className={darkTheme ? 'darkFooter' : 'lightFooter'}>
        <div>
            <h3>LINKS</h3>
            <h3>LINKS</h3>
            <h3>LINKS</h3>
        </div>
        <div className='vert'></div>
        <div>
            <h3>LINKS</h3>
            <h3>LINKS</h3>
            <h3>LINKS</h3>
        </div>
        <div className='vert'></div>
        <div>
            <h3>LINKS</h3>
            <h3>LINKS</h3>
            <h3>LINKS</h3>
        </div>
    </footer>
  )
}

export default Footer