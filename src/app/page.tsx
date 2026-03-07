"use client";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { useRouter } from "next/navigation";
import { Shield, Calculator, CheckSquare, BookOpen, Scaling } from "lucide-react";
import AdSenseUnit from "@/components/AdSenseUnit";

export default function Home() {
  const router = useRouter();

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
          onClick={() => router.push("/growth")}
        />
        <BentoGridItem
          title="100-Item Checklist"
          description="Bulletproof your Corso with our comprehensive socialization protocol."
          icon={<CheckSquare className="w-6 h-6" />}
          onClick={() => router.push("/checklist")}
          header={<div className="w-full h-full bg-[url('/checklist-card.png')] bg-cover bg-center opacity-60 hover:opacity-100 transition-opacity"></div>}
        />
        <BentoGridItem
          title="Breed Guides"
          description="Expert E-E-A-T guides on Cane Corso behavior, health, and training."
          icon={<BookOpen className="w-6 h-6" />}
          className="md:col-span-1"
          onClick={() => router.push("/blog")}
          header={<div className="w-full h-full bg-[url('/breed-guide-card.png')] bg-cover bg-center opacity-60 hover:opacity-100 transition-opacity"></div>}
        />

        <AdSenseUnit slotId="dash-native-1" type="native" className="md:col-span-1 row-span-1 h-full min-h-[18rem]" />

        <BentoGridItem
          title="Harness Sizing"
          description="Find the perfect tactical gear based on precise weight class measurements."
          icon={<Scaling className="w-6 h-6" />}
          className="md:col-span-1"
          onClick={() => router.push("/harness")}
          header={<div className="w-full h-full bg-[url('/harness-sizing-card.png')] bg-cover bg-center opacity-60 hover:opacity-100 transition-opacity"></div>}
        />
      </BentoGrid>
    </div>
  );
}
