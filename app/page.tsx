'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { PreviewSection } from '@/components/preview-section';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { Music, Users, BookOpen, Award, Sparkles, Radio } from 'lucide-react';

const audienceIcons = [
  { icon: Music, label: 'Artists', color: 'from-primary/20 to-primary/5' },
  { icon: Users, label: 'Organizers', color: 'from-accent/20 to-accent/5' },
  { icon: Award, label: 'Labels', color: 'from-primary/20 to-primary/5' },
  { icon: Radio, label: 'Producers', color: 'from-accent/20 to-accent/5' },
  { icon: Sparkles, label: 'Venues', color: 'from-primary/20 to-primary/5' },
  { icon: BookOpen, label: 'Music Lovers', color: 'from-accent/20 to-accent/5' },
];

const researchCards = [
  {
    title: 'Global Music Market 2024',
    description: 'Comprehensive analysis of emerging trends in the music industry',
    date: 'Dec 2024',
  },
  {
    title: 'Independent Artist Growth',
    description: 'How direct-to-fan strategies are reshaping the industry',
    date: 'Nov 2024',
  },
  {
    title: 'Cultural Festivals Impact',
    description: 'Economic and social influence of live music events',
    date: 'Oct 2024',
  },
];

const opportunityCards = [
  { title: 'Artist Residencies', category: 'Residency' },
  { title: 'Creative Grants', category: 'Funding' },
  { title: 'Festival Showcase', category: 'Performance' },
  { title: 'Label Partnerships', category: 'Collaboration' },
];

export default function Page() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection
        title="Music Intelligence Platform"
        subtitle="For the Modern Cultural Institution"
        description="Discover insights, opportunities, and connections that transform how music is created, experienced, and shared."
        ctaText="Get My Music Analysis"
        ctaLink="/contact"
        backgroundImage="/images/hero-music-waves.png"
      />

      {/* What Ragam Does Preview */}
      <PreviewSection
        subtitle="Our Purpose"
        title="Intelligence That Inspires"
        description="Ragam provides deep music industry analysis, cultural research, and strategic opportunities for artists, organizers, and institutions seeking to deepen their impact."
        ctaText="Learn More"
        ctaLink="/what-we-do"
        imageUrl="/images/music-analysis.png"
        imagePosition="right"
      />

      {/* Who We Help Preview */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              Global Reach
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Who We Help
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From individual artists to cultural institutions, Ragam serves the entire music ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {audienceIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.05}>
                <motion.div
                  className={`bg-gradient-to-br ${item.color} p-8 rounded-xl border border-border hover:border-primary/20 transition-all group cursor-pointer`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-foreground">{item.label}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/who-we-help"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group text-lg"
          >
            Explore →
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              Industry Insights
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Research & Intelligence
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Deep dives into music trends, market analysis, and cultural impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchCards.map((card, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs font-medium text-primary/60 mb-3">{card.date}</p>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group text-lg"
          >
            View Research →
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Opportunities Preview */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              Growth & Collaboration
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Opportunities
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover grants, residencies, collaborations, and partnerships.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunityCards.map((card, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-6 hover:border-primary/50 transition-all group cursor-pointer"
                whileHover={{ y: -6 }}
              >
                <p className="text-xs font-medium text-primary/70 mb-2 uppercase tracking-wide">
                  {card.category}
                </p>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group text-lg"
          >
            See Opportunities →
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Experiences Preview */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              Cultural Moments
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Immersive Experiences
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore concert concepts, audience engagement, and cultural festivals.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
          <img
            src="/images/live-concert.png"
            alt="Live concert experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="text-center">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group text-lg"
          >
            Explore Experiences →
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Transform Your Music Journey?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Get personalized music analysis and discover opportunities tailored to your unique path.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition duration-300 text-lg"
          >
            Get My Music Analysis
          </Link>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="font-bold text-foreground mb-4">Platform</p>
              <ul className="space-y-2 text-foreground/70">
                <li><Link href="/what-we-do" className="hover:text-foreground transition">What We Do</Link></li>
                <li><Link href="/research" className="hover:text-foreground transition">Research</Link></li>
                <li><Link href="/opportunities" className="hover:text-foreground transition">Opportunities</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-foreground mb-4">Company</p>
              <ul className="space-y-2 text-foreground/70">
                <li><Link href="/about" className="hover:text-foreground transition">About</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-foreground mb-4">Resources</p>
              <ul className="space-y-2 text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Guides</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-foreground mb-4">Connect</p>
              <ul className="space-y-2 text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-foreground/60 text-sm">
            <p>&copy; 2024 Ragam & Co. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition">Privacy</a>
              <a href="#" className="hover:text-foreground transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
