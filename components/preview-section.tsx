'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScrollReveal } from './motion/scroll-reveal';

interface PreviewSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  children?: React.ReactNode;
  ctaText: string;
  ctaLink: string;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
}

export function PreviewSection({
  title,
  subtitle,
  description,
  children,
  ctaText,
  ctaLink,
  imageUrl,
  imagePosition = 'right',
}: PreviewSectionProps) {
  return (
    <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center`}>
        {/* Image section */}
        {imageUrl && (
          <ScrollReveal
            direction={imagePosition === 'left' ? 'left' : 'right'}
            className={imagePosition === 'left' ? 'md:col-1' : 'md:col-2'}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </ScrollReveal>
        )}

        {/* Content section */}
        <ScrollReveal direction={imagePosition === 'left' ? 'right' : 'left'}>
          <div className="space-y-6">
            {subtitle && (
              <p className="text-sm font-medium text-primary uppercase tracking-widest">
                {subtitle}
              </p>
            )}

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
              {description}
            </p>

            {children}

            <div className="pt-4">
              <Link
                href={ctaLink}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
              >
                {ctaText}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
