import { Navigation } from "@/components/Navigation";
import { ParallaxHero } from "@/components/ParallaxHero";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEO
        title="Ikara.Club - Digital Architecture for Human Practice"
        description="Boutique digital architecture partner exclusively for elite coaches and studios in Yoga, Mindfulness, Meditation, and high-end Fitness."
      />
      <Navigation />
      <ParallaxHero />

      {/* VELVET ROPE: Criteria of Alignment */}
      <section className="section-padding-luxury bg-stone">
        <div className="container-architectural">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-10 space-y-12 cinematic-reveal">
              <h2 className="text-headline text-foreground">Criteria of Alignment</h2>
              <div className="text-body leading-loose max-w-4xl space-y-8">
                <p>
                  We do not accept every project. We partner with exactly <span className="font-medium text-foreground/90">four studios per quarter</span> to preserve architectural integrity.
                </p>
                <p>
                  We prioritize practitioners with a <span className="font-medium text-foreground/90">ten-year vision</span> and a documented lineage—those who understand that digital infrastructure is not a marketing expense, but a long-term investment in practice continuity.
                </p>
                <p>
                  If you operate from convenience rather than commitment, we are not aligned. If you seek templates rather than truth, this partnership is not for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SINGLE-COLUMN NARRATIVE: Capabilities Sections */}
      <section className="section-padding-xl bg-background relative overflow-hidden">
        {/* 01. Architecture Before Automation - Full Screen Section */}
        <div className="relative min-h-screen flex items-center mb-64">
          {/* Background Image Layer (8% parallax) */}
          <div 
            className="absolute inset-0 z-0 parallax-layer"
            style={{
              transform: `translateY(${scrollY * 0.08}px)`,
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('/hero-meditation.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          </div>

          {/* Floating Glass Text Block (12% parallax) */}
          <div 
            className="container-architectural relative z-10"
            style={{
              transform: `translateY(${scrollY * 0.12}px)`,
            }}
          >
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8 space-y-8 cinematic-reveal">
                <span className="text-caption text-muted-foreground">01 / Architectural Tier</span>
                <h2 className="text-headline text-foreground">Architecture Before Automation</h2>
                <div className="glass-architectural p-12 shadow-ambient space-y-6">
                  <p className="text-body">
                    The wellness industry is drowning in templated mediocrity. White-label booking platforms. Drag-and-drop builders that produce identical results.
                  </p>
                  <p className="text-body">
                    We don't give you a template. We architect bespoke digital experiences that reflect your unique methodology, philosophy, and decades of lived practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 02. Strategy Before Software - Full Screen Section */}
        <div className="relative min-h-screen flex items-center mb-64">
          {/* Background Image Layer (8% parallax) */}
          <div 
            className="absolute inset-0 z-0 parallax-layer"
            style={{
              transform: `translateY(${(scrollY - 1200) * 0.08}px)`,
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('/vr-wellness.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          </div>

          {/* Floating Glass Text Block (12% parallax) - Right aligned */}
          <div 
            className="container-architectural relative z-10"
            style={{
              transform: `translateY(${(scrollY - 1200) * 0.12}px)`,
            }}
          >
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-start-5 lg:col-span-8 space-y-8 cinematic-reveal">
                <span className="text-caption text-muted-foreground">02 / Strategic Capability</span>
                <h2 className="text-headline text-foreground">Strategy Before Software</h2>
                <div className="glass-architectural p-12 shadow-ambient space-y-6">
                  <p className="text-body">
                    We're not competing with Mindbody, Momence, or any generic SaaS booking tool. Those are utilities. We build the strategic layer that makes those utilities serve your vision.
                  </p>
                  <p className="text-body">
                    Your digital ecosystem includes brand architecture, user flow design, content strategy, and technical specifications—documented before a single line of code is written.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 03. Partnership, Not Transaction - Full Screen Section */}
        <div className="relative min-h-screen flex items-center">
          {/* Background Image Layer (8% parallax) */}
          <div 
            className="absolute inset-0 z-0 parallax-layer"
            style={{
              transform: `translateY(${(scrollY - 2400) * 0.08}px)`,
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('/abstract-sculpture.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          </div>

          {/* Floating Glass Text Block (12% parallax) */}
          <div 
            className="container-architectural relative z-10"
            style={{
              transform: `translateY(${(scrollY - 2400) * 0.12}px)`,
            }}
          >
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8 space-y-8 cinematic-reveal">
                <span className="text-caption text-muted-foreground">03 / Investment Model</span>
                <h2 className="text-headline text-foreground">Partnership, Not Transaction</h2>
                <div className="glass-architectural p-12 shadow-ambient space-y-6">
                  <p className="text-body">
                    We partner with business owners and studio directors who are building institutions, not side projects. This is a collaboration between equals, not a vendor relationship.
                  </p>
                  <p className="text-body">
                    Speed and affordability optimize for volume. We optimize for alignment, craft, and a decade-long partnership with practitioners on a mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE IKARA METHOD - Single Column Vertical Timeline */}
      <section className="section-padding-luxury bg-stone">
        <div className="container-architectural">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-10 space-y-24">
              <div className="space-y-6 cinematic-reveal">
                <span className="text-caption text-muted-foreground">Our Process</span>
                <h2 className="text-headline text-foreground">The Ikara Method</h2>
                <p className="text-body max-w-3xl">
                  A structured, intelligent workflow that transforms your practice into a cohesive digital ecosystem.
                </p>
              </div>

              {/* Single-Column Timeline with Glass Cards */}
              <div className="space-y-16">
                {[
                  {
                    phase: "01",
                    label: "ALIGNMENT",
                    title: "Alignment",
                    description: "Deep discovery to understand your practice philosophy, audience, and strategic direction. We document your lineage, methodology, and ten-year vision before any technical planning begins.",
                  },
                  {
                    phase: "02",
                    label: "ARCHITECTURE",
                    title: "Architecture",
                    description: "Brand vision, user flows, content strategy, and technical specifications—documented and approved before a single line of code. This is the blueprint that guides all construction.",
                  },
                  {
                    phase: "03",
                    label: "CONSTRUCTION",
                    title: "Construction",
                    description: "Frontend and backend development with precision, testing, and iterative refinement. Every element is built to architectural specifications with zero compromise on craft.",
                  },
                  {
                    phase: "04",
                    label: "OPERATIONS",
                    title: "Operations",
                    description: "Ongoing partnership for hosting, maintenance, evolution, and strategic optimization. Your digital ecosystem adapts as your practice evolves over the decade ahead.",
                  },
                ].map((step, index) => (
                  <div 
                    key={index} 
                    className={`flex gap-12 items-start glass-architectural-hover p-12 shadow-ambient cinematic-reveal delay-${(index + 1) * 100}`}
                  >
                    <div className="text-8xl font-light font-serif text-muted-foreground/20 flex-shrink-0 transition-luxury">
                      {step.phase}
                    </div>
                    <div className="flex-1 space-y-4 pt-4">
                      <span className="text-caption text-muted-foreground block">{step.label}</span>
                      <h3 className="text-3xl font-light font-serif tracking-tight text-foreground">{step.title}</h3>
                      <p className="text-body">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-12 cinematic-reveal delay-500">
                <Button 
                  asChild 
                  size="lg" 
                  variant="luxury"
                  className="px-12 py-7 shadow-ambient"
                >
                  <Link href="/method">
                    Explore Full Process <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFINED POSITIONING */}
      <section className="section-padding-luxury bg-background">
        <div className="container-architectural">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9 space-y-12 cinematic-reveal">
              <h2 className="text-headline text-foreground">For Practitioners Who Refuse to Compromise</h2>
              <div className="text-body space-y-8 leading-loose max-w-4xl">
                <p>You've built something meaningful over years—perhaps decades. Your digital infrastructure must honor that depth, not reduce it to a template.</p>
                <p>You're tired of platforms that treat you like a commodity, charging monthly fees while owning your data and controlling your brand.</p>
                <p>You understand that your website isn't a brochure. It's an extension of your practice, a space where philosophy becomes interface.</p>
                <p>You're ready to invest in craft, partnership, and a ten-year vision—not settle for convenience and compromise.</p>
              </div>
              <div className="pt-8">
                <Button 
                  asChild 
                  size="lg" 
                  variant="luxury"
                  className="px-12 py-7 text-base shadow-ambient"
                >
                  <Link href="/alignment">Begin Partnership</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}