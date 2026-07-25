'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from "next/navigation";
import { HeroSection } from '@/components/hero-section';
import { PreviewSection } from '@/components/preview-section';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { Music, Users, BookOpen, Award, Sparkles, Radio } from 'lucide-react';
const audienceIcons = [
  { icon: Music, label: 'Artists', color: 'from-primary/20 to-primary/5' },
  { icon: Users, label: 'Organizers', color: 'from-accent/20 to-accent/5' },
  { icon: Award, label: 'Labels', color: 'from-primary/20 to-primary/5' },
  { icon: Radio, label: 'Producers', color: 'from-accent/20 to-accent/5' },
  { icon: Sparkles, label: 'Venues', color: 'from-primary/20 to-primary/5' },
  { icon: BookOpen, label: 'Music Lovers', color: 'from-accent/20 to-accent/5' },
];
const researchCards = [
  {
    title: 'Global Music Market 2024',
    description: 'Comprehensive analysis of emerging trends in the music industry',
    date: 'Dec 2024',
  },
  {
    title: 'Independent Artist Growth',
    description: 'How direct-to-fan strategies are reshaping the industry',
    date: 'Nov 2024',
  },
  {
    title: 'Cultural Festivals Impact',
    description: 'Economic and social influence of live music events',
    date: 'Oct 2024',
  },
];
const opportunityCards = [
  { title: 'Artist Residencies', category: 'Residency' },
  { title: 'Creative Grants', category: 'Funding' },
  { title: 'Festival Showcase', category: 'Performance' },
  { title: 'Label Partnerships', category: 'Collaboration' },
];
export default function Page() {
const pathname = usePathname();
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  role: '',
  instagram: '',
  website: '',
  musicLink: '',
  spotify: '',
  youtube: '',
  soundcloud: '',
  eventLink: '',
  goal: '',
  message: '',
});

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);

// handleChange
// handleSubmit
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        instagram: "",
        website: "",
        musicLink: "",
        spotify: "",
        youtube: "",
        soundcloud: "",
        eventLink: "",
        goal: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } else {
      alert("Submission failed");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection
        title="KNOW YOUR MUSIC"
        subtitle="GROWTH INTELLIGENCE FOR TELUGU MUSIC"
        description=""
        ctaText=""
        ctaLink="#request-analysis"
        backgroundImage="/images/home1.png"
      />

      {/* What Ragam Does Preview */}
      <PreviewSection
  subtitle="WHAT WE DO"
  title="Refine your sound.
Expand your audience."
  description="Ragam researches your music, audience, career stage, opportunities and market potential. We help artists, organizers and labels make better decisions using strategy, research and industry connections."
  ctaText="Get My Music Analysis"
  ctaLink="/#request-analysis"
  imageUrl="/images/music1.jpeg"
/>

      {/* Who We Help Preview */}
  <section
  id="request-analysis"
  className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20"
>

  <div className="max-w-[1500px] mx-auto grid lg:grid-cols-[0.85fr_1fr] gap-10 md:gap-16 xl:gap-24 items-start">

    {/* LEFT */}
    <ScrollReveal direction="left">
  <div className="max-w-[620px]">

    <p className="uppercase tracking-[0.38em] text-primary text-base font-semibold mb-8">
      BEGIN THE CONVERSATION
    </p>

    <h2 className="font-serif leading-[0.88] tracking-[-0.04em] text-white">
      <span className="block text-[42px] lg:text-[56px] xl:text-[64px] leading-[0.95] font-normal">
        Request your
      </span>

      <span className="block text-primary italic mt-2 text-[54px] lg:text-[72px] xl:text-[82px] leading-[0.95] font-normal">
        Ragam analysis.
      </span>
    </h2>

    <p className="mt-7 text-[17px] lg:text-[19px] leading-8 text-white/70 max-w-[540px]">
      Tell us about your music, event or organisation.
      We'll study your situation and recommend your next
      best steps — usually within a week.
    </p>

    <div className="mt-10 space-y-5">

      <div className="flex items-center gap-3 text-[16px] lg:text-[17px] text-white/85">
        <span className="text-primary text-xl">✓</span>
        <span>No obligation intake call.</span>
      </div>

      <div className="flex items-center gap-3 text-[16px] lg:text-[17px] text-white/85">
        <span className="text-primary text-xl">✓</span>
        <span>Confidential — nothing is shared.</span>
      </div>

      <div className="flex items-center gap-3 text-[16px] lg:text-[17px] text-white/85">
        <span className="text-primary text-xl">✓</span>
        <span>You keep the report either way.</span>
      </div>

    </div>

  </div>
</ScrollReveal>

    {/* RIGHT */}
    <ScrollReveal direction="right">

      <form
  onSubmit={handleSubmit}
  className="bg-[#211d19] border border-[#3b352d] rounded-[25px] p-4 lg:p-6">


        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="text-xs uppercase tracking-widest text-primary">
              Name
            </label>

            <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your full name"
  required
  className="mt-3 w-full bg-[#171513] rounded-full px-5 py-3.5 outline-none text-white"
/>
          </div>
          <div>
    <label className="text-xs uppercase tracking-widest text-primary">
      Email
    </label>

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      placeholder="Your email"
      className="mt-3 w-full bg-[#171513] rounded-full px-5 py-3.5 outline-none text-white"
    />
  </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-primary">
              Role
            </label>

            <input
  type="text"
  name="role"
  value={formData.role}
  onChange={handleChange}
  required
  placeholder="Artist, organizer..."
  className="mt-3 w-full bg-[#171513] rounded-full px-5 py-3.5 outline-none text-white"
/>
          </div>
          <div>
    <label className="text-xs uppercase tracking-widest text-primary">
      Phone (Optional)
    </label>

    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="+91 XXXXX XXXXX"
      className="mt-3 w-full bg-[#171513] rounded-full px-5 py-3.5 outline-none text-white"
    />
  </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-primary">
              Instagram 
            </label>

            <input
  type="text"
  name="instagram"
  value={formData.instagram}
  onChange={handleChange}
  required
  placeholder="@username"
  className="mt-3 w-full bg-[#171513] rounded-full px-5 py-3.5 outline-none text-white"
/>
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-primary">
              Music Link (optional)
            </label>

            <input
  type="text"
  name="musicLink"
  value={formData.musicLink}
  onChange={handleChange}
  placeholder="link"
  className="mt-3 w-full bg-[#171513] rounded-full px-5 py-3.5 outline-none text-white"
/>
          </div>

        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-6">

</div>
        <div className="mt-4">

          <label className="text-xs uppercase tracking-widest text-primary">
            Goal
          </label>

          <textarea
  rows={5}
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
  placeholder="Tell us about your goals..."
  className="mt-3 w-full bg-[#171513] rounded-3xl px-4 py-5 outline-none text-white resize-none"
/>

        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-white/50 text-sm">
            By requesting, you agree to our thoughtful use of your details.
          </p>
          <p className="text-white/60 text-sm">
  Need help?
  <a
    href="tel:+918317565117"
    className="text-primary ml-2 hover:underline"
  >
    Call Us
  </a>
</p>
          <button
  type="submit"
  disabled={isSubmitting}
  className="bg-primary text-black rounded-full px-3 py-1 font-medium"
>
  {isSubmitting ? "Submitting..." : "Request My Analysis ↗"}
</button>
{submitted && (
  <p className="text-green-400 mt-5">
    ✅ Successfully Submitted.
  </p>
)}

        </div>

      </form>

    </ScrollReveal>

  </div>
  </section>
  {/* Research Preview */}
<section className="py-28 px-6">
  <div className="max-w-6xl mx-auto">

    <p className="uppercase tracking-[0.35em] text-primary text-sm font-semibold mb-14">
      Ready when you are
    </p>

    <div className="space-y-12">

      <div>
        <p className="text-xl text-white/80 leading-9">
                Build Long term Strategy.
          <span className="text-white/60">
            {" "}Usually a reply within{" "}
          </span>
          <span className="text-primary italic">
            48 hours.
          </span>
        </p>
      </div>

      <div className="border-l border-primary/30 pl-8">
        <p className="text-xl text-white/80 leading-9">
          To understand exactly what we do and How we help,
          explore the{" "}
          <Link
            href="/what-we-do"
            className="text-primary hover:underline underline-offset-4"
          >
            What We Do
          </Link>{" "}
          section.
        </p>
      </div>

      <div className="border-l border-primary/30 pl-8">
        <p className="text-xl text-white/80 leading-9">
          Looking for concert ideas, event concepts,
          and budget-based planning?
          Visit our{" "}
          <Link
            href="/experiences"
            className="text-primary hover:underline underline-offset-4"
          >
            Experiences
          </Link>{" "}
          section.
        </p>
      </div>

      <div className="border-l border-primary/30 pl-8">
        <p className="text-xl text-white/80 leading-9">
          Curious about how we understand music,
          audience behaviour and industry growth?
          Explore our{" "}
          <Link
            href="/research"
            className="text-primary hover:underline underline-offset-4"
          >
            Research
          </Link>{" "}
          library.
        </p>
      </div>

      <div className="border-l border-primary/30 pl-8">
        <p className="text-xl text-white/80 leading-9">
          Want to know who is behind Ragam & Co.?
          Visit the{" "}
          <Link
            href="/about"
            className="text-primary hover:underline underline-offset-4"
          >
            About
          </Link>{" "}
          page.
        </p>
      </div>

      <div className="pt-8">
        <p className="text-lg font-medium uppercase tracking-[0.35em] text-primary">
          Discover Ragam ↓
        </p>
      </div>

    </div>

  </div>
</section>

      {/* Opportunities Preview */}
      {/* Success Story */}
<section className="py-28 lg:py-36 px-8 lg:px-16 xl:px-20">

  <div className="max-w-[1500px] mx-auto">

    <p className="uppercase tracking-[0.35em] text-primary text-sm font-semibold mb-5">
      A RECENT CLIENT
    </p>

    <h2 className="font-serif text-[52px] lg:text-[64px] leading-[1] text-white mb-20">
      What the work looks like,
      <br />
      in practice.
    </h2>

  <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-16 xl:gap-20 items-center">

      {/* LEFT */}

      <div>
        <img
          src="/images/h1.jpeg"
          alt="Case Study"
          className="w-full h-[280px] sm:h-[420px] md:h-[520px] xl:h-[600px] object-cover object-[center_15%] rounded-[34px]"
        />
      </div>

      {/* RIGHT */}

      <div className="max-w-[620px]">

        <p className="uppercase tracking-[0.35em] text-primary text-sm font-semibold mb-8">
          VOCALIST · HYDERABAD
        </p>

        <h3 className="font-serif text-[46px] lg:text-[56px] xl:text-[64px] leading-[1] tracking-[-0.03em] text-white">

          From
          <span className="font-serif text-primary text-[50px] leading-none"> 8k </span>

          to

          <span className="font-serif text-primary text-[50px] leading-none"> 42k </span>

          monthly listeners,

          <br />

          <span className="italic text-primary">
            in eleven months.
          </span>

        </h3>

        <p className="mt-7 text-[18px] leading-8 text-white/70">
          We mapped her audience across four cities,
          re-priced her live shows, introduced her to
          festival curators and identified new audience
          opportunities through research.
        </p>

        {/* STATS */}

        <div className="grid grid-cols-3 gap-4 mt-10">

          <div className="border border-white/10 rounded-2xl p-5 bg-[#181614]">

            <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
              LISTENERS
            </p>

            <h4 className="font-geist font-medium text-[20px] lg:text-[15px] font-bold tracking-[-0.03em] text-primary mt-3">
              +425%
            </h4>

          </div>

          <div className="border border-white/10 rounded-2xl p-5 bg-[#181614]">

            <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
              SHOW FEE
            </p>

            <h4 className="font-geist font-medium text-[20px] lg:text-[15px] font-bold tracking-[-0.03em] text-primary mt-3">
              +3.2×
            </h4>

          </div>

          <div className="border border-white/10 rounded-2xl p-5 bg-[#181614]">

            <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
              NEW ROOMS
            </p>

            <h4 className="font-geist font-medium text-[20px] lg:text-[15px] font-bold tracking-[-0.03em] text-primary mt-3">
              6
            </h4>

          </div>

        </div>

        <blockquote className="mt-10 border-l-2 border-primary pl-5 italic text-white/60 text-[16px] leading-7">
          "Ragam showed me opportunities I had been missing
          for years. Every decision became clearer after the
          analysis."
        </blockquote>

      </div>

    </div>

  </div>

</section>

      {/* Experiences Preview */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              Cultural Moments
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Immersive Experiences
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore concert concepts, audience engagement, and cultural festivals.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative aspect-video rounded-xl overflow-hidden mb-5">
          <img
            src="/images/live-concert.png"
            alt="Live concert experience"
            className="w-full h-full object-cover rounded-[15px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="text-center">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group text-lg"
          >
            Explore Experiences 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
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
        "https://www.instagram.com/telugumusic.strategy/",
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
