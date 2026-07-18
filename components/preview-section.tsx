'use client';

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
}

export function PreviewSection({
  title,
  subtitle,
  description,
  children,
  ctaText,
  ctaLink,
  imageUrl,
}: PreviewSectionProps) {
  return (
    <section className="py-28 px-6">
      <div className="max-w-[1800px] mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-4 items-center">

        {/* LEFT */}
        <ScrollReveal direction="left">
          <div>

            {subtitle && (
              <p className="uppercase tracking-[0.38em] text-primary text-base font-semibold mb-8">
  {subtitle}
</p>
            )}

            <h2 className="font-serif leading-[0.88] tracking-[-0.04em] text-white">
  <span className="block text-[72px] lg:text-[104px] xl:text-[118px] font-normal">
    {title}
  </span>
</h2>

            <p className="mt-10 text-[28px] leading-[1.6] text-white/70 max-w-[820px] font-light">
              {description}
            </p>

            {children}

            <div className="mt-10 flex items-center gap-8">

              <Link
                href={ctaLink}
                className="bg-primary text-black px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition">
                {ctaText}
              </Link>

              <button className="text-white flex items-center gap-2">
                ▶ See How It Works
              </button>

            </div>

            <div className="grid grid-cols-3 gap-10 mt-14">

              <div>
                <h3 className="text-5xl font-serif text-white">300+</h3>
                <p className="text-xs uppercase tracking-widest text-white/60 mt-2">
                  Artists Studied
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-serif text-white">12</h3>
                <p className="text-xs uppercase tracking-widest text-white/60 mt-2">
                  Cities Mapped
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-serif text-white">40k</h3>
                <p className="text-xs uppercase tracking-widest text-white/60 mt-2">
                  Listener Signals
                </p>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* RIGHT */}
        <ScrollReveal direction="right">

          <div className="relative">

            <img
              src={imageUrl}
              alt={title}
              className="rounded-[32px] w-full h-[700px] object-cover"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-10 left-10 bg-[#181614]/95 backdrop-blur-xl border border-[#3b352d] rounded-3xl p-6 w-72 shadow-2xl">

              <p className="text-primary uppercase tracking-[0.3em] text-xs">
                Live Analysis
              </p>

              <h3 className="text-white text-3xl font-serif mt-3">
                Report № 128
              </h3>

              <p className="text-white/60 mt-3">
                Hyderabad Indie Vocalist
              </p>

              <p className="text-white/60">
                47-page brief delivered
              </p>

            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}