'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { AnimationWrapper } from './AnimationWrapper';

export const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: 'success', text: data.message || 'Thank you! Your message has been sent successfully.' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({ type: 'error', text: data.message || 'Failed to send message. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'An unexpected error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-100 py-20 relative overflow-hidden">
      {/* Tri-Color Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-emerald-500 to-orange-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Contact Details & Bio (Left Column) */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <AnimationWrapper direction="up" delay={0.1}>
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-800/80 text-orange-400 text-xs font-bold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Get In Touch</span>
                </div>
                <h2 className="text-3xl font-extrabold font-display text-white">
                  Let’s Build Something Exceptional Together
                </h2>
                <p className="text-slate-400 text-sm font-normal leading-relaxed">
                  Have an AI SaaS project, computer vision pipeline, or full-stack application you’d like to build? Send a direct message or connect via email.
                </p>
              </div>
            </AnimationWrapper>

            {/* Direct Contact Info Block */}
            <AnimationWrapper direction="up" delay={0.2}>
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <a
                  href="mailto:tahatabassum9@gmail.com"
                  className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors group text-sm font-medium"
                >
                  <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-800/80 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>tahatabassum9@gmail.com</span>
                </a>

                <a
                  href="tel:+923498677945"
                  className="flex items-center space-x-3 text-slate-300 hover:text-emerald-400 transition-colors group text-sm font-medium"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+92 349 8677945</span>
                </a>

                <div className="flex items-center space-x-3 text-slate-300 text-sm font-medium">
                  <div className="p-2.5 rounded-lg bg-orange-950/80 border border-orange-800/80 text-orange-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Faisalabad, Pakistan</span>
                </div>
              </div>
            </AnimationWrapper>

            {/* Social Links */}
            <AnimationWrapper direction="up" delay={0.3}>
              <div className="flex space-x-3 pt-2">
                <a
                  href="https://github.com/tahatabassum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-blue-500 transition-all border border-slate-800"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/tahatabassum2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-blue-400 hover:bg-slate-800 hover:border-blue-500 transition-all border border-slate-800"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </AnimationWrapper>
          </div>

          {/* Contact Form Card (Right Column) */}
          <div className="lg:col-span-7">
            <AnimationWrapper direction="up" delay={0.2}>
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 text-left shadow-2xl relative">
                <h3 className="text-xl font-bold font-display text-white mb-6">
                  Send a Direct Message
                </h3>

                {status && (
                  <div className={`mb-6 p-4 rounded-xl text-xs font-bold flex items-center space-x-2.5 ${
                    status.type === 'success'
                      ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-800'
                      : 'bg-red-950/90 text-red-300 border border-red-800'
                  }`}>
                    {status.type === 'success' ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    ) : (
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                    )}
                    <span>{status.text}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Bot Trap Field */}
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                      />
                    </div>

                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="Hi Taha, I'd like to discuss an AI SaaS project..."
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/30 hover:shadow-orange-500/20"
                  >
                    <Send className="h-4 w-4" />
                    <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </AnimationWrapper>
          </div>

        </div>

        {/* Copyright Footer Subtext */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Taha Tabassum. All rights reserved.</p>
          <p>Built with Next.js 14, React 19, TypeScript & Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  );
};
