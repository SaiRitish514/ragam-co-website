'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/hero-section';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { useState } from 'react';
import Link from 'next/link';

const researchItems = [
  {
    id: 1,
    category: 'Market Analysis',
    title: 'Global Music Market 2024',
    description: 'Comprehensive analysis of market size, growth trajectories, and emerging opportunities across all segments.',
    date: 'December 2024',
    readTime: '12 min read',
  },
  {
    id: 2,
    category: 'Artist Trends',
    title: 'Independent Artist Growth Report',
    description: 'How direct-to-fan strategies, streaming platforms, and community engagement are reshaping artist careers.',
    date: 'November 2024',
    readTime: '10 min read',
  },
  {
    id: 3,
    category: 'Cultural Impact',
    title: 'Festival Economics & Social Impact',
    description: 'Deep analysis of how live music festivals drive economic growth and cultural engagement globally.',
    date: 'October 2024',
    readTime: '14 min read',
  },
  {
    id: 4,
    category: 'Technology',
    title: 'AI & Music: The Future of Creation',
    description: 'Exploring the implications of AI tools, NFTs, and blockchain technology on music creation and distribution.',
    date: 'September 2024',
    readTime: '11 min read',
  },
  {
    id: 5,
    category: 'Audience',
    title: 'Gen Z Music Consumption Patterns',
    description: 'Understanding how younger audiences discover, consume, and engage with music across platforms.',
    date: 'August 2024',
    readTime: '9 min read',
  },
  {
    id: 6,
    category: 'Sustainability',
    title: 'Sustainable Music Industry Initiatives',
    description: 'How institutions and artists are addressing environmental concerns in music and live events.',
    date: 'July 2024',
    readTime: '13 min read',
  },
];

const categories = ['All', 'Market Analysis', 'Artist Trends', 'Cultural Impact', 'Technology', 'Audience', 'Sustainability'];

export default function Research() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? researchItems
    : researchItems.filter(item => item.category === activeCategory);

  return (
    <main className="w-full">
      <HeroSection
        title="Research & Intelligence"
        subtitle="Knowledge Hub"
        description="Deep dives into music trends, market analysis, cultural impact, and industry intelligence."
      />

      {/* Filter Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary border border-border text-foreground hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Research Grid */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.08}>
              <motion.div
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all group h-full flex flex-col"
                whileHover={{ y: -8 }}
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex justify-between text-xs text-foreground/60">
                      <span>{item.date}</span>
                      <span>{item.readTime}</span>
                    </div>

                    <button className="w-full py-2 px-4 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                      Read Report
                    </button>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Custom Research for Your Needs
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Beyond our published research, we create custom intelligence reports tailored to your organization&apos;s specific questions and strategic priorities.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition duration-300 text-lg"
          >
            Request Custom Research
          </Link>
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
