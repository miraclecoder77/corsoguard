"use client";
import { useState, useEffect } from "react";
import { calculateLifetimeCost, CostResult, CostInputs, FoodQuality } from "@/lib/costLogic";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Calculator, 
    ArrowLeft, 
    DollarSign, 
    TrendingUp, 
    ShieldCheck, 
    ShoppingBag, 
    Calendar,
    Stethoscope,
    Dumbbell,
    AlertCircle,
    Info,
    Globe,
    ChevronDown
} from "lucide-react";
import Link from "next/link";
import AdSenseUnit from "@/components/AdSenseUnit";
import ToolSchema from "@/components/ToolSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cane Corso Lifetime Cost Calculator | Ownership Budget Guide",
    description: "Calculate the total lifetime cost of owning a Cane Corso. Includes initial purchase, premium nutrition, veterinary care, and insurance budgeting.",
    keywords: ["cane corso cost", "dog ownership budget", "giant breed expenses", "pet cost calculator"],
    alternates: {
        canonical: "https://corsoguard.com/lifetime-cost",
    },
};

export default function LifetimeCostCalculator() {
    const [inputs, setInputs] = useState<CostInputs>({
        acquisitionCost: 2500,
        foodQuality: "Premium",
        lifeExpectancy: 10,
        hasInsurance: true,
        hasProfessionalTraining: true
    });

    const [result, setResult] = useState<CostResult | null>(null);
    const [currency, setCurrency] = useState("$");
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

    useEffect(() => {
        setResult(calculateLifetimeCost(inputs));
    }, [inputs]);

    const currencies = [
        { symbol: "$", label: "USD", name: "US Dollar" },
        { symbol: "£", label: "GBP", name: "British Pound" },
        { symbol: "€", label: "EUR", name: "Euro" }
    ];


    const formatCurrency = (val: number) => {
        return `${currency}${Math.round(val).toLocaleString()}`;
    };

    return (
        <div className="min-h-screen p-8 pt-24 max-w-6xl mx-auto">
            <ToolSchema 
                name="Cane Corso Lifetime Cost Calculator"
                description="Comprehensive financial planning tool for Cane Corso owners to estimate investment from puppyhood to senior years."
                url="/lifetime-cost"
                category="FinanceApplication"
                features={["Regional cost adjustments", "Insurance impact modeling", "Premium nutrition budgeting", "First-year peak analysis"]}
            />
            
            <div className="flex justify-between items-center mb-8">
                <Link href="/" className="inline-flex items-center text-primary hover:underline">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                </Link>
                
                <div className="relative">
                    <button 
                        onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                        className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm text-neutral-300 hover:bg-white/10 transition"
                    >
                        <Globe className="w-4 h-4 text-primary" />
                        <span>Currency: {currency}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                        {isCurrencyOpen && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute right-0 mt-2 w-48 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
                            >
                                {currencies.map((curr) => (
                                    <button
                                        key={curr.label}
                                        onClick={() => {
                                            setCurrency(curr.symbol);
                                            setIsCurrencyOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-3 text-sm text-neutral-400 hover:bg-primary/10 hover:text-white transition flex justify-between items-center"
                                    >
                                        <span>{curr.name} ({curr.symbol})</span>
                                        {currency === curr.symbol && <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white flex items-center">
                    <Calculator className="w-8 h-8 mr-3 text-primary" />
                    Lifetime Cost Calculator
                </h1>
                <p className="text-neutral-400 max-w-2xl">
                    Budget for the long haul. Calculate the true financial commitment of owning a Cane Corso from puppyhood through their senior years.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Inputs Section */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-8 backdrop-blur-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        
                        <div className="space-y-10 relative z-10">
                            {/* Acquisition Cost */}
                            <div>
                                <div className="flex justify-between mb-4">
                                    <label className="text-sm font-medium text-neutral-300 flex items-center">
                                        <ShoppingBag className="w-4 h-4 mr-2 text-primary" />
                                        Initial Acquisition (Purchase or Adoption)
                                    </label>
                                    <span className="text-primary font-bold">{formatCurrency(inputs.acquisitionCost)}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="5000"
                                    step="100"
                                    value={inputs.acquisitionCost}
                                    onChange={(e) => setInputs({...inputs, acquisitionCost: parseInt(e.target.value)})}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between text-[10px] text-neutral-600 mt-2 font-mono uppercase">
                                    <span>Rescue</span>
                                    <span>Average</span>
                                    <span>Top Breeder</span>
                                </div>
                            </div>

                            {/* Life Expectancy */}
                            <div>
                                <div className="flex justify-between mb-4">
                                    <label className="text-sm font-medium text-neutral-300 flex items-center">
                                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                                        Estimated Life Expectancy
                                    </label>
                                    <span className="text-primary font-bold">{inputs.lifeExpectancy} Years</span>
                                </div>
                                <input
                                    type="range"
                                    min="8"
                                    max="15"
                                    step="1"
                                    value={inputs.lifeExpectancy}
                                    onChange={(e) => setInputs({...inputs, lifeExpectancy: parseInt(e.target.value)})}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Food Quality */}
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-neutral-300 block">Food Quality</label>
                                    <div className="grid grid-cols-1 gap-2">
                                        {(["Standard", "Premium", "Raw"] as FoodQuality[]).map((q) => (
                                            <button
                                                key={q}
                                                onClick={() => setInputs({...inputs, foodQuality: q})}
                                                className={`py-2 px-4 rounded-xl text-xs border transition ${
                                                    inputs.foodQuality === q 
                                                    ? 'bg-primary/20 border-primary text-primary font-bold' 
                                                    : 'bg-white/5 border-white/10 text-neutral-500 hover:border-white/20'
                                                }`}
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Insurance Toggle */}
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-neutral-300 block">Health Insurance</label>
                                    <button
                                        onClick={() => setInputs({...inputs, hasInsurance: !inputs.hasInsurance})}
                                        className={`w-full py-4 px-4 rounded-xl text-xs border transition flex items-center justify-center space-x-2 ${
                                            inputs.hasInsurance 
                                            ? 'bg-primary/20 border-primary text-primary font-bold' 
                                            : 'bg-white/5 border-white/10 text-neutral-500 hover:border-white/20'
                                        }`}
                                    >
                                        <ShieldCheck className="w-4 h-4" />
                                        <span>{inputs.hasInsurance ? "Insured" : "Uninsured"}</span>
                                    </button>
                                </div>

                                {/* Training Toggle */}
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-neutral-300 block">Pro Training</label>
                                    <button
                                        onClick={() => setInputs({...inputs, hasProfessionalTraining: !inputs.hasProfessionalTraining})}
                                        className={`w-full py-4 px-4 rounded-xl text-xs border transition flex items-center justify-center space-x-2 ${
                                            inputs.hasProfessionalTraining 
                                            ? 'bg-primary/20 border-primary text-primary font-bold' 
                                            : 'bg-white/5 border-white/10 text-neutral-500 hover:border-white/20'
                                        }`}
                                    >
                                        <Dumbbell className="w-4 h-4" />
                                        <span>{inputs.hasProfessionalTraining ? "Professional" : "Basic"}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Regional Cost Factor (GEO) */}
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                            <AlertCircle className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Geographic Cost Adjustment</h4>
                            <p className="text-sm text-neutral-400">
                                Rates are calculated based on national averages. Owners in major metropolitan areas (e.g., NYC, London, Sydney) should factor an additional <span className="text-primary font-bold">15-25%</span> for veterinary and boarding services.
                            </p>
                        </div>
                    </div>

                    {/* Cost Breakdown Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                            <div className="flex items-center space-x-3 mb-4 text-neutral-400">
                                <TrendingUp className="w-5 h-5" />
                                <span className="text-sm font-bold uppercase tracking-wider">First Year Peak</span>
                            </div>
                            <div className="text-3xl font-black text-white">{formatCurrency(result?.firstYearCost || 0)}</div>
                            <p className="text-xs text-neutral-500 mt-2">Highest investment due to purchase, setup gear, and vaccinations.</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                            <div className="flex items-center space-x-3 mb-4 text-neutral-400">
                                <DollarSign className="w-5 h-5" />
                                <span className="text-sm font-bold uppercase tracking-wider">Monthly Average</span>
                            </div>
                            <div className="text-3xl font-black text-white">{formatCurrency(result?.monthlyCost || 0)}</div>
                            <p className="text-xs text-neutral-500 mt-2">Spreading the total lifetime cost across every month of ownership.</p>
                        </div>
                    </div>
                </div>

                {/* Final Results Sidebar */}
                <div className="space-y-6">
                    <div className="bg-black border border-primary/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(255,95,31,0.1)] relative overflow-hidden">
                        {/* Tactical Scan Line */}
                        <motion.div
                            animate={{ top: ["-10%", "110%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[1px] bg-primary/20 z-0"
                        ></motion.div>

                        <div className="relative z-10">
                            <div className="text-neutral-500 text-xs uppercase tracking-[0.3em] mb-4 font-bold text-center">Total Estimated Investment</div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={result?.lifetimeCost}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-5xl font-black text-white text-center mb-8"
                                >
                                    {formatCurrency(result?.lifetimeCost || 0)}
                                </motion.div>
                            </AnimatePresence>

                            <div className="space-y-4 border-t border-white/10 pt-8">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-neutral-400 flex items-center"><ShoppingBag className="w-3 h-3 mr-2" /> Food (Lifetime)</span>
                                    <span className="text-sm text-white font-mono">{formatCurrency(result?.breakdown.food || 0)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-neutral-400 flex items-center"><Stethoscope className="w-3 h-3 mr-2" /> Medical & Wellness</span>
                                    <span className="text-sm text-white font-mono">{formatCurrency(result?.breakdown.medical || 0)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-neutral-400 flex items-center"><ShieldCheck className="w-3 h-3 mr-2" /> Insurance Premiums</span>
                                    <span className="text-sm text-white font-mono">{formatCurrency(result?.breakdown.insurance || 0)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-neutral-400 flex items-center"><Dumbbell className="w-3 h-3 mr-2" /> Gear & Training</span>
                                    <span className="text-sm text-white font-mono">{formatCurrency((result?.breakdown.gear || 0) + (result?.breakdown.training || 0))}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 backdrop-blur-xl">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Info className="w-5 h-5 mr-2 text-primary" />
                            Tactical Budget Tip
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Cane Corsos are giant breeds; everything costs more. From larger doses of flea prevention to "heavy-duty" toys that won't be destroyed in minutes. <span className="text-white font-bold">Always maintain an emergency fund of at least {formatCurrency(2500)}</span> for unexpected bloated (GDV) or joint issues.
                        </p>
                    </div>

                    <div className="p-4 border border-white/5 rounded-2xl bg-black/20">
                        <AdSenseUnit slotId="cost-sidebar-1" type="banner" />
                    </div>
                </div>
            </div>

            {/* SEO Content Section */}
            <div className="mt-20 space-y-16">
                <section className="max-w-4xl">
                    <h2 className="text-4xl font-extrabold text-white mb-8">The True Cost of a Cane Corso in 2026</h2>
                    <div className="prose prose-invert max-w-none text-neutral-400 leading-relaxed space-y-6 text-lg">
                        <p>
                            Owning a Cane Corso is a major financial responsibility. Unlike smaller breeds, Every expense for a Corso is scaled up. From the amount of food they consume daily to the cost of professional training required to manage a 120-pound guardian.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="text-primary font-bold text-xl mb-4">Initial Year Expenses</h3>
                                <p className="text-sm">The first year is usually the most expensive. Expect to pay for the puppy itself ($1,500 - $4,000), a series of vaccinations, spay/neuter surgery, and high-quality tactical gear that is built to last.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="text-primary font-bold text-xl mb-4">Recurring Annual Costs</h3>
                                <p className="text-sm">Once settled, your main costs will be high-protein food and preventative healthcare. A Cane Corso can eat 4-6 cups of premium kibble a day, which can easily total over $150 per month.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Regional Cost Differences (GEO Insights)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { region: "United States", note: "Highest veterinary and insurance premiums. Focus on pet insurance early." },
                            { region: "United Kingdom", note: "Strict regulations on large breeds. Factors in local council fees and specific training." },
                            { region: "European Union", note: "Varies by country; generally lower insurance but specialized high-quality food costs more." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-primary/30 transition">
                                <h4 className="text-primary font-bold mb-2">{item.region}</h4>
                                <p className="text-sm text-neutral-400">{item.note}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-8">
                    <AdSenseUnit slotId="cost-bottom-native" type="native" />
                </div>
            </div>
        </div>
    );
}
