'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { ScrollReveal } from '@/components/motion/scroll-reveal';

const audiences = [
  {
    icon: '🎤',
    title: 'Artists',
    subtitle: 'Emerging & Established',
    benefits: [
      'Understand your market position and fan demographics',
      'Discover collaboration opportunities and residencies',
      'Access funding, grants, and growth strategies',
      'Build strategic partnerships with labels and venues',
    ],
  },
  {
    icon: '🎪',
    title: 'Organizers',
    subtitle: 'Festivals & Events',
    benefits: [
      'Curate lineups based on data-driven cultural insights',
      'Understand audience preferences and market trends',
      'Maximize reach and impact of your events',
      'Connect with artists and institutions worldwide',
    ],
  },
  {
    icon: '🎵',
    title: 'Labels',
    subtitle: 'Record & Independent',
    benefits: [
      'Market intelligence for A&R decisions',
      'Artist development strategies and support',
      'Competitor analysis and trend forecasting',
      'Opportunities for collaboration and distribution',
    ],
  },
  {
    icon: '🎹',
    title: 'Producers',
    subtitle: 'Music Creation',
    benefits: [
      'Industry trends and production insights',
      'Networking with artists and labels',
      'Opportunities for placements and collaborations',
      'Strategic guidance for career growth',
    ],
  },
  {
    icon: '🏛️',
    title: 'Venues',
    subtitle: 'Clubs & Theaters',
    benefits: [
      'Artist booking intelligence and recommendations',
      'Audience development strategies',
      'Market analysis for programming decisions',
      'Partnerships and cross-promotion opportunities',
    ],
  },
  {
    icon: '❤️',
    title: 'Music Lovers',
    subtitle: 'Fans & Communities',
    benefits: [
      'Discover emerging artists and genres',
      'Learn about music trends and cultural movements',
      'Connect with cultural experiences and events',
      'Participate in the global music community',
    ],
  },
];

export default function WhoWeHelp() {
  return (
    <main className="w-full">
      <HeroSection
        title="Who We Help"
        subtitle="Our Community"
        description="From individual artists to global institutions, Ragam serves everyone passionate about music and culture."
      />

      {/* Audience Sections */}
      <section className="w-full">
        {audiences.map((audience, index) => (
          <div
            key={index}
            className={`relative py-20 md:py-32 px-6 ${
              index % 2 === 0
                ? 'bg-background'
                : 'bg-card/30'
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}>
                {/* Image/Icon section */}
                <ScrollReveal direction={index % 2 === 1 ? 'right' : 'left'}>
                  <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center overflow-hidden">
                    <motion.div
                      className="text-8xl"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {audience.icon}
                    </motion.div>
                  </div>
                </ScrollReveal>

                {/* Content section */}
                <ScrollReveal direction={index % 2 === 1 ? 'left' : 'right'}>
                  <div className="space-y-8">
                    <div>
                      <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">
                        Audience
                      </p>
                      <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                        {audience.title}
                      </h2>
                      <p className="text-lg text-foreground/60">{audience.subtitle}</p>
                    </div>

                    <div className="space-y-4">
                      {audience.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex gap-4"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <p className="text-lg text-foreground/80">{benefit}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group text-lg"
                      >
                        Get Started
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Whatever your role in the music ecosystem, Ragam is ready to support your journey.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition duration-300 text-lg"
          >
            Get My Music Analysis
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
