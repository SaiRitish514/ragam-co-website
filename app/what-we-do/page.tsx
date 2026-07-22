'use client';

import Link from "next/link";

import { useState } from "react";
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
  const [activeSection, setActiveSection] = useState(0);

const reportSections = [
  "Audience Overview",
  "Fan Map",
  "Career Score",
  "Concert Potential",
  "Revenue Opportunities",
  "Recommended Festivals",
  "Next Steps",
];
  return (
    <main className="bg-[#171412] min-h-screen">
      {/* FIVE STEP PROCESS */}

<section className="max-w-[1400px] mx-auto px-8 lg:px-20 py-40">

  <div className="text-center">

    <p className="uppercase tracking-[0.35em] text-primary text-xs font-semibold">
      OUR PROCESS
    </p>

    <h2 className="font-serif text-[60px] leading-[0.90] text-white mt-5">
      A five-step process,
      <br />
      <span className="italic text-primary">
        built like a studio session.
      </span>
    </h2>

    <p className="text-white/60 text-lg max-w-3xl mx-auto mt-8 leading-8">
      No dashboards. No fluff. A quiet, disciplined method that ends with
      a plan you can execute.
    </p>

  </div>

  <div className="mt-20 space-y-10">

    {/* STEP 1 */}
    
    <div className="grid grid-cols-[1fr_auto_1fr] items-center">

      <div className="text-right pr-20">
        <h3 className="font-serif text-[38px] text-white">
          You tell us your goals.
        </h3>

        <p className="text-white/60 mt-4 leading-5">
          A short intake — your music,
          your city, ambitions and constraints.
        </p>
      </div>

      <div className="mx-8 relative z-10">
         <div className="absolute left-1/2 top-[60px] -translate-x-1/2 w-px h-[110px] bg-[#C9A85A]/60"></div>
        <div className="w-14 h-14 rounded-full border border-primary flex items-center justify-center text-primary font-semibold">
          01
        </div>
      </div>
      <div></div>

    </div>

    {/* STEP 2 */}

    <div className="grid grid-cols-[1fr_auto_1fr] items-center">

      <div></div>

      <div className="mx-8 relative z-10">
        <div className="absolute left-1/2 top-[60px] -translate-x-1/2 w-px h-[120px] bg-[#C9A85A]/60"></div>
        <div className="w-14 h-14 rounded-full border border-primary flex items-center justify-center text-primary font-semibold">
          02
        </div>
      </div>

      <div className="pl-20">
        <h3 className="font-serif text-[40px] text-white">
          We research your music,
          audience, region and career.
        </h3>

        <p className="text-white/60 mt-4 leading-5">
          Streaming data, social signals,
          historical performance and scene context.
        </p>
      </div>

    </div>

    {/* STEP 3 */}

    <div className="grid grid-cols-[1fr_auto_1fr] items-center">

      <div className="text-right pr-20">

        <h3 className="font-serif text-[40px] text-white">
          We analyse opportunities,
          income and collaborations.
        </h3>

        <p className="text-white/60 mt-3 leading-5">
          Every path forward is priced,
          weighted and pressure-tested.
        </p>

      </div>

      <div className="mx-8 relative z-10">
        <div className="absolute left-1/2 top-[60px] -translate-x-1/2 w-px h-[120px] bg-[#C9A85A]/60"></div>
        <div className="w-14 h-14 rounded-full border border-primary flex items-center justify-center text-primary font-semibold">
          03
        </div>
      </div>

      <div></div>

    </div>

    {/* STEP 4 */}

    <div className="grid grid-cols-[1fr_auto_1fr] items-center">

      <div></div>

      <div className="mx-8 relative z-10">
        <div className="absolute left-1/2 top-[60px] -translate-x-1/2 w-px h-[110px] bg-[#C9A85A]/60"></div>
        <div className="w-14 h-14 rounded-full border border-primary flex items-center justify-center text-primary font-semibold">
          04
        </div>
      </div>

      <div className="pl-20">

        <h3 className="font-serif text-[40px] text-white">
          You receive a complete
          Growth Intelligence Report.
        </h3>

        <p className="text-white/60 mt-4 leading-5">
          A single document with the map,
          priorities and numbers behind them.
        </p>

      </div>

    </div>

    {/* STEP 5 */}

    <div className="grid grid-cols-[1fr_auto_1fr] items-center">

      <div className="text-right pr-20">

        <h3 className="font-serif text-[40px] text-white">
          We help you execute it.
        </h3>

        <p className="text-white/60 mt-4 leading-5">
          Introductions, applications,
          pricing conversations and strategic guidance.
        </p>

      </div>

      <div className="mx-8 relative z-10">
        <div className="w-14 h-14 rounded-full border border-primary flex items-center justify-center text-primary font-semibold">
          05
        </div>
      </div>

      <div></div>

    </div>

  </div>

</section>

      <section className="max-w-[1600px] mx-auto px-10 lg:px-20 py-24">

        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-16">

          {/* LEFT */}

          <div className="sticky top-32 h-fit">

            <p className="uppercase tracking-[0.35em] text-[#B38A45] text-xs font-semibold">
              WHAT YOU RECEIVE
            </p>

            <h1 className="font-serif text-[60px] leading-[0.90] tracking-[-0.04em] text-[#B38A45] mt-7">

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
              className="inline-flex items-center gap-3 mt-16 text-[22px] text-[#B38A45] hover:gap-5 transition-all"
            >
              Preview a sample report
              →
            </Link>

          </div>

          {/* RIGHT */}

          <div className="grid md:grid-cols-2 gap-5">

  {reports.map((item, index) => {

    const Icon = item.icon;

    return (

      <div
  key={index}
        className="rounded-[36px] border border-[#2A2520] bg-[#171412] p-8"
      >

        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#24201C]">

          <Icon
  size={20}
  className="text-primary"
/>

        </div>

        <h3 className="font-serif text-[38px] mt-8 text-white">

          {item.title}

        </h3>

        <p className="text-[20px] leading-[1.5] mt-6 text-white/60">

          {item.desc}

        </p>

      </div>

    

              );
            })}

          </div>

        </div>

      </section>
      {/* REPORT PREVIEW */}

      <section className="bg-[#171412] py-25 px-8 lg:px-20">

  <div className="max-w-[1700px] mx-auto">

    <p className="uppercase tracking-[0.30em] text-primary text-xs font-semibold">
      RAGAM GROWTH INTELLIGENCE REPORT
    </p>

    <h2 className="font-serif text-[60px] leading-[0.90] tracking-[-0.04em] text-white mt-6">
      What the report
      <br />
      <span className="italic text-primary">
        actually looks like.
      </span>
    </h2>

    <p className="text-white/70 text-[20px] leading-[1.6] max-w-[760px] mt-8">
      A confidential, artist-specific document.
      Below is a redacted preview from a recent brief.
    </p>

    <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-8 mt-15">
      {/* LEFT SIDE */}

<div>

  <div className="rounded-[30px] border border-white/10 bg-[#231F1B] p-5">

    <div className="space-y-2">

      {reportSections.map((section, index) => (

        <button
          key={index}
          onClick={() => setActiveSection(index)}
          className={`w-full rounded-full px-4 py-5 flex justify-between items-center transition-all duration-300

          ${
            activeSection === index
              ? "bg-primary text-black"
              : "text-white/70 hover:bg-white/5"
          }`}
        >

          <span>

            <span className="opacity-60 mr-3">

              {(index + 1).toString().padStart(2, "0")}

            </span>

            {section}

          </span>

          {activeSection === index && <span>→</span>}

        </button>

      ))}

    </div>

  </div>

  <p className="text-white/40 text-sm mt-4">
    🔒 Client details redacted for privacy.
  </p>

</div>

{/* RIGHT SIDE */}

<div>

  {activeSection === 0 && (

<div className="bg-[#F8F3EA] rounded-[20px] p-15">

  {/* Header */}

  <div className="flex justify-between uppercase tracking-[0.2em] text-xs text-[#7E756C]">

    <span>RAGAM GROWTH INTELLIGENCE REPORT</span>

    <span>PAGE 01 / 7</span>

  </div>

  {/* Section Title */}

  <div className="mt-8 flex items-center gap-3">

    <div className="w-12 h-[1px] bg-primary"></div>

    <p className="uppercase tracking-[0.3em] text-primary text-xs">
      Audience Overview
    </p>

  </div>

  <h2 className="font-serif text-[50px] leading-none text-[#221F1B] mt-8 flex items-center gap-5">
  <span>Prepared for</span>

  <span
    className="inline-block w-[220px] h-[14px] rounded-full bg-[#221F1B]"
    style={{
      filter: "blur(3px)",
      opacity: 0.95,
    }}
  />
</h2>

  {/* Stats */}

  <div className="grid grid-cols-3 gap-5 mt-5">

    <div className="border border-[#D7CCBE] rounded-[26px] p-8">

      <p className="uppercase tracking-[0.20em] text-[8px] text-[#847A6F]">
        Monthly Listeners
      </p>

      <h4 className="font-geist font-medium font-medium text-[30px] lg:text-[25px] font-bold tracking-[-0.02em] text-[#221F1B]">
        42,180
      </h4>

    </div>

    <div className="border border-[#D7CCBE] rounded-[26px] p-8">

      <p className="uppercase tracking-[0.20em] text-[8px] text-[#847A6F]">
        Avg. Age
      </p>

      <h4 className="font-geist font-medium text-[30px] lg:text-[25px] font-bold tracking-[-0.02em] text-[#221F1B]">
        24–34
      </h4>

    </div>

    <div className="border border-[#D7CCBE] rounded-[26px] p-8">

      <p className="uppercase tracking-[0.25em] text-[11px] text-[#847A6F]">
        Repeat Rate
      </p>

      <h4 className="font-geist font-medium text-[30px] lg:text-[25px] font-bold tracking-[-0.02em] text-[#221F1B]">
        61%
      </h4>

    </div>

  </div>

  {/* Graph */}

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

)}
{activeSection === 1 && (

<div className="bg-[#F8F3EA] rounded-[42px] p-14">

  {/* Header */}

  <div className="flex justify-between uppercase tracking-[0.2em] text-xs text-[#7E756C]">

    <span>RAGAM GROWTH INTELLIGENCE REPORT</span>

    <span>PAGE 02 / 47</span>

  </div>

  {/* Title */}

  <div className="mt-8 flex items-center gap-3">

    <div className="w-12 h-[1px] bg-primary"></div>

    <p className="uppercase tracking-[0.3em] text-primary text-xs">
      Fan Map
    </p>

  </div>

  <h2 className="font-serif text-[50px] leading-none text-[#221F1B] mt-8 flex items-center gap-5">
  <span>Prepared for</span>

  <span
    className="inline-block w-[220px] h-[14px] rounded-full bg-[#221F1B]"
    style={{
      filter: "blur(3px)",
      opacity: 0.95,
    }}
  />
</h2>

  {/* Map */}

  <div className="relative mt-12 h-[150px] rounded-[30px] overflow-hidden border border-[#D7CCBE]">

    {/* Grid */}

    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right,#ddd 1px,transparent 1px),
          linear-gradient(to bottom,#ddd 1px,transparent 1px)
        `,
        backgroundSize: "34px 34px",
      }}
    />

    {/* Bubbles */}

    <div className="absolute left-[18%] top-[34%] w-4 h-4 rounded-full bg-[#B38A45]" />
    <div className="absolute left-[28%] top-[24%] w-3 h-3 rounded-full bg-[#B38A45]" />
    <div className="absolute left-[34%] top-[56%] w-8 h-8 rounded-full bg-[#B38A45]" />
    <div className="absolute left-[47%] top-[46%] w-10 h-10 rounded-full bg-[#B38A45]" />
    <div className="absolute left-[58%] top-[52%] w-5 h-5 rounded-full bg-[#B38A45]" />
    <div className="absolute left-[68%] top-[40%] w-6 h-6 rounded-full bg-[#B38A45]" />
    <div className="absolute left-[76%] top-[60%] w-4 h-4 rounded-full bg-[#B38A45]" />

    {/* Label */}

    <div className="absolute bottom-5 left-5 rounded-full bg-white px-5 py-2 text-xs tracking-[0.25em] uppercase text-[#5B5248] shadow">
      Andhra & Telangana
    </div>

  </div>

  {/* Bottom Cards */}

  <div className="grid grid-cols-3 gap-6 mt-8">

    <div className="border border-[#D7CCBE] rounded-[24px] p-7">

      <p className="uppercase tracking-[0.25em] text-[11px] text-[#847A6F]">
        Top City
      </p>

      <h3 className="font-serif text-[38px] mt-5 text-[#221F1B]">
        Hyderabad
      </h3>

    </div>

    <div className="border border-[#D7CCBE] rounded-[24px] p-7">

      <p className="uppercase tracking-[0.25em] text-[11px] text-[#847A6F]">
        Rising City
      </p>

      <h3 className="font-serif text-[38px] mt-5 text-[#221F1B]">
        Vizag
      </h3>

    </div>

    <div className="border border-[#D7CCBE] rounded-[24px] p-7">

      <p className="uppercase tracking-[0.25em] text-[11px] text-[#847A6F]">
        Underserved
      </p>

      <h3 className="font-serif text-[38px] mt-5 text-[#221F1B]">
        Warangal
      </h3>

    </div>

  </div>

</div>

)}

{activeSection === 2 && (

<div className="bg-[#F8F3EA] rounded-[42px] p-14">

  {/* Header */}

  <div className="flex justify-between uppercase tracking-[0.2em] text-xs text-[#7E756C]">

    <span>RAGAM GROWTH INTELLIGENCE REPORT</span>

    <span>PAGE 03 / 47</span>

  </div>

  {/* Title */}

  <div className="mt-8 flex items-center gap-3">

    <div className="w-12 h-[1px] bg-primary"></div>

    <p className="uppercase tracking-[0.3em] text-primary text-xs">
      Career Score
    </p>

  </div>

  <h2 className="font-serif text-[50px] leading-none text-[#221F1B] mt-8 flex items-center gap-5">
  <span>Prepared for</span>

  <span
    className="inline-block w-[220px] h-[14px] rounded-full bg-[#221F1B]"
    style={{
      filter: "blur(3px)",
      opacity: 0.95,
    }}
  />
</h2>

  <div className="grid grid-cols-[420px_1fr] gap-14 mt-12">

    {/* Score Circle */}

    <div className="border border-[#D8CCBE] rounded-[30px] p-12 flex flex-col items-center justify-center">

      <div className="relative w-50 h-50">

        <svg className="w-56 h-56 -rotate-90">

          <circle
            cx="112"
            cy="112"
            r="80"
            stroke="#DDD7CE"
            strokeWidth="12"
            fill="none"
          />

          <circle
            cx="112"
            cy="112"
            r="80"
            stroke="#B38A45"
            strokeWidth="12"
            fill="none"
            strokeDasharray="503"
            strokeDashoffset="140"
            strokeLinecap="round"
          />

        </svg>

        <div className="absolute inset-0 flex items-center justify-center">

          <span className=" font-geist font-medium text-[30px] lg:text-[25px] font-bold tracking-[-0.02em] text-[#221F1B]">
            72
          </span>

        </div>

      </div>

      <p className="uppercase tracking-[0.3em] text-[#7E756C] text-xs mt-8">
        Career Score
      </p>

    </div>

    {/* Progress Bars */}

    <div className="space-y-6 flex flex-col justify-center">

      {[
        ["Craft & Catalogue",84],
        ["Audience Momentum",71],
        ["Industry Access",58],
        ["Revenue Readiness",66],
      ].map(([label,value],i)=>(

        <div key={i}>

          <div className="flex justify-between mb-2">

            <span className="text-[#221F1B] text-xl">
              {label}
            </span>

            <span className="text-[#6D645B]">
              {value}
            </span>

          </div>

          <div className="h-2 rounded-full bg-[#DDD7CE]">

            <div
              className="h-2 rounded-full bg-[#B38A45]"
              style={{width:`${value}%`}}
            />

          </div>

        </div>

      ))}

    </div>

  </div>

</div>

)}


{activeSection === 3 && (

<div className="bg-[#F8F3EA] rounded-[42px] p-14">

  {/* Header */}

  <div className="flex justify-between uppercase tracking-[0.2em] text-xs text-[#7E756C]">

    <span>RAGAM GROWTH INTELLIGENCE REPORT</span>

    <span>PAGE 04 / 47</span>

  </div>

  {/* Title */}

  <div className="mt-8 flex items-center gap-3">

    <div className="w-12 h-[1px] bg-primary"></div>

    <p className="uppercase tracking-[0.3em] text-primary text-xs">
      Concert Potential
    </p>

  </div>

  <h2 className="font-serif text-[50px] leading-none text-[#221F1B] mt-8 flex items-center gap-5">
  <span>Prepared for</span>

  <span
    className="inline-block w-[220px] h-[14px] rounded-full bg-[#221F1B]"
    style={{
      filter: "blur(3px)",
      opacity: 0.95,
    }}
  />
</h2>

  <div className="mt-5 space-y-3">

    {[
      ["Hyderabad","300-cap listening room","HIGH FIT"],
      ["Vijayawada","Riverfront amphitheatre","MEDIUM FIT"],
      ["Bengaluru","Telugu diaspora club night","HIGH FIT"],
      ["Visakhapatnam","College festival circuit","MEDIUM FIT"],
    ].map(([city,place,status],i)=>(

      <div
        key={i}
        className="border border-[#D8CCBE] rounded-[26px] px-8 py-7 flex items-center justify-between"
      >

        <div>

          <h3 className="font-serif text-[30px] text-[#221F1B]">
            {city}
          </h3>

          <p className="text-[#756D63] mt-2">
            {place}
          </p>

        </div>

        <span
          className={`px-6 py-3 rounded-full text-xs tracking-[0.25em]

          ${
            status==="HIGH FIT"
              ? "bg-[#1D1916] text-[#D8BE7A]"
              : "bg-[#F2EEE6] text-[#6B6257]"
          }`}
        >

          {status}

        </span>

      </div>

    ))}

  </div>

</div>

)}


{activeSection === 4 && (

<div className="bg-[#F8F3EA] rounded-[42px] p-14">

  {/* Header */}

  <div className="flex justify-between uppercase tracking-[0.2em] text-xs text-[#7E756C]">

    <span>RAGAM GROWTH INTELLIGENCE REPORT</span>

    <span>PAGE 05 / 47</span>

  </div>

  {/* Title */}

  <div className="mt-8 flex items-center gap-3">

    <div className="w-12 h-[1px] bg-primary"></div>

    <p className="uppercase tracking-[0.3em] text-primary text-xs">
      Revenue Opportunities
    </p>

  </div>

  <h2 className="font-serif text-[50px] leading-none text-[#221F1B] mt-8 flex items-center gap-5">
  <span>Prepared for</span>

  <span
    className="inline-block w-[220px] h-[14px] rounded-full bg-[#221F1B]"
    style={{
      filter: "blur(3px)",
      opacity: 0.95,
    }}
  />
</h2>

  <div className="  grid grid-cols-2 gap-4 mt-8">

    {[
      ["SYNC LICENSING","₹1.2–2.4L / quarter"],
      ["TICKETED LISTENING ROOMS","₹80k–1.5L / show"],
      ["BRAND-LED IP COLLABORATION","₹3–6L / project"],
      ["PUBLISHING CATALOGUE CLEAN-UP","One-time uplift"],
    ].map(([title,value],i)=>(

      <div
        key={i}
        className="border border-[#D8CCBE] rounded-[26px] p-8"
      >

        <p className="uppercase tracking-[0.25em] text-[12px] text-[#B38A45]">

          {title}

        </p>

        <h3 className="font-serif font-medium text-[40px] mt-6 text-[#221F1B]">

          {value}

        </h3>

        <div className="mt-8 h-4 rounded-full bg-[#2A2623] blur-[1px]" />

      </div>

    ))}

  </div>

</div>

)}

{activeSection === 5 && (

<div className="bg-[#F8F3EA] rounded-[42px] p-14">

  {/* Header */}

  <div className="flex justify-between uppercase tracking-[0.2em] text-xs text-[#7E756C]">

    <span>RAGAM GROWTH INTELLIGENCE REPORT</span>

    <span>PAGE 06 / 47</span>

  </div>

  {/* Title */}

  <div className="mt-8 flex items-center gap-3">

    <div className="w-12 h-[1px] bg-primary"></div>

    <p className="uppercase tracking-[0.3em] text-primary text-xs">
      Recommended Festivals
    </p>

  </div>

 
<h2 className="font-serif text-[50px] leading-none text-[#221F1B] mt-8 flex items-center gap-5">
  <span>Prepared for</span>

  <span
    className="inline-block w-[220px] h-[14px] rounded-full bg-[#221F1B]"
    style={{
      filter: "blur(3px)",
      opacity: 0.95,
    }}
  />
</h2>

  <div className="mt-10 overflow-hidden rounded-[28px] border border-[#D8CCBE]">

    {[
      ["Magnetic Fields","Nov · Alsisar","Curator intro available"],
      ["Ziro Festival","Sep · Arunachal","Application window Feb"],
      ["Krishnaveni Nights","Feb · Vijayawada","Direct booking"],
      ["NH7 Weekender","Dec · Pune","Programmer contact"],
    ].map(([festival,date,status],i)=>(

      <div
        key={i}
        className="flex items-center justify-between px-8 py-8 border-b last:border-b-0 border-[#D8CCBE]"
      >

        <div>

          <h3 className="font-serif text-[34px] text-[#221F1B]">
            {festival}
          </h3>

          <p className="text-[#756D63] mt-2">
            {date}
          </p>

        </div>

        <span className="text-[#B38A45] text-sm">
          {status}
        </span>

      </div>

    ))}

  </div>

</div>

)}

{activeSection === 6 && (

<div className="bg-[#F8F3EA] rounded-[40px] p-10">

  {/* Header */}

  <div className="flex justify-between uppercase tracking-[0.2em] text-xs text-[#7E756C]">

    <span>RAGAM GROWTH INTELLIGENCE REPORT</span>

    <span>PAGE 07 / 47</span>

  </div>

  {/* Title */}

  <div className="mt-8 flex items-center gap-4">

    <div className="w-10 h-[1px] bg-primary"></div>

    <p className="uppercase tracking-[0.3em] text-primary text-xs">
      Next Steps
    </p>

  </div>

  <h2 className="font-serif text-[50px] leading-none text-[#221F1B] mt-8 flex items-center gap-5">
  <span>Prepared for</span>

  <span
    className="inline-block w-[220px] h-[14px] rounded-full bg-[#221F1B]"
    style={{
      filter: "blur(3px)",
      opacity: 0.95,
    }}
  />
</h2>

  <div className="mt-10 space-y-4">

    {[
      ["Release single № 3 with regional press embargo — week of Mar 04."],
      ["Open pre-sale for two Hyderabad listening-room nights."],
      ["Submit application to Magnetic Fields curator programme."],
      ["Meet with two sync agencies (introductions attached)."],
      ["Consolidate publishing catalogue under single administrator."],
    ].map(([time,task],i)=>(

      <div
        key={i}
        className="flex items-center gap-6 border border-[#D8CCBE] rounded-[24px] px-8 py-5 min-h-[90px]"
      >

        <div className="w-14 h-14 rounded-full bg-[#221F1B] text-[#C8A968] flex items-center justify-center font-semibold">

          {i+1}

        </div>

        <div>

          <p className="uppercase tracking-[0.25em] text-[11px] text-[#8A8177]">
            {time}
          </p>

          <h3 className="font-serif text-[34px] text-[#221F1B] mt-2">
            {task}
          </h3>

        </div>

      </div>

    ))}

  </div>

</div>

)}
</div>   {/* RIGHT SIDE */}

</div>   {/* GRID */}

</div>   {/* CONTAINER */}

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
  );
}