import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { Shield, Calculator, CheckSquare, BookOpen, Scaling, Clock, DollarSign } from "lucide-react";
import AdSenseUnit from "@/components/AdSenseUnit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Predictor & Tactical Dashboard",
  description: "Access the most accurate Cane Corso growth predictor, socialization protocols, and tactical gear recommendations.",
};

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
            <div className="w-full h-full bg-[url('/age-converter-card.jpg')] bg-cover bg-center opacity-60 hover:opacity-100 transition-opacity"></div>
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
            <div className="w-full h-full bg-[url('/cost-calculator-card.jpg')] bg-cover bg-center opacity-60 hover:opacity-100 transition-opacity"></div>
          }
        />
      </BentoGrid>
    </div>
  );
}
