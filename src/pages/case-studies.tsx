import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CaseStudies() {
  const studies = [
    {
      client: "Sanctuary Yoga Collective",
      location: "Portland, Oregon",
      specialty: "Vinyasa & Restorative Yoga",
      challenge: "Regional multi-studio brand drowning in fragmented booking systems and inconsistent digital presence across three locations.",
      solution: "Unified digital architecture with location-aware routing, centralized class management, and cohesive brand experience across all touchpoints.",
      results: [
        "42% increase in online class bookings",
        "Consolidated 3 separate platforms into one ecosystem",
        "Reduced admin time by 8 hours/week",
        "92% client satisfaction with new booking flow",
      ],
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
      timeline: "14 weeks",
      tier: "Architecture Partner → Platform Partner",
    },
    {
      client: "Mindful Movement Studio",
      location: "Austin, Texas",
      specialty: "Pilates & Somatic Practice",
      challenge: "High-end boutique studio trapped in generic Mindbody templates. Brand sophistication didn't translate online.",
      solution: "Custom digital presence that reflects studio's minimalist luxury aesthetic. Seamless Mindbody integration while maintaining brand control.",
      results: [
        "3x increase in premium package conversions",
        "Elevated brand perception measurably",
        "Reduced booking abandonment by 58%",
        "Attracted corporate wellness partnerships",
      ],
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80",
      timeline: "12 weeks",
      tier: "Architecture Partner",
    },
    {
      client: "Luminous Path Meditation",
      location: "San Francisco, California",
      specialty: "MBSR & Contemplative Practice",
      challenge: "Growing meditation teaching practice transitioning from in-person to hybrid model. Needed scalable infrastructure for courses and cohorts.",
      solution: "Architected cohort-based course system with async content delivery, live session scheduling, and community features—all reflecting contemplative brand values.",
      results: [
        "Launched 3 cohort-based programs successfully",
        "Scaled from 40 to 180 active students",
        "Maintained 95% course completion rate",
        "Zero technical issues during live sessions",
      ],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      timeline: "16 weeks",
      tier: "Architecture Partner → Platform Partner",
    },
  ];

  return (
    <>
      <SEO
        title="Case Studies - Ikara.Club Partner Results"
        description="Real results from partnerships with elite yoga studios, meditation teachers, and wellness practitioners. Architecture that serves practice."
      />
      <Navigation />

      {/* Hero */}
      <section className="section-padding pt-40 bg-background">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 glass rounded-full">
              <span className="text-sm font-light tracking-widest uppercase text-muted-foreground">
                Partner Results
              </span>
            </div>
            <h1 className="text-display">Case Studies</h1>
            <p className="text-subhead text-muted-foreground">
              Real partnerships. Real results. Digital architecture that serves elite practitioners building meaningful practices.
            </p>
          </div>
        </div>
      </section>

      {/* Studies */}
      <section className="section-padding bg-muted/20">
        <div className="container-editorial">
          <div className="max-w-6xl mx-auto space-y-32">
            {studies.map((study, index) => (
              <article key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className={`glass rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div
                    className="aspect-[4/3] bg-cover bg-center"
                    style={{ backgroundImage: `url('${study.image}')` }}
                  />
                </div>

                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Client Info */}
                  <div className="space-y-3">
                    <h2 className="text-4xl font-serif">{study.client}</h2>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>{study.location}</div>
                      <div className="font-medium">{study.specialty}</div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                      Challenge
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                      Solution
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                      Results
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-3">
                          <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
                    <div>
                      <span className="text-xs uppercase tracking-wide">Timeline</span>
                      <div className="font-medium text-foreground">{study.timeline}</div>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wide">Partnership</span>
                      <div className="font-medium text-foreground">{study.tier}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto glass p-12 rounded-lg space-y-6">
            <div className="flex items-start gap-4">
              <ExternalLink className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Partnership Confidentiality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Client names and specific metrics have been modified to honor confidentiality agreements. All case studies represent real partnerships and authentic results, presented with partner consent and appropriate anonymization.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ikara.Club does not publicly disclose partner relationships without explicit written permission. The case studies above demonstrate methodology and outcomes while protecting partner privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/20">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-headline">Build Your Case Study</h2>
            <p className="text-body text-muted-foreground">
              Every partnership starts with strategic alignment. Ready to architect digital infrastructure worthy of your practice?
            </p>
            <Button asChild size="lg" className="px-12">
              <Link href="/alignment">Begin Partnership</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}