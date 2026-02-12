import React, { useState } from 'react';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import BlackFooter from '../components/BlackFooter';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-20 px-6 md:px-12">
        <h1 
          className="font-black text-black leading-none tracking-tighter mb-16"
          style={{ 
            fontSize: 'clamp(48px, 10vw, 120px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.03em'
          }}
        >
          CONTACT
        </h1>

        <div className="max-w-2xl">
          <div className="mb-12">
            <p className="text-gray-600 text-lg mb-6">
              For inquiries about available works, exhibitions, or collaborations, please get in touch.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>Email: <a href="mailto:studio@laurencejones.com" className="hover:text-black transition-colors">studio@laurencejones.com</a></p>
              <p>Instagram: <a href="https://www.instagram.com/laurencejonesartist" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">@laurencejonesartist</a></p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors rounded-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors rounded-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors rounded-none"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none rounded-none"
              />
            </div>

            <Button 
              type="submit" 
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-none"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </Button>
          </form>
        </div>
      </main>
      <BlackFooter />
    </div>
  );
};

export default ContactPage;
