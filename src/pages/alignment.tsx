import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/router";
import { CheckCircle2, ArrowRight } from "lucide-react";

type Step = "identity" | "philosophy" | "stage" | "direction" | "complete";

interface AlignmentData {
  practiceType: string;
  studioName: string;
  location: string;
  methodology: string;
  philosophyStatement: string;
  currentStage: string;
  primaryGoal: string;
  timeline: string;
  monthlyRevenue: string;
}

export default function Alignment() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>("identity");
  const [formData, setFormData] = useState<AlignmentData>({
    practiceType: "",
    studioName: "",
    location: "",
    methodology: "",
    philosophyStatement: "",
    currentStage: "",
    primaryGoal: "",
    timeline: "",
    monthlyRevenue: "",
  });

  const steps: Step[] = ["identity", "philosophy", "stage", "direction", "complete"];
  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const updateField = (field: keyof AlignmentData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const handleSubmit = () => {
    // Store alignment data in localStorage (will be replaced with backend)
    localStorage.setItem("alignmentData", JSON.stringify(formData));
    router.push("/signup");
  };

  const stepContent = {
    identity: {
      title: "Practice Identity",
      subtitle: "Help us understand the foundation of your practice",
      content: (
        <div className="space-y-8">
          <div className="space-y-3">
            <Label htmlFor="practiceType" className="text-base">
              What type of practice do you lead?
            </Label>
            <RadioGroup value={formData.practiceType} onValueChange={(val) => updateField("practiceType", val)}>
              <div className="space-y-3">
                {[
                  "Yoga Studio (Single Location)",
                  "Yoga Studio (Multi-Location)",
                  "Meditation Practice",
                  "Mindfulness Coaching",
                  "Somatic Practice",
                  "High-End Fitness Studio",
                ].map((option) => (
                  <div key={option} className="glass-hover p-4 rounded-lg flex items-center space-x-3">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="flex-1 cursor-pointer text-sm">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label htmlFor="studioName" className="text-base">
              Studio/Practice Name
            </Label>
            <Input
              id="studioName"
              value={formData.studioName}
              onChange={(e) => updateField("studioName", e.target.value)}
              placeholder="Enter your practice name"
              className="glass border-ultra"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="location" className="text-base">
              Primary Location
            </Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => updateField("location", e.target.value)}
              placeholder="City, State/Country"
              className="glass border-ultra"
            />
          </div>
        </div>
      ),
    },
    philosophy: {
      title: "Practice Philosophy",
      subtitle: "What makes your methodology unique?",
      content: (
        <div className="space-y-8">
          <div className="space-y-3">
            <Label htmlFor="methodology" className="text-base">
              Primary Methodology
            </Label>
            <Input
              id="methodology"
              value={formData.methodology}
              onChange={(e) => updateField("methodology", e.target.value)}
              placeholder="e.g., Ashtanga, MBSR, Somatic Movement"
              className="glass border-ultra"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="philosophyStatement" className="text-base">
              Philosophy Statement
            </Label>
            <Textarea
              id="philosophyStatement"
              value={formData.philosophyStatement}
              onChange={(e) => updateField("philosophyStatement", e.target.value)}
              placeholder="Describe your practice philosophy in 2-3 sentences. What makes your approach distinct?"
              rows={6}
              className="glass border-ultra resize-none"
            />
            <p className="text-xs text-muted-foreground">
              This helps us understand your brand voice and positioning.
            </p>
          </div>
        </div>
      ),
    },
    stage: {
      title: "Current Stage",
      subtitle: "Where is your practice today?",
      content: (
        <div className="space-y-8">
          <div className="space-y-3">
            <Label htmlFor="currentStage" className="text-base">
              Practice Maturity
            </Label>
            <RadioGroup value={formData.currentStage} onValueChange={(val) => updateField("currentStage", val)}>
              <div className="space-y-3">
                {[
                  { value: "new", label: "New Practice", desc: "Planning or recently launched (0-1 year)" },
                  { value: "established", label: "Established Practice", desc: "Operating consistently (1-5 years)" },
                  { value: "mature", label: "Mature Practice", desc: "Well-established brand (5+ years)" },
                  { value: "scaling", label: "Scaling Practice", desc: "Expanding locations or offerings" },
                ].map((option) => (
                  <div key={option.value} className="glass-hover p-5 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={option.value} className="cursor-pointer text-sm font-medium">
                          {option.label}
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">{option.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label htmlFor="monthlyRevenue" className="text-base">
              Approximate Monthly Revenue (Optional)
            </Label>
            <RadioGroup value={formData.monthlyRevenue} onValueChange={(val) => updateField("monthlyRevenue", val)}>
              <div className="space-y-2">
                {[
                  "Under $5,000",
                  "$5,000 - $15,000",
                  "$15,000 - $30,000",
                  "$30,000 - $75,000",
                  "$75,000+",
                  "Prefer not to share",
                ].map((option) => (
                  <div key={option} className="glass-hover p-3 rounded-lg flex items-center space-x-3">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="flex-1 cursor-pointer text-sm">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      ),
    },
    direction: {
      title: "Strategic Direction",
      subtitle: "What are you building toward?",
      content: (
        <div className="space-y-8">
          <div className="space-y-3">
            <Label htmlFor="primaryGoal" className="text-base">
              Primary Goal for Digital Infrastructure
            </Label>
            <RadioGroup value={formData.primaryGoal} onValueChange={(val) => updateField("primaryGoal", val)}>
              <div className="space-y-3">
                {[
                  { value: "launch", label: "Launch New Practice", desc: "Building digital presence from scratch" },
                  { value: "rebrand", label: "Complete Rebrand", desc: "Transforming existing digital identity" },
                  { value: "scale", label: "Scale Operations", desc: "Infrastructure for growth and expansion" },
                  { value: "integrate", label: "Integrate Systems", desc: "Unify fragmented tools and platforms" },
                ].map((option) => (
                  <div key={option.value} className="glass-hover p-5 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={option.value} className="cursor-pointer text-sm font-medium">
                          {option.label}
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">{option.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label htmlFor="timeline" className="text-base">
              Preferred Timeline
            </Label>
            <RadioGroup value={formData.timeline} onValueChange={(val) => updateField("timeline", val)}>
              <div className="space-y-2">
                {[
                  "Ready to start immediately",
                  "Within the next 1-2 months",
                  "Within the next 3-6 months",
                  "Exploring options (6+ months)",
                ].map((option) => (
                  <div key={option} className="glass-hover p-3 rounded-lg flex items-center space-x-3">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="flex-1 cursor-pointer text-sm">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      ),
    },
    complete: {
      title: "Alignment Complete",
      subtitle: "Your partnership foundation is documented",
      content: (
        <div className="space-y-8 text-center">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Your alignment profile has been captured. This information forms the strategic foundation for our
              partnership conversation.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Next step: Create your partner account to access the Ikara Portal and schedule your alignment call.
            </p>
          </div>

          <div className="pt-8">
            <Button size="lg" className="px-12" onClick={handleSubmit}>
              Create Partner Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      ),
    },
  };

  const isStepValid = () => {
    switch (currentStep) {
      case "identity":
        return formData.practiceType && formData.studioName && formData.location;
      case "philosophy":
        return formData.methodology && formData.philosophyStatement;
      case "stage":
        return formData.currentStage;
      case "direction":
        return formData.primaryGoal && formData.timeline;
      default:
        return true;
    }
  };

  return (
    <>
      <SEO
        title="Begin Partnership - Alignment Process"
        description="Strategic discovery to understand your practice and align on digital architecture direction."
      />
      <Navigation />

      <section className="min-h-screen pt-32 pb-20 bg-background">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-16 space-y-4">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Alignment Process</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Step Content */}
            <div className="glass p-12 rounded-lg space-y-12">
              <div className="text-center space-y-3">
                <h1 className="text-4xl font-serif">{stepContent[currentStep].title}</h1>
                <p className="text-muted-foreground">{stepContent[currentStep].subtitle}</p>
              </div>

              <div>{stepContent[currentStep].content}</div>

              {/* Navigation */}
              {currentStep !== "complete" && (
                <div className="flex justify-between items-center pt-8 border-t border-white/10">
                  <Button
                    variant="ghost"
                    onClick={prevStep}
                    disabled={currentStep === "identity"}
                    className="px-8"
                  >
                    Previous
                  </Button>
                  <Button onClick={nextStep} disabled={!isStepValid()} className="px-8">
                    {currentStep === "direction" ? "Complete Alignment" : "Continue"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Context Note */}
            {currentStep !== "complete" && (
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  All information is confidential and used exclusively for strategic alignment.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}