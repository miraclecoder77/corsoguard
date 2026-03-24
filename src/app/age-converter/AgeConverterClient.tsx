"use client";
import { useState, useEffect } from "react";
import { calculateHumanAge, AgeResult } from "@/lib/ageLogic";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Calendar, Info, Twitter, MessageSquare } from "lucide-react";
import AdSenseUnit from "@/components/AdSenseUnit";

export default function AgeConverterClient() {
    const [years, setYears] = useState(2);
    const [months, setMonths] = useState(0);
    const [result, setResult] = useState<AgeResult | null>(null);

    useEffect(() => {
        setResult(calculateHumanAge(years, months));
    }, [years, months]);

    const lifeStageColors: Record<string, string> = {
        "Young Puppy": "text-blue-400",
        "Puppy": "text-green-400",
        "Adolescent": "text-orange-400",
        "Adult": "text-primary",
        "Senior": "text-purple-400"
    };

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden h-fit">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                <div className="space-y-8 relative z-10">
                    <div>
                        <div className="flex justify-between mb-4">
                            <label className="text-sm font-medium text-neutral-300 flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-primary" />
                                Dog's Age (Years)
                            </label>
                            <span className="text-primary font-bold">{years} Years</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="15"
                            step="1"
                            value={years}
                            onChange={(e) => setYears(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-[10px] text-neutral-600 mt-2 font-mono uppercase tracking-widest">
                            <span>Puppy</span>
                            <span>Adult</span>
                            <span>Senior</span>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-4">
                            <label className="text-sm font-medium text-neutral-300 flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-primary" />
                                Dog's Age (Months)
                            </label>
                            <span className="text-primary font-bold">{months} Months</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="11"
                            step="1"
                            value={months}
                            onChange={(e) => setMonths(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>

                    <div className="bg-black/60 rounded-2xl p-6 border border-white/5 text-center">
                        <div className="text-neutral-500 text-xs uppercase tracking-[0.2em] mb-2 font-bold">Estimated Human Equivalent</div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={result?.humanAge}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-6xl font-black text-white mb-2"
                            >
                                {result?.humanAge}<span className="text-2xl text-neutral-600 font-normal ml-2">yrs</span>
                            </motion.div>
                        </AnimatePresence>
                        <motion.div 
                            className={`text-xl font-bold ${lifeStageColors[result?.lifeStage || 'Adult']}`}
                        >
                            {result?.lifeStage} Phase
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 backdrop-blur-xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Info className="w-5 h-5 mr-2 text-primary" />
                        Life Stage Insights
                    </h3>
                    <p className="text-neutral-300 leading-relaxed mb-4">
                        {result?.description}
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                        <p className="text-sm text-neutral-400 italic">
                            "Cane Corsos age faster in their first two years compared to smaller breeds, reaching adolescent maturity by 24 human years."
                        </p>
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 backdrop-blur-xl">
                    <span className="text-sm text-neutral-500 font-medium block mb-4">Share Your Corso's Human Age</span>
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={() => {
                                const text = `My Cane Corso is ${years} years old, which is ${result?.humanAge} human years! ${result?.lifeStage} vibes. Check your Corso's age at CorsoGuard.`;
                                const url = window.location.href;
                                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                            }}
                            className="flex items-center justify-center space-x-2 text-neutral-400 hover:text-white transition py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm"
                        >
                            <Twitter className="w-4 h-4" />
                            <span>X / Twitter</span>
                        </button>
                        <button
                            onClick={() => {
                                const text = `My Cane Corso is ${years} years old, which is ${result?.humanAge} human years! ${result?.lifeStage} vibes. Calculate yours: ${window.location.href}`;
                                window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
                            }}
                            className="flex items-center justify-center space-x-2 text-neutral-400 hover:text-[#25D366] transition py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm"
                        >
                            <MessageSquare className="w-4 h-4" />
                            <span>WhatsApp</span>
                        </button>
                    </div>
                </div>

                <div className="p-4 border border-white/5 rounded-2xl bg-black/20">
                    <AdSenseUnit slotId="age-sidebar-1" type="banner" />
                </div>
            </div>
        </div>
    );
}
