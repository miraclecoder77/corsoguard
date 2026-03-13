import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { Shield, Calculator, CheckSquare, BookOpen, Scaling, Clock, DollarSign } from "lucide-react";
import AdSenseUnit from "@/components/AdSenseUnit";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cane Corso Growth Predictor & Tactical Dashboard | CorsoGuard",
  description: "The most accurate Cane Corso growth predictor, professional socialization protocols, and tactical gear recommendations for large breeds.",
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
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/baby-corso.png" 
                alt="Puppy Cane Corso" 
                fill 
                priority
                className="object-cover object-[center_38%] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          }
          className="md:col-span-2"
          href="/growth"
        />
        <BentoGridItem
          title="100-Item Checklist"
          description="Bulletproof your Corso with our comprehensive socialization protocol."
          icon={<CheckSquare className="w-6 h-6" />}
          href="/checklist"
          header={
            <div className="relative w-full h-full overflow-hidden">
               <Image 
                src="/checklist-card.png" 
                alt="Socialization Checklist" 
                fill 
                priority
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          }
        />
        <BentoGridItem
          title="Human Age Converter"
          description="See exactly how old your Corso is in human years using our giant-breed aging formula."
          icon={<Clock className="w-6 h-6" />}
          className="md:col-span-1"
          href="/age-converter"
          header={
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/age-converter-card.jpg" 
                alt="Human Age Converter" 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          }
        />
        <BentoGridItem
          title="Ultimate Cane Corso Guides"
          description="Expert tips on behavior, health, and training for protective owners. E-E-A-T backed advice."
          icon={<BookOpen className="w-6 h-6" />}
          className="md:col-span-1"
          href="/blog"
          header={
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/breed-guide-card.png" 
                alt="Breed Guides" 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          }
        />

        <AdSenseUnit slotId="dash-native-1" type="native" className="md:col-span-1 row-span-1 h-full min-h-[18rem]" />

        <BentoGridItem
          title="Harness Sizing"
          description="Find the perfect tactical gear based on precise weight class measurements."
          icon={<Scaling className="w-6 h-6" />}
          className="md:col-span-1"
          href="/harness"
          header={
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/harness-sizing-card.png" 
                alt="Harness Sizing" 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          }
        />
        <BentoGridItem
          title="Lifetime Cost Calculator"
          description="Estimate the total financial commitment from puppyhood to senior years."
          icon={<DollarSign className="w-6 h-6" />}
          className="md:col-span-1"
          href="/lifetime-cost"
          header={
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/cost-calculator-card.jpg" 
                alt="Cost Calculator" 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          }
        />
      </BentoGrid>
    </div>
  );
}
