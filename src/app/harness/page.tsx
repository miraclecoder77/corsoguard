import { ArrowLeft, Scaling, ShieldCheck, Ruler, HelpCircle, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

import HarnessCalculator from "@/components/HarnessCalculator";

export const metadata: Metadata = {
    title: "Cane Corso Harness Size Calculator | Tactical Gear Guide",
    description: "Use our tactical harness sizing calculator for your Cane Corso. Get precise measurements for heavy-duty K9 gear based on weight class and adult growth predictions.",
    keywords: ["Cane Corso harness size chart", "tactical dog harness calculator", "heavy duty K9 gear", "dog harness weight guide"],
    openGraph: {
        title: "Cane Corso Tactical Harness Sizing Guide",
        description: "Exact size recommendations for Cane Corso tactical harnesses. Bulletproof your gear selection.",
        type: "website",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to size a Cane Corso for a Tactical Harness",
    "description": "A guide to selecting the correct heavy-duty harness size for a Cane Corso based on weight and developmental stage.",
    "step": [
        {
            "@type": "HowToStep",
            "text": "Identify your dog's current weight in pounds."
        },
        {
            "@type": "HowToStep",
            "text": "Consult the weight-to-size mapping chart (M, L, XL, XXL)."
        },
        {
            "@type": "HowToStep",
            "text": "Select a harness with ballistic nylon and reinforced stitching for giant breeds."
        }
    ]
};

export default function HarnessSizing() {
    return (
        <div className="min-h-screen p-8 pt-24 max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-primary mb-8 hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
            </Link>

            <div className="mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white flex items-center">
                    <Scaling className="w-8 h-8 mr-3 text-primary" />
                    Harness Sizing & Tactical Gear
                </h1>
                <p className="text-neutral-400">
                    Find the perfect tactical gear based on precise weight class measurements for your Cane Corso.
                </p>
            </div>

            <HarnessCalculator />


            {/* SEO Content Section */}
            <div className="mt-20 space-y-16 border-t border-white/10 pt-16">
                
                {/* Size Chart Table */}
                <section>
                    <div className="flex items-center mb-6">
                        <Info className="w-6 h-6 mr-3 text-primary" />
                        <h2 className="text-2xl font-bold text-white">Cane Corso Harness Size Chart</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-white/5">
                                    <th className="p-4 border-b border-white/10 text-neutral-300 font-semibold text-sm uppercase tracking-wider">Weight Class</th>
                                    <th className="p-4 border-b border-white/10 text-neutral-300 font-semibold text-sm uppercase tracking-wider">Harness Size</th>
                                    <th className="p-4 border-b border-white/10 text-neutral-300 font-semibold text-sm uppercase tracking-wider">Suitability</th>
                                </tr>
                            </thead>
                            <tbody className="text-neutral-400">
                                <tr>
                                    <td className="p-4 border-b border-white/5 font-medium text-white">Under 85 lbs</td>
                                    <td className="p-4 border-b border-white/5">Medium (M)</td>
                                    <td className="p-4 border-b border-white/5">Puppies & Small Females</td>
                                </tr>
                                <tr className="bg-white/[0.01]">
                                    <td className="p-4 border-b border-white/5 font-medium text-white">85 - 95 lbs</td>
                                    <td className="p-4 border-b border-white/5">Large (L)</td>
                                    <td className="p-4 border-b border-white/5">Young Adults / Lean Females</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-white/5 font-medium text-white">95 - 115 lbs</td>
                                    <td className="p-4 border-b border-white/5">Extra Large (XL)</td>
                                    <td className="p-4 border-b border-white/5">Standard Adult Males</td>
                                </tr>
                                <tr className="bg-white/[0.01]">
                                    <td className="p-4 border-b border-white/5 font-medium text-white">115+ lbs</td>
                                    <td className="p-4 border-b border-white/5">Double XL (XXL)</td>
                                    <td className="p-4 border-b border-white/5">Giant/Working Line Males</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* How to Measure Section */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center mb-6">
                            <Ruler className="w-6 h-6 mr-3 text-primary" />
                            <h2 className="text-2xl font-bold text-white">How to Measure Your Corso</h2>
                        </div>
                        <div className="space-y-4 text-neutral-400">
                            <p>For a tactical harness to be effective, precision is key. Focus on these three critical measurements:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong className="text-white">Chest Girth:</strong> Measure around the widest part of the ribcage, approximately 2-3 inches behind the front legs.</li>
                                <li><strong className="text-white">Neck Base:</strong> Measure around the very base of the neck, where a collar would naturally sit.</li>
                                <li><strong className="text-white">Back Length:</strong> From the base of the neck (scapula) to about 2 inches before the tail base.</li>
                            </ul>
                            <p className="text-sm italic border-l-2 border-primary pl-4 py-1 mt-6">Pro Tip: If your Corso is between sizes, always size up. You can adjust straps for a tight fit, but a small harness will chafe the armpits.</p>
                        </div>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                        <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Tactical-Grade Durability</h3>
                        <p className="text-neutral-400 text-sm">Our recommendations focus on load-bearing D-rings and 1000D ballistic nylon to ensure safety for 100lb+ power breeds.</p>
                    </div>
                </section>

                {/* FAQ Section */}
                <section>
                    <div className="flex items-center mb-8">
                        <HelpCircle className="w-6 h-6 mr-3 text-primary" />
                        <h2 className="text-2xl font-bold text-white">Tactical Gear FAQ</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                            <h4 className="text-white font-bold mb-2">When should I switch to an adult harness?</h4>
                            <p className="text-neutral-400 text-sm text-balance">Wait until at least 12 months for a heavy tactical harness. Young pups have developing joints that shouldn't be restricted by heavy gear.</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                            <h4 className="text-white font-bold mb-2">Is a front-clip or back-clip better?</h4>
                            <p className="text-neutral-400 text-sm text-balance">For training to "stop pulling," use a front-clip. For working, hiking, or protection training, use the heavy-duty back-clip.</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                            <h4 className="text-white font-bold mb-2">Why 1000D Nylon?</h4>
                            <p className="text-neutral-400 text-sm text-balance">Standard stores use 600D. 1000D provides the tensile strength required to handle a Cane Corso's explosive lunge force.</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                            <h4 className="text-white font-bold mb-2">Can I use one harness for growth?</h4>
                            <p className="text-neutral-400 text-sm text-balance">Mostly no. A Corso triples in size in their first 6 months. Plan on buying a puppy harness, then a final adult harness around 14-18 months.</p>
                        </div>
                    </div>
                </section>
            </div>
            
            <Script
                id="harness-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}
