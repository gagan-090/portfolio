import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      // reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-white select-none">
      {/* Hero Header */}
      <section className="max-w-[1200px] mx-auto px-gutter pt-12 pb-stack-lg border-b border-outline-variant">
        <motion.div 
          className="grid grid-cols-12 gap-gutter mt-12 md:mt-20"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="col-span-12 md:col-span-2">
            <span className="font-display-lg text-[64px] md:text-display-lg text-outline-variant opacity-30">05</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-none tracking-tighter">
              Let's build<br />something great.
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Main Contact Content */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Reach Me */}
          <div className="md:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <h2 className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant mb-6">
                Reach Me At
              </h2>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] uppercase text-outline mb-1">Email</span>
                  <a className="font-subhead-italic text-subhead-italic italic hover:text-primary transition-colors text-2xl" href="mailto:gaganshuklarmg@gmail.com">
                    gaganshuklarmg@gmail.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] uppercase text-outline mb-1">Phone</span>
                  <a className="font-subhead-italic text-subhead-italic italic hover:text-primary transition-colors text-2xl" href="tel:+916394756798">
                    +91 6394756798
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] uppercase text-outline mb-1">Location</span>
                  <span className="font-subhead-italic text-subhead-italic italic text-2xl">
                    Bangalore, India
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#F5F8FF] text-primary px-4 py-2.5 font-label-mono text-[11px] border border-[#2563EB]/20">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></span>
                  Typically responds within 24 hours
                </span>
              </div>
              <div>
                <h2 className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant mb-4">
                  Social Channels
                </h2>
                <div className="flex flex-wrap gap-4">
                  <a className="font-body-main text-on-surface hover:text-[#2563EB] underline underline-offset-4 transition-colors" href="https://www.linkedin.com/in/gagan-shukla-2624b826b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="font-body-main text-on-surface hover:text-[#2563EB] underline underline-offset-4 transition-colors" href="https://github.com/gagan-090" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-7">
            <div className="bg-white border border-outline-variant p-8 md:p-12">
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-mono text-label-mono uppercase text-on-surface-variant">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body-main rounded-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-mono text-label-mono uppercase text-on-surface-variant">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body-main rounded-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono uppercase text-on-surface-variant">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body-main rounded-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono uppercase text-on-surface-variant">Message</label>
                  <textarea 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your vision..."
                    className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body-main resize-none rounded-none"
                  />
                </div>
                
                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-4 font-body-main text-sm">
                    Thank you! Your message has been sent successfully. Gagan will get back to you shortly.
                  </div>
                )}

                <div className="mt-4">
                  <button 
                    type="submit"
                    className="w-full md:w-auto bg-on-surface text-white px-12 py-4 font-label-mono text-label-mono uppercase tracking-[0.2em] font-bold hover:bg-[#2563EB] transition-colors duration-200 rounded-none"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Visual Break */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding">
        <div className="grid grid-cols-12 gap-gutter items-center">
          <div className="col-span-12 md:col-span-8">
            <div className="h-[400px] w-full bg-surface-container overflow-hidden border border-outline-variant">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0GJ-w6AHNiDkLjruNPNWRCyzldaWlxLk1MfOurvfqbMBlOYJwHx23lIM1ynTlZ6BnIOWmh9-sHmhLeJ2fAaLKPJZJfvGDNvEb_pu3DohTGD44lgxDVO-nJ1zOp_WNaSqc4mhw4NeACK5rigPUsLOT9uzlnTpbJpF14uLHmrkIY4utn_rS9uG9MFlxIDzKcYFkc407KM_VO4KM1kSu8bb9tzXl001qq35TeBL1LKi5A5hnHyMsvQ7F2iA0rIUvPwdbStv6rEInZbM" 
                alt="Modern Studio Space" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center pl-0 md:pl-12 mt-8 md:mt-0">
            <p className="font-subhead-italic text-2xl text-on-surface italic mb-4 leading-relaxed">
              "Precision is the foundation of excellence."
            </p>
            <p className="font-body-main text-on-surface-variant leading-relaxed">
              Located in the heart of the tech hub, I operate globally to deliver mobile experiences that redefine standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
