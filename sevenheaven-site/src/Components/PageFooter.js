import React from 'react';
import './PageFooter.css'

function PageFooter() {
  return (
    <div className='footer'>
      <div className='footerGradient' />
      <div className='legalWrapper'>
        <div className='legalContainer'>
          <a href='/impressum' className='legal'>
            Impressum
          </a>
        </div>
        <div className='legalContainer'>
          <a href='/datenschutz' className='legal'>
            Datenschutz
          </a>
        </div>
      </div>
    </div>
  )
}

export default PageFooter