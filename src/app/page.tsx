import { Shield, Calculator, CheckSquare, Clock, BookOpen, Scaling, DollarSign, ArrowRight, ChevronRight, Activity } from "lucide-react";
import AdSenseUnit from "@/components/AdSenseUnit";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cane Corso Growth Predictor & Owner Toolkit | CorsoGuard",
  description: "The most accurate Cane Corso growth predictor, professional socialization protocols, and tactical gear recommendations for large breeds.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-100 bg-[#020617] overflow-x-hidden font-sans">
      {/* Dynamic Font Import & CSS Styles override to hide default layouts and style everything */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
      
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide global layouts header & footer specifically on the landing page */
        body.on-landing-page > header { display: none !important; }

        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        .glassmorphism {
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .glassmorphism-orange {
          background: rgba(249, 115, 22, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(249, 115, 22, 0.2);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .orange-glow-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .orange-glow-btn:hover {
          box-shadow: 0 0 25px rgba(249, 115, 22, 0.5);
          transform: scale(1.03);
        }

        /* Custom range slider styling */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.8);
          transition: transform 0.1s;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        .gender-active {
          color: #f97316 !important;
          text-shadow: 0 0 15px rgba(249, 115, 22, 0.6);
          font-weight: 800 !important;
          text-decoration: none !important;
          border-bottom: none !important;
        }
        .gender-inactive {
          color: #475569 !important;
          text-shadow: none !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          border-bottom: none !important;
        }
        #gender-male-label, #gender-female-label {
          text-decoration: none !important;
          border-bottom: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        #gender-male-label:hover, #gender-female-label:hover {
          text-decoration: none !important;
          border-bottom: none !important;
        }
        @media (max-width: 480px) {
          .score-text-full { display: none !important; }
          .score-text-short { display: inline !important; }
        }
        @media (min-width: 481px) {
          .score-text-full { display: inline !important; }
          .score-text-short { display: none !important; }
        }
      ` }} />

      {/* A. Navbar (Sticky & Glassmorphic) */}
      <nav id="landing-navbar" className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#020617]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/25 group-hover:border-orange-500/50 transition-colors">
              <Shield className="w-6 h-6 text-[#f97316]" />
            </div>
            <span className="font-montserrat font-extrabold text-2xl text-white tracking-wider">
              Corso<span className="text-[#f97316]">Guard</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-6 mr-4 text-sm font-medium text-slate-400 font-inter">
              <Link href="/growth" className="hover:text-white transition-colors">Growth Predictor</Link>
              <Link href="/checklist" className="hover:text-white transition-colors">Checklist</Link>
              <Link href="/harness" className="hover:text-white transition-colors">Harness Sizing</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>
            </div>
            <div className="glassmorphism-orange px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#f97316] animate-pulse-glow"></span>
              <span className="font-mono text-slate-300 score-text-full">Socialization Score:</span>
              <span className="font-mono text-slate-300 score-text-short">Score:</span>
              <span className="font-montserrat font-black text-[#f97316]" id="nav-tracker-score">0%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* B. Hero Section (The Hook) */}
      <section id="hero-section" className="relative pt-12 pb-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive blurred orange glowing aura behind the main content */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-[#f97316] tracking-wide uppercase">
              <Activity className="w-4 h-4 animate-pulse-glow" />
              <span>Premium Owner Toolkit</span>
            </div>

            <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
              Cane Corso <span className="text-[#f97316] drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">Growth Predictor</span> & Owner Toolkit
            </h1>
            
            <p className="text-slate-400 font-inter text-lg md:text-xl max-w-2xl leading-relaxed">
              Unlock the metrics behind your guardian breed. Calculate adult weight, master socialization protocols, size high-performance gear, and secure lifetime estimates with our verified suite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                id="hero-cta-explore"
                href="#toolkit-section" 
                className="orange-glow-btn font-montserrat font-extrabold text-white bg-[#f97316] px-8 py-4.5 rounded-xl flex items-center justify-center space-x-2 group text-base"
              >
                <span>Explore Tools</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <Link 
                id="hero-cta-checklist"
                href="/checklist" 
                className="glassmorphism font-montserrat font-bold text-white px-8 py-4.5 rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors border border-white/10"
              >
                Start Socialization Tracker
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[4/5] animate-float z-10 group">
              {/* Glow background behind card */}
              <div className="absolute inset-0 bg-[#f97316]/5 rounded-3xl blur-2xl group-hover:bg-[#f97316]/10 transition-all duration-500"></div>
              
              {/* Floating Card */}
              <div className="absolute inset-0 glassmorphism rounded-3xl p-4 flex flex-col justify-between overflow-hidden border border-white/10">
                <div className="relative w-full h-[85%] rounded-2xl overflow-hidden bg-slate-900">
                  <Image 
                    src="/baby-corso.png" 
                    alt="Majestic Cane Corso Guardian Dog" 
                    fill 
                    priority
                    className="object-cover object-[center_35%] scale-100 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                </div>

                {/* Glassmorphic overlay at the bottom */}
                <div className="relative -mt-16 w-full glassmorphism p-4 rounded-2xl flex items-center justify-between border border-white/15">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] animate-pulse"></span>
                      <h3 className="font-montserrat font-black text-sm uppercase tracking-widest text-white">Elite Guardian</h3>
                    </div>
                    <p className="text-slate-400 text-xs mt-0.5 font-inter">Unleash Full Potential</p>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-[10px] font-bold text-[#f97316] uppercase tracking-wider">
                    Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. Interactive Widget (Retention & Funnel Optimization) */}
      <section id="interactive-widget" className="relative py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-orange-600/5 rounded-full blur-[80px] pointer-events-none z-0"></div>
        
        <div className="glassmorphism rounded-3xl p-5 sm:p-8 md:p-10 relative z-10 border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Side (Inputs) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
              <div>
                <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-white">
                  Quick Growth Estimate
                </h2>
                <p className="text-slate-400 text-sm md:text-base mt-2 font-inter">
                  Adjust age and gender parameters to project your Cane Corso's growth trajectory instantaneously.
                </p>
              </div>

              <div className="space-y-6">
                {/* Age Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="age-slider" className="text-sm font-bold text-slate-300 font-inter">Current Age</label>
                    <span id="age-value-display" className="font-montserrat font-extrabold text-lg text-[#f97316] bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-500/20">
                      4 Months
                    </span>
                  </div>
                  <input 
                    type="range" 
                    id="age-slider" 
                    min="1" 
                    max="24" 
                    defaultValue="4" 
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#f97316]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>1 MO</span>
                    <span>6 MO</span>
                    <span>12 MO</span>
                    <span>18 MO</span>
                    <span>24 MO</span>
                  </div>
                </div>

                {/* Gender Toggle */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-t border-b border-white/5 gap-3">
                  <div>
                    <label className="text-sm font-bold text-slate-300 font-inter">Gender Designation</label>
                    <p className="text-xs text-slate-500 font-inter mt-0.5">Influences final skeletal weight density</p>
                  </div>
                  <div className="flex items-center space-x-3 self-start sm:self-auto">
                    <span id="gender-male-label" className="text-xs font-bold gender-active transition-all duration-300 select-none cursor-pointer">Male</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" id="gender-toggle" className="sr-only peer" />
                      <div className="w-14 h-7 bg-slate-950 border border-white/10 rounded-full relative transition-all duration-300 peer-focus:outline-none peer-checked:bg-orange-500/20 peer-checked:border-orange-500/30 after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-5 after:h-5 after:rounded-full after:transition-all after:bg-[#f97316] after:shadow-[0_0_8px_rgba(249,115,22,0.6)] peer-checked:after:translate-x-7 peer-checked:after:bg-white peer-checked:after:shadow-[0_0_8px_rgba(255,255,255,0.6)]"></div>
                    </label>
                    <span id="gender-female-label" className="text-xs font-bold gender-inactive transition-all duration-300 select-none cursor-pointer">Female</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] text-slate-500 leading-normal font-inter">
                  *Calculations are models based on standard Cane Corso growth vectors. Actual results may vary based on health, nutrition, lineage, and exercise protocols.
                </p>
              </div>
            </div>

            {/* Right Side (Outputs) */}
            <div className="lg:col-span-5 bg-slate-950/40 backdrop-blur-md rounded-2xl p-5 sm:p-8 flex flex-col justify-between border border-white/5 mt-4 lg:mt-0">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#f97316] uppercase font-montserrat">Estimated Adult Weight</span>
                  <div id="adult-weight-output" className="font-montserrat text-4xl md:text-5xl font-black text-white mt-1.5 tracking-tight">
                    115 - 125 lbs
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase font-montserrat">Current Est. Weight</span>
                  <div id="current-weight-output" className="font-montserrat text-2xl md:text-3xl font-extrabold text-[#f97316] mt-1">
                    45 - 60 lbs
                  </div>
                </div>
              </div>

              {/* Monetization CTA */}
              <Link 
                id="widget-funnel-cta"
                href="/growth" 
                className="orange-glow-btn mt-8 w-full bg-[#f97316] text-white py-4.5 px-6 rounded-xl font-montserrat font-extrabold flex items-center justify-center space-x-2 text-sm uppercase tracking-wider"
              >
                <span>Get Full Growth Chart</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* D. The Ultimate Toolkit (Feature Grid) */}
      <section id="toolkit-section" className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The Ultimate <span className="text-[#f97316]">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg mt-4 font-inter">
            Access our tactical suite of calculators, tracking tools, and E-E-A-T guides designed specifically for large-breed Cane Corso guardians.
          </p>
        </div>

        {/* Ad Unit space for optimization */}
        <div className="mb-12">
          <AdSenseUnit slotId="dash-native-1" type="native" className="h-full min-h-[8rem]" />
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Growth Predictor */}
          <Link 
            id="tool-card-growth"
            href="/growth" 
            className="group relative glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                  <Calculator className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-[#f97316] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-montserrat font-extrabold text-xl text-white mt-6 group-hover:text-[#f97316] transition-colors duration-300">
                Growth Predictor
              </h3>
              <p className="text-slate-400 text-sm mt-2 font-inter leading-relaxed">
                Project adult metrics, nutritional targets, and track milestones month-by-month.
              </p>
            </div>
          </Link>

          {/* Card 2: 100-Item Checklist */}
          <Link 
            id="tool-card-checklist"
            href="/checklist" 
            className="group relative glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-[#f97316] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-montserrat font-extrabold text-xl text-white mt-6 group-hover:text-[#f97316] transition-colors duration-300">
                100-Item Checklist
              </h3>
              <p className="text-slate-400 text-sm mt-2 font-inter leading-relaxed">
                Bulletproof your Corso using our comprehensive, multi-phase puppy socialization matrix.
              </p>
            </div>
          </Link>

          {/* Card 3: Human Age Converter */}
          <Link 
            id="tool-card-age"
            href="/age-converter" 
            className="group relative glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-[#f97316] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-montserrat font-extrabold text-xl text-white mt-6 group-hover:text-[#f97316] transition-colors duration-300">
                Human Age Converter
              </h3>
              <p className="text-slate-400 text-sm mt-2 font-inter leading-relaxed">
                Convert dog age to human equivalents tailored for giant-breed developmental milestones.
              </p>
            </div>
          </Link>

          {/* Card 4: Ultimate Guides */}
          <Link 
            id="tool-card-blog"
            href="/blog" 
            className="group relative glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-[#f97316] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-montserrat font-extrabold text-xl text-white mt-6 group-hover:text-[#f97316] transition-colors duration-300">
                Ultimate Guides
              </h3>
              <p className="text-slate-400 text-sm mt-2 font-inter leading-relaxed">
                Expert-written articles detailing nutrition, obedience, health warnings, and dynamic breed traits.
              </p>
            </div>
          </Link>

          {/* Card 5: Harness Sizing */}
          <Link 
            id="tool-card-harness"
            href="/harness" 
            className="group relative glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                  <Scaling className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-[#f97316] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-montserrat font-extrabold text-xl text-white mt-6 group-hover:text-[#f97316] transition-colors duration-300">
                Harness Sizing
              </h3>
              <p className="text-slate-400 text-sm mt-2 font-inter leading-relaxed">
                Verify absolute tactical collar and harness fitting parameters based on neck/chest girth.
              </p>
            </div>
          </Link>

          {/* Card 6: Lifetime Cost Calculator */}
          <Link 
            id="tool-card-cost"
            href="/lifetime-cost" 
            className="group relative glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                  <DollarSign className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-[#f97316] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-montserrat font-extrabold text-xl text-white mt-6 group-hover:text-[#f97316] transition-colors duration-300">
                Lifetime Cost Calculator
              </h3>
              <p className="text-slate-400 text-sm mt-2 font-inter leading-relaxed">
                Project food, veterinary, gear, and training costs from puppyhood through senior life phases.
              </p>
            </div>
          </Link>

        </div>
      </section>



      {/* Script to implement the interactive dynamic slider logic client-side */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          function initCalculator() {
            const ageSlider = document.getElementById("age-slider");
            const ageDisplay = document.getElementById("age-value-display");
            const genderToggle = document.getElementById("gender-toggle");
            const adultWeightOutput = document.getElementById("adult-weight-output");
            const currentWeightOutput = document.getElementById("current-weight-output");

            // LocalStorage key for socialization checklist progress
            try {
              const checklistState = localStorage.getItem("checklist-progress");
              if (checklistState) {
                const parsed = JSON.parse(checklistState);
                if (parsed && typeof parsed === "object") {
                  const completedCount = Object.values(parsed).filter(val => val === true).length;
                  const totalCount = 100; // Standard 100 items
                  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
                  const tracker = document.getElementById("nav-tracker-score");
                  if (tracker) {
                    tracker.textContent = pct + "%";
                  }
                }
              }
            } catch (err) {
              console.error(err);
            }

            const maleWeights = {
              1: "10 - 15 lbs", 2: "20 - 30 lbs", 3: "35 - 45 lbs", 4: "45 - 60 lbs",
              5: "60 - 75 lbs", 6: "75 - 90 lbs", 7: "90 - 100 lbs", 8: "95 - 105 lbs",
              9: "100 - 110 lbs", 10: "105 - 115 lbs", 11: "108 - 118 lbs", 12: "110 - 120 lbs",
              13: "112 - 122 lbs", 14: "113 - 123 lbs", 15: "114 - 124 lbs", 16: "114 - 124 lbs",
              17: "115 - 125 lbs", 18: "115 - 125 lbs", 19: "115 - 125 lbs", 20: "115 - 125 lbs",
              21: "115 - 125 lbs", 22: "115 - 125 lbs", 23: "115 - 125 lbs", 24: "115 - 125 lbs"
            };

            const femaleWeights = {
              1: "10 - 12 lbs", 2: "15 - 25 lbs", 3: "30 - 40 lbs", 4: "40 - 50 lbs",
              5: "50 - 65 lbs", 6: "65 - 80 lbs", 7: "75 - 85 lbs", 8: "80 - 90 lbs",
              9: "85 - 95 lbs", 10: "88 - 98 lbs", 11: "90 - 100 lbs", 12: "92 - 102 lbs",
              13: "93 - 103 lbs", 14: "93 - 103 lbs", 15: "94 - 104 lbs", 16: "94 - 104 lbs",
              17: "94 - 104 lbs", 18: "95 - 105 lbs", 19: "95 - 105 lbs", 20: "95 - 105 lbs",
              21: "95 - 105 lbs", 22: "95 - 105 lbs", 23: "95 - 105 lbs", 24: "95 - 105 lbs"
            };

            function update() {
              if (!ageSlider) return;
              const age = parseInt(ageSlider.value);
              const isFemale = genderToggle ? genderToggle.checked : false;
              
              if (ageDisplay) ageDisplay.textContent = age + (age === 1 ? " Month" : " Months");
              
              const maleLabel = document.getElementById("gender-male-label");
              const femaleLabel = document.getElementById("gender-female-label");
              
              if (isFemale) {
                if (femaleLabel) {
                  femaleLabel.classList.remove("gender-inactive");
                  femaleLabel.classList.add("gender-active");
                }
                if (maleLabel) {
                  maleLabel.classList.remove("gender-active");
                  maleLabel.classList.add("gender-inactive");
                }
                if (adultWeightOutput) adultWeightOutput.textContent = "95 - 105 lbs";
                if (currentWeightOutput) currentWeightOutput.textContent = femaleWeights[age] || "95 - 105 lbs";
              } else {
                if (maleLabel) {
                  maleLabel.classList.remove("gender-inactive");
                  maleLabel.classList.add("gender-active");
                }
                if (femaleLabel) {
                  femaleLabel.classList.remove("gender-active");
                  femaleLabel.classList.add("gender-inactive");
                }
                if (adultWeightOutput) adultWeightOutput.textContent = "115 - 125 lbs";
                if (currentWeightOutput) currentWeightOutput.textContent = maleWeights[age] || "115 - 125 lbs";
              }
            }

            if (ageSlider) {
              // Detach and re-attach elements to avoid double listener execution
              ageSlider.removeEventListener("input", update);
              ageSlider.addEventListener("input", update);
              if (genderToggle) {
                genderToggle.removeEventListener("change", update);
                genderToggle.addEventListener("change", update);
              }

              // Add explicit click handlers for the text labels to make clicking them toggle the switch
              const maleLabel = document.getElementById("gender-male-label");
              const femaleLabel = document.getElementById("gender-female-label");
              if (maleLabel && genderToggle) {
                maleLabel.style.cursor = "pointer";
                const handleMaleClick = () => {
                  if (genderToggle.checked) {
                    genderToggle.checked = false;
                    update();
                  }
                };
                maleLabel.removeEventListener("click", handleMaleClick);
                maleLabel.addEventListener("click", handleMaleClick);
              }
              if (femaleLabel && genderToggle) {
                femaleLabel.style.cursor = "pointer";
                const handleFemaleClick = () => {
                  if (!genderToggle.checked) {
                    genderToggle.checked = true;
                    update();
                  }
                };
                femaleLabel.removeEventListener("click", handleFemaleClick);
                femaleLabel.addEventListener("click", handleFemaleClick);
              }

              update();
            }
          }

          function checkRoute() {
            try {
              if (window.location.pathname === '/') {
                if (!document.body.classList.contains('on-landing-page')) {
                  document.body.classList.add('on-landing-page');
                }
              } else {
                if (document.body.classList.contains('on-landing-page')) {
                  document.body.classList.remove('on-landing-page');
                }
              }
            } catch (err) {
              console.error(err);
            }
          }

          function runAll() {
            initCalculator();
            checkRoute();
          }

          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", runAll);
          } else {
            runAll();
          }
          window.addEventListener("load", runAll);
          setInterval(runAll, 500);
        })();
      ` }} />

    </div>
  );
}

