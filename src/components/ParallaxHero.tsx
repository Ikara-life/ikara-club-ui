import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Layer 1: Full-Bleed Sanctuary Background (slowest - 8% parallax) */}
      <div
        className="absolute inset-0 z-0 will-change-transform parallax-layer"
        style={{
          backgroundImage: "url('/hero-meditation.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.08}px) scale(1.08)`,
        }}
      />
      
      {/* Layer 2: Sophisticated Gradient Vignette (medium - 12% parallax) */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/40 to-black/80 will-change-transform parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      />

      {/* Layer 3: Content Container (static - no parallax for text stability) */}
      <div className="container-architectural relative z-10 pt-40 pb-24">
        <div className="grid grid-cols-12 gap-8">
          {/* Asymmetric Layout: Headline spans columns 1-9, supporting content 10-12 */}
          <div className="col-span-12 lg:col-span-9 space-y-12">
            {/* Selection Tag - Ultra-Wide Letter Spacing */}
            <div className="cinematic-reveal delay-100">
              <span className="text-caption text-muted-foreground">
                Exclusively for Elite Practitioners
              </span>
            </div>

            {/* Monolith Headline - Colossal, Thin, Sharp Tracked */}
            <h1 className="text-display cinematic-reveal delay-200 max-w-5xl">
              Digital Architecture
              <br />
              for Human Practice
            </h1>

            {/* Supporting Philosophy - 75% Opacity */}
            <p className="text-body max-w-3xl cinematic-reveal delay-300">
              We don't build websites. We architect digital ecosystems for practitioners who understand that online presence is an extension of practice, not a marketing convenience.
            </p>

            {/* Single Sharp-Edged CTA */}
            <div className="pt-8 cinematic-reveal delay-400">
              <Button 
                asChild 
                size="lg" 
                variant="luxury"
                className="px-12 py-7 text-base font-light tracking-wide shadow-ambient"
              >
                <Link href="/alignment">Begin Partnership</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Status Indicator */}
          <div className="col-span-12 lg:col-span-3 flex lg:items-end lg:justify-end">
            <div className="cinematic-reveal delay-500">
              <div className="inline-flex items-center gap-3 glass-architectural px-6 py-4 shadow-ambient">
                <div className="w-2 h-2 rounded-full bg-foreground status-pulse" />
                <span className="text-xs font-light text-muted-foreground tracking-wide">
                  Currently accepting 2 partners for Q3 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-12 left-[15%] opacity-50 cinematic-reveal delay-600">
        <div className="w-6 h-10 border border-white/30 flex items-start justify-center p-2 rounded-architectural">
          <div className="w-1 h-3 bg-white/50 animate-bounce rounded-architectural" />
        </div>
      </div>
    </section>
  );
}