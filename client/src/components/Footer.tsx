import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/logo-whitehat.png" alt="WHITEHAT INFOTECH" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              Free-to-play fantasy cricket platform for education and entertainment.
            </p>
            <div className="flex gap-4">
              <img src="/badge-18plus.png" alt="18+" className="h-12 w-12" />
              <img src="/badge-fairplay.png" alt="Fair Play" className="h-12 w-12" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/how-to-play">
                  <a className="text-muted-foreground hover:text-primary transition-colors">How To Play</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/fair-play">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Fair Play Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Responsible Gaming</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="font-semibold mb-4">Company Details</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">WHITEHAT INFOTECH PRIVATE LIMITED</p>
              <p>CIN: U72300UP2015PTC073049</p>
              <p>PAN: AABCW6952B</p>
              <p className="mt-2">
                308, BAKHTAVAR STREET<br />
                HATHRAS, HATHRAS - 204101<br />
                Uttar Pradesh, INDIA
              </p>
              <p className="mt-2">
                <a href="https://whitehatinfotech.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  whitehatinfotech.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-8 border-t">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
            <p className="text-sm text-destructive font-semibold">
              ⚠️ Legal Disclaimer: This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved.
            </p>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} WHITEHAT INFOTECH PRIVATE LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
