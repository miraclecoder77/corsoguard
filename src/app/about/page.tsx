import { Shield, Award, Activity, Mail, ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About CorsoGuard | Cane Corso Breed Resource",
    description: "CorsoGuard is built by experienced Cane Corso handlers. Learn who we are, why we built these tools, and how we approach breed-specific content.",
    alternates: {
        canonical: "https://www.corsoguard.com/about",
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen p-8 pt-24 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <Image src="/logo.png" alt="CorsoGuard Logo" width={80} height={80} className="w-20 h-20 object-contain mx-auto mb-6" />
                <h1 className="text-5xl font-extrabold text-white mb-4">About CorsoGuard</h1>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                    Built by Cane Corso handlers, for Cane Corso owners. We combine practical breed experience with canine developmental science to create tools that actually help.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Who We Are</h2>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                        CorsoGuard was founded by Cane Corso owners who grew frustrated with the generic large-breed advice that dominates dog information sites. Advice designed for a 40-lb Labrador is not the same advice a 120-lb working guardian breed needs  and applying it is how Corsos end up overweight, under-structured, and behaviourally mismanaged.
                    </p>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                        We focus exclusively on the Cane Corso. Our tools are built on established giant-breed developmental science, breed-specific orthopedic research, and hands-on experience managing Corsos through every stage from 8-week puppy to senior guardian.
                    </p>
                    <p className="text-neutral-300 leading-relaxed">
                        Everything on this site,the growth algorithm, the feeding data, the socialization protocol  is derived from sources we would trust for our own dogs, not from generic content farms.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-10 mb-4">Our Content Standards</h3>
                    <ul className="space-y-3 text-neutral-300">
                        <li className="flex gap-3">
                            <span className="text-primary mt-1">▸</span>
                            <span><strong className="text-white">Breed-specific or nothing.</strong> We do not publish generic large-breed content re-labelled as Cane Corso advice. Every article covers something specific to this breed&apos;s biology, behaviour, or care requirements.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-primary mt-1">▸</span>
                            <span><strong className="text-white">No sponsored reviews.</strong> Gear reviewed on this site is assessed for Cane Corso fit, durability under giant-breed use, and value. We have no paid placement agreements with manufacturers.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-primary mt-1">▸</span>
                            <span><strong className="text-white">Health content is conservative.</strong> For any health, nutrition, or veterinary guidance on this site, we recommend consulting your veterinarian before acting on it. Our content provides context and questions to ask, not a substitute for a vet relationship.</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-lg font-bold text-white mb-6">Our Expertise Areas</h3>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0 mt-0.5">
                                    <Award className="text-primary w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white">Giant-Breed Growth & Nutrition</div>
                                    <div className="text-sm text-neutral-400 mt-1">Calcium ratios, growth plate timelines, lean-growth protocols specific to dogs over 100 lbs.</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0 mt-0.5">
                                    <Activity className="text-primary w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white">Cane Corso Breed Health</div>
                                    <div className="text-sm text-neutral-400 mt-1">GDV/Bloat prevention, DCM screening, hip/elbow health management, and lifespan optimisation for this specific breed.</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0 mt-0.5">
                                    <Shield className="text-primary w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white">Guardian Breed Behaviour</div>
                                    <div className="text-sm text-neutral-400 mt-1">Socialisation protocols, handler authority development, and managing the Corso&apos;s protective instincts responsibly in family environments.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-lg font-bold text-white mb-4">Contact & Corrections</h3>
                        <p className="text-neutral-400 text-sm mb-5">
                            Found an error in our content? Have a question about a specific tool? We read every message and take corrections seriously.
                        </p>
                        <a
                            href="mailto:hello@corsoguard.com"
                            className="inline-flex items-center gap-2 text-primary hover:text-white transition font-medium text-sm"
                        >
                            <Mail className="w-4 h-4" />
                            hello@corsoguard.com
                        </a>
                    </div>
                </div>
            </div>

            {/* E-E-A-T Trust Signals */}
            <div className="border-t border-white/10 pt-12 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Transparency</h2>
                <div className="grid md:grid-cols-3 gap-6 text-sm text-neutral-400">
                    <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded-xl">
                        <div className="font-bold text-white mb-2">Affiliate Disclosure</div>
                        <p>Some gear links on this site use affiliate programs. This never influences which products we recommend — only products we would use for a Corso earn a mention. See our <Link href="/disclosure" className="text-primary hover:underline">full disclosure</Link>.</p>
                    </div>
                    <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded-xl">
                        <div className="font-bold text-white mb-2">Medical Disclaimer</div>
                        <p>Health and nutrition content on CorsoGuard is for educational purposes. It is not veterinary advice. Always consult a licensed veterinarian for your dog&apos;s specific health decisions.</p>
                    </div>
                    <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded-xl">
                        <div className="font-bold text-white mb-2">Content Updates</div>
                        <p>We review health and gear articles quarterly. Articles display a &quot;Last Updated&quot; date when they have been revised after initial publication. Outdated information is corrected, not silently archived.</p>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "CorsoGuard",
                        "url": "https://www.corsoguard.com",
                        "logo": "https://www.corsoguard.com/logo.png",
                        "description": "Breed-specific tools and guides for Cane Corso owners. Growth prediction, socialization protocols, health guides, and tactical gear advice.",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "hello@corsoguard.com",
                            "contactType": "editorial"
                        },
                        "sameAs": [
                            "https://twitter.com/corsoguard",
                            "https://instagram.com/corsoguard"
                        ],
                        "knowsAbout": [
                            "Cane Corso Breed Health",
                            "Giant Breed Nutrition",
                            "Canine Developmental Science",
                            "Working Dog Equipment"
                        ]
                    })
                }}
            />
        </div>
    );
}
