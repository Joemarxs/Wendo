import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <div className="bg-amber-50 min-h-screen">
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto">
              Have a question about our products or services? We're here to help
              and answer any questions you might have.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-amber-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-amber-800 mb-2">
                      Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-amber-800 mb-2">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-amber-800 mb-2">
                      Subject
                    </label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500" required>
                      <option value="">Select a subject</option>
                      <option value="order">Order Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="shipping">Shipping Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-amber-800 mb-2">
                      Message
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-amber-800 text-white py-3 rounded-lg hover:bg-amber-900 transition-colors flex items-center justify-center">
                    Send Message
                    <SendIcon size={18} className="ml-2" />
                  </button>
                </form>
              </div>
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-amber-900 mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPinIcon className="text-amber-600 w-6 h-6 mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <h3 className="font-medium text-amber-900">Visit Us</h3>
                        <p className="text-amber-700">123 Craft Avenue</p>
                        <p className="text-amber-700">Nairobi, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <PhoneIcon className="text-amber-600 w-6 h-6 mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <h3 className="font-medium text-amber-900">Call Us</h3>
                        <p className="text-amber-700">+254 123 456 789</p>
                        <p className="text-amber-700">
                          Mon - Fri, 9am - 6pm EAT
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MailIcon className="text-amber-600 w-6 h-6 mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <h3 className="font-medium text-amber-900">Email Us</h3>
                        <p className="text-amber-700">info@wendo.com</p>
                        <p className="text-amber-700">support@wendo.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-amber-900 mb-6">
                    Business Hours
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-amber-700">Monday - Friday</span>
                      <span className="text-amber-900 font-medium">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-amber-700">Saturday</span>
                      <span className="text-amber-900 font-medium">
                        10:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-amber-700">Sunday</span>
                      <span className="text-amber-900 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}