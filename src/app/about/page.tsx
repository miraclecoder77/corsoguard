import { Shield, Award, Activity } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Our E-E-A-T Commitment",
    description: "Learn about the expertise and methodologies behind CorsoGuard's tactical Cane Corso tools.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen p-8 pt-24 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="text-5xl font-extrabold text-white mb-4">About CorsoGuard</h1>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                    Built by Cane Corso experts, for Cane Corso owners. We combine tactical methodology with canine behavioral science.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Our E-E-A-T Commitment</h2>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                        <strong>Experience:</strong> Over two decades of combined experience in handling, training, and working with large mastiff breeds, specifically the Cane Corso.
                    </p>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                        <strong>Expertise:</strong> Our socialization protocol is built upon modern developmental canine psychology, specifically tailored for guarding breeds that require structural desensitization.
                    </p>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                        <strong>Authoritativeness:</strong> We consult with certified K9 behaviorists and veterinary nutritionists to ensure our growth and gear calculations are grounded in reality, not guesswork.
                    </p>
                    <p className="text-neutral-300 leading-relaxed">
                        <strong>Trust:</strong> We clearly disclose our affiliations, ensure your data stays on your device, and never compromise the safety of your dog for a quick buck.
                    </p>
                </div>
                <div className="bg-black/40 border border-white/10 rounded-2xl p-8 flex flex-col justify-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Award className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-bold text-white">Certified Methodologies</div>
                            <div className="text-sm text-neutral-400">Based on working-dog behavioral standards.</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Activity className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-bold text-white">Precision Algorithms</div>
                            <div className="text-sm text-neutral-400">Our predictors are regularly audited against real growth curves.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
