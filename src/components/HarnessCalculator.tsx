"use client";
import { useState } from "react";
import { getHarnessSize } from "@/lib/growthLogic";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function HarnessCalculator() {
    const [weight, setWeight] = useState("");
    const [result, setResult] = useState<any>(null);

    const calculate = () => {
        const w = parseFloat(weight);
        if (isNaN(w) || w <= 0) return;

        const harnessSize = getHarnessSize(w);

        setResult({ harnessSize, weight: w });
    };

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden h-fit">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                <div className="space-y-6 relative z-10">
                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2 flex items-center">
                            <ShieldCheck className="w-4 h-4 mr-2 text-primary" />
                            Dog's Weight (lbs)
                        </label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                            placeholder="e.g. 110"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={calculate}
                        className="w-full bg-primary text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,95,31,0.3)] hover:shadow-[0_0_30px_rgba(255,95,31,0.5)] transition-all"
                    >
                        Find Harness Size
                    </motion.button>
                </div>

                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 pt-8 border-t border-white/10"
                    >
                        <div className="bg-primary/10 rounded-xl p-4 border border-primary/20 text-center flex flex-col items-center justify-center">
                            <div className="text-primary/80 text-sm mb-1 uppercase tracking-wider">Recommended Harness Size</div>
                            <div className="text-3xl font-black text-primary text-center leading-tight">
                                {result.harnessSize}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Gear Preview Side */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">Recommended Tactical Gear</h2>

                <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 backdrop-blur-xl group cursor-pointer hover:border-primary/50 transition duration-300">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                        <Image src="/corso_harness_model1.png" alt="Heavy Duty Harness" fill className="object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Heavy Duty Alpha Harness</h3>
                    <p className="text-neutral-400 text-sm mb-4">Ballistic nylon with reinforced stitching for 115lb+ adults.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-primary font-bold">$129.99</span>
                        <span className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full text-white group-hover:bg-primary group-hover:text-black transition">Buy on Amazon</span>
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 backdrop-blur-xl group cursor-pointer hover:border-primary/50 transition duration-300">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                        <Image src="/corso_harness_model2.png" alt="Agile Deployment K9 Harness" fill className="object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Agile Deployment K9 Harness</h3>
                    <p className="text-neutral-400 text-sm mb-4">Lightweight, high-tensile core for young adults (85-115lbs).</p>
                    <div className="flex justify-between items-center">
                        <span className="text-primary font-bold">$99.99</span>
                        <span className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full text-white group-hover:bg-primary group-hover:text-black transition">Buy on Amazon</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
