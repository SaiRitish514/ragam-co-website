'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { ScrollReveal } from '@/components/motion/scroll-reveal';

const values = [
  {
    title: 'Integrity',
    description: 'We believe in honest, research-driven insights grounded in data and cultural understanding.',
  },
  {
    title: 'Excellence',
    description: 'We pursue mastery in everything we do, from analysis to strategic guidance.',
  },
  {
    title: 'Inclusivity',
    description: 'We celebrate diverse voices and support music creators from all backgrounds and perspectives.',
  },
  {
    title: 'Impact',
    description: 'We measure success not by metrics alone, but by the real cultural and artistic change we help create.',
  },
];

const team = [
  {
    name: 'Aria Patel',
    role: 'Founder & CEO',
    bio: 'Music industry strategist with 15+ years experience across labels, festivals, and cultural institutions.',
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Research',
    bio: 'Data scientist specializing in cultural analytics and trend forecasting across global music markets.',
  },
  {
    name: 'Sofia Russo',
    role: 'Director of Experiences',
    bio: 'Concert designer and festival curator with a track record of creating immersive cultural events.',
  },
  {
    name: 'James Thompson',
    role: 'Advisory Board',
    bio: 'Renowned music journalist and cultural commentator with international reputation.',
  },
];

export default function About() {
  return (
    <main className="w-full">
      <HeroSection
        title="About Ragam"
        subtitle="Our Story"
        description="Building the intelligence layer for the global music industry."
      />

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Mission</p>
                <h2 className="text-4xl font-bold text-foreground mb-4">Why We Exist</h2>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Ragam exists to transform music industry intelligence into strategic advantage. We believe that artists, organizers, and cultural institutions deserve access to world-class research, market insights, and strategic guidance to thrive in an increasingly complex global music ecosystem.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We&apos;re not just another consulting firm or analytics platform. We&apos;re a cultural intelligence hub built by music professionals who understand the nuances of artistic excellence, market dynamics, and human connection.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Vision</p>
                <h2 className="text-4xl font-bold text-foreground mb-4">Where We&apos;re Going</h2>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We envision a world where music creators and institutions have direct access to the intelligence, connections, and opportunities they need to create transformative work. Where data serves culture, not the other way around.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                By 2030, Ragam will be the trusted intelligence partner for music professionals globally, operating across continents and supporting the next generation of artistic excellence and cultural impact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto bg-card/30 rounded-2xl border border-border">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">Our Principles</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Core Values</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-background border border-border rounded-xl p-8"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Team</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Built by music industry veterans and cultural strategists from around the world.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <motion.div
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{member.name[0]}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{member.bio}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Our Philosophy</h2>
          <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
            <p>
              We believe that music is one of humanity&apos;s most powerful cultural forces. It connects people across borders, generations, and experiences. It drives innovation, celebrates identity, and creates moments of profound human connection.
            </p>
            <p>
              Yet the music industry often operates on outdated models, fragmented data, and disconnected information. We&apos;re here to change that. By bringing together research, technology, and cultural intelligence, we&apos;re building the infrastructure for a more transparent, fair, and thriving music ecosystem.
            </p>
            <p>
              Our work is guided by a simple principle: <span className="text-primary font-semibold">Intelligence in service of culture.</span> Everything we do is designed to support artists, empower organizers, advance cultural institutions, and create spaces where music can flourish.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join the Ragam Community
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Whether you&apos;re an artist, organizer, institution, or music lover, there&apos;s a place for you here.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition duration-300 text-lg"
          >
            Get Started
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
