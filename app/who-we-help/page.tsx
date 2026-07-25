'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { HeroSection } from '@/components/hero-section';

const audienceData = [
  {
    title: 'Artist',
    href: "/who-we-help/artist",
    description:
      'Understand your audience, grow your career, and reach the stages that matter.',
  },
  {
    title: 'Organizer',
    href: "/who-we-help/organizers",
    description:
      'Curate stronger festivals with artist intelligence, audience insights and strategic planning.',
  },
  {
    title: 'Label',
    href: "/who-we-help/labels",
    description:
      'Discover talent earlier, understand markets deeper and build sustainable artist careers.',
  },
  {
    title: 'Producer',
    href: "/who-we-help/producers",
    description:
      'Find collaborators, briefs and rooms shaped for your practice — and price your work honestly.',
  },
  {
    title: 'Venue',
    href: "/who-we-help/venues",
    description:
      'Book smarter artists and create unforgettable live experiences backed by research.',
  },
  {
    title: 'Music Lover',
    href: "/who-we-help/music",
    description:
      'Discover meaningful artists, concerts and communities that truly match your taste.',
  },
];

export default function WhoWeHelp() {
  const [active, setActive] = useState(0);

  return (
    <main className="bg-[#11100f] min-h-screen">

      <section className="max-w-[1700px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20 py-16 sm:py-20 lg:py-32">

        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-20">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-primary text-sm font-semibold">
              BUILT FOR THE ECOSYSTEM
            </p>

            <h2 className="font-serif text-[60px] leading-[0.90] tracking-[-0.04em] text-white mt-8">

              We work with
              <br />

              everyone who
              <br />

              moves the music.

            </h2>

            <p className="text-white/60 text-2xl leading-10 mt-8 max-w-md">

              One methodology,
              shaped to your seat
              in the industry.

            </p>

          </div>

          {/* RIGHT */}

          <div>

            
                          

                

<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">

  {audienceData.map((item, index) => (

    <Link href={item.href} key={item.title} className="block">

      <motion.div
  whileHover={{ y: -6 }}
  transition={{ duration: 0.25 }}
  onMouseEnter={() => setActive(index)}
  className="group rounded-[30px] border border-[#E7DDCF] bg-[#F6F1E7] text-[#1a1816] hover:bg-[#181614] hover:border-[#181614] hover:text-white cursor-pointer transition-all duration-300 p-5 sm:p-8 h-[150px] sm:h-[180px] flex flex-col justify-between"
>
        <div>
          <p className="uppercase tracking-[0.3em] text-[10px] sm:text-xs text-[#9a8f82] group-hover:text-primary transition-colors">
  FOR THE
</p>

          <h3 className="font-serif text-[28px] sm:text-[30px] mt-5">
            {item.title}
          </h3>
        </div>

        <div className="flex justify-start">
  <span className="text-2xl sm:text-3xl text-[#8f8578] group-hover:text-primary transition-colors">
    ↗
  </span>
</div>

      </motion.div>

    </Link>

  ))}

</div>

            {/* Bottom Description */}

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-6 rounded-[30px] bg-[#F6F1E7] border border-[#E7DDCF] p-12"
            >

              <p className="font-serif text-[18px] sm:text-[30px] md:text-[45px] leading-[1.2] tracking-[-0.03em] text-[#211d19]">

                {audienceData[active].description}

              </p>

            </motion.div>

          </div>

        </div>

      </section>
<footer className="w-full border-t border-white/10 py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 lg:px-16 bg-[#12100F]">

  <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-10 lg:px-24">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[2.2fr_1fr_1fr_1fr_1fr] gap-10 md:gap-16 lg:gap-24">

      {/* Left */}
      <div>

        <h2 className="font-serif text-5xl text-white">
          Ragam
          <span className="text-primary text-3xl"> &amp; co.</span>
        </h2>

        <p className="mt-8 text-white/65 text-xl leading-10 max-w-lg">
          Growth intelligence for Telugu music —
          for the artists, organizers and labels
          carrying the sound forward.
        </p>

        <Link
          href="/#request-analysis"
          className="inline-flex items-center gap-3 mt-10 bg-primary text-black rounded-full px-4 py-3 font-semibold hover:scale-100 transition"
        >
          Get My Music Analysis
          <span>↗</span>
        </Link>

      </div>

      {/* FOR */}

      <div>

        <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
          FOR
        </p>

        <ul className="space-y-5 text-white/70">

          <li>
            <Link href="/who-we-help/artist">Artists</Link>
              
            
          </li>

          <li>
            <Link href="/who-we-help/organizers">Organizers</Link>
          </li>

          <li>
            <Link href="/who-we-help/labels" className="hover:text-primary">
              Labels
            </Link>
          </li>

          <li>
            <Link href="/who-we-help/venues" className="hover:text-primary">
              Venues
            </Link>
          </li>

        </ul>

      </div>

      {/* WORK */}

      <div>

        <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
          WORK
        </p>

        <ul className="space-y-5 text-white/70">

          <li>
            <Link href="/what-we-do" className="hover:text-primary">
              How it works
            </Link>
          </li>

          <li>
            <Link href="/who-we-help" className="hover:text-primary">
              What you receive
            </Link>
          </li>

          <li>
            <Link href="/sample-report" className="hover:text-primary">
              Sample report
            </Link>
          </li>

          <li>
            <Link href="/experiences" className="hover:text-primary">
              Experiences
            </Link>
          </li>

        </ul>

      </div>

      {/* Ragam */}

      <div>

        <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
          RAGAM
        </p>

        <ul className="space-y-5 text-white/70">

          <li>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
          </li>

          <li>
            <Link href="/journal" className="hover:text-primary">
              Journal
            </Link>
          </li>

          <li>
            <Link href="/press" className="hover:text-primary">
              Press
            </Link>
          </li>

          <li>
            <Link href="/careers" className="hover:text-primary">
              Careers
            </Link>
          </li>

        </ul>

      </div>

      {/* Contact */}

      <div>

        <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
          CONTACT
        </p>

        <ul className="space-y-5 text-white/70">

          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello.ragamandco@gmail.com"
              target="_blank"
              className="hover:text-primary"
            >
              hello.ragamandco@gmail.com
            </a>
          </li>

          <li>Hyderabad, India</li>

          
  <li>
  <button
    type="button"
    onClick={() => {
      window.open(
        "https://www.instagram.com/ragamandco/",
        "_blank"
      );
    }}
    className="hover:text-primary"
  >
    Instagram
  </button>
</li>
<li>

            <a
    href="https://www.linkedin.com/company/ragamandco/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary"
  >
              LinkedIn
            </a>
          </li>

        </ul>

      </div>

    </div>

    {/* Bottom */}

    <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center">

      <p className="text-white/40">
        © 2026 Ragam &amp; Co. All rights reserved.
      </p>

      <div className="flex gap-10 mt-6 md:mt-0 text-white/40">

        <Link href="/privacy" className="hover:text-primary">
          Privacy
        </Link>

        <Link href="/terms" className="hover:text-primary">
          Terms
        </Link>

        <Link href="/colophon" className="hover:text-primary">
          Colophon
        </Link>

      </div>

    </div>

  </div>

</footer>
    </main>
  );
}