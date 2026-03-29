import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Tiers() {
  const tiers = [
    {
      name: "Architecture Partner",
      subtitle: "Strategic Foundation + Implementation",
      description: "For practitioners launching a new practice or undergoing complete digital transformation.",
      investment: "Starting at $12,000",
      timeline: "12-16 weeks",
      included: [
        "Complete Alignment Phase (2-3 weeks)",
        "Full Architecture Phase (3-4 weeks)",
        "Frontend & Backend Construction (6-8 weeks)",
        "Brand Identity System",
        "Complete Technical Infrastructure",
        "Third-Party Integrations",
        "6 months Operations support included",
      ],
      ongoing: "$400/month after initial 6 months",
      ideal: "New studios, complete rebrands, complex integrations",
    },
    {
      name: "Platform Partner",
      subtitle: "Ongoing Operations + Evolution",
      description: "For existing Ikara partners or practitioners with established digital infrastructure needing strategic evolution.",
      investment: "$400/month",
      timeline: "Ongoing collaboration",
      included: [
        "Managed Hosting & Security",
        "Continuous Performance Monitoring",
        "Monthly Strategic Optimization",
        "Priority Technical Support",
        "Quarterly Evolution Planning",
        "Analytics & Insights",
        "Infrastructure Maintenance",
      ],
      ongoing: "Billed monthly",
      ideal: "Established practices, ongoing optimization",
    },
  ];

  return (
    <>
      <SEO
        title="Partnership Tiers - Ikara.Club Investment Structure"
        description="Two partnership models: Architecture Partner for strategic foundation and Platform Partner for ongoing operations. No hidden fees, no surprises."
      />
      <Navigation />

      {/* Hero */}
      <section className="section-padding pt-40 bg-background">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 glass rounded-full">
              <span className="text-sm font-light tracking-widest uppercase text-muted-foreground">
                Investment Structure
              </span>
            </div>
            <h1 className="text-display">Partnership Tiers</h1>
            <p className="text-subhead text-muted-foreground">
              Two partnership models. Clear investment structures. No hidden fees, no surprises. Choose the path that aligns with your practice stage.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-muted/20">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-headline text-center">Investment Philosophy</h2>
            <div className="space-y-6 text-body text-muted-foreground">
              <p className="leading-loose">
                We don't sell subscriptions. We don't charge per-user. We don't nickel-and-dime you with feature tiers.
              </p>
              <p className="leading-loose">
                Our pricing reflects the actual cost of strategic partnership: deep discovery work, custom architecture, ongoing operations, and long-term relationship management.
              </p>
              <p className="leading-loose">
                If you're building from scratch or undergoing complete transformation, you start as an <span className="font-medium text-foreground">Architecture Partner</span>. Once your digital ecosystem is live, you transition to <span className="font-medium text-foreground">Platform Partner</span> for ongoing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Comparison */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="glass-hover p-12 rounded-lg space-y-8 flex flex-col"
              >
                {/* Header */}
                <div className="space-y-4">
                  <h3 className="text-4xl font-serif">{tier.name}</h3>
                  <p className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                    {tier.subtitle}
                  </p>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Investment */}
                <div className="space-y-2 py-6 border-y border-white/10">
                  <div className="text-3xl font-light">{tier.investment}</div>
                  <div className="text-sm text-muted-foreground">{tier.timeline}</div>
                </div>

                {/* Included */}
                <div className="space-y-6 flex-1">
                  <h4 className="text-sm font-medium tracking-wide uppercase">Included</h4>
                  <ul className="space-y-4">
                    {tier.included.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ongoing */}
                <div className="pt-6 border-t border-white/10 space-y-2">
                  <div className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                    Ongoing Investment
                  </div>
                  <div className="text-lg">{tier.ongoing}</div>
                </div>

                {/* Ideal For */}
                <div className="pt-4 space-y-2">
                  <div className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                    Ideal For
                  </div>
                  <div className="text-sm text-muted-foreground">{tier.ideal}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="section-padding bg-muted/20">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-headline text-center">What's NOT Included</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Booking Platform Fees",
                  description: "If you use Mindbody, Momence, or similar platforms, their subscription fees are separate. We integrate with them, but we're not replacing them.",
                },
                {
                  title: "Third-Party API Costs",
                  description: "Payment processing fees (Stripe), email service costs (SendGrid), or other third-party API charges are your responsibility.",
                },
                {
                  title: "Content Creation",
                  description: "We architect the system and design the containers. You provide the content: copy, photography, class descriptions, instructor bios.",
                },
                {
                  title: "Marketing Campaigns",
                  description: "We build the digital infrastructure. Paid ads, SEO campaigns, and social media management are outside our scope.",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-headline">Begin Partnership</h2>
            <p className="text-body text-muted-foreground">
              The Alignment process starts with a structured discovery conversation. If you're ready to invest in craft over convenience, let's begin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-12">
                <Link href="/alignment">Start Alignment</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/schedule">
                  Schedule Call <ArrowRight className="ml-2 h-4 w-4" />
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