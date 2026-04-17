import { Metadata } from "next";
import { Calculator, ArrowLeft } from "lucide-react";
import Link from "next/link";
import GrowthPredictorClient from "./GrowthPredictorClient";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
    title: "Cane Corso Scale: Growth Predictor & Weight Calculator",
    description: "Check where your dog ranks on the Cane Corso Scale. Predict your Cane Corso's adult weight with our specialized giant-breed growth curve calculator.",
    keywords: ["corso scale", "cane corso scale", "cane corso weight calculator", "dog growth predictor", "giant breed weight chart"],
    alternates: {
        canonical: "https://corsoguard.com/growth",
    },
};

const growthFAQs = [
    {
        question: "How accurate is the Cane Corso growth predictor?",
        answer: "Our predictor uses giant-breed specific weight curves and historical data to provide an estimate with +/- 5% accuracy for healthy puppies when entered at key developmental milestones (3, 6, and 9 months)."
    },
    {
        question: "At what age is a Cane Corso fully grown?",
        answer: "Most Cane Corsos reach their full height by 12-18 months, but they continue to 'fill out' and gain significant muscle mass until they reach full physical maturity at 2.5 to 3 years old."
    },
    {
        question: "Why does my Cane Corso need a tactical harness?",
        answer: "Tactical harnesses provide superior weight distribution, reinforced attachment points for large-breed strength, and secondary control handles necessary for managing high-drive giant breeds safely."
    }
];

export default function GrowthPage() {
    return (
        <div className="min-h-screen p-8 pt-24 max-w-4xl mx-auto">
            <FAQSchema items={growthFAQs} />
            <ToolSchema 
                name="Cane Corso Growth & Nutrition Predictor"
                description="Proprietary algorithm to predict adult weight and generate customized nutrition protocols for giant breeds."
                url="/growth"
                category="HealthApplication"
                features={["Giant-breed growth curves", "Tactical nutrition calculation", "Weight-based gear recommendations", "Developmental milestones"]}
            />
            
            <Link href="/" className="inline-flex items-center text-primary mb-8 hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
            </Link>

            <div className="mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white flex items-center">
                    <Calculator className="w-8 h-8 mr-3 text-primary" />
                    Cane Corso Scale & Growth Predictor
                </h1>
                <p className="text-neutral-400">
                    Enter your Cane Corso's stats to predict their adult weight and generate a customized tactical nutrition protocol using our proprietary growth algorithms.
                </p>
            </div>

            <GrowthPredictorClient />
        </div>
    );
}
