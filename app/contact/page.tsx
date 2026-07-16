'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    instagram: '',
    website: '',
    musicLink: '',
    spotify: '',
    youtube: '',
    soundcloud: '',
    eventLink: '',
    goal: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          role: '',
          instagram: '',
          website: '',
          musicLink: '',
          spotify: '',
          youtube: '',
          soundcloud: '',
          eventLink: '',
          goal: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="w-full">
        <HeroSection
          title="Thank You"
          subtitle="Request Received"
          description="We&apos;ve received your request and will review your information. Our team will be in touch within 48 hours."
        />

        <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-6">
                <motion.svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </motion.svg>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Request Submitted
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                We&apos;re excited to learn more about your music journey and how Ragam can support your goals.
              </p>
              <Link
                href="/"
                className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition duration-300 text-lg"
              >
                Back to Home
              </Link>
            </motion.div>
          </ScrollReveal>
        </section>

        <footer className="py-12 px-6 border-t border-border bg-card/50">
          <div className="max-w-7xl mx-auto text-center text-foreground/60 text-sm">
            <p>&copy; 2024 Ragam & Co. All rights reserved.</p>
          </div>
        </footer>
      </main>
    );
  }

  return (
    <main className="w-full">
      <HeroSection
        title="Request Your Music Analysis"
        subtitle="Get In Touch"
        description="Tell us about your music journey, goals, and how Ragam can support your vision."
      />

      {/* Contact Form */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto">
        <ScrollReveal>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Your Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-6 py-4 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-primary outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-6 py-4 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-primary outline-none transition"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="px-6 py-4 rounded-lg border border-border bg-card text-foreground focus:border-primary outline-none transition"
                >
                  <option value="">Select Your Role</option>
                  <option value="artist">Artist</option>
                  <option value="organizer">Organizer</option>
                  <option value="label">Label</option>
                  <option value="producer">Producer</option>
                  <option value="venue">Venue</option>
                  <option value="fan">Music Lover</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  name="website"
                  placeholder="Your Website (Optional)"
                  value={formData.website}
                  onChange={handleChange}
                  className="px-6 py-4 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-primary outline-none transition"
                />
              </div>
            </div>

            {/* Music Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Your Music</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="url"
                  name="spotify"
                  placeholder="Spotify Profile (Optional)"
                  value={formData.spotify}
                  onChange={handleChange}
                  className="px-6 py-4 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-primary outline-none transition"
                />
                <input
                  type="url"
                  name="soundcloud"
                  placeholder="SoundCloud Profile (Optional)"
                  value={formData.soundcloud}
                  onChange={handleChange}
                  className="px-6 py-4 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-primary outline-none transition"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="url"
                  name="youtube"
                  placeholder="YouTube Channel (Optional)"
                  value={formData.youtube}
                  onChange={handleChange}
                  className="px-6 py-4 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-primary outline-none transition"
                />
                <input
                  type="text"
                  name="instagram"
                  placeholder="Instagram Handle (Optional)"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="px-6 py-4 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-primary outline-none transition"
                />
              </div>
            </div>

            {/* Additional Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Additional Information</h3>
              <input
                type="url"
                name="musicLink"
                placeholder="Music Link or Demo (Optional)"
                value={formData.musicLink}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-primary outline-none transition"
              />
              <input
                type="url"
                name="eventLink"
                placeholder="Event or Project Link (Optional)"
                value={formData.eventLink}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-primary outline-none transition"
              />
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-lg border border-border bg-card text-foreground focus:border-primary outline-none transition"
              >
                <option value="">What Are You Looking For?</option>
                <option value="market-analysis">Market Analysis</option>
                <option value="opportunities">Opportunities & Grants</option>
                <option value="strategy">Strategic Guidance</option>
                <option value="research">Custom Research</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Your Message</h3>
              <textarea
                name="message"
                placeholder="Tell us about your music journey, goals, and how we can help..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-primary outline-none transition resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </motion.button>
          </form>
        </ScrollReveal>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Other Ways to Reach Us</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Mail, label: 'Email', value: 'hello@ragamco.com' },
            { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
            { icon: MapPin, label: 'Location', value: 'Global Operations' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all"
                  whileHover={{ y: -4 }}
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-foreground/60 text-sm mb-2">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto text-center text-foreground/60 text-sm">
          <p>&copy; 2024 Ragam & Co. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
