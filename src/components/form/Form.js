import css from './form.module.css';
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };
  const HandleSubmit = event => {
    event.preventDefault();
    console.log(name, email, subject, message);
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
      <form className={css.form}>
        <div className={css.input_wrapper}>
          <input
            className={css.form_input}
            placeholder=" "
            value={name}
            type="text"
            name="name"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="5"
            maxLength="30"
            required
            onChange={handleInputChange}
          ></input>
          <label className={css.form_label}>Your name</label>
        </div>
        <div className={css.input_wrapper}>
          <input
            className={css.form_input}
            placeholder=" "
            value={email}
            type="email"
            name="email"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="5"
            maxLength="30"
            required
            onChange={handleInputChange}
          ></input>
          <label className={css.form_label}>Your email</label>
        </div>
        <div className={css.input_wrapper}>
          <input
            placeholder=" "
            className={css.form_input}
            value={subject}
            type="text"
            name="subject"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="3"
            maxLength="150"
            required
            onChange={handleInputChange}
          ></input>
          <label className={css.form_label}>Subject</label>
        </div>
        <div className={css.input_wrapper}>
          <textarea
            placeholder=" "
            className={css.form_input_message}
            value={message}
            type="text"
            name="message"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="20"
            maxLength="500"
            required
            onChange={handleInputChange}
          ></textarea>
          <label className={css.form_label}>Message</label>
        </div>
        <button
          className={css.form_button}
          type="submit"
          onClick={HandleSubmit}
        >
          Send
        </button>
      </form>
    </>
  );
};
export default Form;
