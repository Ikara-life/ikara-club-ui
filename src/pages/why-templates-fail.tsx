import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhyTemplatesFail() {
  const failures = [
    {
      title: "Generic Booking Systems",
      problem: "Platforms like Mindbody, Momence, and AIMSE treat you like a commodity. Your studio is a row in their database. Your brand is a subdomain. Your unique methodology gets flattened into standardized class types.",
      consequence: "You sacrifice brand identity for convenience. Your practice becomes indistinguishable from every other studio on the platform.",
    },
    {
      title: "White-Label Builders",
      problem: "Tools like Wix, Squarespace, and Webflow promise freedom but deliver templates. You're still constrained by their component library, their design system, their assumptions about what a wellness business should look like.",
      consequence: "You get a website that looks professional but feels generic. Every competitor can replicate your design in 30 minutes.",
    },
    {
      title: "WordPress Plugins",
      problem: "The ecosystem is chaotic. Plugins conflict. Security is your responsibility. Performance degrades over time. The promise of flexibility becomes a maintenance nightmare.",
      consequence: "You spend more time managing technology than serving your clients. Technical debt accumulates silently.",
    },
    {
      title: "Freelancer Marketplaces",
      problem: "Upwork, Fiverr, and 99designs optimize for price competition. Freelancers are incentivized to deliver fast and move on. There's no strategic partnership, no ongoing relationship, no accountability.",
      consequence: "You get what you pay for. Quick builds that break. Surface-level solutions that don't address core strategic problems.",
    },
  ];

  const ikara_difference = [
    {
      title: "Bespoke Architecture",
      description: "We don't adapt templates to your vision. We architect digital systems from strategic foundations that reflect your unique methodology.",
    },
    {
      title: "Long-Term Partnership",
      description: "We don't disappear after launch. We maintain, evolve, and optimize your digital infrastructure as your practice grows.",
    },
    {
      title: "Strategic Thinking",
      description: "We don't just build what you ask for. We help you understand what you actually need and why it matters.",
    },
    {
      title: "Exclusive Focus",
      description: "We only work with elite practitioners in the wellness space. We understand your industry, your audience, and your challenges.",
    },
  ];

  return (
    <>
      <SEO
        title="Why Templates Fail - Ikara.Club Manifesto"
        description="Generic booking systems, white-label builders, and WordPress plugins optimize for volume. We optimize for craft, strategy, and long-term partnership."
      />
      <Navigation />

      {/* Hero */}
      <section className="section-padding pt-40 bg-background relative">
        <div className="container-editorial relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 glass rounded-full">
              <span className="text-sm font-light tracking-widest uppercase text-muted-foreground">
                Positioning Manifesto
              </span>
            </div>
            <h1 className="text-display">Why Templates Fail</h1>
            <p className="text-subhead text-muted-foreground">
              The wellness industry is drowning in generic solutions. Booking platforms that commodify your practice. Template builders that flatten your brand. Freelance marketplaces that optimize for speed over strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Fixed Background Image Section - The Problem */}
      <section className="relative min-h-screen">
        {/* Fixed Background Image */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <img
            src="/sculpture-broken.png"
            alt="Broken sculpture representing failed templates"
            className="absolute inset-0 w-full h-full object-contain object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        {/* Scrolling Content */}
        <div className="relative z-10 section-padding bg-transparent">
          <div className="container-editorial">
            <div className="max-w-5xl mx-auto space-y-16">
              <div className="text-center space-y-6 py-20 animate-fade-in">
                <h2 className="text-headline">The Template Trap</h2>
                <p className="text-body text-muted-foreground max-w-3xl mx-auto">
                  Every templated solution optimizes for volume. They need to serve thousands of businesses across dozens of industries. They can't afford to be opinionated. They can't afford to specialize.
                </p>
              </div>

              <div className="space-y-12 pb-32">
                {failures.map((failure, index) => (
                  <div 
                    key={index} 
                    className="glass p-10 rounded-lg space-y-6 backdrop-blur-xl bg-[#0A0A0A]/80 transition-all duration-500 hover:bg-[#0A0A0A]/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 hover:scale-[1.01] animate-slide-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <XCircle className="h-8 w-8 text-destructive flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <div className="space-y-4 flex-1">
                        <h3 className="text-2xl font-medium transition-colors duration-300">{failure.title}</h3>
                        <div className="space-y-3">
                          <div>
                            <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">
                              The Problem
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed">{failure.problem}</p>
                          </div>
                          <div>
                            <span className="text-xs font-medium tracking-wide uppercase text-destructive/80 block mb-2">
                              The Consequence
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed">{failure.consequence}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters - Solid Background */}
      <section className="section-padding bg-[#0A0A0A] relative z-10">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-headline text-center">Why This Matters</h2>
            <div className="space-y-6 text-body text-muted-foreground">
              <p className="leading-loose">
                If you're running a high-end yoga studio, a boutique meditation practice, or a specialized coaching business, you're not building a generic service. You've developed a unique methodology. You serve a specific audience. You have a philosophy that guides everything you do.
              </p>
              <p className="leading-loose">
                Your digital presence should reflect that. It should communicate your distinct approach. It should serve your specific operational needs. It should grow and evolve as your practice matures.
              </p>
              <p className="leading-loose">
                Templates can't do that. Generic platforms can't do that. Freelancers who disappear after launch can't do that.
              </p>
              <p className="leading-loose font-medium text-foreground">
                You need a partner who understands your industry, invests in strategic thinking, and commits to long-term collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Ikara Difference */}
      <section className="section-padding bg-muted/20 relative z-10">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-headline text-center">The Ikara Difference</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ikara_difference.map((item, index) => (
                <div key={index} className="glass-hover p-8 rounded-lg space-y-4">
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0A0A0A] relative z-10">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-headline">Ready for a Different Approach?</h2>
            <p className="text-body text-muted-foreground">
              If you're tired of compromising, if you're ready to invest in craft over convenience, if you understand that digital infrastructure is strategic—not cosmetic—let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-12">
                <Link href="/alignment">Begin Partnership</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/method">
                  Explore Our Process <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}