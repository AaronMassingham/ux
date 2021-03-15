import React from "react";
import emailjs from "emailjs-com";

function Form() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_i1q7bnr', 'template_ymik8wo', e.target,'user_kCJGuWpi21CAQw95tVYyy'
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return ( 

  <>
    <div> 
      <h2>Like my work?</h2>
      <p>Get in touch using the form below and I'll get back to you as soon as possible.</p>
      <form onSubmit={sendEmail}>
        <div><input type="text" name="name" placeholder="Name" /></div>
        <div><input type="text" name="email" placeholder="Email" /></div>
        <div><input type="text" name="phone" placeholder="Phone" /></div>
        <div><textarea name="enquiry" placeholder="Enquiry" rows="5"></textarea></div>
        <input type="submit" value="Submit" />
      </form>
    </div>


  </>

  )
}


export default Form;
