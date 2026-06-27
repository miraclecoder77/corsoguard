import { Metadata } from "next";
import { Calculator, ArrowLeft } from "lucide-react";
import Link from "next/link";
import GrowthPredictorClient from "./GrowthPredictorClient";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
    title: "Cane Corso Growth Predictor & Weight Calculator",
    description: "Predict your Cane Corso's adult weight with our giant-breed growth curve calculator. Includes a month-by-month reference table for male and female Corsos.",
    keywords: ["cane corso weight calculator", "cane corso growth predictor", "cane corso adult weight", "giant breed growth chart"],
    alternates: {
        canonical: "https://www.corsoguard.com/growth",
    },
};

const growthFAQs = [
    {
        question: "How much does a full-grown Cane Corso weigh?",
        answer: "A fully mature male Cane Corso typically weighs 100–130 lbs (45–59 kg). Females generally weigh 85–110 lbs (38–50 kg). Both sexes continue to fill out with muscle mass until age 2.5–3 years, even after reaching their full height at 12–18 months."
    },
    {
        question: "At what age is a Cane Corso fully grown?",
        answer: "Most Cane Corsos reach their full height by 12–18 months, but they continue to gain significant muscle mass and fill out until they reach full physical maturity at 2.5 to 3 years old. Giant breeds mature more slowly than medium or small breeds."
    },
    {
        question: "How accurate is the Cane Corso growth predictor?",
        answer: "Our predictor uses giant-breed-specific weight curves calibrated against Cane Corso developmental data to provide an estimate within +/- 5–8% for healthy puppies entered at key developmental milestones (3, 6, and 9 months). Individual variation due to genetics and sex can affect final size."
    },
    {
        question: "Why does my Cane Corso look skinny at 6 months?",
        answer: "Cane Corsos go through a 'stretch phase' between 5 and 9 months where height increases faster than weight, making them look lanky or disproportionate. This is a normal developmental stage, not a sign of underfeeding. Use the Body Condition Score — not appearance alone — to assess whether intake is correct."
    }
];

// Static Cane Corso weight reference by age (male and female)
// This table is intentionally server-rendered for crawlability.
const weightData = [
    { age: "2 months", male: "15–25 lbs (7–11 kg)", female: "13–20 lbs (6–9 kg)" },
    { age: "3 months", male: "28–40 lbs (13–18 kg)", female: "24–35 lbs (11–16 kg)" },
    { age: "4 months", male: "40–55 lbs (18–25 kg)", female: "34–46 lbs (15–21 kg)" },
    { age: "5 months", male: "52–68 lbs (24–31 kg)", female: "44–58 lbs (20–26 kg)" },
    { age: "6 months", male: "60–80 lbs (27–36 kg)", female: "52–68 lbs (24–31 kg)" },
    { age: "8 months", male: "75–95 lbs (34–43 kg)", female: "64–82 lbs (29–37 kg)" },
    { age: "10 months", male: "85–108 lbs (39–49 kg)", female: "72–92 lbs (33–42 kg)" },
    { age: "12 months", male: "95–115 lbs (43–52 kg)", female: "80–100 lbs (36–45 kg)" },
    { age: "18 months", male: "100–125 lbs (45–57 kg)", female: "85–108 lbs (39–49 kg)" },
    { age: "24 months (adult)", male: "100–130 lbs (45–59 kg)", female: "85–110 lbs (39–50 kg)" },
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
                    Cane Corso Scale &amp; Growth Predictor
                </h1>
                <p className="text-neutral-400">
                    Enter your Cane Corso&apos;s stats to predict their adult weight and generate a customized tactical nutrition protocol using our proprietary growth algorithms.
                </p>
            </div>

            {/* Static weight reference table — server-rendered for SEO and AI crawlers */}
            <section className="mb-12 p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl" aria-labelledby="weight-table-heading">
                <h2 id="weight-table-heading" className="text-xl font-bold text-white mb-2">Cane Corso Average Weight by Age (Reference Table)</h2>
                <p className="text-neutral-400 text-sm mb-4">
                    Use the interactive predictor below for a personalised estimate, or reference this table for breed-standard weight ranges by age.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-neutral-300 border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-primary text-xs uppercase tracking-widest">
                                <th className="py-2 pr-4 font-bold">Age</th>
                                <th className="py-2 pr-4 font-bold">Male</th>
                                <th className="py-2 font-bold">Female</th>
                            </tr>
                        </thead>
                        <tbody>
                            {weightData.map((row, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="py-2 pr-4 font-medium text-white">{row.age}</td>
                                    <td className="py-2 pr-4">{row.male}</td>
                                    <td className="py-2">{row.female}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-neutral-500 mt-3">
                    * Ranges reflect healthy individuals from typical breeding lines. Exceptional working or show lines may exceed these ranges. 
                    <Link href="/growth/methodology" className="text-primary hover:underline ml-1">How is this data calculated? →</Link>
                </p>
            </section>

            <GrowthPredictorClient />
            
            <div className="mt-16 space-y-8 border-t border-white/10 pt-16">
                <h2 className="text-3xl font-bold text-white mb-6">Related Guides</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/blog/cane-corso-growth-stages-guide" className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-primary/30 transition block">
                        <h4 className="text-primary font-bold mb-2">Cane Corso Growth Stages</h4>
                        <p className="text-sm text-neutral-400">Month-by-month Cane Corso growth guide. Learn the awkward stretch phase, deceptive plateau, and when Corsos fully fill out.</p>
                    </Link>
                    <Link href="/blog/cane-corso-feeding-chart-by-age-weight" className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-primary/30 transition block">
                        <h4 className="text-primary font-bold mb-2">Cane Corso Feeding Chart</h4>
                        <p className="text-sm text-neutral-400">Month-by-month feeding amounts, meal frequency, and calcium ratios for giant-breed puppies through adulthood.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

