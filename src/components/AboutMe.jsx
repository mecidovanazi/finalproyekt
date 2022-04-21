import React from 'react'

const AboutMe = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
                <img className='profile-img'  src="https://source.unsplash.com/random" alt="" />
            </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About me</h1>
                <p className='text-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo facere aliquid vitae odit quis, modi, ducimus excepturi aspernatur deserunt voluptates quas tenetur? Ipsum?</p>
            </div>
        </div>
         </div>
  )
}

export default  AboutMe