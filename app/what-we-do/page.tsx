'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { ScrollReveal } from '@/components/motion/scroll-reveal';

const services = [
  {
    title: 'Music Analysis',
    description: 'Comprehensive analysis of musical works, artist trajectories, and cultural trends. Our deep-dive reports provide actionable insights for strategic decision-making.',
  },
  {
    title: 'Market Intelligence',
    description: 'Real-time industry data, competitive analysis, and market forecasts to help institutions stay ahead of cultural shifts.',
  },
  {
    title: 'Cultural Strategy',
    description: 'Strategic guidance on audience development, festival planning, and cultural programming that resonates with modern listeners.',
  },
  {
    title: 'Research & Reports',
    description: 'Industry-wide research reports covering trends, demographics, and the economic impact of music and culture.',
  },
  {
    title: 'Opportunities Network',
    description: 'Access to curated grants, residencies, festivals, and collaboration opportunities for artists and organizations.',
  },
  {
    title: 'Advisory Services',
    description: 'Personalized consulting for artists, labels, venues, and institutions seeking to optimize their impact and growth.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your unique needs, goals, and current position in the music ecosystem.',
  },
  {
    step: '02',
    title: 'Analysis',
    description: 'Deep research into market trends, competitive landscape, and opportunity mapping.',
  },
  {
    step: '03',
    title: 'Insights',
    description: 'Comprehensive findings with visual dashboards and detailed narratives.',
  },
  {
    step: '04',
    title: 'Strategy',
    description: 'Actionable recommendations tailored to your specific goals and context.',
  },
];

export default function WhatWeDo() {
  return (
    <main className="w-full">
      <HeroSection
        title="What We Do"
        subtitle="Our Mission"
        description="We transform music industry intelligence into strategic advantage for artists, organizers, and cultural institutions."
      />

      {/* Services Grid */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">What We Offer</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive solutions designed for the modern music world.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <motion.div
                className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 hover:border-primary/40 transition-all group hover:shadow-lg hover:shadow-primary/10"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl mb-6 flex items-center justify-center group-hover:bg-primary/30 transition-colors" />
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{service.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">How We Work</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A systematic approach to uncovering insights and creating impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {process.map((p, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="relative">
                <motion.div
                  className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
                  whileHover={{ y: -4 }}
                >
                  <div>
                    <p className="text-5xl font-bold text-primary/15 mb-4">{p.step}</p>
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">{p.title}</h3>
                    <p className="text-foreground/60">{p.description}</p>
                  </div>
                </motion.div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-border" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Difference */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why Ragam is Different</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We&apos;re not a traditional consultancy or a tech platform. We&apos;re a cultural intelligence hub built by music professionals who understand the nuances of artistic excellence, market dynamics, and human connection. Our insights are grounded in research, rooted in culture, and designed for real impact.
            </p>
            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-block px-10 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:shadow-primary/20"
              >
                Request Analysis
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50 bg-card/20 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto text-center text-foreground/50 text-sm">
          <p>&copy; 2024 Ragam & Co. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
