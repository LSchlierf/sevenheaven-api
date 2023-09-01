import React from 'react';
import BandLogo from './BandLogo';
import './Header.css'

function Header(props) {
  const paddingBottom = props.paddingBottom || '10vw'
  const styleElement = {
    paddingBottom: paddingBottom
  }
  return (
    <div className='headerWrapperWrapper'>
      <div className={'headerWrapper' + (props.sub ? ' sub' : '')} id={props.id} style={styleElement}>
        <div className='gradientWrapper'>
          <div className='gradientL' />
        </div>
        <div className='titleWrapper'>
          <BandLogo text={props.text} fontSize={props.fontSize} backgroundColor='rgba(0,0,0,0)' />
        </div>
        <div className='gradientWrapper'>
          <div className='gradientR' />
        </div>
      </div>
    </div>
  )
}

export default Header