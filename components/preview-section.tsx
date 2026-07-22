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
    <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
      <div className="max-w-[1550px] mx-auto grid lg:grid-cols-[1fr_0.9fr] gap-20 xl:gap-32 items-center">

        {/* LEFT */}
        <ScrollReveal direction="left">
          <div className="max-w-[680px]">

            {subtitle && (
              <p className="uppercase tracking-[0.38em] text-primary text-base font-semibold mb-8">
  {subtitle}
</p>
            )}

            <h2 className="font-serif leading-[0.88] tracking-[-0.04em] text-white">
  <span className="block
text-[40px]
sm:text-[48px]
lg:text-[60px]
xl:text-[68px]
2xl:text-[74px]
leading-[0.95]
font-normal">
    {title}
  </span>
</h2>

            <p className="mt-10 text-[20px]
lg:text-[24px] leading-[1.6] text-white/70 max-w-[820px] font-light">
              {description}
            </p>

            {children}

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">

  <Link
    href={ctaLink}
    className="bg-primary text-black px-5 py-2 rounded-full text-xl font-semibold hover:scale-105 transition"
  >
    {ctaText}
  </Link>

  <Link
    href="/what-we-do"
    className="text-white flex items-center gap-2 hover:text-primary transition"
  >
    ▶ See How It Works
  </Link>

</div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 mt-14">

              <div>
                <h3 className="font-geist font-medium text-[40px] lg:text-[28px] font-bold tracking-[-0.02em] text-white">300+</h3>
                <p className="text-xs uppercase tracking-widest text-white/60 mt-2">
                  Artists Studied
                </p>
              </div>

              <div>
                <h3 className="font-geist font-medium text-[40px] lg:text-[28px] font-bold tracking-[-0.02em] text-white">12</h3>
                <p className="text-xs uppercase tracking-widest text-white/60 mt-2">
                  Cities Mapped
                </p>
              </div>

              <div>
                <h3 className="font-geist font-medium text-[40px] lg:text-[28px] font-bold tracking-[-0.02em] text-white">40k</h3>
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
              className="
w-full
max-w-[600px]
aspect-[4/5]
object-cover
rounded-[30px]
ml-auto
"
            />

            {/* Floating Card */}
 <div className="absolute -bottom-8 left-10
  bg-[#181614]/95
  backdrop-blur-xl
  border border-[#3b352d]
  rounded-[16px]
  w-[180px]
  px-4 py-3
  shadow-xl">

  <div>
    <p className="text-primary uppercase tracking-[0.20em] text-[7px] leading-2">
      TODAY AT
      <br />
      RAGAM
    </p>

    <h3 className="text-[#F2EEE8] text-[20px] leading-none font-serif font-medium mt-1">
  6:00 <span className="text-[16px] text-[#D8D2C8]">pm</span>
</h3>

    <p className="text-white text-[10px] font-semibold leading-tight mt-1">
      Experience №03
    </p>

    <p className="text-white/70 text-[10px] leading-3 mt-1">
      Trees to Protect
      <br />
      Dreams
    </p>

    <div className="border-t border-white/10 mt-2 pt-1">
      <p className="text-primary uppercase tracking-[0.20em] text-[7px]">
        Status
      </p>

      <p className="text-white text-[10px] mt-1">
        Planning
      </p>

      <p className="text-white/45 text-[10px] mt-1">
        Hyderabad
      </p>
    </div>

  </div>

</div>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}