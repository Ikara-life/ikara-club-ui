import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container-editorial py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Ikara.Club</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Digital architecture for human practice. Exclusively partnering with elite coaches and studios.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide uppercase">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/method" className="transition-premium hover:text-foreground">
                  The Method
                </Link>
              </li>
              <li>
                <Link href="/why-templates-fail" className="transition-premium hover:text-foreground">
                  Why Templates Fail
                </Link>
              </li>
              <li>
                <Link href="/tiers" className="transition-premium hover:text-foreground">
                  Partnership Tiers
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="transition-premium hover:text-foreground">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Partnership */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide uppercase">Partnership</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/alignment" className="transition-premium hover:text-foreground">
                  Begin Partnership
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="transition-premium hover:text-foreground">
                  Schedule Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide uppercase">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="transition-premium hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-premium hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ikara.Club. Craft over conformity.</p>
        </div>
      </div>
    </footer>
  );
}