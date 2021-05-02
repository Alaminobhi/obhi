import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_f0azitr', 'template_a1fij2n', e.target, 'user_QUY19NabuOsrTuQd4Urs9')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" placeholder="Your Name" /><br/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder="Your Email" /><br/>
      <label>Message</label>
      <textarea name="message" placeholder="Message Text Here" /><br/>
      <input className="btn btn-success" type="submit" value="Send" />
    </form>
  );
}