'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
const pastEvents = [
  {
    title: "Ragam Music Summit 2026",
    date: "15 June 2026",
    venue: "Hyderabad",
    image: "/images/e1.jpg",
    description:
      "A gathering of artists, labels, producers and music entrepreneurs discussing the future of Telugu music through research, collaboration and innovation.",
  },

  {
    title: "Independent Artist Meetup",
    date: "20 March 2026",
    venue: "Vijayawada",
    image: "/images/e2.jpg",
    description:
      "A community event connecting independent musicians with producers, venues and creative professionals.",
  },

  {
    title: "Music Business Workshop",
    date: "12 January 2026",
    venue: "Vizag",
    image: "/images/e3.jpg",
    description:
      "Understanding streaming, royalties, branding and long-term artist growth through practical sessions.",
  },
];

const upcomingEvents = [
  {
    title: "Telugu Music Intelligence Conference",
    date: "18 September 2026",
    venue: "Hyderabad",
    image: "/images/e4.jpg",
    description:
      "Exploring audience intelligence, music technology and the next decade of Telugu music.",
  },

  {
    title: "Ragam Creator Circle",
    date: "28 October 2026",
    venue: "Tirupati",
    image: "/images/e5.jpg",
    description:
      "Exclusive networking event for artists, labels and organisers building the future together.",
  },
];
export default function ExperiencesPage() {

const [tab,setTab]=useState("past");

return(

<main className="bg-[#11100f] min-h-screen">
  <section className="max-w-[1700px] mx-auto px-10 lg:px-20 pt-32 pb-20">

<ScrollReveal>

<p className="uppercase tracking-[0.5em] text-primary text-sm font-semibold">
RAGAM EXPERIENCES
</p>

<h1 className="font-serif text-[110px] leading-[0.9] tracking-[-0.06em] text-white mt-8">

Events that bring
<br/>

music closer
<br/>

to people.

</h1>

<p className="mt-10 text-[24px] leading-[1.9] text-white/60 max-w-3xl">

Discover our past gatherings, ongoing initiatives,
and upcoming experiences designed to strengthen
the Telugu music ecosystem.

</p>

</ScrollReveal>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 pb-24">

<div className="flex gap-8">

<button

onClick={()=>setTab("past")}

className={`px-10 py-5 rounded-full transition-all duration-300 text-lg

${tab==="past"

?"bg-primary text-black"

:"border border-white/10 text-white hover:border-primary"

}`}

>

Past Events

</button>

<button

onClick={()=>setTab("upcoming")}

className={`px-10 py-5 rounded-full transition-all duration-300 text-lg

${tab==="upcoming"

?"bg-primary text-black"

:"border border-white/10 text-white hover:border-primary"

}`}

>

Upcoming Events

</button>

</div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 pb-32">

<AnimatePresence mode="wait">

{

tab==="past"

?

<div>

<motion.div
  key="past"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -30 }}
  transition={{ duration: 0.5 }}
  className="space-y-40"
>

  {pastEvents.map((event, index) => (

    <div
      key={event.title}
      className={`grid lg:grid-cols-[1fr_1fr] gap-24 items-center ${
        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >

      {/* IMAGE */}

      <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>

        <div className="relative">

          <img
            src={event.image}
            alt={event.title}
            className="w-full max-w-[720px] aspect-square object-cover rounded-[34px] shadow-2xl"
          />

          <div className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-xl px-6 py-4 rounded-2xl">

            <p className="text-primary text-sm uppercase tracking-[0.3em]">
              Past Event
            </p>

          </div>

        </div>

      </ScrollReveal>

      {/* CONTENT */}

      <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>

        <div className="max-w-[650px]">

          <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
            EVENT
          </p>

          <h2 className="font-serif text-[72px] leading-[0.92] tracking-[-0.05em] text-white">
            {event.title}
          </h2>

          <p className="mt-12 text-[24px] leading-[1.8] text-white/65">
            {event.description}
          </p>

          <div className="mt-14 space-y-8">

            <div className="flex items-center gap-6">

              <span className="text-primary text-xl">
                📍
              </span>

              <div>

                <p className="text-white/40 uppercase tracking-[0.3em] text-xs">
                  Venue
                </p>

                <p className="text-white text-xl">
                  {event.venue}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-6">

              <span className="text-primary text-xl">
                📅
              </span>

              <div>

                <p className="text-white/40 uppercase tracking-[0.3em] text-xs">
                  Date
                </p>

                <p className="text-white text-xl">
                  {event.date}
                </p>

              </div>

            </div>

          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-4 mt-16 text-primary text-[22px] font-medium group"
          >

            View Event

            <span className="text-3xl group-hover:translate-x-2 transition-transform">
              ↗
            </span>

          </Link>

        </div>

      </ScrollReveal>

    </div>

  ))}

</motion.div>

</div>

:

<div>

<motion.div
  key="upcoming"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -30 }}
  transition={{ duration: 0.5 }}
  className="space-y-40"
>

  {upcomingEvents.map((event, index) => (

    <div
      key={event.title}
      className={`grid lg:grid-cols-[1fr_1fr] gap-24 items-center ${
        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >

      {/* IMAGE */}

      <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>

        <div className="relative">

          <img
            src={event.image}
            alt={event.title}
            className="w-full max-w-[720px] aspect-square object-cover rounded-[34px] shadow-2xl"
          />

          <div className="absolute bottom-8 left-8 bg-primary text-black px-6 py-4 rounded-2xl">

            <p className="text-sm uppercase tracking-[0.3em] font-semibold">
              Upcoming
            </p>

          </div>

        </div>

      </ScrollReveal>

      {/* CONTENT */}

      <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>

        <div className="max-w-[650px]">

          <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
            UPCOMING EVENT
          </p>

          <h2 className="font-serif text-[72px] leading-[0.92] tracking-[-0.05em] text-white">
            {event.title}
          </h2>

          <p className="mt-12 text-[24px] leading-[1.8] text-white/65">
            {event.description}
          </p>

          <div className="mt-14 space-y-8">

            <div className="flex items-center gap-6">

              <span className="text-primary text-xl">📅</span>

              <div>

                <p className="uppercase tracking-[0.3em] text-xs text-white/40">
                  Event Date
                </p>

                <p className="text-xl text-white">
                  {event.date}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-6">

              <span className="text-primary text-xl">📍</span>

              <div>

                <p className="uppercase tracking-[0.3em] text-xs text-white/40">
                  Venue
                </p>

                <p className="text-xl text-white">
                  {event.venue}
                </p>

              </div>

            </div>

          </div>

          <div className="mt-16 flex gap-6">

            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-primary text-black font-semibold hover:scale-105 transition"
            >
              Register Interest
            </Link>

            <button
              className="px-10 py-4 rounded-full border border-white/10 text-white hover:border-primary transition"
            >
              Learn More
            </button>

          </div>

        </div>

      </ScrollReveal>

    </div>

  ))}

</motion.div>

</div>

}

</AnimatePresence>

</section>
{/* Footer */}
      <footer className="w-full border-t border-white/10 py-24 px-10 lg:px-16 bg-[#12100F]">

  <div className="w-full max-w-[1700px] mx-auto px-16 lg:px-24">

    <div className="grid lg:grid-cols-[2.2fr_1fr_1fr_1fr_1fr] gap-24">

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
          className="inline-flex items-center gap-3 mt-10 bg-primary text-black rounded-full px-10 py-5 font-semibold hover:scale-105 transition"
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
            <Link href="/artists" className="hover:text-primary">
              Artists
            </Link>
          </li>

          <li>
            <Link href="/organizers" className="hover:text-primary">
              Organizers
            </Link>
          </li>

          <li>
            <Link href="/labels" className="hover:text-primary">
              Labels
            </Link>
          </li>

          <li>
            <Link href="/venues" className="hover:text-primary">
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
            <Link href="/how-it-works" className="hover:text-primary">
              How it works
            </Link>
          </li>

          <li>
            <Link href="/what-you-receive" className="hover:text-primary">
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
              href="mailto:hello@ragam.co"
              className="hover:text-primary"
            >
              hello@ragam.co
            </a>
          </li>

          <li>Hyderabad, India</li>

          <li>
            <a href="#" className="hover:text-primary">
              Instagram
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-primary">
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

)

}