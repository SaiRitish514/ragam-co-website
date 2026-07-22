'use client';

import Link from 'next/link';
import { useRouter } from "next/navigation";
import { ScrollReveal } from '@/components/motion/scroll-reveal';

export default function ArtistPage() {
   const router = useRouter();
  return (
    <main className="bg-[#11100f] min-h-screen">

      {/* Top spacing */}
      <section className="max-w-[1700px] mx-auto px-10 lg:px-20 py-24">
        <button
  onClick={() => router.back()}
  className="inline-flex items-center gap-2 mb-10 text-primary hover:text-white transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>

  <span className="uppercase tracking-[0.3em] text-xs">
    Back
  </span>
</button>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-28 items-center">

          {/* LEFT IMAGE */}

          <ScrollReveal direction="left">

            <div className="relative">

              <img
                src="/images/label.jpeg"
                alt="Artist"
                className="w-full h-[700px] object-cover rounded-[18px]"
              />

              <div className="absolute top-6 left-6 flex justify-between w-[92%] text-white text-xs uppercase tracking-[0.35em]">

                

                <span>LABELS</span>

              </div>

            </div>

          </ScrollReveal>

          {/* RIGHT */}

          <ScrollReveal direction="right">

            <div className="max-w-[620px]">

  <p className="uppercase tracking-[0.45em] text-primary text-xs font-semibold mb-8">
    LABELS
  </p>

  <h1 className="font-serif text-[60px] leading-[0.90] tracking-[-0.04em] text-white">

    Signal the sound of the next
    <br />

    decade.

  </h1>

  <p className="mt-8 text-[23px] leading-[1.8] text-white/70">

    Catalog analytics, artist discovery,
    and release strategy grounded in
    the actual behavior of Telugu listeners.

  </p>

  <div className="mt-8">

    <p className="uppercase tracking-[0.35em] text-primary text-xs mb-8">
      COMMON CHALLENGES
    </p>

    <div className="space-y-5">

      <div className="flex gap-3 text-white/80">
        <span>•</span>
        <span>Signing on gut, missing the pipeline</span>
      </div>

      <div className="flex gap-3 text-white/80">
        <span>•</span>
        <span>Catalogs that go quiet after six months</span>
      </div>

      <div className="flex gap-3 text-white/80">
        <span>•</span>
        <span>Discovery driven by algorithms, not culture</span>
      </div>

    </div>

  </div>

  <div className="mt-16 flex gap-5">

    <Link
      href="/#request-analysis"
      className="group border border-white/20 rounded-full px-8 py-4 text-white hover:bg-primary hover:text-black transition duration-300"
    >
      <span className="flex items-center gap-3">

        Request analysis

        <span className="group-hover:translate-x-1 transition">
          ↗
        </span>

      </span>
    </Link>

  </div>

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
