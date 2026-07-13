import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Send, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    if (!db) {
      setIsSubmitting(false);
      setSubmitError('Firebase is not configured yet. Add your VITE_FIREBASE_* values in the environment file and try again.');
      return;
    }
    
    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp()
      });

      
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <MessageSquare className="text-accent" size={32} />
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's talk about everything!</h3>
            <p className="text-slate-400 mb-10 text-lg">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat. I'm always open to discussing new projects and creative ideas.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-surface border border-white/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email Me</p>
                  <p className="text-lg font-medium group-hover:text-accent transition-colors">{portfolioData.personal.email}</p>
                </div>
              </a>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-slate-500 font-medium mb-4">Connect on Socials</p>
                <div className="flex gap-4">
                  <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                    <FaGithub size={20} />
                  </a>
                  <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:-translate-y-1 transition-all duration-300">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-panel p-8 rounded-2xl relative"
          >
            {submitted && (
              <div className="absolute inset-0 z-10 bg-surface/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-slate-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-light text-white font-medium py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>

              {submitError && (
                <p className="text-sm text-red-400">{submitError}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;