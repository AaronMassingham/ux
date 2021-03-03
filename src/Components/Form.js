import React from "react";


const Form = () => (

  <>
    <div>
      <h2>Like my work?</h2>
      <p>Get in touch using the form below and I'll get back to you as soon as possible.</p>
      <form>  
      <input type="text" id="name" placeholder="Your Name" required />
      <input type="email" id="email" placeholder="Your Email" required />
      <input type="phone" id="phone" placeholder="Your Phone Number" required />
      <textarea id="message" placeholder="Your Enquiry" required />
      <button className="button link_right relative" type="submit">Send</button>
    </form>
    </div>


  </>

)


export default Form;
