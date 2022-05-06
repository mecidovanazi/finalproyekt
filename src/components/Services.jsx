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
                <p>Search Engine Optimization və ya SEO, veb saytlarımızın axtarış motorlarında daha çox görünməsini təmin etmək üçün görülən işlərin hamısıdır</p>
              </div>
            </div>
            {/* veb development ile elaqeli sahe */}
            <div className="col-lg-3 col-md-6 col-sn-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faFileCode}  className="icon-s"/>
                </div>
                <h2>Web devloper</h2>
                <p>Sadə bir təriflə, Web Developer veb tərtibatçısı, World-Wide-Web (WWW) dizaynı və tətbiqləri üzrə ixtisaslaşan insanlara verilən ümumi başlıqdır.</p>
              </div>
            </div>

           {/* Facebook Marketing */}
           <div className="col-lg-3 col-md-6 col-sn-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faFacebookF}  className="icon-s"/>
                </div>
                <h2>Facebook SMM</h2>
                <p>Facebook insanların digər insanlarla ünsiyyət qurmasını, məlumat mübadiləsini hədəfləyən sosial şəbəkədir. 4 fevral 2004-cü ildə Harvard Universitetinin tələbəsi Mark Zukerberq tərəfindən qurulub Facebook.</p>
              </div>
            </div>
           {/* IT */}
           <div className="col-lg-3 col-md-6 col-sn-6">
              <div className="box">
                  
                <div className="circle">
                  <FontAwesomeIcon icon={faDesktop} className="icon-s"/>
                </div>
                <h2>IT,helpdesk</h2>
                 <p>İT sahənin ən tələb olunan 7-ixtisasını təqdim edib. Onların arasında süni zəka,kibertəhlükəsizlik mütəxəssisləri və bu sahəsi üzrə 1-ci yerini tutan data scientist ixtisası var. Bununla yanaşı məlum olub, texnologiyalar üzərindən yaxşı pul qazanmaq üçün heç də Silikon Vadisində çalışmağa ehtiyac yoxdur.</p>
                </div>
            </div>
          </div>
        </div>

    </div>
  
  )
}

export default Services