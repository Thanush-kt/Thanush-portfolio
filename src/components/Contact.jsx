import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, Send, CheckCircle2, MapPin, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const apiKey = profileData.socialLinks.web3formsKey;

      if (apiKey && apiKey.trim() !== "") {
        // Construct FormData expected by Web3Forms API
        const payload = new FormData();
        payload.append("access_key", apiKey);
        payload.append("name", formData.name);
        payload.append("email", formData.email);
        payload.append("subject", formData.subject || `Portfolio Message from ${formData.name}`);
        payload.append("message", formData.message);
        payload.append("from_name", `${formData.name} (via Portfolio)`);

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: payload
        });

        const result = await response.json();

        if (result.success) {
          setSubmitted(true);
          try {
            confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
          } catch (err) {}
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          // If key activation is pending, alert user or trigger mailto
          setErrorMsg(result.message || "Could not deliver message via API. Opening mail app...");
          triggerMailtoFallback();
        }
      } else {
        triggerMailtoFallback();
      }
    } catch (err) {
      triggerMailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailtoFallback = () => {
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${profileData.socialLinks.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 light:text-teal-600 text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Let's Build Something Together
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Whether you have a software engineering internship opportunity, project collaboration, or technical question, feel free to drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-4">
                
                {/* Email Direct */}
                <a
                  href={`mailto:${profileData.socialLinks.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500">Email Address</div>
                    <div className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover:text-cyan-400 transition-colors">
                      {profileData.socialLinks.email}
                    </div>
                  </div>
                </a>

                {/* LinkedIn Direct */}
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 hover:border-teal-500/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500">LinkedIn Profile</div>
                    <div className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover:text-teal-400 transition-colors">
                      Connect on LinkedIn
                    </div>
                  </div>
                </a>

                {/* GitHub Direct */}
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 hover:border-slate-600 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-slate-800 text-slate-300 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500">GitHub Profile</div>
                    <div className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover:text-white transition-colors">
                      View Repositories
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/40 light:border-slate-200">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500">Location</div>
                    <div className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
                      {profileData.location}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl space-y-6">
              
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Send a Direct Message
              </h3>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/50 flex items-center gap-2 text-xs text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-800 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-300">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out! Thanush will receive your message and respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship / Technical Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Thanush, I came across your portfolio and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-teal-500/25 transition-all hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
