"use client";
import { useState } from "react";
import { predictAdultWeight, getHarnessSize } from "@/lib/growthLogic";
import { calculateNutrition, NutritionParams } from "@/lib/nutritionLogic";
import { motion } from "framer-motion";
import { Calculator, ArrowLeft, Share2, Twitter, Facebook, MessageCircle, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AdSenseUnit from "@/components/AdSenseUnit";

export default function GrowthPredictor() {
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("6");
    const [activityLevel, setActivityLevel] = useState<'sedentary' | 'active' | 'working'>('active');
    const [goal, setGoal] = useState<'lean' | 'maintain' | 'bulk'>('maintain');
    const [result, setResult] = useState<any>(null);

    const calculate = () => {
        const w = parseFloat(weight);
        if (isNaN(w) || w <= 0) return;

        const adultWeight = predictAdultWeight(w, parseInt(age));
        const harnessSize = getHarnessSize(adultWeight);
        const nutrition = calculateNutrition({
            weightLbs: w,
            ageMonths: parseInt(age),
            activityLevel,
            goal
        });

        setResult({ adultWeight, harnessSize, nutrition });
    };

    return (
        <div className="min-h-screen p-8 pt-24 max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-primary mb-8 hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
            </Link>

            <div className="mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white flex items-center">
                    <Calculator className="w-8 h-8 mr-3 text-primary" />
                    Growth & Nutrition Predictor
                </h1>
                <p className="text-neutral-400">
                    Enter your Cane Corso's stats to predict their adult weight and generate a customized tactical nutrition protocol.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden h-fit">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                    <div className="space-y-6 relative z-10">
                        <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                                Current Weight (lbs)
                            </label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                placeholder="e.g. 55"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                                Age
                            </label>
                            <select
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none"
                            >
                                <option value="3">3 Months (32% Grown)</option>
                                <option value="4">4 Months (42% Grown)</option>
                                <option value="6">6 Months (60% Grown)</option>
                                <option value="9">9 Months (80% Grown)</option>
                                <option value="12">12 Months (90% Grown)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                                Activity Level
                            </label>
                            <select
                                value={activityLevel}
                                onChange={(e) => setActivityLevel(e.target.value as any)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none"
                            >
                                <option value="sedentary">Sedentary (Couch Potato)</option>
                                <option value="active">Active Guard (Daily Exercise)</option>
                                <option value="working">Working K9 (High Output)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                                Body Condition Goal
                            </label>
                            <select
                                value={goal}
                                onChange={(e) => setGoal(e.target.value as any)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none"
                            >
                                <option value="lean">Lean Out (Cut)</option>
                                <option value="maintain">Maintain Condition</option>
                                <option value="bulk">Bulking (Add Mass)</option>
                            </select>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={calculate}
                            className="w-full bg-primary text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,95,31,0.3)] hover:shadow-[0_0_30px_rgba(255,95,31,0.5)] transition-all"
                        >
                            Predict Adult Size
                        </motion.button>
                    </div>

                    {result && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 pt-8 border-t border-white/10"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-black/40 rounded-xl p-4 border border-white/5 text-center flex flex-col items-center justify-center">
                                    <div className="text-neutral-400 text-sm mb-1 uppercase tracking-wider">Predicted Adult Weight</div>
                                    <div className="text-3xl font-black text-white">
                                        {Math.round(result.adultWeight)} <span className="text-xl text-neutral-500 font-normal">lbs</span>
                                    </div>
                                </div>
                                <div className="bg-primary/10 rounded-xl p-4 border border-primary/20 text-center flex flex-col items-center justify-center">
                                    <div className="text-primary/80 text-sm mb-1 uppercase tracking-wider">Harness Size</div>
                                    <div className="text-xl font-black text-primary text-center leading-tight">
                                        {result.harnessSize}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col items-center space-y-3">
                                <span className="text-sm text-neutral-500 font-medium">Share Result</span>
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    <button
                                        onClick={() => {
                                            const text = `My Cane Corso's predicted adult weight is ${Math.round(result.adultWeight)} lbs, and requires a custom ${result.nutrition.dailyCalories} kcal tactical nutrition protocol! Predict yours at CorsoGuard.`;
                                            const url = window.location.href;
                                            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                                        }}
                                        className="flex items-center space-x-2 text-neutral-400 hover:text-[#1DA1F2] transition py-2 px-3 rounded-lg hover:bg-white/5 text-sm"
                                    >
                                        <Twitter className="w-4 h-4" />
                                        <span>X</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            const url = window.location.href;
                                            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                                        }}
                                        className="flex items-center space-x-2 text-neutral-400 hover:text-[#1877F2] transition py-2 px-3 rounded-lg hover:bg-white/5 text-sm"
                                    >
                                        <Facebook className="w-4 h-4" />
                                        <span>Facebook</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            const text = `My Cane Corso's predicted adult weight is ${Math.round(result.adultWeight)} lbs, and needs a ${result.harnessSize} tactical harness and requires a custom ${result.nutrition.dailyCalories} kcal tactical nutrition protocol! Predict yours at CorsoGuard: ${window.location.href}`;
                                            window.open(`sms:?&body=${encodeURIComponent(text)}`, '_blank');
                                        }}
                                        className="flex items-center space-x-2 text-neutral-400 hover:text-[#34C759] transition py-2 px-3 rounded-lg hover:bg-white/5 text-sm"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>iMessage</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            const text = `My Cane Corso's predicted adult weight is ${Math.round(result.adultWeight)} lbs, and needs a ${result.harnessSize} tactical harness and requires a custom ${result.nutrition.dailyCalories} kcal tactical nutrition protocol! Predict yours at CorsoGuard: ${window.location.href}`;
                                            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
                                        }}
                                        className="flex items-center space-x-2 text-neutral-400 hover:text-[#25D366] transition py-2 px-3 rounded-lg hover:bg-white/5 text-sm"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        <span>WhatsApp</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            const text = `My Cane Corso's predicted adult weight is ${Math.round(result.adultWeight)} lbs, and needs a ${result.harnessSize} tactical harness and requires a custom ${result.nutrition.dailyCalories} kcal tactical nutrition protocol! Predict yours at CorsoGuard: ${window.location.href}`;
                                            if (navigator.share) {
                                                navigator.share({ title: 'CorsoGuard Predictor', text, url: window.location.href });
                                            } else {
                                                navigator.clipboard.writeText(text);
                                                alert("Copied to clipboard!");
                                            }
                                        }}
                                        className="flex items-center space-x-2 text-neutral-400 hover:text-white transition py-2 px-3 rounded-lg hover:bg-white/5 text-sm"
                                    >
                                        <Share2 className="w-4 h-4" />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Processing State / Form Area Ad */}
                    <div className="mt-8">
                        <AdSenseUnit slotId="growth-banner-1" type="banner" />
                    </div>
                </div>

                {/* Gear Preview Side */}
                <div id="gear" className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-4">Fuel & Supplement Protocol</h2>

                    {!result ? (
                        <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 backdrop-blur-xl text-center">
                            <p className="text-neutral-400">Enter your dog's stats and calculate to see your customized nutrition protocol and supplement recommendations.</p>
                        </div>
                    ) : (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                            <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 backdrop-blur-xl group hover:border-primary/50 transition duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Daily Caloric Target</h3>
                                <div className="text-4xl font-black text-primary mb-4">{result.nutrition.dailyCalories.toLocaleString()} <span className="text-lg text-neutral-500 font-normal">kcal</span></div>
                                <div className="flex gap-4">
                                    <div className="flex-1 bg-black/40 rounded-lg p-3 text-center border border-white/5">
                                        <div className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Protein Approx</div>
                                        <div className="text-white font-bold">{result.nutrition.proteinGrams}g</div>
                                    </div>
                                    <div className="flex-1 bg-black/40 rounded-lg p-3 text-center border border-white/5">
                                        <div className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Fat Approx</div>
                                        <div className="text-white font-bold">{result.nutrition.fatGrams}g</div>
                                    </div>
                                </div>
                            </div>

                            <a href={result.nutrition.kibbleLink} target="_blank" rel="noopener noreferrer" className="block bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 backdrop-blur-xl group cursor-pointer hover:border-primary/50 transition duration-300">
                                <h3 className="text-xl font-bold text-white mb-1">Recommended Formula</h3>
                                <p className="text-primary font-bold mb-2">{result.nutrition.kibbleRec}</p>
                                <p className="text-neutral-400 text-sm mb-4">Optimized for your dog's current age, size, and activity level.</p>
                                <div className="flex justify-end items-center">
                                    <span className="text-xs font-semibold px-4 py-2 bg-white/10 rounded-full text-white group-hover:bg-primary group-hover:text-black transition uppercase tracking-widest">Buy on Amazon</span>
                                </div>
                            </a>

                            <a href={result.nutrition.supplementLink} target="_blank" rel="noopener noreferrer" className="block bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 backdrop-blur-xl group cursor-pointer hover:border-primary/50 transition duration-300">
                                <h3 className="text-xl font-bold text-white mb-1">Daily Supplement</h3>
                                <p className="text-primary font-bold mb-2">{result.nutrition.supplementRec}</p>
                                <p className="text-neutral-400 text-sm mb-4">Crucial for joint health, growth regulation, and longevity in giant breeds.</p>
                                <div className="flex justify-end items-center">
                                    <span className="text-xs font-semibold px-4 py-2 bg-white/10 rounded-full text-white group-hover:bg-primary group-hover:text-black transition uppercase tracking-widest">Buy on Amazon</span>
                                </div>
                            </a>

                            <div className="mt-6 mb-2">
                                <AdSenseUnit slotId="growth-native-1" type="native" />
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 space-y-6">
                                <h2 className="text-2xl font-bold text-white mb-4">Recommended Tactical Gear</h2>

                                <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 backdrop-blur-xl group cursor-pointer hover:border-primary/50 transition duration-300">
                                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                                        <Image src="/corso_harness_model1.png" alt="Heavy Duty Harness" fill className="object-cover group-hover:scale-105 transition duration-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">Heavy Duty Alpha Harness</h3>
                                    <p className="text-neutral-400 text-sm mb-4">Ballistic nylon with reinforced stitching for 115lb+ adults.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-primary font-bold">$129.99</span>
                                        <span className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full text-white">Buy on Amazon</span>
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
                                        <span className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full text-white">Buy on Amazon</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
