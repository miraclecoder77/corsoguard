"use client";
import { ProgressRing } from "@/components/ProgressRing";
import { useChecklist } from "@/hooks/useChecklist";
import Link from "next/link";
import { Shield } from "lucide-react";

export default function ClientHeader() {
    const { score, isLoaded } = useChecklist();

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-xl border-b border-white/10 bg-black/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="font-extrabold text-xl text-white tracking-tight">
                        Corso<span className="text-primary">Guard</span>
                    </span>
                </Link>

                {isLoaded && <ProgressRing score={score} />}
            </div>
        </header>
    );
}
