import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop,faFileCode } from '@fortawesome/free-solid-svg-icons'



function Services() {
  return (
    <div className="services">
        <h1 className="py-5">OUR SERVICES</h1>
        <div className="container">
          <div className="row">
            {/* Google sio xidmetleri */}
            <div className="col-lg-3 col-md-6 col-sn-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faGoogle}  className="icon-s"/>
                </div>
                <h2>SEO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio at voluptatum maxime optio dolorum non, accusantium veniam. Officiis culpa cumque beatae repudiandae eligendi libero consequatur, quis numquam ipsam laborum.</p>
              </div>
            </div>
            {/* veb development ile elaqeli sahe */}
            <div className="col-lg-3 col-md-6 col-sn-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faFileCode}  className="icon-s"/>
                </div>
                <h2>Web devloper</h2>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum esse hic autem voluptate. Distinctio, officia. Labore, saepe! Itaque dolores impedit, quos, eligendi, mollitia sequi ut nam id beatae  molestiae!</p>
              </div>
            </div>

           {/* Facebook Marketing */}
           <div className="col-lg-3 col-md-6 col-sn-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faFacebookF}  className="icon-s"/>
                </div>
                <h2>Facebook SMM</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio at voluptatum maxime optio dolorum non, accusantium veniam. Officiis culpa cumque beatae , quis numquam ipsam laborum.</p>
              </div>
            </div>
           {/* IT */}
           <div className="col-lg-3 col-md-6 col-sn-6">
              <div className="box">
                  
                <div className="circle">
                  <FontAwesomeIcon icon={faDesktop} className="icon-s"/>
                </div>
                <h2>IT,helpdesk</h2>
                 <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio at voluptatum maxime optio dolorum non, accusantium veniam. Officiis culpa cumque beatae repudiandae eligendi  consequatur, quis numquam ipsam laborum.</p>
                </div>
            </div>
          </div>
        </div>

    </div>
  
  )
}

export default Services