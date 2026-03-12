import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Affiliate & FTC Disclosure",
    description: "Transparency regarding our affiliate relationships and how we support CorsoGuard.",
};
export default function DisclosurePage() {
    return (
        <div className="min-h-screen p-8 pt-24 max-w-3xl mx-auto prose prose-invert">
            <h1 className="text-4xl font-extrabold text-white mb-6">Affiliate & FTC Disclosure</h1>
            <p className="text-neutral-400">Last updated: {new Date().toLocaleDateString()}</p>

            <p className="text-neutral-300 mt-6">
                CorsoGuard is committed to transparency. In compliance with the Federal Trade Commission (FTC) guidelines, please assume the following about links and posts on this site:
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Amazon Associates Program</h2>
            <p className="text-neutral-300">
                CorsoGuard is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What does this mean?</h2>
            <p className="text-neutral-300">
                When you click on a product link (such as our recommended tactical harnesses) and make a purchase, we may receive a small commission at no additional cost to you. These commissions help support the maintenance and development of CorsoGuard's free tools like the Growth Predictor and Socialization Checklist.
            </p>

            <p className="text-neutral-300 mt-8 font-bold">
                We only recommend gear that meets our strict tactical and durability standards for Cane Corsos.
            </p>
        </div>
    );
}
