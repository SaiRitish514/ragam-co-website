'use client';

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  MapPin,
  BarChart3,
  Sparkles,
  Link2,
  Target,
  Compass,
  Route,
} from "lucide-react";

const reports = [
  {
    icon: Users,
    title: "Audience Intelligence",
    desc: "Who actually listens to you — beyond the follower count.",
  },
  {
    icon: MapPin,
    title: "Fan Geography",
    desc: "Where your audience lives, city by city, neighbourhood by neighbourhood.",
  },
  {
    icon: BarChart3,
    title: "Career Position",
    desc: "An honest read of what stage you're at, and what comes next.",
  },
  {
    icon: Sparkles,
    title: "Growth Opportunities",
    desc: "Concerts, grants, festivals and collaborations aligned to your trajectory.",
  },
  {
    icon: Link2,
    title: "Income Opportunities",
    desc: "Practical, prioritised ways to increase revenue this quarter.",
  },
  {
    icon: Target,
    title: "Brand Positioning",
    desc: "What makes you different, in language you can actually use.",
  },
  {
    icon: Compass,
    title: "Regional Strategy",
    desc: "Which cities should be your priority — and which to quietly leave alone.",
  },
  {
    icon: Route,
    title: "Next 90-Day Roadmap",
    desc: "A week-by-week plan with owners, budgets and decision points.",
  },
];

export default function WhatWeDo() {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <main className="bg-[#171412] min-h-screen">

      <section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-16">

          {/* LEFT */}

          <div className="sticky top-32 h-fit">

            <p className="uppercase tracking-[0.35em] text-[#B38A45] text-xs font-semibold">
              WHAT YOU RECEIVE
            </p>

            <h1 className="font-serif text-[78px] leading-[0.95] tracking-[-0.05em] text-[#B38A45] mt-8">

              Eight answers,
              <br />

              <span className="italic text-[#B38A45]">
                one document.
              </span>

            </h1>

            <p className="text-[#4A433D] text-[28px] leading-[1.65] mt-12 max-w-[540px]">

              The Ragam Growth Intelligence Report is the quiet
              spine of every decision you'll make for the next
              year. Everything below is included.

            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-3 mt-16 text-[22px] text-[#201B17] hover:gap-5 transition-all"
            >
              Preview a sample report
              →
            </Link>

          </div>

          {/* RIGHT */}

          <div className="grid md:grid-cols-2 gap-8">

  {reports.map((item, index) => {

    const Icon = item.icon;

    return (

      <motion.div
        key={index}
        onMouseEnter={() => setActiveCard(index)}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className={`rounded-[36px] border p-10 cursor-pointer transition-all duration-500

        ${
          activeCard === index
            ? "bg-[#171513] border-[#2A2520] shadow-2xl"
            : "bg-[#F8F3EA] border-[#DDD4C7]"
        }

        `}
      >

        <motion.div
          animate={{
            rotate: activeCard === index ? 360 : 0,
            scale: activeCard === index ? 1.08 : 1,
          }}
          transition={{
            duration: .45,
          }}
          className={`w-16 h-16 rounded-full flex items-center justify-center

          ${
            activeCard === index
              ? "bg-primary"
              : "bg-[#F5EFE4]"
          }

          `}
        >

          <Icon
            size={28}
            className={`

            ${
              activeCard === index
                ? "text-black"
                : "text-primary"
            }

            `}
          />

        </motion.div>

        <h3
          className={`font-serif text-[38px] mt-10 transition-colors duration-500

          ${
            activeCard === index
              ? "text-white"
              : "text-[#201B17]"
          }

          `}
        >

          {item.title}

        </h3>

        <p
          className={`text-[22px] leading-[1.7] mt-6 transition-colors duration-500

          ${
            activeCard === index
              ? "text-white/70"
              : "text-[#514A44]"
          }

          `}
        >

          {item.desc}

        </p>

      </motion.div>

    

              );
            })}

          </div>

        </div>

      </section>
      {/* REPORT PREVIEW */}

<section className="bg-[#171412] py-32 px-8 lg:px-20">

  <div className="max-w-[1700px] mx-auto">

    <p className="uppercase tracking-[0.35em] text-primary text-xs font-semibold">
      RAGAM GROWTH INTELLIGENCE REPORT
    </p>

    <h2 className="font-serif text-[86px] leading-[0.92] tracking-[-0.05em] text-white mt-8">

      What the report
      <br />

      <span className="italic text-primary">
        actually looks like.
      </span>

    </h2>

    <p className="text-white/70 text-[24px] leading-[1.7] max-w-[760px] mt-10">

      A confidential, artist-specific document.
      Below is a redacted preview from a recent brief.

    </p>

    <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-10 mt-20">

      {/* LEFT */}

      <div>

        <div className="rounded-[36px] border border-white/10 bg-[#231F1B] p-5">

          <button className="w-full bg-primary rounded-full px-6 py-5 flex justify-between items-center text-black text-lg">

            <span>

              <span className="opacity-60 mr-3">
                01
              </span>

              Audience Overview

            </span>

            <span>→</span>

          </button>

          <div className="h-[340px]" />

        </div>

        <p className="text-white/40 text-sm mt-6">
          🔒 Client details redacted for privacy.
        </p>

      </div>

      {/* RIGHT */}

      <div className="bg-[#F8F3EA] rounded-[42px] p-14">

        <div className="flex justify-between text-[#7E756C] uppercase tracking-[0.2em] text-xs">

          <span>Ragam Growth Intelligence Report</span>

          <span>Page 01 / 47</span>

        </div>

        <div className="mt-10 flex items-center gap-4">

          <div className="w-12 h-[1px] bg-primary"></div>

          <p className="uppercase tracking-[0.3em] text-primary text-xs">

            Audience Overview

          </p>

        </div>

        <h3 className="font-serif text-[60px] leading-none text-[#221F1B] mt-8">

          Prepared for 

        </h3>

        {/* STATS */}

        <div className="grid grid-cols-3 gap-6 mt-12">

          <div className="border border-[#D7CCBE] rounded-[26px] p-8">

            <p className="uppercase tracking-[0.25em] text-[11px] text-[#847A6F]">

              Monthly Listeners

            </p>

            <h4 className="font-serif text-[42px] mt-5 text-[#221F1B]">

              42,180

            </h4>

          </div>

          <div className="border border-[#D7CCBE] rounded-[26px] p-8">

            <p className="uppercase tracking-[0.25em] text-[11px] text-[#847A6F]">

              Avg. Age

            </p>

            <h4 className="font-serif text-[42px] mt-5 text-[#221F1B]">

              24–34

            </h4>

          </div>

          <div className="border border-[#D7CCBE] rounded-[26px] p-8">

            <p className="uppercase tracking-[0.25em] text-[11px] text-[#847A6F]">

              Repeat Rate

            </p>

            <h4 className="font-serif text-[42px] mt-5 text-[#221F1B]">

              61%

            </h4>

          </div>

        </div>

        {/* GRAPH */}

        <div className="mt-14">

          <p className="uppercase tracking-[0.3em] text-[#7A7065] text-xs mb-10">

            Listener Taste Graph

          </p>

          <div className="flex items-end gap-3 h-[170px]">

            {[45,75,95,68,105,55,118,90,65,86,52,102].map((h,i)=>(

              <div
                key={i}
                className="flex-1 rounded-t-[18px] bg-gradient-to-t from-[#221F1B] to-[#C9B06A]"
                style={{height:`${h}%`}}
              />

            ))}

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
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
  );
}