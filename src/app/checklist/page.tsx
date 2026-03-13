import { Metadata } from "next";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ChecklistClient from "./ChecklistClient";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
    title: "100-Item Cane Corso Socialization Checklist | CorsoGuard",
    description: "The ultimate tactical socialization protocol for Cane Corso puppies. 100 stimulus items to ensure a stable, confident, and balanced adult dog.",
    alternates: {
        canonical: "https://corsoguard.com/checklist",
    },
};

const checklistFAQs = [
    {
        question: "What is the best age to start socialization for a Cane Corso?",
        answer: "The critical socialization window for Cane Corso puppies is extremely short, typically peak between 3 and 16 weeks of age. Early, positive exposure is vital for this breed's long-term stability."
    },
    {
        question: "Is a Cane Corso good with other dogs?",
        answer: "With early and proper socialization using a structured protocol like our 100-item checklist, a Cane Corso can become neutral and well-behaved around other dogs and people."
    },
    {
        question: "How many items are in the socialization protocol?",
        answer: "Our comprehensive tactical protocol includes 100 unique stimulus items across various categories like sounds, surfaces, people, and environments to ensure your Corso is bulletproof against novel stimuli."
    }
];

export default function ChecklistPage() {
    return (
        <div className="min-h-screen p-8 pt-24 max-w-5xl mx-auto">
            <FAQSchema items={checklistFAQs} />
            
            <Link href="/" className="inline-flex items-center text-primary mb-8 hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
            </Link>

            <div className="mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white flex items-center">
                    <Shield className="w-8 h-8 mr-3 text-primary" />
                    100-Item Protocol
                </h1>
                <p className="text-neutral-400 max-w-xl">
                    Bulletproof your Corso against fear and aggression through structured, positive exposure to novel stimuli using our professional-grade socialization checklist.
                </p>
            </div>

            <ChecklistClient />
        </div>
    );
}
