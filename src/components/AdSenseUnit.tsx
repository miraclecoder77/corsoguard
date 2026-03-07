"use client";
import { useEffect, useRef, useState } from 'react';

type AdSenseUnitProps = {
    slotId: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    className?: string;
    type?: 'native' | 'banner' | 'multiplex';
};

export default function AdSenseUnit({ slotId, format = 'auto', className, type = 'banner' }: AdSenseUnitProps) {
    const adRef = useRef<HTMLModElement>(null);
    const [isDev, setIsDev] = useState(true); // Using state to prevent hydration mismatch

    useEffect(() => {
        setIsDev(process.env.NODE_ENV === 'development');
    }, []);

    useEffect(() => {
        if (!isDev) {
            try {
                if (adRef.current && adRef.current.innerHTML === '') {
                    // @ts-ignore
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                }
            } catch (err) {
                console.error('AdSense display error', err);
            }
        }
    }, [isDev]);

    const baseStyles = "w-full overflow-hidden flex flex-col items-center justify-center border border-white/10 rounded-xl relative p-4";

    // Different styles based on "type" strategy
    const typeStyles = {
        native: "bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(255,95,31,0.05)] hover:border-primary/20 transition-colors min-h-[250px]",
        banner: "bg-neutral-900/50 min-h-[100px]",
        multiplex: "bg-black/60 min-h-[300px]"
    };

    if (isDev) {
        return (
            <div className={`${baseStyles} ${typeStyles[type]} ${className || ''}`}>
                <div className="absolute top-2 right-3 text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Advertisement
                </div>
                <div className="text-primary/40 font-black text-xl tracking-widest uppercase flex items-center justify-center opacity-50">
                    {type} Ad
                </div>
                <div className="text-neutral-600 text-xs mt-2 text-center max-w-xs">
                    Slot: {slotId} <br />
                    (In prod, AdSense renders here)
                </div>
            </div>
        );
    }

    return (
        <div className={`${baseStyles} ${typeStyles[type]} ${className || ''}`}>
            <div className="absolute top-1 right-2 text-[10px] uppercase tracking-widest text-neutral-600 z-10">
                Ad
            </div>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block', width: '100%', height: '100%' }}
                data-ad-client="ca-pub-1234567890123456" // Replace with real Pub ID
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}
