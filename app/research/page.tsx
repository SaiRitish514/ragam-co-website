'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/motion/scroll-reveal';

export default function ArtistPage() {
  return (
    <main className="bg-[#11100f] min-h-screen">

      {/* Top spacing */}
      <section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT CONTENT */}

    <ScrollReveal direction="left">

      <div className="max-w-[620px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          RESEARCH
        </p>

        <h1 className="font-serif text-[76px] leading-[0.95] tracking-[-0.05em] text-white">
          Research that helps
          <br />
          Telugu music make
          <br />
          better decisions.
        </h1>

        <p className="mt-12 text-[23px] leading-[1.8] text-white/70">
          Every recommendation we make is backed by research,
          industry observation and ecosystem intelligence.
        </p>

        <p className="mt-8 text-[21px] leading-[1.8] text-white/60">
          From streaming behaviour to audience psychology,
          from music rights to concert economics—we study
          the questions shaping the future of Telugu music.
        </p>
      </div>

    </ScrollReveal>

    {/* RIGHT IMAGE */}

    <ScrollReveal direction="right">

      <div className="flex justify-end">

        <img
          src="/images/research.jpeg"
          alt="Research"
          className="
            w-[720px]
            h-[720px]
            object-cover
            rounded-[36px]
            shadow-2xl
          "
        />

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT IMAGE */}

    <ScrollReveal direction="left">

      <div>

        <img
          src="/images/tml.jpeg"
          alt="Label Intelligence"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

    {/* RIGHT CONTENT */}

    <ScrollReveal direction="right">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          RESEARCH 
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">

          Telugu Music
          <br />

          Label
          <br />

          Intelligence™

        </h1>

        <p className="mt-12 text-[24px] leading-[1.8] text-white/70">

          Understanding how regional music labels
          can grow beyond streaming.

        </p>

        <div className="mt-16">

          <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
            KEY FINDINGS
          </p>

          <div className="space-y-6">

            <div className="flex gap-4 text-white/80">

              <span className="text-primary text-xl">✓</span>

              <span className="text-[21px] leading-8">
                Revenue depends on ecosystem strength,
                not just catalog size.
              </span>

            </div>

            <div className="flex gap-4 text-white/80">

              <span className="text-primary text-xl">✓</span>

              <span className="text-[21px] leading-8">
                Fan communities outperform passive audiences.
              </span>

            </div>

            <div className="flex gap-4 text-white/80">

              <span className="text-primary text-xl">✓</span>

              <span className="text-[21px] leading-8">
                Labels need audience intelligence,
                not only distribution.
              </span>

            </div>

            <div className="flex gap-4 text-white/80">

              <span className="text-primary text-xl">✓</span>

              <span className="text-[21px] leading-8">
                Original IP creates long-term value.
              </span>

            </div>

          </div>

        </div>

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT CONTENT */}

    <ScrollReveal direction="left">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          RESEARCH
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">

          Emotional
          <br />

          Session
          <br />

          Architecture (ESA)

        </h1>

        <p className="mt-12 text-[24px] leading-[1.8] text-white/70">

          Rethinking how people experience music.

        </p>

        <div className="mt-16">

          <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
            RESEARCH INSIGHT
          </p>

          <p className="text-[21px] leading-[1.9] text-white/60 mb-10">

            Research into listener psychology showing why
            people don't simply search for songs—they
            enter emotional sessions.

          </p>

          <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
            MAJOR FINDINGS
          </p>

          <div className="space-y-6">

            <div className="flex gap-4 text-white/80">

              <span className="text-primary text-xl">✓</span>

              <span className="text-[21px] leading-8">
                Music consumption is emotion-driven.
              </span>

            </div>

            <div className="flex gap-4 text-white/80">

              <span className="text-primary text-xl">✓</span>

              <span className="text-[21px] leading-8">
                Mood transitions matter more than recommendations.
              </span>

            </div>

            <div className="flex gap-4 text-white/80">

              <span className="text-primary text-xl">✓</span>

              <span className="text-[21px] leading-8">
                Session-based listening increases engagement.
              </span>

            </div>

            <div className="flex gap-4 text-white/80">

              <span className="text-primary text-xl">✓</span>

              <span className="text-[21px] leading-8">
                Future streaming experiences should adapt to emotions.
              </span>

            </div>

          </div>

        </div>

      </div>

    </ScrollReveal>

    {/* RIGHT IMAGE */}

    <ScrollReveal direction="right">

      <div className="flex justify-end">

        <img
          src="/images/esa.jpeg"
          alt="Emotional Session Architecture"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT IMAGE */}

    <ScrollReveal direction="left">

      <div>

        <img
          src="/images/taudience.jpeg"
          alt="Telugu Audience Intelligence"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

    {/* RIGHT CONTENT */}

    <ScrollReveal direction="right">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          RESEARCH
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">

          Telugu
          <br />

          Audience
          <br />

          Intelligence Study

        </h1>

        <p className="mt-12 text-[24px] leading-[1.8] text-white/70">

          Understanding how Telugu listeners discover,
          share and stay connected with music.

        </p>

        <div className="mt-16">

          <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
            RESEARCH AREAS
          </p>

          <div className="space-y-6">

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Discovery behaviour
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Regional listening patterns
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Fan communities
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Concert attendance
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Digital platforms
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Social media influence
              </span>
            </div>

          </div>

        </div>

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT CONTENT */}

    <ScrollReveal direction="left">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          RESEARCH
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">

          Rights &
          <br />

          Royalty
          <br />

          Intelligence

        </h1>

        <p className="mt-12 text-[24px] leading-[1.8] text-white/70">

          Research focused on rights management,
          royalty distribution and music ownership.

        </p>

        <div className="mt-16">

          <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
            TOPICS
          </p>

          <div className="space-y-6">

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Metadata accuracy
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Royalty tracking
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Rights transparency
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Publishing workflows
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Independent artist ownership
              </span>
            </div>

          </div>

        </div>

      </div>

    </ScrollReveal>

    {/* RIGHT IMAGE */}

    <ScrollReveal direction="right">

      <div className="flex justify-end">

        <img
          src="/images/rights.jpeg"
          alt="Rights & Royalty Intelligence"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT IMAGE */}

    <ScrollReveal direction="left">

      <div>

        <img
          src="/images/independent.jpeg"
          alt="Independent Artist Growth Report"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

    {/* RIGHT CONTENT */}

    <ScrollReveal direction="right">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          RESEARCH
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">

          Independent
          <br />

          Artist Growth
          <br />

          Report

        </h1>

        <p className="mt-12 text-[24px] leading-[1.8] text-white/70">

          Researching why talented artists struggle
          to build sustainable careers.

        </p>

        <div className="mt-16">

          <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
            FINDINGS
          </p>

          <div className="space-y-6">

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">✓</span>
              <span className="text-[21px] leading-8">
                Talent isn't the biggest problem.
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">✓</span>
              <span className="text-[21px] leading-8">
                Audience discovery is.
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">✓</span>
              <span className="text-[21px] leading-8">
                Community is undervalued.
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">✓</span>
              <span className="text-[21px] leading-8">
                Opportunities are fragmented.
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">✓</span>
              <span className="text-[21px] leading-8">
                Career planning is rarely strategic.
              </span>
            </div>

          </div>

        </div>

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT CONTENT */}

    <ScrollReveal direction="left">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          RESEARCH
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">

          Live Music
          <br />

          Ecosystem
          <br />

          Report

        </h1>

        <p className="mt-12 text-[24px] leading-[1.8] text-white/70">

          Understanding concerts, festivals and
          cultural experiences across Telugu states.

        </p>

        <div className="mt-16">

          <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
            RESEARCH INCLUDES
          </p>

          <div className="space-y-6">

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Audience behaviour
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Venue ecosystem
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Regional demand
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Ticket pricing
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Festival growth
              </span>
            </div>

            <div className="flex gap-4 text-white/80">
              <span className="text-primary text-xl">•</span>
              <span className="text-[21px] leading-8">
                Event experience design
              </span>
            </div>

          </div>

        </div>

      </div>

    </ScrollReveal>

    {/* RIGHT IMAGE */}

    <ScrollReveal direction="right">

      <div className="flex justify-end">

        <img
          src="/images/live.jpeg"
          alt="Live Music Ecosystem Report"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="py-28">

  <div className="max-w-[1700px] mx-auto px-10 lg:px-20">

    <p className="uppercase tracking-[0.6em] text-primary text-sm font-semibold mb-8">
    RESEARCH
  </p>
    <h1 className="font-serif text-[92px] lg:text-[120px] leading-[0.92] tracking-[-0.05em] text-white">

      Industry
      <br />

      <span className="italic text-primary">
        Case Studies
      </span>

    </h1>

    

  </div>

</section>
    <section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT IMAGE */}

    <ScrollReveal direction="left">

      <div>

        <img
          src="/images/mangomusic.jpeg"
          alt="Mango Music Case Study"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

    {/* RIGHT CONTENT */}

    <ScrollReveal direction="right">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          INDUSTRY CASE STUDY
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">

          Mango
          <br />

          Music

        </h1>

        <p className="mt-12 text-[24px] leading-[1.8] text-white/70">

          How original music can become a
          long-term growth engine beyond
          catalog distribution.

        </p>

        <div className="mt-16">

          <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
            STATUS
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-[#181614]">

            <span className="w-3 h-3 rounded-full bg-primary"></span>

            <span className="text-[20px] text-white">
              Independent Research
            </span>

          </div>

        </div>

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT CONTENT */}

    <ScrollReveal direction="left">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          INDUSTRY CASE STUDY
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">
          Gaana
        </h1>

        <p className="mt-12 text-[24px] leading-[1.8] text-white/70">
          Understanding emotion-first listening
          and session-based music consumption.
        </p>

        <div className="mt-16">

          <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
            STATUS
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-[#181614]">

            <span className="w-3 h-3 rounded-full bg-primary"></span>

            <span className="text-[20px] text-white">
              Research Prototype
            </span>

          </div>

        </div>

      </div>

    </ScrollReveal>

    {/* RIGHT IMAGE */}

    <ScrollReveal direction="right">

      <div className="flex justify-end">

        <img
          src="/images/ganna.jpeg"
          alt="Gaana Case Study"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT IMAGE */}

    <ScrollReveal direction="left">

      <div>

        <img
          src="/images/telugu music.jpeg"
          alt="Telugu Music Intelligence Platform"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

    {/* RIGHT CONTENT */}

    <ScrollReveal direction="right">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          INDUSTRY CASE STUDY
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">

          Telugu Music
          <br />

          Intelligence
          <br />

          Platform

        </h1>

        <p className="mt-12 text-[24px] leading-[1.8] text-white/70">

          Building a framework to understand labels
          through audience behaviour, revenue opportunities
          and ecosystem health.

        </p>

        <div className="mt-16">

          <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
            STATUS
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-[#181614]">

            <span className="w-3 h-3 rounded-full bg-primary"></span>

            <span className="text-[20px] text-white">
              Prototype
            </span>

          </div>

        </div>

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT CONTENT */}

    <ScrollReveal direction="left">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          INDUSTRY CASE STUDY
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">

          Music Industry
          <br />

          Opportunity
          <br />

          Mapping

        </h1>

        <p className="mt-12 text-[24px] leading-[1.8] text-white/70">

          Mapping collaborations, funding,
          grants, festivals and artist growth
          opportunities across the Telugu ecosystem.

        </p>

        <div className="mt-16">

          <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
            STATUS
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-[#181614]">

            <span className="w-3 h-3 rounded-full bg-primary"></span>

            <span className="text-[20px] text-white">
              Ongoing
            </span>

          </div>

        </div>

      </div>

    </ScrollReveal>

    {/* RIGHT IMAGE */}

    <ScrollReveal direction="right">

      <div className="flex justify-end">

        <img
          src="/images/indstry.jpeg"
          alt="Music Industry Opportunity Mapping"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="py-28">

  <div className="max-w-[1700px] mx-auto px-10 lg:px-20">

    <p className="uppercase tracking-[0.45em] text-primary text-sm font-semibold mb-8">
      RESEARCH
    </p>

    <h1 className="font-serif text-[92px] lg:text-[120px] leading-[0.92] tracking-[-0.05em] text-white">

      What Our
      <br />

      <span className="italic text-primary">
        Research Covers
      </span>

    </h1>

    

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-28">

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

    {[
      { icon: "🎵", title: "Audience Behaviour" },
      { icon: "📊", title: "Industry Intelligence" },
      { icon: "🎤", title: "Artist Growth" },
      { icon: "🎼", title: "Music Rights" },
      { icon: "📈", title: "Revenue Models" },
      { icon: "🎧", title: "Streaming Platforms" },
      { icon: "🎟", title: "Live Experiences" },
      { icon: "🤝", title: "Community Building" },
      { icon: "🧠", title: "Consumer Psychology" },
      { icon: "🌍", title: "Regional Music Ecosystems" },
      { icon: "💰", title: "Monetisation" },
      { icon: "🎙", title: "Music Technology" },
    ].map((item) => (

      <div
        key={item.title}
        className="group bg-[#181614] border border-white/10 rounded-[28px] p-10 hover:border-primary/40 hover:bg-[#1F1B18] transition-all duration-300 cursor-pointer"
      >

        <div className="text-5xl mb-8">
          {item.icon}
        </div>

        <h3 className="font-serif text-[34px] leading-tight text-white group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>

      </div>

    ))}

  </div>

</section>
<section className="py-28">

  <div className="max-w-[1700px] mx-auto px-10 lg:px-20">

    <p className="uppercase tracking-[0.6em] text-primary text-sm font-semibold mb-8">
    RESEARCH
  </p>
    <h1 className="font-serif text-[92px] lg:text-[120px] leading-[0.92] tracking-[-0.05em] text-white">

      Research
      <br />

      <span className="italic text-primary">
        Methodology
      </span>

    </h1>

    

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT CONTENT */}

    <ScrollReveal direction="left">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          OUR PROCESS
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">

          How we
          <br />

          research

        </h1>

        <p className="mt-12 text-[24px] leading-[1.8] text-white/70">

          Every study combines qualitative interviews,
          industry observation, publicly available data,
          market analysis and ecosystem mapping.

        </p>

        <div className="mt-16 border-l-2 border-primary pl-8 space-y-8">

          <p className="text-[22px] leading-[1.8] text-white/75">

            We don't publish research
            to create reports.

          </p>

          <p className="text-[22px] leading-[1.8] text-white">

            We publish research to help the
            <span className="text-primary font-medium">
              {" "}Telugu music ecosystem{" "}
            </span>
            make better decisions.

          </p>

        </div>

      </div>

    </ScrollReveal>

    {/* RIGHT IMAGE */}

    <ScrollReveal direction="right">

      <div className="flex justify-end">

        <img
          src="/images/r1.jpeg"
          alt="Research Methodology"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

  </div>

</section>
<section className="py-28">

  <div className="max-w-[1700px] mx-auto px-10 lg:px-20">

    <p className="uppercase tracking-[0.6em] text-primary text-sm font-semibold mb-8">
    RESEARCH
  </p>
    <h1 className="font-serif text-[92px] lg:text-[120px] leading-[0.92] tracking-[-0.05em] text-white">

      Research
      <br />

      <span className="italic text-primary">
        Impact
      </span>

    </h1>

    

  </div>

</section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT IMAGE */}

    <ScrollReveal direction="left">

      <div>

        <img
          src="/images/r2.jpeg"
          alt="Research Areas Explored"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

    {/* RIGHT CONTENT */}

    <ScrollReveal direction="right">

      <div className="max-w-[650px]">

        <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
          RESEARCH IMPACT
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white">

          Research Areas
          <br />

          Explored

        </h1>

        <div className="mt-16 space-y-12">

          <div className="border-b border-white/10 pb-8">

            <h2 className="font-geist text-[30px] lg:text-[20px] font-bold tracking-[-0.03em] text-primary mt-3">
              12+
            </h2>

            <p className="mt-2 text-[24px] text-white/70">
              Industry Frameworks Developed
            </p>

          </div>

          <div className="border-b border-white/10 pb-8">

            <h2 className="font-geist text-[30px] lg:text-[20px] font-bold tracking-[-0.03em] text-primary mt-3">
              5+
            </h2>

            <p className="mt-2 text-[24px] text-white/70">
              Strategy Prototypes Built
            </p>

          </div>

          <div>

            <h2 className="font-geist text-[30px] lg:text-[20px] font-bold tracking-[-0.03em] text-primary mt-3">
              8+
            </h2>

            <p className="mt-2 text-[24px] text-white/70">
              Ecosystem Stakeholders Studied
            </p>

            <p className="mt-6 text-[20px] leading-[1.9] text-white/55">

              Artists • Labels • Organisers • Producers •
              Venues • Listeners

            </p>

          </div>

        </div>

      </div>

    </ScrollReveal>

  </div>
  </section>
<section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-40">

  <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-center">

    {/* LEFT CONTENT */}

    <ScrollReveal direction="left">

      <div className="max-w-[700px]">

        <p className="uppercase tracking-[0.5em] text-primary text-sm font-semibold mb-8">
          LET'S BUILD TOGETHER
        </p>

        <h2 className="font-serif text-[82px] lg:text-[110px] leading-[0.92] tracking-[-0.06em] text-white">

          Need research
          <br />

          for your music
          <br />

          business?

        </h2>

        <p className="mt-12 text-[25px] leading-[1.9] text-white/60">

          Whether you're a label, artist, organiser or platform,
          Ragam transforms industry knowledge into practical
          strategy, research and actionable insights that help
          the Telugu music ecosystem grow.

        </p>

        <Link
          href="/#request-analysis"
          className="inline-flex items-center gap-4 mt-16 text-primary text-[22px] font-medium group"
        >

          Request Research Consultation

          <span className="text-3xl group-hover:translate-x-2 transition-transform">
            ↗
          </span>

        </Link>

      </div>

    </ScrollReveal>

    {/* RIGHT IMAGE */}

    <ScrollReveal direction="right">

      <div className="flex justify-end">

        <img
          src="/images/r3.jpeg"
          alt="Research Consultation"
          className="w-full max-w-[720px] aspect-square object-cover rounded-[36px] shadow-2xl"
        />

      </div>

    </ScrollReveal>

  </div>

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