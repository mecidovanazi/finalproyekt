import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';


// service_td8qbj3


const ContactUs =() => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      
      const serviceID="service_fp9bt6d"
      const templateID="template_6qbtlgs"
     const userID="4D0pe5g7u8l-bnwxV"  
      emailjs.sendForm (serviceID, templateID, form.current, userID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
         form.current.reset()
    };
      return (
   <div className="contacs">
       <div className="tect-center">
           <h1>contact us</h1>
           <p>Əlaqə məlumatları</p>
       </div>
       <div className="container">
           <form ref={form} onSubmit={sendEmail}>
               <div className="row">
                   <div className="col-md-6 col-xs-12">
                      { /*name input*/ }
                      <div className="text-center">
                          <input 
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          name="name"
                          />
                          <div className="line"></div>
                              </div>
                      {/* phone input */}
                      <div className="text-center">
                          <input 
                          type="text"
                          className="form-control"
                          placeholder="enter your telefon nomber"
                          name="phone"
                          />
                          <div className="line"></div>
                              </div>
                              {/* email */}
                              <div className="text-center">
                          <input 
                          type="email"
                          className="form-control"
                          placeholder="mecidovanezaket50@gmail.com"
                          name="email"
                          />
                          <div className="line"></div>
                              </div>
                              {/* subject */}
                              <div className="text-center">
                          <input 
                          type="text"
                          className="form-control"
                          placeholder="enter your subject"
                          name="subject"
                          />
                          <div className="line"></div>
                              </div>
                              {/* -----  */}
                   </div>
                  {/* sutunun sag terefi */}
                  <div className="col-md-6 col-xs-12">
                      {/* messenger */}
                      <div className="text-center">
                          <textarea
                          type="text"
                          className="form-conrol"
                          placeholder="Describe your need"
                          name="description"
                          />
                          <div className="line"></div>
                      </div>
                      <button className="btn-main-offer contact-btn" type="sumbit">contact us</button>
                  </div>
                  
               </div>
               
           </form>
       </div>
   </div>
  )
}

export default ContactUs