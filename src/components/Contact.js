import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';

    if (Object.keys(errors).length === 0) {
      // Handle form submission (e.g., send data to a server)
      console.log('Form submitted:', formData);
      alert('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                className={`form-control ${formErrors.name ? 'is-invalid' : ''}`} 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
              />
              {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input 
                type="email" 
                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`} 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
              />
              {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input 
                type="text" 
                className={`form-control ${formErrors.subject ? 'is-invalid' : ''}`} 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange}
              />
              {formErrors.subject && <div className="invalid-feedback">{formErrors.subject}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className={`form-control ${formErrors.message ? 'is-invalid' : ''}`} 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange}
              />
              {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
            </div>
            <button type="submit" className="btn btn-dark text-light">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
