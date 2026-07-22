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

const [tab, setTab] = useState<"past" | "upcoming">("past");
return(

<main className="bg-[#11100f] min-h-screen">
  <section className="max-w-[1700px] mx-auto px-10 lg:px-20 pt-32 pb-20">

  <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-28 items-center">

    {/* LEFT */}

    <ScrollReveal>

      <div>

        <p className="uppercase tracking-[0.5em] text-primary text-sm font-semibold">
          RAGAM EXPERIENCES
        </p>

        <h1 className="font-serif text-[60px] lg:text-[85px] xl:text-[85px] leading-[0.90] tracking-[-0.04em] text-white mt-8">

          Events that bring
          <br />
          music closer
          <br />
          to people.

        </h1>

        <p className="mt-10 text-[22px] leading-[1.8] text-white/60 max-w-2xl">

          Discover our past gatherings, ongoing initiatives,
          and upcoming experiences designed to strengthen
          the Telugu music ecosystem.

        </p>

        {/* Buttons */}

        <div className="flex gap-10 mt-14">



<button

onClick={()=>setTab("upcoming")}

className={`px-8 py-3 rounded-full transition-all duration-300 text-lg

${tab==="upcoming"

?"bg-primary text-black"

:"border border-white/10 text-white hover:border-primary"

}`}

>

What's Coming Next

</button>


<button

onClick={()=>setTab("past")}

className={`px-8 py-3 rounded-full transition-all duration-300 text-lg

${tab==="past"

?"bg-primary text-black"

:"border border-white/10 text-white hover:border-primary"

}`}

>

Past Events

</button>

</div>

      </div>

    </ScrollReveal>

    {/* RIGHT */}

    <ScrollReveal direction="right">

      <div className="border border-[#8b6b2e] rounded-[28px] p-10 bg-[#141210]">

        <p className="uppercase tracking-[0.35em] text-primary text-xs font-semibold">
          FOR ORGANISERS
        </p>

        <h2 className="font-serif text-[50px] leading-[1.05] text-white mt-1">
          Bring your next
          <br />
          event to life.
        </h2>

        <div className="w-60 h-px bg-primary mt-8 mb-8" />

        <p className="text-white/65 text-[20px] leading-7">
          Every great event starts with a clear idea.
          Ragam works with organisers to shape
          experiences that connect artists,
          audiences and culture.
        </p>

        <div className="space-y-6 mt-7">

          {[
            "Artist discovery & curation",
            "Budget-based event planning",
            "Audience engagement strategy",
            "Experience design & promotion",
          ].map((item) => (

            <div key={item} className="flex items-center gap-3">

              <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary">
                ✓
              </div>

              <p className="text-white/80 text-lg">
                {item}
              </p>

            </div>

          ))}

        </div>

        <Link
          href="/#request-analysis"
          className="mt-10 flex justify-center items-center rounded-full bg-primary text-black py-2 font-semibold text-lg"
        >
          Plan Your Event →
        </Link>

        <p className="text-white/40 text-center mt-4">
          Let's create meaningful experiences together.
        </p>

      </div>

    </ScrollReveal>

  </div>

</section>



<section className="max-w-[1700px] mx-auto px-10 lg:px-20 pb-32">

<AnimatePresence mode="wait">

{
 tab === "past" ? (

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



) : (

<div>

<motion.div
  key="upcoming"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -30 }}
  transition={{ duration: 0.5 }}
  className="max-w-[900px] mx-auto text-center py-32"
>

  <p className="uppercase tracking-[0.35em] text-primary text-sm font-semibold">
    UPCOMING EXPERIENCES
  </p>

  <h2 className="font-serif text-[60px] leading-[1.05] text-white mt-8">
    We're creating something
    <br />
    worth waiting for.
  </h2>

  <p className="mt-8 text-[22px] leading-10 text-white/65 max-w-3xl mx-auto">
    Every Ragam experience begins with research,
    collaboration and thoughtful planning.
    Our first public experiences will be announced soon.
  </p>

  <Link
    href="https://www.instagram.com/telugumusic.strategy?igsh=MTJxcG5wY3U2b3NmcQ=="
    target="_blank"
    className="inline-flex items-center gap-3 mt-14 text-primary text-xl font-medium hover:gap-5 transition-all"
  >
    Follow our journey
    <span>↗</span>
  </Link>

</motion.div>

</div>

)}

</AnimatePresence>

</section>
{/* Footer */}
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
              href="mailto:sairitishthirunagari@gmail.com"
              className="hover:text-primary"
            >
              ragam@gmail.com
            </a>
          </li>

          <li>Hyderabad, India</li>

          
  <li>
  <button
    type="button"
    onClick={() => {
      window.open(
        "https://www.instagram.com/telugumusic.strategy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
    href="https://www.linkedin.com/in/vikruti-srija-648738285/"
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

)

}