import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#020617] pt-16 pb-12 w-full text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-16">
          
          {/* Column 1 */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-[#f97316]" />
              <span className="font-sans font-black text-xl text-white tracking-widest uppercase">
                CORSO<span className="text-[#f97316]">GUARD</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              The elite, analytics-backed dashboard for Cane Corso owners. Secure high-converting tools, premium blueprints, and dynamic calculations.
            </p>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#f97316]">Tools</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/growth" className="hover:text-white transition-colors">Growth Predictor</Link></li>
              <li><Link href="/checklist" className="hover:text-white transition-colors">100-Item Checklist</Link></li>
              <li><Link href="/age-converter" className="hover:text-white transition-colors">Age Converter</Link></li>
              <li><Link href="/harness" className="hover:text-white transition-colors">Harness Sizing</Link></li>
              <li><Link href="/lifetime-cost" className="hover:text-white transition-colors">Cost Calculator</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#f97316]">Legal Resources</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy & Cookies</Link></li>
              <li><Link href="/disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#f97316]">Resources</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/blog" className="hover:text-white transition-colors">Tactical Blog Guides</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Team</Link></li>
              <li><a href="mailto:hello@corsoguard.com" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="hover:text-[#f97316] transition-colors duration-300 cursor-pointer">
            &copy; {new Date().getFullYear()} CorsoGuard. All rights reserved. Premium Cane Corso Resources.
          </p>
          <div className="flex space-x-6">
            <span className="hover:text-[#f97316] cursor-pointer transition-colors duration-300">Facebook</span>
            <span className="hover:text-[#f97316] cursor-pointer transition-colors duration-300">Instagram</span>
            <span className="hover:text-[#f97316] cursor-pointer transition-colors duration-300">Twitter</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
