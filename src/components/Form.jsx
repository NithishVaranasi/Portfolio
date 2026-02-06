import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaPaperPlane } from 'react-icons/fa';
import './FormStyles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="form-section">
      <div className="form-container container">
        <div className="form-wrapper">
          {/* Form Header */}
          <div className="form-header">
            <h3 className="form-title">Send Me a Message</h3>
            <p className="form-subtitle">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className={`form-group ${focusedField === 'name' ? 'focused' : ''}`}>
              <label htmlFor="name" className="form-label">
                <FaUser className="label-icon" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="form-input"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Field */}
            <div className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}>
              <label htmlFor="email" className="form-label">
                <FaEnvelope className="label-icon" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="form-input"
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Phone Field */}
            <div className={`form-group ${focusedField === 'phone' ? 'focused' : ''}`}>
              <label htmlFor="phone" className="form-label">
                <FaPhone className="label-icon" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className="form-input"
                placeholder="+91 1234567890"
              />
            </div>

            {/* Message Field */}
            <div className={`form-group ${focusedField === 'message' ? 'focused' : ''}`}>
              <label htmlFor="message" className="form-label">
                <FaCommentDots className="label-icon" />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className="form-textarea"
                rows="6"
                placeholder="Tell me about your project or just say hi!"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="form-submit-btn btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span>Sending...</span>
                  <div className="spinner"></div>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane className="submit-icon" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
