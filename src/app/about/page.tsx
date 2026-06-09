import { Shield, Award, Activity } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Our E-E-A-T Commitment",
    description: "Meet the Cane Corso handlers behind CorsoGuard. Our tools are built on real breed experience, canine science, and vet-backed data.",
    alternates: {
        canonical: "https://corsoguard.com/about",
    },
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
                    <h2 className="text-3xl font-bold text-white mb-4">Meet The CorsoGuard Team</h2>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                        We are the CorsoGuard Editorial Team—a collective of passionate Cane Corso owners, experienced handlers, and researchers. We founded CorsoGuard because we were tired of generic dog advice that didn't apply to the unique needs, growth patterns, and drive of the Cane Corso.
                    </p>
                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Our E-E-A-T Commitment</h3>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                        <strong>Experience:</strong> Decades of hands-on experience training, socializing, and managing high-drive Corsos in family and working environments.
                    </p>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                        <strong>Expertise:</strong> Our tools are built on established canine developmental psychology and large-breed orthopedic science.
                    </p>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                        <strong>Authoritativeness:</strong> We consult with veterinary nutritionists to ensure our growth models reflect healthy, sustainable development curves.
                    </p>
                    <p className="text-neutral-300 leading-relaxed">
                        <strong>Trust:</strong> No sponsored bias in our gear reviews, strict data privacy, and a commitment to breed welfare over quick fixes.
                    </p>
                </div>
                <div className="bg-black/40 border border-white/10 rounded-2xl p-8 flex flex-col justify-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Award className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-bold text-white">Experienced Handlers</div>
                            <div className="text-sm text-neutral-400">Decades of combined breed experience.</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Activity className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-bold text-white">Data-Driven Models</div>
                            <div className="text-sm text-neutral-400">Algorithms audited against real growth curves.</div>
                        </div>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "CorsoGuard Editorial Team",
                        "url": "https://corsoguard.com/about"
                    })
                }}
            />
        </div>
    );
}
