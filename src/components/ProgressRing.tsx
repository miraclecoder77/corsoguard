"use client";
import { motion } from "framer-motion";

export const ProgressRing = ({ score }: { score: number }) => {
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="flex items-center space-x-3 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
            <div className="relative w-10 h-10 flex items-center justify-center">
                <svg className="transform -rotate-90 w-10 h-10">
                    <circle
                        cx="20"
                        cy="20"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="transparent"
                        className="text-neutral-800"
                    />
                    <motion.circle
                        cx="20"
                        cy="20"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="transparent"
                        className="text-primary"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
                    {score}%
                </div>
            </div>
            <div className="hidden sm:block">
                <div className="text-xs font-bold text-white leading-none uppercase tracking-wider">Socialization</div>
                <div className="text-[10px] text-primary/80 leading-none mt-1">Score Tracker</div>
            </div>
        </div>
    );
};
