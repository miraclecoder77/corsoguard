export function predictAdultWeight(currentWeight: number, ageMonths: number): number {
    const growthPercentages: Record<number, number> = {
        3: 32,
        4: 42,
        6: 60,
        9: 80,
        12: 90,
    };

    const pct = growthPercentages[ageMonths];
    if (!pct) return 0;

    return (currentWeight / pct) * 100;
}

export function getHarnessSize(adultWeight: number): string {
    if (adultWeight < 85) return 'M (Under 85 lbs)';
    if (adultWeight >= 85 && adultWeight <= 95) return 'L (85-95 lbs)';
    if (adultWeight > 95 && adultWeight <= 115) return 'XL (95-115 lbs)';
    return 'XXL (115+ lbs)';
}
