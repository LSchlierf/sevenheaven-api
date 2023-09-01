import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './BackToMainPage.css'
import { BsArrowLeft } from "react-icons/bs";
import { IconContext } from 'react-icons';

function BackToMainPage(props) {
  const backgroundColor = props.backgroundColor || 'rgba(0,0,0,0.5)'
  const isDesktop = isBrowser || isTablet
  const fontSize = props.fontSize || (isDesktop ? '30px' : '5vw')
  const styleElement = {
    backgroundColor: backgroundColor,
    fontSize: fontSize,
    textDecoration: 'none',
  }
  return (
    <a href='/' className='backWrapper' style={styleElement}>
      <div className='backIcon'>
        <IconContext.Provider value={{color: 'white', size: (isDesktop ? 50 : 30)}}>
          <BsArrowLeft />
        </IconContext.Provider>
      </div>
      <div className='backText'>
        Zurück zur Startseite
      </div>
    </a>
  )
}

export default BackToMainPage