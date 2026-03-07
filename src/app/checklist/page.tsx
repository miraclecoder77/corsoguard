"use client";
import { useChecklist, CHECKLIST_CATEGORIES } from "@/hooks/useChecklist";
import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AdSenseUnit from "@/components/AdSenseUnit";
import { Fragment } from "react";

export default function ChecklistPage() {
    const { items, toggleItem, score, isLoaded } = useChecklist();

    if (!isLoaded) return <div className="min-h-screen pt-24 pl-8">Loading Tactical Protocol...</div>;

    return (
        <div className="min-h-screen p-8 pt-24 max-w-5xl mx-auto">
            <Link href="/" className="inline-flex items-center text-primary mb-8 hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
            </Link>

            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white flex items-center">
                        <Shield className="w-8 h-8 mr-3 text-primary" />
                        100-Item Protocol
                    </h1>
                    <p className="text-neutral-400 max-w-xl">
                        Bulletproof your Corso against fear and aggression through structured, positive exposure to novel stimuli.
                    </p>
                </div>

                <div className="bg-black/50 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center min-w-[200px]">
                    <div className="text-5xl font-black text-white">{score}<span className="text-2xl text-primary">%</span></div>
                    <div className="text-neutral-400 text-sm font-bold uppercase tracking-wider mt-1">Readiness Score</div>
                </div>
            </div>

            <div className="space-y-12">
                {CHECKLIST_CATEGORIES.map((category, index) => {
                    const catItems = items.filter((i) => i.category === category);
                    const catChecked = catItems.filter((i) => i.checked).length;

                    return (
                        <Fragment key={category}>
                            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8">
                                <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-6">
                                    <h2 className="text-2xl font-bold text-white">{category}</h2>
                                    <span className="text-primary font-bold">{catChecked} / {catItems.length}</span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {catItems.map((item) => (
                                        <motion.label
                                            key={item.id}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            className={cn(
                                                "flex items-center space-x-4 p-4 rounded-xl cursor-pointer border transition duration-200 select-none",
                                                item.checked ? "bg-primary/10 border-primary/30" : "bg-black/40 border-white/5 hover:border-white/20"
                                            )}
                                        >
                                            <div className="relative flex items-center justify-center">
                                                <input
                                                    type="checkbox"
                                                    checked={item.checked}
                                                    onChange={() => toggleItem(item.id)}
                                                    className="peer appearance-none w-6 h-6 border-2 border-neutral-600 rounded-md checked:bg-primary checked:border-primary transition"
                                                />
                                                {item.checked && (
                                                    <svg className="absolute w-4 h-4 text-black pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className={cn(
                                                "font-medium transition",
                                                item.checked ? "text-white" : "text-neutral-300"
                                            )}>
                                                {item.label}
                                            </span>
                                        </motion.label>
                                    ))}
                                </div>
                            </div>
                            {
                                index === 0 && (
                                    <div className="py-6">
                                        <AdSenseUnit slotId="checklist-native-1" type="native" />
                                    </div>
                                )
                            }
                        </Fragment>
                    );
                })}
            </div>
        </div >
    );
}
