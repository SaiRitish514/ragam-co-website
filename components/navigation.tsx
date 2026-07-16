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
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Premium Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-2xl font-serif font-bold text-foreground tracking-wide">Ragam</span>
            <span className="text-lg font-serif font-light text-primary/80 group-hover:text-primary transition">& Co.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <nav className="flex gap-10">
              <NavLink href="/what-we-do">What We Do</NavLink>
              <NavLink href="/who-we-help">Who We Help</NavLink>
              <NavLink href="/research">Research</NavLink>
              <NavLink href="/opportunities">Opportunities</NavLink>
              <NavLink href="/experiences">Experiences</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="px-8 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
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
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col min-h-[calc(100vh-80px)]">
              <MobileNavLink href="/what-we-do" onClick={() => setIsMobileMenuOpen(false)}>
                What We Do
              </MobileNavLink>
              <MobileNavLink href="/who-we-help" onClick={() => setIsMobileMenuOpen(false)}>
                Who We Help
              </MobileNavLink>
              <MobileNavLink href="/research" onClick={() => setIsMobileMenuOpen(false)}>
                Research
              </MobileNavLink>
              <MobileNavLink href="/opportunities" onClick={() => setIsMobileMenuOpen(false)}>
                Opportunities
              </MobileNavLink>
              <MobileNavLink href="/experiences" onClick={() => setIsMobileMenuOpen(false)}>
                Experiences
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </MobileNavLink>
              <div className="pt-8 border-t border-border">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get My Music Analysis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Spacer to prevent content jump */}
      <div className="h-20" />
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-lg font-medium text-foreground/80 hover:text-primary transition"
    >
      {children}
    </Link>
  );
}
