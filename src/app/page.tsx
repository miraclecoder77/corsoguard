"use client";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { Shield, Calculator, CheckSquare, BookOpen, Scaling, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import AdSenseUnit from "@/components/AdSenseUnit";

export default function Home() {

  return (
    <div className="min-h-screen p-8 pt-24 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-white">
          Corso<span className="text-primary">Guard</span>
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl">
          The ultimate tactical toolkit for Cane Corso owners. Predict growth, manage socialization, and secure the right gear.
        </p>
      </div>

      <BentoGrid>
        <BentoGridItem
          title="Growth & Nutrition Predictor"
          description="Calculate your pup's future adult weight and find the exact tactical harness size."
          icon={<Calculator className="w-6 h-6" />}
          header={
            <div className="w-full h-full bg-[url('/baby-corso.png')] bg-cover bg-[center_38%] opacity-40 hover:opacity-100 transition-opacity duration-300"></div>
          }
          className="md:col-span-2"
          href="/growth"
        />
        <BentoGridItem
          title="100-Item Checklist"
          description="Bulletproof your Corso with our comprehensive socialization protocol."
          icon={<CheckSquare className="w-6 h-6" />}
          href="/checklist"
          header={<div className="w-full h-full bg-[url('/checklist-card.png')] bg-cover bg-center opacity-60 hover:opacity-100 transition-opacity"></div>}
        />
        <BentoGridItem
          title="Human Age Converter"
          description="See exactly how old your Corso is in human years using our giant-breed aging formula."
          icon={<Clock className="w-6 h-6" />}
          className="md:col-span-1"
          href="/age-converter"
          header={
            <div className="w-full h-full bg-[#050505] relative overflow-hidden flex items-center justify-center group">
              {/* Tactical Grid Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_14px]"></div>
              
              {/* Circular Radar/Time UI */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
                ></motion.div>
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border border-primary/10 rounded-full"
                ></motion.div>
                <Clock className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500 relative z-10" />
                
                {/* Pulsing Tactical Ring */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/5 rounded-full"
                ></motion.div>
              </div>
              
              {/* Scanning Line */}
              <motion.div
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-primary/30 shadow-[0_0_15px_rgba(255,95,31,0.5)] z-20"
              ></motion.div>
            </div>
          }
        />
        <BentoGridItem
          title="Ultimate Cane Corso Guides"
          description="Expert tips on behavior, health, and training for protective owners. E-E-A-T backed advice."
          icon={<BookOpen className="w-6 h-6" />}
          className="md:col-span-1"
          href="/blog"
          header={<div className="w-full h-full bg-[url('/breed-guide-card.png')] bg-cover bg-center opacity-60 hover:opacity-100 transition-opacity"></div>}
        />

        <AdSenseUnit slotId="dash-native-1" type="native" className="md:col-span-1 row-span-1 h-full min-h-[18rem]" />

        <BentoGridItem
          title="Harness Sizing"
          description="Find the perfect tactical gear based on precise weight class measurements."
          icon={<Scaling className="w-6 h-6" />}
          className="md:col-span-1"
          href="/harness"
          header={<div className="w-full h-full bg-[url('/harness-sizing-card.png')] bg-cover bg-center opacity-60 hover:opacity-100 transition-opacity"></div>}
        />
        <BentoGridItem
          title="Lifetime Cost Calculator"
          description="Estimate the total financial commitment from puppyhood to senior years."
          icon={<DollarSign className="w-6 h-6" />}
          className="md:col-span-1"
          href="/lifetime-cost"
          header={
            <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff5f1f_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              <div className="relative">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"
                ></motion.div>
                <DollarSign className="w-16 h-16 text-primary relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          }
        />
      </BentoGrid>
    </div>
  );
}
