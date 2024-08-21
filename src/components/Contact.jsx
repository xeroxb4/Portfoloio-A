
import  { useState } from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        'service_vjh0nsr',
        'template_gp866ob',
        formData,
        'TKi5tH-L-cktAPqfX'
      );
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // <ScrollAnimation>
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-white text-gray-900 py-20">
        <div className="w-full max-w-4xl px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let&apos;s Connect
          </motion.h2>
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border border-gray-200">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>
              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button
                  className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>
            </form>
            {submitMessage && (
              <p className="mt-4 text-center text-green-600">{submitMessage}</p>
            )}
          </div>
          <motion.div 
            className="mt-12 text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p>Or reach out directly:</p>
            <a href="mailto:xeroxb4@gmail.com" className="text-gray-800 hover:text-black transition duration-300">xeroxb4@gmail.com</a>
          </motion.div>
        </div>
      </section>
    
  );
};

export default Contact;