import React from 'react'
import logo5 from '../logo5.jpg'


const AboutMe = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
                <img className='profile-img' src={logo5} alt=""  />
            </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About me</h1>
                <p className='text-1'> Mən Məcidova Nəzakət Rovsən qizi. 1998-ci ildə Yevlax şəhərində anadan olmusam. 2006-ci ilde Yevlax şəh. Nəriman Nərimanov adına 9 sayli məktəbə getmişəm. daha sonra Azərbaycan Texnalogiya universtetine daxil olmuram. Universtet zamanı sinif numayendesi ve Tələbə Gənlər təşkilatının uzvu olmusam. </p>
            </div>
        </div>
         </div>
  )
}

export default  AboutMe