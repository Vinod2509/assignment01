import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', { name, email, contactNumber, subject, message });
    setName('');
    setEmail('');
    setContactNumber('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="contact-form">
      <h2 className='heading'>LET'S CONNECT</h2>
      <p>Contact our support team or make an appointment with our experts.</p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="name">Full Name <span>*</span></label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="email">Email <span>*</span></label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number <span>*</span></label>
              <input type="tel" id="contactNumber" name="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject <span>*</span></label>
          <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message <span>*</span></label>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <div className='submit'>
            <button type="submit">Submit form</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
