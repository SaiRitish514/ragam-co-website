'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-foreground">
            Ragam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/what-we-do"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition"
            >
              What We Do
            </Link>
            <Link
              href="/who-we-help"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition"
            >
              Who We Help
            </Link>
            <Link
              href="/research"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition"
            >
              Research
            </Link>
            <Link
              href="/opportunities"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition"
            >
              Opportunities
            </Link>
            <Link
              href="/experiences"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition"
            >
              Experiences
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition"
            >
              About
            </Link>
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Get My Music Analysis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-6 py-6 space-y-4">
              <Link
                href="/what-we-do"
                className="block text-sm font-medium text-foreground/70 hover:text-foreground transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                What We Do
              </Link>
              <Link
                href="/who-we-help"
                className="block text-sm font-medium text-foreground/70 hover:text-foreground transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Who We Help
              </Link>
              <Link
                href="/research"
                className="block text-sm font-medium text-foreground/70 hover:text-foreground transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Research
              </Link>
              <Link
                href="/opportunities"
                className="block text-sm font-medium text-foreground/70 hover:text-foreground transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Opportunities
              </Link>
              <Link
                href="/experiences"
                className="block text-sm font-medium text-foreground/70 hover:text-foreground transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experiences
              </Link>
              <Link
                href="/about"
                className="block text-sm font-medium text-foreground/70 hover:text-foreground transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get My Music Analysis
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Spacer to prevent content jump */}
      <div className="h-16" />
    </>
  );
}
