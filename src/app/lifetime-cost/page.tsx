import { 
    Calculator, 
    ArrowLeft 
} from "lucide-react";
import Link from "next/link";
import AdSenseUnit from "@/components/AdSenseUnit";
import ToolSchema from "@/components/ToolSchema";
import { Metadata } from "next";
import LifetimeCostClient from "./LifetimeCostClient";

export const metadata: Metadata = {
    title: "Cane Corso Lifetime Cost Calculator | Ownership Budget Guide",
    description: "Calculate the total lifetime cost of owning a Cane Corso. Includes initial purchase, premium nutrition, veterinary care, and insurance budgeting.",
    keywords: ["cane corso cost", "dog ownership budget", "giant breed expenses", "pet cost calculator"],
    alternates: {
        canonical: "https://corsoguard.com/lifetime-cost",
    },
};

export default function LifetimeCostCalculator() {
    return (
        <div className="min-h-screen p-8 pt-24 max-w-6xl mx-auto">
            <ToolSchema 
                name="Cane Corso Lifetime Cost Calculator"
                description="Comprehensive financial planning tool for Cane Corso owners to estimate investment from puppyhood to senior years."
                url="/lifetime-cost"
                category="FinanceApplication"
                features={["Regional cost adjustments", "Insurance impact modeling", "Premium nutrition budgeting", "First-year peak analysis"]}
            />
            
            <div className="flex justify-between items-center mb-8">
                <Link href="/" className="inline-flex items-center text-primary hover:underline">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                </Link>
            </div>

            <div className="mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white flex items-center">
                    <Calculator className="w-8 h-8 mr-3 text-primary" />
                    Lifetime Cost Calculator
                </h1>
                <p className="text-neutral-400 max-w-2xl">
                    Budget for the long haul. Calculate the true financial commitment of owning a Cane Corso from puppyhood through their senior years.
                </p>
            </div>

            <LifetimeCostClient />

            {/* SEO Content Section */}
            <div className="mt-20 space-y-16">
                <section className="max-w-4xl">
                    <h2 className="text-4xl font-extrabold text-white mb-8">The True Cost of a Cane Corso in 2026</h2>
                    <div className="prose prose-invert max-w-none text-neutral-400 leading-relaxed space-y-6 text-lg">
                        <p>
                            Owning a Cane Corso is a major financial responsibility. Unlike smaller breeds, Every expense for a Corso is scaled up. From the amount of food they consume daily to the cost of professional training required to manage a 120-pound guardian.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="text-primary font-bold text-xl mb-4">Initial Year Expenses</h3>
                                <p className="text-sm">The first year is usually the most expensive. Expect to pay for the puppy itself ($1,500 - $4,000), a series of vaccinations, spay/neuter surgery, and high-quality tactical gear that is built to last.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="text-primary font-bold text-xl mb-4">Recurring Annual Costs</h3>
                                <p className="text-sm">Once settled, your main costs will be high-protein food and preventative healthcare. A Cane Corso can eat 4-6 cups of premium kibble a day, which can easily total over $150 per month.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Regional Cost Differences (GEO Insights)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { region: "United States", note: "Highest veterinary and insurance premiums. Focus on pet insurance early." },
                            { region: "United Kingdom", note: "Strict regulations on large breeds. Factors in local council fees and specific training." },
                            { region: "European Union", note: "Varies by country; generally lower insurance but specialized high-quality food costs more." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-primary/30 transition">
                                <h4 className="text-primary font-bold mb-2">{item.region}</h4>
                                <p className="text-sm text-neutral-400">{item.note}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-8">
                    <AdSenseUnit slotId="cost-bottom-native" type="native" />
                </div>
            </div>
        </div>
    );
}
