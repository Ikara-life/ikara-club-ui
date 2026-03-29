import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface NavigationProps {
  isDashboard?: boolean;
}

export function Navigation({ isDashboard = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem("partnerAccount");
    router.push("/");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-scrolled shadow-glass py-3" : "glass py-5"}`}>
      <div className="container-editorial">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <Link href={isDashboard ? "/dashboard" : "/"} className="flex items-center space-x-2 group relative z-50">
            <span className={`font-serif tracking-tight transition-all duration-300 group-hover:opacity-70 ${isScrolled ? "text-xl" : "text-2xl"}`}>
              Ikara.Club
            </span>
            {isDashboard && (
              <span className="text-xs font-light tracking-widest uppercase text-muted-foreground border-l border-white/20 pl-3 ml-3">
                Partner Portal
              </span>
            )}
          </Link>

          {/* Desktop Navigation - Right-aligned */}
          <div className="hidden md:flex items-center space-x-16 ml-auto">
            {!isDashboard ? (
              <>
                <Link href="/method" className="text-sm font-light tracking-wide transition-premium hover:opacity-60">
                  The Method
                </Link>
                <Link href="/why-templates-fail" className="text-sm font-light tracking-wide transition-premium hover:opacity-60">
                  Why Templates Fail
                </Link>
                <Link href="/tiers" className="text-sm font-light tracking-wide transition-premium hover:opacity-60">
                  Partnership Tiers
                </Link>
                <Link href="/case-studies" className="text-sm font-light tracking-wide transition-premium hover:opacity-60">
                  Case Studies
                </Link>
                <Button asChild variant="outline" className="border-ultra group relative overflow-hidden transition-all duration-300 hover:scale-105">
                  <Link href="/alignment">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                      Begin Partnership
                    </span>
                    <span className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="text-sm font-light tracking-wide transition-premium hover:opacity-60 flex items-center">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Overview
                </Link>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Log Out
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 transition-premium hover:opacity-60 relative z-50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <div className={`md:hidden fixed inset-0 bg-background/98 backdrop-blur-xl transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} style={{ top: isScrolled ? "64px" : "80px" }}>
          <div className="container-editorial h-full">
            <div className="flex flex-col justify-center h-full space-y-8 py-12">
              {!isDashboard ? (
                <>
                  <Link
                    href="/method"
                    className="text-2xl font-light tracking-wide transition-premium hover:opacity-60 hover:translate-x-2 transform duration-300"
                  >
                    The Method
                  </Link>
                  <Link
                    href="/why-templates-fail"
                    className="text-2xl font-light tracking-wide transition-premium hover:opacity-60 hover:translate-x-2 transform duration-300"
                  >
                    Why Templates Fail
                  </Link>
                  <Link
                    href="/tiers"
                    className="text-2xl font-light tracking-wide transition-premium hover:opacity-60 hover:translate-x-2 transform duration-300"
                  >
                    Partnership Tiers
                  </Link>
                  <Link
                    href="/case-studies"
                    className="text-2xl font-light tracking-wide transition-premium hover:opacity-60 hover:translate-x-2 transform duration-300"
                  >
                    Case Studies
                  </Link>
                  <div className="pt-8">
                    <Button asChild variant="outline" className="w-full border-ultra text-lg h-14 group relative overflow-hidden">
                      <Link href="/alignment">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                          Begin Partnership
                        </span>
                        <span className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </Link>
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/dashboard"
                    className="text-2xl font-light tracking-wide transition-premium hover:opacity-60 hover:translate-x-2 transform duration-300 flex items-center"
                  >
                    <LayoutDashboard className="w-6 h-6 mr-3" />
                    Dashboard
                  </Link>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start px-0 text-2xl font-light text-muted-foreground hover:opacity-60 hover:translate-x-2 transform duration-300" 
                    onClick={handleLogout}
                  >
                    <LogOut className="w-6 h-6 mr-3" />
                    Log Out
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}