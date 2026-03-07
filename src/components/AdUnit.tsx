"use client";
import { useEffect, useRef } from 'react';

type AdUnitProps = {
    slotId: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    className?: string;
};

export default function AdUnit({ slotId, format = 'auto', className }: AdUnitProps) {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            if (adRef.current && adRef.current.innerHTML === '') {
                // @ts-ignore
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (err) {
            console.error('AdSense display error', err);
        }
    }, []);

    return (
        <div className={`w-full overflow-hidden flex justify-center bg-black/20 border border-white/5 rounded-xl p-2 ${className}`}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block', width: '100%' }}
                data-ad-client="ca-pub-1234567890123456"
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}
