import React from 'react'
import Typed from 'react-typed'
import  Cv from '../cv.png'


function Header() {
  return (
 
    <div className="header-wrapper">
         <div className="main-info">
            <h2>Web development and website services</h2>
            <Typed
                strings={[
                    'Mecidova Nezaket',
                    'Azerbaycan Texnalogiya Universteti',
                    'Devloper']}
                    typeSpeed={40}
                    backSpeed={50}
                     loop >
                 
                </Typed>
         <a href={Cv}  className="downloadcv" download>Download cv</a>
        
        </div>
        
         </div>
  )
}

export default Header