import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ImageViewer } from "@/components/ImageViewer";
import { CheckCircle2, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Method() {
  const videoSectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [heroScrollY, setHeroScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHeroScrollY(currentScrollY);

      if (videoSectionRef.current) {
        const rect = videoSectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
          setScrollY(currentScrollY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phases = [
    {
      number: "01",
      title: "Alignment",
      duration: "2-3 weeks",
      deliverable: "Strategic Foundation Document",
      description: "Deep discovery to understand your practice philosophy, audience, and strategic direction. We don't rush this. Alignment determines everything that follows.",
      activities: [
        "Practice Philosophy Workshop",
        "Audience Profiling & Market Positioning",
        "Technical Requirements Analysis",
        "Competitive Landscape Review",
        "Success Metrics Definition",
      ],
    },
    {
      number: "02",
      title: "Architecture",
      duration: "3-4 weeks",
      deliverable: "Complete Digital Blueprint",
      description: "Brand vision, user flows, content strategy, and technical specifications—documented before a single line of code. This is where craft separates from commodity.",
      activities: [
        "Brand Identity System",
        "Information Architecture",
        "User Journey Mapping",
        "Content Strategy & Voice",
        "Technical Specifications",
        "Frontend/Backend Architecture",
      ],
    },
    {
      number: "03",
      title: "Construction",
      duration: "6-8 weeks",
      deliverable: "Production-Ready Platform",
      description: "Frontend and backend development with precision, testing, and iterative refinement. Every interaction is considered. Every detail matters.",
      activities: [
        "Design System Implementation",
        "Frontend Development",
        "Backend Infrastructure",
        "Third-Party Integrations",
        "Quality Assurance Testing",
        "Performance Optimization",
      ],
    },
    {
      number: "04",
      title: "Operations",
      duration: "Ongoing",
      deliverable: "Living Digital Ecosystem",
      description: "Ongoing partnership for hosting, maintenance, evolution, and strategic optimization. Your practice grows. Your digital infrastructure grows with it.",
      activities: [
        "Managed Hosting & Security",
        "Continuous Monitoring",
        "Strategic Evolution Planning",
        "Technical Support",
        "Analytics & Optimization",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="The Ikara Method - Digital Architecture Process"
        description="A structured, intelligent workflow that transforms your practice into a cohesive digital ecosystem. Architecture before automation."
      />
      <Navigation />

      {/* Image Viewer Modal */}
      <ImageViewer
        src="/ikara-method-bg.png"
        alt="Ikara.Club Digital Interface"
        isOpen={imageViewerOpen}
        onClose={() => setImageViewerOpen(false)}
      />

      {/* Hero - Multi-Layer Parallax Depth */}
      <section className="section-padding pt-40 pb-16 relative overflow-hidden min-h-screen">
        {/* Layer 1: Background gradient (slowest) */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"
          style={{
            transform: `translateY(${heroScrollY * 0.5}px)`,
          }}
        />
        
        {/* Layer 2: Content container (medium speed) */}
        <div 
          className="container-editorial relative z-10"
          style={{
            transform: `translateY(${heroScrollY * 0.3}px)`,
          }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Overline (fastest parallax) */}
            <div 
              className="inline-block px-6 py-2 glass rounded-full"
              style={{
                transform: `translateY(${heroScrollY * 0.15}px)`,
              }}
            >
              <span className="text-sm font-light tracking-widest uppercase text-muted-foreground">
                Our Process
              </span>
            </div>

            {/* Headline (medium-fast) */}
            <h1 
              className="text-display text-foreground"
              style={{
                transform: `translateY(${heroScrollY * 0.2}px)`,
              }}
            >
              The Ikara Method
            </h1>

            {/* Description (slower) */}
            <p 
              className="text-subhead text-muted-foreground"
              style={{
                transform: `translateY(${heroScrollY * 0.25}px)`,
              }}
            >
              Architecture before automation. Strategy before templates. A disciplined, four-phase approach to building digital ecosystems that honor human practice.
            </p>
          </div>
        </div>
      </section>

      {/* Video Background with Parallax Text */}
      <section ref={videoSectionRef} className="relative min-h-[70vh] overflow-hidden">
        {/* Video Background - More Visible */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src="/Image_Transition_Animation_Creation.mp4" type="video/mp4" />
          </video>
          
          {/* Lighter Gradient Overlays for Better Video Visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
        </div>

        {/* Parallax Text Content */}
        <div 
          className="relative z-10 flex items-center justify-center min-h-[70vh]"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.1s linear"
          }}
        >
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-headline text-foreground">Why Process Matters</h2>
              <div className="space-y-6 text-body text-foreground/90">
                <p className="leading-loose">
                  Most digital agencies move fast and break things. They optimize for speed and volume. Launch quickly, iterate later, fix problems as they emerge.
                </p>
                <p className="leading-loose">
                  We do the opposite. We move deliberately. We front-load strategy, alignment, and architectural thinking. Because when you're building digital infrastructure for a practice that serves human transformation, you can't afford to guess.
                </p>
                <p className="leading-loose">
                  The Ikara Method is a structured workflow designed to surface assumptions, clarify direction, and document decisions before implementation. It's slower. It's more expensive. And it produces digital ecosystems that actually serve your vision instead of constraining it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Background Container - Everything from here scrolls over the fixed image */}
      <div className="relative">
        {/* Fixed Background Image with Click-to-Enlarge */}
        <div className="fixed inset-0 z-0" style={{ top: '0', height: '100vh' }}>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60 cursor-pointer group"
            style={{ backgroundImage: 'url(/ikara-method-bg.png)' }}
            onClick={() => setImageViewerOpen(true)}
          >
            {/* Zoom Icon Indicator */}
            <div className="absolute top-8 right-8 glass p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="h-5 w-5 text-foreground" />
            </div>
          </div>
          {/* Gradient Overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background pointer-events-none" />
        </div>

        {/* Scrolling Content */}
        <div className="relative z-10">
          {/* Phases */}
          <section className="section-padding bg-transparent">
            <div className="container-editorial">
              <div className="max-w-5xl mx-auto space-y-24">
                {phases.map((phase, index) => (
                  <div 
                    key={index} 
                    className="grid md:grid-cols-[200px_1fr] gap-12 group"
                  >
                    {/* Phase Number */}
                    <div className="space-y-4 transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="text-8xl font-serif text-muted-foreground/20 transition-colors duration-300 group-hover:text-muted-foreground/40">
                        {phase.number}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-3xl font-medium transition-colors duration-300 group-hover:text-primary">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{phase.duration}</p>
                        <div className="pt-2">
                          <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                            Deliverable
                          </span>
                          <p className="text-sm font-medium mt-1">{phase.deliverable}</p>
                        </div>
                      </div>
                    </div>

                    {/* Phase Content */}
                    <div className="space-y-8 pt-4">
                      <p className="text-body text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                        {phase.description}
                      </p>

                      <div className="glass p-8 rounded-lg space-y-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:-translate-y-1">
                        <h4 className="text-sm font-medium tracking-wide uppercase">Key Activities</h4>
                        <ul className="space-y-3">
                          {phase.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Principles */}
          <section className="section-padding bg-transparent">
            <div className="container-editorial">
              <div className="max-w-4xl mx-auto space-y-16">
                <h2 className="text-headline text-center">Core Principles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Documentation Over Assumptions",
                      description: "Every decision is documented. Every assumption is surfaced and validated. Nothing is left implicit.",
                    },
                    {
                      title: "Strategy Before Execution",
                      description: "We solve strategic problems before touching code. Clarity in architecture prevents chaos in implementation.",
                    },
                    {
                      title: "Craft Over Speed",
                      description: "We don't optimize for launch velocity. We optimize for long-term alignment, quality, and sustainability.",
                    },
                    {
                      title: "Partnership Over Transaction",
                      description: "This isn't a handoff model. We stay engaged, maintain, evolve, and support your digital infrastructure over time.",
                    },
                  ].map((principle, index) => (
                    <div 
                      key={index} 
                      className="glass-hover p-8 rounded-lg space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] group"
                    >
                      <h3 className="text-xl font-medium transition-colors duration-300 group-hover:text-primary">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-transparent">
            <div className="container-editorial">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-headline">Ready to Begin?</h2>
                <p className="text-body text-muted-foreground">
                  The Alignment phase starts with a structured discovery process. If you're ready to invest in craft and strategy, let's start the conversation.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="px-12 animate-subtle-pulse hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <Link href="/alignment">Begin Partnership</Link>
                </Button>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}