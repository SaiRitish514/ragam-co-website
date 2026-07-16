'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { ScrollReveal } from '@/components/motion/scroll-reveal';

const experiences = [
  {
    title: 'Immersive Concert Experiences',
    description: 'Redefining how audiences connect with live music through innovative staging, spatial audio, and audience participation.',
    image: '/images/live-concert.png',
  },
  {
    title: 'Festival Curation & Strategy',
    description: 'Strategic programming that resonates with modern audiences, balancing emerging talent with established acts.',
    image: '/images/live-concert.png',
  },
  {
    title: 'Cultural Heritage Celebrations',
    description: 'Honoring musical traditions through immersive experiences that celebrate cultural diversity and artistic excellence.',
    image: '/images/live-concert.png',
  },
  {
    title: 'Artist Showcase Events',
    description: 'Intimate gatherings connecting artists with audiences, industry professionals, and cultural institutions.',
    image: '/images/live-concert.png',
  },
];

const strategies = [
  {
    number: '01',
    title: 'Audience Understanding',
    description: 'Deep research into audience demographics, preferences, and emotional connections to music.',
  },
  {
    number: '02',
    title: 'Artistic Excellence',
    description: 'Curating diverse lineups that showcase both emerging and established talent.',
  },
  {
    number: '03',
    title: 'Immersive Design',
    description: 'Creating memorable experiences through innovative staging, sound, and interactive elements.',
  },
  {
    number: '04',
    title: 'Community Impact',
    description: 'Building lasting cultural connections and supporting local music ecosystems.',
  },
];

export default function Experiences() {
  return (
    <main className="w-full">
      <HeroSection
        title="Experiences"
        subtitle="Cultural Moments"
        description="Explore concert concepts, audience engagement strategies, and immersive music experiences that transform cultural moments."
      />

      {/* Experience Cards */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-card border border-border rounded-2xl overflow-hidden group h-full flex flex-col"
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed flex-grow">
                    {exp.description}
                  </p>
                  <button className="mt-6 py-2 px-4 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors w-fit">
                    Explore
                  </button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">Our Approach</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">How We Create Experiences</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Every experience is built on research, creativity, and a deep commitment to cultural impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-8 h-full flex flex-col justify-between"
                whileHover={{ y: -4 }}
              >
                <div>
                  <p className="text-5xl font-bold text-primary/20 mb-4">{strategy.number}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3">{strategy.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{strategy.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experiences That Resonate
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            Every concert, festival, and cultural moment we help create is designed to build lasting connections between artists and audiences, celebrate musical excellence, and advance the global conversation about culture.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition duration-300 text-lg"
          >
            Discuss Your Vision
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
