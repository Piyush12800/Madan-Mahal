import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { ContactFormData } from '../types';
import { sendContactEmail } from '../services/mailService';

const Contact: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Pre-fill subject if navigating from a product page
  useEffect(() => {
    if (location.state && (location.state as any).productSubject) {
      setFormData(prev => ({
        ...prev,
        subject: (location.state as any).productSubject
      }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await sendContactEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-5">Get in Touch</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Have a question about our products or want to place a bulk order? Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Card */}
          <div className="lg:col-span-1 bg-gradient-to-b from-paper-900 to-paper-950 rounded-2xl p-10 text-white shadow-2xl h-fit border border-paper-800">
            <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
            <p className="text-paper-300 mb-10 text-sm">
              Fill up the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-paper-800 hover:bg-paper-700 p-3 rounded-lg transition-colors">
                  <Phone size={22} className="text-paper-300" />
                </div>
                <div>
                  <p className="text-sm text-paper-400 font-semibold">PHONE</p>
                  <p className="font-semibold text-lg text-white">{COMPANY_INFO.phone1}</p>
                  <p className="font-semibold text-lg text-white">{COMPANY_INFO.phone2}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-paper-800 hover:bg-paper-700 p-3 rounded-lg transition-colors">
                  <Mail size={22} className="text-paper-300" />
                </div>
                <div>
                  <p className="text-sm text-paper-400 font-semibold">EMAIL</p>
                  <p className="font-semibold text-lg text-white">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-paper-800 hover:bg-paper-700 p-3 rounded-lg transition-colors">
                  <MapPin size={22} className="text-paper-300" />
                </div>
                <div>
                  <p className="text-sm text-paper-400 font-semibold">ADDRESS</p>
                  <p className="font-semibold text-lg text-white">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-paper-800">
              <div className="w-full h-48 bg-gradient-to-br from-paper-800 to-paper-900 rounded-lg flex items-center justify-center text-paper-500 text-sm font-medium">
                [Map Placeholder]
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-paper-100 p-10">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Send size={36} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-gray-700 mb-8 text-lg">Thank you for contacting us. We will be in touch soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-gradient-to-r from-paper-600 to-paper-700 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-3">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-paper-500 focus:ring-2 focus:ring-paper-200 transition-all outline-none bg-white hover:border-paper-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-paper-500 focus:ring-2 focus:ring-paper-200 transition-all outline-none bg-white hover:border-paper-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-800 mb-3">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-paper-500 focus:ring-2 focus:ring-paper-200 transition-all outline-none bg-white hover:border-paper-200"
                    placeholder="Product Inquiry / Wholesale"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-paper-500 focus:ring-2 focus:ring-paper-200 transition-all outline-none resize-none bg-white hover:border-paper-200"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full md:w-auto px-8 py-4 bg-gradient-to-r from-paper-600 to-paper-700 text-white font-bold rounded-full hover:from-paper-700 hover:to-paper-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;