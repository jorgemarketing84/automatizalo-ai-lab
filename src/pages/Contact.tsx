
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-automatizalo-blue/5 to-automatizalo-purple/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span 
                className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-automatizalo-purple bg-automatizalo-purple/10 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Contact Us
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-automatizalo-dark mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let's build the <span className="text-gradient">AI-driven future</span> together
              </motion.h1>
              <motion.p 
                className="text-lg text-automatizalo-gray mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Talk to us about custom AI solutions tailored to your specific needs. We're here to help you automate your workflow.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-automatizalo-dark mb-6">Get in touch</h2>
                <p className="text-automatizalo-gray mb-8">
                  Fill out the form and our team will get back to you within 24 hours. We're excited to hear about your automation needs.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-automatizalo-purple/10 flex items-center justify-center text-automatizalo-purple mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-automatizalo-dark mb-1">Email</h3>
                      <a href="mailto:hello@automatizalo.com" className="text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                        hello@automatizalo.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-automatizalo-purple/10 flex items-center justify-center text-automatizalo-purple mr-4">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-automatizalo-dark mb-1">Phone</h3>
                      <a href="tel:+123456789" className="text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-automatizalo-purple/10 flex items-center justify-center text-automatizalo-purple mr-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-automatizalo-dark mb-1">Office</h3>
                      <p className="text-automatizalo-gray">
                        1234 Innovation Drive, <br />
                        Tech City, TX 98765
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-automatizalo-dark mb-3">Business Hours</h3>
                  <ul className="space-y-2 text-automatizalo-gray">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div 
              className="rounded-xl overflow-hidden shadow-md h-[400px] bg-white border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215171442327!2d-73.98784492426355!3d40.75827183440442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca8d00435c1052!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1693346680853!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
