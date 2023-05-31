import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setMessageValid] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsNameValid(false);
    
    
    
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.includes('@')){
    setIsEmailValid(true);
    
    }
    else{
      setIsEmailValid(false);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageValid(false);
  };

  const handleNameBlur = () => {
    if (!name.trim()) {
      setIsNameValid(false);
    }
  };

  const handleEmailBlur = () => {
    if (!email.trim()) {
      setIsEmailValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setIsNameValid(false);
    }

    if (!email.trim()) {
      setIsEmailValid(false);
    }

    if (name.trim() && email.trim()) {
      // Do something with the form data (e.g., send it to a server)
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section className="contactSection">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          className={!isNameValid ? 'invalid' : ''}
        />
        {isNameValid? (<p className="error">Name is required</p>):('')}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          className={!isEmailValid ? 'invalid' : ''}
        />
        {!isEmailValid && <p className="error">Please enter a valid email address</p>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          rows="5"
          className={!isMessageValid ? 'invalid' : ''}
        ></textarea>

{isMessageValid? (<p className="error">Message is required</p>):('')}


        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
