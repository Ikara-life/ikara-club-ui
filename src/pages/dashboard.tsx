import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  CreditCard, 
  HelpCircle,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  CircleDot,
  Server
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock partner data (will be replaced with backend)
  const partnerData = {
    name: "Sanctuary Yoga Collective",
    status: "Architecture Phase",
    progress: 45,
    tier: "Architecture Partner",
    nextMilestone: "Frontend Construction",
  };

  const projectStages = [
    { name: "Alignment", status: "complete", progress: 100 },
    { name: "Architecture", status: "active", progress: 45 },
    { name: "Construction", status: "pending", progress: 0 },
    { name: "Operations", status: "pending", progress: 0 },
  ];

  const documents = [
    {
      title: "Brand Vision Document",
      type: "Strategic Foundation",
      status: "delivered",
      date: "2026-02-15",
      size: "2.4 MB",
    },
    {
      title: "User Flow Architecture",
      type: "Technical Specification",
      status: "in-progress",
      date: "2026-02-28",
      size: "1.8 MB",
    },
    {
      title: "Website Structure Map",
      type: "Information Architecture",
      status: "delivered",
      date: "2026-02-20",
      size: "980 KB",
    },
    {
      title: "Frontend Specifications",
      type: "Implementation Guide",
      status: "pending",
      date: null,
      size: null,
    },
  ];

  const invoices = [
    { id: "INV-001", date: "2026-02-01", amount: "$12,000", status: "paid" },
    { id: "INV-002", date: "2026-03-01", amount: "$400", status: "pending" },
  ];

  return (
    <>
      <SEO title="Partner Portal - Ikara.Club" description="Your strategic partnership dashboard" />
      <Navigation isDashboard />

      <section className="min-h-screen bg-background pt-32 pb-20">
        <div className="container-editorial">
          {/* Header */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-5xl font-serif">{partnerData.name}</h1>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="px-3 py-1 glass rounded-full">{partnerData.tier}</span>
                  <span>•</span>
                  <span>{partnerData.status}</span>
                </div>
              </div>
              <Button variant="outline" className="glass-hover">
                <HelpCircle className="mr-2 h-4 w-4" />
                Request Support
              </Button>
            </div>

            {/* Overall Progress */}
            <div className="glass p-8 rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Project Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    Next milestone: {partnerData.nextMilestone}
                  </p>
                </div>
                <div className="text-3xl font-light">{partnerData.progress}%</div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500"
                  style={{ width: `${partnerData.progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="glass p-1 h-auto">
              <TabsTrigger value="overview" className="data-[state=active]:glass-hover">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="documents" className="data-[state=active]:glass-hover">
                <FileText className="h-4 w-4 mr-2" />
                Documents
              </TabsTrigger>
              <TabsTrigger value="operations" className="data-[state=active]:glass-hover">
                <Settings className="h-4 w-4 mr-2" />
                Operations
              </TabsTrigger>
              <TabsTrigger value="financials" className="data-[state=active]:glass-hover">
                <CreditCard className="h-4 w-4 mr-2" />
                Financials
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* Stage Progress */}
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">Architectural Stages</h2>
                <div className="grid gap-4">
                  {projectStages.map((stage, index) => (
                    <div key={index} className="glass-hover p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {stage.status === "complete" && (
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          )}
                          {stage.status === "active" && (
                            <CircleDot className="h-5 w-5 text-primary animate-pulse" />
                          )}
                          {stage.status === "pending" && (
                            <Clock className="h-5 w-5 text-muted-foreground" />
                          )}
                          <h3 className="text-lg font-medium">{stage.name}</h3>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {stage.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${stage.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">Recent Activity</h2>
                <div className="glass p-8 rounded-lg space-y-4">
                  {[
                    {
                      action: "Document Delivered",
                      detail: "Brand Vision Document v2.0",
                      date: "2 days ago",
                    },
                    {
                      action: "Milestone Completed",
                      detail: "Strategic Alignment Phase",
                      date: "1 week ago",
                    },
                    {
                      action: "Payment Received",
                      detail: "Architecture Partner - Initial Investment",
                      date: "2 weeks ago",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 pb-4 last:pb-0 border-b last:border-0 border-white/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.detail}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-serif">Document Vault</h2>
                <p className="text-sm text-muted-foreground">
                  {documents.filter((d) => d.status === "delivered").length} of {documents.length} delivered
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {documents.map((doc, index) => (
                  <div key={index} className="glass-hover p-6 rounded-lg space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-lg font-medium">{doc.title}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {doc.type}
                        </p>
                      </div>
                      {doc.status === "delivered" && (
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                      {doc.status === "in-progress" && (
                        <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 animate-pulse" />
                      )}
                    </div>

                    {doc.date && (
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-white/5">
                        <span>{new Date(doc.date).toLocaleDateString()}</span>
                        <span>{doc.size}</span>
                      </div>
                    )}

                    {doc.status === "delivered" && (
                      <Button variant="outline" size="sm" className="w-full glass-hover">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    )}

                    {doc.status === "pending" && (
                      <div className="pt-4 border-t border-white/5">
                        <p className="text-xs text-muted-foreground text-center">
                          In development
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Operations Tab */}
            <TabsContent value="operations" className="space-y-8">
              <h2 className="text-2xl font-serif">Operations Center</h2>

              {/* Hosting Status */}
              <div className="glass p-8 rounded-lg space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Hosting & Infrastructure</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-muted-foreground">Operational</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { label: "Server Status", value: "Active", icon: Server },
                    { label: "Uptime", value: "99.98%", icon: CheckCircle2 },
                    { label: "Last Deploy", value: "2 hours ago", icon: Clock },
                  ].map((stat, index) => (
                    <div key={index} className="glass-hover p-4 rounded-lg space-y-2">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                        <stat.icon className="h-4 w-4" />
                        {stat.label}
                      </div>
                      <div className="text-xl font-light">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Validation Log */}
              <div className="glass p-8 rounded-lg space-y-6">
                <h3 className="text-lg font-medium">Validation Checkpoints</h3>
                <div className="space-y-3">
                  {[
                    { item: "Brand Vision Approval", status: "approved", date: "2026-02-16" },
                    { item: "User Flow Sign-off", status: "pending", date: null },
                    { item: "Design Mockup Review", status: "pending", date: null },
                  ].map((checkpoint, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 glass-hover rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        {checkpoint.status === "approved" ? (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        ) : (
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        )}
                        <span className="text-sm">{checkpoint.item}</span>
                      </div>
                      {checkpoint.date && (
                        <span className="text-xs text-muted-foreground">
                          {new Date(checkpoint.date).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-2 gap-6">
                <Button variant="outline" className="glass-hover justify-start h-auto p-6">
                  <ExternalLink className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">View Staging Site</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Preview current build
                    </div>
                  </div>
                </Button>
                <Button variant="outline" className="glass-hover justify-start h-auto p-6">
                  <FileText className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">Request Change</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Submit revision request
                    </div>
                  </div>
                </Button>
              </div>
            </TabsContent>

            {/* Financials Tab */}
            <TabsContent value="financials" className="space-y-8">
              <h2 className="text-2xl font-serif">Financial Suite</h2>

              {/* Subscription Status */}
              <div className="glass p-8 rounded-lg space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Active Subscription</h3>
                  <span className="px-3 py-1 glass rounded-full text-sm">
                    {partnerData.tier}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Monthly Investment
                    </p>
                    <p className="text-2xl font-light">$400</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Next Billing
                    </p>
                    <p className="text-2xl font-light">Apr 1, 2026</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Payment Method
                    </p>
                    <p className="text-sm text-muted-foreground">•••• 4242</p>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="glass-hover">
                  Update Payment Method
                </Button>
              </div>

              {/* Invoice History */}
              <div className="glass p-8 rounded-lg space-y-6">
                <h3 className="text-lg font-medium">Invoice History</h3>
                <div className="space-y-3">
                  {invoices.map((invoice, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 glass-hover rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{invoice.id}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(invoice.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium">{invoice.amount}</span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            invoice.status === "paid"
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {invoice.status}
                        </span>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </>
  );
}