'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/hero-section';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';

const opportunities = [
  {
    id: 1,
    type: 'Residency',
    title: 'Berlin Music Institute Artist Residency',
    organization: 'Berlin Music Institute',
    description: '3-month immersive residency for emerging artists with studio access, mentorship, and performance opportunities.',
    deadline: '2025-02-28',
    location: 'Berlin, Germany',
  },
  {
    id: 2,
    type: 'Funding',
    title: 'Creative Makers Grant Fund',
    organization: 'Global Culture Foundation',
    description: 'Up to $50,000 in grants for music producers and creators working on innovative projects.',
    deadline: '2025-01-31',
    location: 'Worldwide',
  },
  {
    id: 3,
    type: 'Festival',
    title: 'Summer Sounds Festival Showcase',
    organization: 'Summer Sounds Music Festival',
    description: 'Performance opportunity at prestigious summer festival reaching 50,000+ attendees.',
    deadline: '2025-02-15',
    location: 'Vienna, Austria',
  },
  {
    id: 4,
    type: 'Collaboration',
    title: 'Label Talent Scout Program',
    organization: 'Indie Records Collective',
    description: 'Partnership opportunity for emerging artists to work with established independent labels.',
    deadline: '2025-03-30',
    location: 'Worldwide',
  },
  {
    id: 5,
    type: 'Scholarship',
    title: 'Music Production Masterclass',
    organization: 'Audio Academy International',
    description: 'Full scholarship for 6-week intensive music production and mixing course.',
    deadline: '2025-01-15',
    location: 'Los Angeles, USA',
  },
  {
    id: 6,
    type: 'Grant',
    title: 'Women in Music Leadership Grant',
    organization: 'She Produces Foundation',
    description: 'Dedicated grant program supporting women and non-binary individuals in music production.',
    deadline: '2025-02-01',
    location: 'Worldwide',
  },
  {
    id: 7,
    type: 'Performance',
    title: 'European Tour Opportunity',
    organization: 'Touring Collective Network',
    description: 'Curated tour across 15 European venues for selected artists.',
    deadline: '2025-03-15',
    location: 'Europe',
  },
  {
    id: 8,
    type: 'Award',
    title: 'International Music Awards',
    organization: 'Global Music Awards',
    description: 'Competition for emerging artists with prize money, press, and recording contract opportunities.',
    deadline: '2025-04-30',
    location: 'Worldwide',
  },
];

const types = ['All', 'Residency', 'Funding', 'Festival', 'Collaboration', 'Scholarship', 'Grant', 'Performance', 'Award'];

export default function Opportunities() {
  const [activeType, setActiveType] = useState('All');

  const filteredOpportunities = activeType === 'All'
    ? opportunities
    : opportunities.filter(opp => opp.type === activeType);

  const formatDeadline = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const daysLeft = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysLeft <= 0) return 'Closed';
    if (daysLeft === 1) return 'Closing Tomorrow';
    if (daysLeft <= 7) return `${daysLeft} days left`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <main className="w-full">
      <HeroSection
        title="Opportunities"
        subtitle="Growth & Collaboration"
        description="Curated grants, residencies, festivals, competitions, and partnerships for artists and organizations."
      />

      {/* Filter Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {types.map((type) => (
            <motion.button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeType === type
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary border border-border text-foreground hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOpportunities.map((opp, index) => (
            <ScrollReveal key={opp.id} delay={index * 0.05}>
              <motion.div
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all group"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                    {opp.type}
                  </span>
                  <motion.span
                    className="text-xs font-medium text-primary/60"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {formatDeadline(opp.deadline)}
                  </motion.span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {opp.title}
                </h3>

                <p className="text-sm text-foreground/60 font-medium mb-4">{opp.organization}</p>

                <p className="text-foreground/70 leading-relaxed mb-6">
                  {opp.description}
                </p>

                <div className="space-y-3 mb-6 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(opp.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <MapPin className="w-4 h-4" />
                    <span>{opp.location}</span>
                  </div>
                </div>

                <button className="w-full py-2 px-4 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                  Learn More
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Never Miss an Opportunity
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Subscribe to get curated opportunities delivered directly to your inbox, personalized to your profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 flex-grow sm:flex-grow-0 sm:w-64"
            />
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition duration-300">
              Subscribe
            </button>
          </div>
        </ScrollReveal>
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
