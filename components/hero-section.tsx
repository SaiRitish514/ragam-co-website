'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FloatingParticles } from './motion/floating-particles';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <div className="relative w-full min-h-screen px-6 md:px-10 lg:px-14 py-6">

      {/* Hero Wrapper */}
      <div className="relative h-[88vh] rounded-3xl overflow-hidden shadow-2xl">

        {/* Background */}
        {backgroundImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45 z-[1]" />

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">

          {/* Subtitle */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-base md:text-lg font-semibold uppercase tracking-[0.35em] text-primary">
                {subtitle}
              </p>
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-center leading-[0.9] mt-6"
          >
            <span className="block text-6xl md:text-8xl lg:text-[110px] font-semibold text-white">
              Know your music.
            </span>

            <span className="block mt-3 text-4xl md:text-6xl lg:text-7xl font-medium text-white">
              Grow your{" "}
              <span className="text-primary italic">
                career.
              </span>
            </span>
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-white/80"
            >
              {description}
            </motion.p>
          )}

          {/* CTA */}
          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                href={ctaLink}
                className="inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:opacity-90 transition"
              >
                {ctaText}
              </Link>
            </motion.div>
          )}

        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-2">
            <motion.div
              className="h-2 w-1 rounded-full bg-white"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}