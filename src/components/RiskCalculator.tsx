"use client";
import React, { useState } from 'react';
import { AlertTriangle, Activity, CheckCircle2, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RiskCalculator = () => {
  const [factors, setFactors] = useState({
    deepChest: true,
    fastEater: false,
    largeMeals: false,
    exerciseNearMeals: false,
    seniorAge: false,
  });

  const toggleFactor = (key: keyof typeof factors) => {
    setFactors(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const riskScore = Object.values(factors).filter(Boolean).length;
  
  const getRiskLevel = () => {
    if (riskScore >= 4) return { label: 'CRITICAL', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/30' };
    if (riskScore >= 2) return { label: 'ELEVATED', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30' };
    return { label: 'MODERATE', color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' };
  };

  const risk = getRiskLevel();

  return (
    <div className="my-12 bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
      
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <Activity className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-white m-0">Bloat (GDV) Risk Assessment</h3>
        </div>

        <p className="text-neutral-400 text-sm mb-8">
          Select the risk factors that apply to your dog to calculate their architectural risk for Gastric Dilatation-Volvulus.
        </p>

        <div className="space-y-4 mb-10">
          {[
            { key: 'deepChest', label: 'Deep-Chested Conformation (Standard Corso)', icon: <AlertTriangle className="w-4 h-4" /> },
            { key: 'fastEater', label: 'Inhales Food (Fast Eating Habits)', icon: <Activity className="w-4 h-4" /> },
            { key: 'largeMeals', label: 'Single Large Daily Meal', icon: <Info className="w-4 h-4" /> },
            { key: 'exerciseNearMeals', label: 'Vigorous Exercise Within 2 Hours of Eating', icon: <AlertTriangle className="w-4 h-4" /> },
            { key: 'seniorAge', label: 'Senior Age (7+ Years)', icon: <Activity className="w-4 h-4" /> },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => toggleFactor(item.key as any)}
              className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                factors[item.key as keyof typeof factors]
                  ? 'bg-primary/20 border-primary text-white font-bold'
                  : 'bg-white/5 border-white/10 text-neutral-500 hover:border-white/20'
              }`}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </div>
              {factors[item.key as keyof typeof factors] && <CheckCircle2 className="w-4 h-4 text-primary" />}
            </button>
          ))}
        </div>

        <div className={`p-6 rounded-2xl border ${risk.bg} ${risk.border} transition-all duration-500`}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">Calculated Risk Profile</span>
            <span className={`text-sm font-black ${risk.color}`}>{risk.label}</span>
          </div>
          <div className="text-3xl font-black text-white mb-4">
            {riskScore} <span className="text-lg text-neutral-500 font-normal">Active Factors</span>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {riskScore >= 4 
              ? "Immediate action recommended: Implement a strict 2-hour rest rule and consider a prophylactic gastropexy consultation."
              : riskScore >= 2
              ? "Elevated awareness suggested. Use a slow-feeder and divide meals into three daily portions."
              : "Base breed risk exists. Maintain standard large-breed feeding protocols."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskCalculator;
