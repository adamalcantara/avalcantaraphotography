import React from 'react'
import ContactForm from "../../Components/ContactForm/ContactForm"
import "./Contact.css"
import bowling from "../../img/bowling.jpg"

const Contact = () => {
  return (
    <div id="contactPage">
      {/* <img src={bowling} id="bowling" alt="contact us"></img> */}
      <ContactForm />
    </div>
  )
}

export default Contact