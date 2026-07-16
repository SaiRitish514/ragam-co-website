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
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      )}

      {/* Floating particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        {/* Subtitle tag */}
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              {subtitle}
            </p>
          </motion.div>
        )}

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight"
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4"
          >
            <Link
              href={ctaLink}
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition duration-300 text-lg"
            >
              {ctaText}
            </Link>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-foreground/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
