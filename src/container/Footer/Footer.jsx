import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss'


import './Footer.scss';
const Footer = () => {
  const [formData, setformData] = useState({name: '', email:'', message:''});

  const [isFormSubmitted,setisFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const { name, email, message} = formData;

  const handleChangeInput = (e) => {
    const { name, value } =e.target;

    setformData({ ...formData, [name]: value});
  }
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setisFormSubmitted(true);
    })
  }
  return (
    <>
    <h2 className = "head-text"> Have an exciting project?</h2>
    <br/>
    <br/>
    <h1> Send over a message, and let's chat.</h1>

    <div className="app_footer-cards">
      <div className = "app_footer-cards">
        <img src={images.email} alt="email"/>
        <a href ="mailto:benacoffman99@gmail.com" className ="p-text">benacoffman99@gmail.com</a>
      </div>
    </div>
    {!isFormSubmitted ?
    <div className="app_footer-form app_flex">
      <div className="app_flex">
        <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput}/>
      </div>
      <div className="app_flex">
        <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput}/>
      </div>
      <div>
        <textarea
          className="p-text"
          placeholder= "Your Message"
          value={message}
          name="message"
          onChange={handleChangeInput}
        />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>
          {loading ? 'Sending' : 'Send Message'}
        </button>
        </div>
        : <div>
          <h3 className="head-text"> Thank you for getting in touch!</h3>
        </div>
        }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app_footer'),
  'contact',
  'app_primarybg'
)