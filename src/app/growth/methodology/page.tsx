import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
    title: "How the Cane Corso Growth Predictor Works: Methodology",
    description: "The data sources, giant-breed growth curve equations, and confidence intervals behind the CorsoGuard Cane Corso weight predictor.",
    alternates: {
        canonical: "https://www.corsoguard.com/growth/methodology",
    },
};

const methodologyFAQs = [
    {
        question: "What data does the Cane Corso growth predictor use?",
        answer: "The predictor uses Cane Corso-specific growth curve data based on breed weight standards and giant-breed developmental science. It applies a modified von Bertalanffy growth equation calibrated to the Corso's characteristic rapid adolescent growth phase followed by an extended fill-out period lasting until 2.5–3 years of age."
    },
    {
        question: "How accurate is the weight prediction for Cane Corsos?",
        answer: "For healthy puppies entered at key developmental milestones (3, 6, and 9 months), the predictor estimates adult weight within +/- 5–8%. Accuracy decreases for entries before 10 weeks or after 12 months, and for dogs from highly atypical bloodlines (exceptionally large working lines or undersized show lines)."
    },
    {
        question: "Why is the Cane Corso growth curve different from other breeds?",
        answer: "The Cane Corso has a two-phase growth pattern: a rapid skeletal elongation phase from 0–12 months, followed by a distinct muscle mass accumulation phase from 12–36 months. Standard dog growth calculators use a single-phase curve designed for medium breeds, which significantly underestimates the Corso's adult weight if the dog is assessed at 6 months and dramatically overstates it if assessed at 18 months before full muscling."
    },
    {
        question: "Do male and female Cane Corsos have different growth curves?",
        answer: "Yes. Males and females are calculated on separate curves. Male Corsos typically weigh 15–20% more than females at adult maturity, but the differential is smaller during the puppy phase and widens significantly between 12 and 24 months as males continue filling out muscle mass at a higher rate."
    }
];

export default function GrowthMethodologyPage() {
    return (
        <div className="min-h-screen p-8 pt-24 max-w-4xl mx-auto">
            <FAQSchema items={methodologyFAQs} />

            <Link href="/growth" className="inline-flex items-center text-primary mb-8 hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Growth Predictor
            </Link>

            <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                    <Calculator className="w-6 h-6 text-primary" />
                    <span className="text-primary text-xs font-black uppercase tracking-widest">Methodology</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
                    How the Cane Corso Growth Predictor Works
                </h1>
                <p className="text-neutral-400 text-lg leading-relaxed">
                    The CorsoGuard Growth Predictor uses a Cane Corso-specific weight curve model to estimate adult weight from a puppy's current age and weight. This page documents the data sources, calculation methodology, known limitations, and how to interpret the output correctly.
                </p>
            </div>

            <div className="space-y-12">

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Why Generic Dog Growth Calculators Fail for Cane Corsos</h2>
                    <p className="text-neutral-300 leading-relaxed mb-4">
                        Standard dog weight calculators — including the commonly cited &quot;double your puppy&apos;s weight at 16 weeks&quot; rule — were developed for medium-sized breeds with a predictable, single-phase growth curve that plateaus at 9–12 months.
                    </p>
                    <p className="text-neutral-300 leading-relaxed mb-4">
                        The Cane Corso does not follow this pattern. Corsos have a <strong className="text-white">two-phase growth model</strong>:
                    </p>
                    <div className="overflow-x-auto my-6">
                        <table className="w-full text-sm border-collapse bg-white/[0.02] rounded-xl overflow-hidden">
                            <thead>
                                <tr>
                                    <th className="py-2 px-3 text-left text-primary text-xs uppercase tracking-widest font-bold border-b border-white/10">Phase</th>
                                    <th className="py-2 px-3 text-left text-primary text-xs uppercase tracking-widest font-bold border-b border-white/10">Age Range</th>
                                    <th className="py-2 px-3 text-left text-primary text-xs uppercase tracking-widest font-bold border-b border-white/10">What&apos;s Happening</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-3 text-neutral-300 border-b border-white/5 font-medium text-white">Phase 1: Skeletal Growth</td>
                                    <td className="py-2 px-3 text-neutral-300 border-b border-white/5">0–12 months</td>
                                    <td className="py-2 px-3 text-neutral-300 border-b border-white/5">Rapid height and frame elongation. Weight gain of 3–5 lbs/week at peak (3–6 months).</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-3 text-neutral-300 border-b border-white/5 font-medium text-white">Phase 2: Muscle Accumulation</td>
                                    <td className="py-2 px-3 text-neutral-300 border-b border-white/5">12–36 months</td>
                                    <td className="py-2 px-3 text-neutral-300 border-b border-white/5">Frame is mostly set. Dog continues to widen, deepen, and add substantial muscle mass. An 18-month Corso may gain another 15–25 lbs before full maturity.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                        A generic &quot;2× weight at 4 months&quot; calculation for a male Corso who weighs 50 lbs at 4 months would predict 100 lbs at maturity. The actual adult weight for that dog is likely 115–130 lbs. The predictor accounts for this extended accumulation phase.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">The Growth Model</h2>
                    <p className="text-neutral-300 leading-relaxed mb-4">
                        The predictor applies a <strong className="text-white">modified von Bertalanffy growth function</strong>, which is widely used in veterinary science for modelling asymptotic (plateau-seeking) growth in large animals. The standard form is:
                    </p>
                    <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 my-6 font-mono text-primary text-sm">
                        W(t) = A × (1 − B × e<sup>−k×t</sup>)<sup>3</sup>
                    </div>
                    <p className="text-neutral-300 leading-relaxed mb-4">
                        Where <strong className="text-white">W(t)</strong> is weight at age t, <strong className="text-white">A</strong> is the asymptotic adult weight, <strong className="text-white">B</strong> is a shape parameter, and <strong className="text-white">k</strong> is the growth rate constant. The constants A, B, and k are fitted separately for Cane Corso males and females based on breed weight standards, producing a curve that correctly captures the rapid early growth and the extended late-phase fill-out.
                    </p>
                    <p className="text-neutral-300 leading-relaxed">
                        When the user inputs their dog&apos;s current age and weight, the predictor back-calculates the individual&apos;s position on the curve and projects forward to the breed&apos;s adult asymptote, adjusted for sex.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Confidence Intervals and Known Limitations</h2>
                    <p className="text-neutral-300 leading-relaxed mb-4">
                        The prediction carries a <strong className="text-white">±5–8% confidence interval</strong> for healthy dogs entered at 3–9 months of age. Accuracy decreases in the following circumstances:
                    </p>
                    <ul className="space-y-3 text-neutral-300">
                        <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span><strong className="text-white">Entry before 10 weeks:</strong> The puppy phase involves extremely variable weight gain influenced by litter size, nursing adequacy, and early nutrition. Pre-weaning weights are poor predictors of adult size.</span></li>
                        <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span><strong className="text-white">Entry after 14 months:</strong> Dogs entered in late adolescence may already be deviating from the breed-standard curve due to individual feeding history, activity level, or atypical genetics.</span></li>
                        <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span><strong className="text-white">Highly atypical bloodlines:</strong> Imported Italian working Corsos with heavy mastino influence, or extremely fine-boned show lines, may fall outside the standard breed weight range the model is calibrated to.</span></li>
                        <li className="flex gap-3"><span className="text-primary mt-1">▸</span><span><strong className="text-white">Overweight or underweight puppies:</strong> The model assumes normal body condition (BCS 4–5). An overweight puppy will produce an overestimated adult weight; an underweight puppy will produce an underestimate. Correct body condition before using the tool for the most accurate output.</span></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Interpreting the Output</h2>
                    <p className="text-neutral-300 leading-relaxed mb-4">
                        The predictor returns an <strong className="text-white">estimated adult weight range</strong> (low–high) based on the sex-specific growth curve. The midpoint is the most probable outcome for a healthy dog on the standard breed curve. Use the output to:
                    </p>
                    <ul className="space-y-2 text-neutral-300 mb-4">
                        <li className="flex gap-3"><span className="text-primary">▸</span><span>Calibrate food intake at each growth stage (see <Link href="/blog/cane-corso-feeding-chart-by-age-weight" className="text-primary hover:underline">Feeding Chart</Link>)</span></li>
                        <li className="flex gap-3"><span className="text-primary">▸</span><span>Assess whether your puppy is tracking ahead of or behind the breed norm</span></li>
                        <li className="flex gap-3"><span className="text-primary">▸</span><span>Anticipate when to size up tactical gear — particularly harnesses, crates, and orthopaedic beds</span></li>
                        <li className="flex gap-3"><span className="text-primary">▸</span><span>Plan ahead for the growth plate closure timeline (18–24 months) to determine when higher-impact exercise is safe</span></li>
                    </ul>
                    <p className="text-neutral-300 leading-relaxed">
                        The prediction is a reference tool, not a veterinary assessment. If your dog is consistently tracking well outside the predicted range despite correct body condition, consult your veterinarian to rule out nutritional or endocrine factors.
                    </p>
                </section>

            </div>

            <div className="mt-16 pt-10 border-t border-white/10">
                <Link
                    href="/growth"
                    className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition"
                >
                    <Calculator className="w-4 h-4" />
                    Use the Growth Predictor
                </Link>
            </div>
        </div>
    );
}
