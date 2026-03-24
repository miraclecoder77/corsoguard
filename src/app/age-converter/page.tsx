import { ArrowLeft, Calculator } from "lucide-react";
import Link from "next/link";
import AdSenseUnit from "@/components/AdSenseUnit";
import ToolSchema from "@/components/ToolSchema";
import { Metadata } from "next";
import AgeConverterClient from "./AgeConverterClient";

export const metadata: Metadata = {
    title: "Cane Corso Human Age Calculator | Giant Breed Specific Formula",
    description: "Calculate your Cane Corso's human age using our scientifically accurate giant-breed formula. Compare development milestones with human life stages.",
    keywords: ["dog age calculator", "cane corso human age", "giant breed age formula", "large dog aging chart"],
    alternates: {
        canonical: "https://corsoguard.com/age-converter",
    },
};

export default function AgeConverter() {
    return (
        <div className="min-h-screen p-8 pt-24 max-w-4xl mx-auto">
            <ToolSchema 
                name="Cane Corso Human Age Calculator"
                description="Expert-grade giant breed aging protocol to convert dog years to human years with precision."
                url="/age-converter"
                category="HealthApplication"
                features={["Giant-breed specific scaling", "Real-time slider interface", "Life stage insights", "Scientific aging protocol"]}
            />
            
            <Link href="/" className="inline-flex items-center text-primary mb-8 hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
            </Link>

            <div className="mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white flex items-center">
                    <Calculator className="w-8 h-8 mr-3 text-primary" />
                    Human Age Converter
                </h1>
                <p className="text-neutral-400">
                    Discover how old your Cane Corso really is using our specialized giant-breed aging protocol.
                </p>
            </div>

            <AgeConverterClient />

            {/* SEO/GEO Content Section */}
            <div className="mt-16 space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">How Many Human Years is 1 Cane Corso Year?</h2>
                    <div className="prose prose-invert max-w-none text-neutral-400 leading-relaxed space-y-4">
                        <p>
                            The traditional "7 years for every 1 dog year" rule is a myth, especially for giant breeds like the Cane Corso. Large dogs age much more rapidly in their early years and reach senior status earlier than small breeds.
                        </p>
                        <p>
                            Our formula accurately reflects this curve:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                            <li><strong>The First Year:</strong> A Cane Corso puppy matures to roughly 15 human years in just 12 months.</li>
                            <li><strong>The Second Year:</strong> They add about 9 human years, reaching a young adult equivalent of 24 human years by their second birthday.</li>
                            <li><strong>Adult & Senior Years:</strong> Each additional year adds approximately 7 human years. A 7-year-old Cane Corso is equivalent to a 59-year-old human.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">Cane Corso Life Stages & Health</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { stage: "Adolescent (1-2 yrs)", advice: "Focus on joint protection as they fill out. Avoid high-impact jumps." },
                            { stage: "Adult (2-6 yrs)", advice: "Peak performance. Maintain lean muscle mass through tactical nutrition." },
                            { stage: "Senior (6+ yrs)", advice: "Monitor for hip dysplasia and organ health. Consider senior formulas." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-primary/30 transition">
                                <h4 className="text-primary font-bold mb-2">{item.stage}</h4>
                                <p className="text-sm text-neutral-400">{item.advice}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-8">
                    <AdSenseUnit slotId="age-bottom-native" type="native" />
                </div>
            </div>
        </div>
    );
}
