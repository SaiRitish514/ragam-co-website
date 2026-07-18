'use client';

import Link from 'next/link';

const people = [
  {
    image: "/images/srija.jpeg",
    name: "Vikruti Srija",
    role: "Founder & Music Strategy Lead",
    imageClass: "object-top",
    description:
      "Leads Ragam's vision, research and long-term strategy for the Telugu music ecosystem. Focused on audience intelligence, artist growth, industry innovation and building sustainable opportunities for creators.",
  },
  {
    image: "/images/person2.jpg",
    name: "Sai Ritish Tirunagari",
    role: "Product Design & Digital Experience Lead",
    description:
      "Oversees Ragam's website, digital products and user experience. Leads interface design, creative direction and product development to create intuitive, engaging experiences that help artists, organisers, labels and music lovers connect with the Telugu music ecosystem.",
  },
  {
    image: "/images/abhi.jpeg",
    name: "Abigna Yalakala",
    role: "Research & Community Lead",
    description:
      "Leads ecosystem research, artist discovery and community engagement. Works closely with musicians, organisers and audiences to understand emerging trends and opportunities across Telugu music.",
  },
  {
    image: "/images/siddhu.jpeg",
    name: "Siddharth",
    role: "Product & Technology Lead",
    description:
      "Builds the digital experiences behind Ragam. Focuses on product development, technology, data systems and creating tools that make music intelligence accessible and actionable.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#11100f] min-h-screen">

      <section className="max-w-[1700px] mx-auto px-8 lg:px-20 py-28">

        <p className="uppercase tracking-[0.35em] text-primary text-sm font-semibold">
          ABOUT RAGAM
        </p>

        <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.05em] text-white mt-8">
          Meet the people
          <br />
          behind Ragam.
        </h1>

        <p className="text-white/60 text-[22px] leading-9 max-w-[700px] mt-10">
          Strategy, research and culture brought together by people who
          understand the music industry.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-24">

          {people.map((person) => (

            <div
              key={person.name}
              className="bg-[#1A1715] rounded-[28px] overflow-hidden border border-white/10 hover:border-primary/30 transition duration-300 group"
            >

              <div className="overflow-hidden">

                <img
  src={person.image}
  alt={person.name}
  className={`w-full h-[340px] object-cover ${person.imageClass || "object-center"} group-hover:scale-105 transition duration-500`}
/>

              </div>

              <div className="p-8">

                <h3 className="font-semibold text-[30px] text-white leading-tight">
                  {person.name}
                </h3>

                <p className="text-primary mt-3 text-lg">
                  {person.role}
                </p>

                <p className="text-white/60 leading-8 mt-6 text-[17px]">
                  {person.description}
                </p>

              </div>

            </div>

          ))}

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