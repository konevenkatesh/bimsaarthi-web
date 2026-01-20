"use client";

import Link from "next/link";
// Actually, standard practice is to create ui components. I'll use standard shadcn-like button classes here to speed up, or create a simple Button.tsx. 
// Let's create a simple Button component first or just use raw classes in Header/Hero to avoid circular deps if I haven't made it.
// I'll stick to raw Tailwind for specific buttons or create a common Button.
// Let's assume I'll create `src/components/ui/button.tsx` in a moment. I'll reference it.

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <div className="w-24 h-24 flex items-center justify-center -ml-2">
            <img src="/logo_trans.png" alt="BIMSaarthi Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 pb-1">
            BIMSaarthi
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/product" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Product
          </Link>
          <Link href="/solutions" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/research" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Research
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block">
            <button className="px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm border border-white/10">
              Contact
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center gap-2">
              Request Demo <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
