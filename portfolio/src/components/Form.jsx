import "./FormStyles.css";
import React from 'react';

const Form = () => {
  return (
    <div className="form">
        <label>Your Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required/>
        <label>Phone Number</label>
        <input type="phone" />
        <label>Feedback</label>
        <textarea rows="10" placeholder="Type your feedback" required/>
        <button className="btn">Submit</button>
    </div>
  );
};

export default Form;
