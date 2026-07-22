'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter,usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const handleAnalysisClick = () => {
  if (pathname === "/") {
    const section = document.getElementById("request-analysis");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  } else {
    router.push("/#request-analysis");
  }
};
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
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-5 flex items-center justify-between">
          {/* Premium Logo */}
          <div className="flex items-baseline shrink-0">
  <span className="text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-foreground">
    Ragam
  </span>

  <span className="ml-1 text-2xl lg:text-3xl font-serif text-primary">
    & Co.
  </span>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center ml-24 xl:ml-36">
            <nav className="flex items-center gap-9 xl:gap-13">
  <NavLink href="/" pathname={pathname}>
    Home
  </NavLink>

  <NavLink href="/what-we-do" pathname={pathname}>
    What We Do
  </NavLink>

  <NavLink href="/who-we-help" pathname={pathname}>
    Who We Help
  </NavLink>

  <NavLink href="/research" pathname={pathname}>
    Research
  </NavLink>

  <NavLink href="/experiences" pathname={pathname}>
    Experiences
  </NavLink>

  <NavLink href="/about" pathname={pathname}>
    About
  </NavLink>
</nav>
          </div>

          {/* Right CTA */}
          <div className="hidden md:block ml-16 xl:ml-24">
  <button
    onClick={handleAnalysisClick}
    className="px-8 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
  > analysis
    </button>
    </div>

          {/* Mobile Menu Button */}
         {pathname !== "/" && (
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
)}
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
              <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/what-we-do" onClick={() => setIsMobileMenuOpen(false)}>
                What We Do
              </MobileNavLink>
              <MobileNavLink href="/who-we-help" onClick={() => setIsMobileMenuOpen(false)}>
                Who We Help
              </MobileNavLink>
              <MobileNavLink href="/research" onClick={() => setIsMobileMenuOpen(false)}>
                Research
              </MobileNavLink>
              
              <MobileNavLink href="/experiences" onClick={() => setIsMobileMenuOpen(false)}>
                Experiences
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </MobileNavLink>
              <div className="pt-8 border-t border-border">
                <Link
                  href="/#request-analysis"
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

function NavLink({
  href,
  children,
  pathname,
}: {
  href: string;
  children: React.ReactNode;
  pathname: string;
}) {
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`relative text-sm font-medium transition ${
        active
          ? "text-white"
          : "text-white/70 hover:text-white"
      }`}
    >
      {children}

      <span
        className={`absolute -bottom-2 left-0 h-[2px] bg-primary transition-all duration-300 ${
          active ? "w-full" : "w-0"
        }`}
      />
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
