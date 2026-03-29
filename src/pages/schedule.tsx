import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Calendar } from "lucide-react";

export default function Schedule() {
  return (
    <>
      <SEO title="Schedule Alignment Call - Ikara.Club" description="Book your strategic alignment conversation." />
      <Navigation />

      <section className="section-padding pt-40 bg-background">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-6 py-2 glass rounded-full">
                <span className="text-sm font-light tracking-widest uppercase text-muted-foreground">
                  Alignment Call
                </span>
              </div>
              <h1 className="text-display">Schedule Your Call</h1>
              <p className="text-subhead text-muted-foreground max-w-2xl mx-auto">
                A focused conversation to review your alignment profile and explore partnership structure.
              </p>
            </div>

            {/* Calendar Placeholder */}
            <div className="glass p-16 rounded-lg">
              <div className="flex flex-col items-center justify-center space-y-6">
                <Calendar className="h-16 w-16 text-muted-foreground" />
                <div className="space-y-3 text-center">
                  <h3 className="text-2xl font-medium">Calendar Integration</h3>
                  <p className="text-muted-foreground max-w-md">
                    This will integrate with Calendly or similar scheduling tool. Partners can select available time
                    slots for their alignment call.
                  </p>
                </div>
              </div>
            </div>

            {/* Call Details */}
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {[
                {
                  title: "Duration",
                  value: "60 minutes",
                  description: "Structured discovery conversation",
                },
                {
                  title: "Format",
                  value: "Video Call",
                  description: "Zoom or Google Meet",
                },
                {
                  title: "Preparation",
                  value: "Review Profile",
                  description: "We'll review your alignment data beforehand",
                },
              ].map((item, index) => (
                <div key={index} className="glass-hover p-6 rounded-lg space-y-3">
                  <div className="text-xs font-medium tracking-wide uppercase text-muted-foreground">{item.title}</div>
                  <div className="text-xl font-medium">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}