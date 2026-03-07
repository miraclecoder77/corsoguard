"use client";
import { useState, useEffect } from "react";

export type ChecklistItem = {
    id: string;
    category: string;
    label: string;
    checked: boolean;
};

export const CHECKLIST_CATEGORIES = [
    "Human Gallery",
    "World of Sound",
    "Tactile",
    "Objects",
    "Animal",
    "Handling",
] as const;

export const INITIAL_ITEMS: Omit<ChecklistItem, "checked">[] = [
    // Human Gallery
    ...["Men with beards/hats", "Children running/screaming", "People on bicycles/skateboards", "People with umbrellas", "People using walkers/wheelchairs", "Tall people leaning over", "People wearing sunglasses", "People carrying large boxes", "Joggers passing by", "Crowded areas/plazas"].map((label, i) => ({ id: `h${i}`, category: "Human Gallery", label })),
    // World of Sound
    ...["Thunder / Fireworks (audio)", "Vacuum cleaner", "Traffic / Trucks passing", "Sirens (police, fire)", "Dropping a metal pan", "Loud music/bass", "Motorcycles revving", "Skateboards on pavement", "Construction noise", "Doorbell ringing"].map((label, i) => ({ id: `s${i}`, category: "World of Sound", label })),
    // Tactile
    ...["Walking on wet grass", "Walking on gravel/rocks", "Walking on grates/manhole covers", "Going up/down open stairs", "Walking on slippery floors", "Wobbly surfaces (wobble board)", "Puddles/water", "Sand or dirt", "Snow/Ice", "Mud"].map((label, i) => ({ id: `t${i}`, category: "Tactile", label })),
    // Objects
    ...["Trash cans on the street", "Plastic bags blowing in wind", "Statues/yard ornaments", "Automatic doors opening", "Brooms/Mops moving", "Balloons", "Bicycles parked", "Shopping carts", "Suitcases with wheels", "Opening umbrellas"].map((label, i) => ({ id: `o${i}`, category: "Objects", label })),
    // Animal
    ...["Small dogs barking", "Cats running across yard", "Birds flying off suddenly", "Farm animals (horses, cows)", "Squirrels running", "Other large dogs", "Dogs behind fences", "Geese/Ducks", "Insects", "Lizards"].map((label, i) => ({ id: `a${i}`, category: "Animal", label })),
    // Handling
    ...["Touching paws/nails", "Looking inside ears", "Opening mouth/checking teeth", "Brushing coat", "Hugging/restraining gently", "Putting on harness/collar", "Wiping paws with towel", "Lifting pup up", "Touching tail", "Flea/Tick spray sounding"].map((label, i) => ({ id: `x${i}`, category: "Handling", label })),
];

export function useChecklist() {
    const [items, setItems] = useState<ChecklistItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("corsoguard_checklist");
        if (saved) {
            setItems(JSON.parse(saved));
        } else {
            setItems(INITIAL_ITEMS.map((item) => ({ ...item, checked: false })));
        }
        setIsLoaded(true);
    }, []);

    const toggleItem = (id: string) => {
        setItems((prev) => {
            const next = prev.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            );
            localStorage.setItem("corsoguard_checklist", JSON.stringify(next));
            if (window.navigator.vibrate) {
                window.navigator.vibrate(50); // Haptic feedback emulation
            }
            return next;
        });
    };

    const score = items.length > 0 ? Math.round((items.filter((i) => i.checked).length / items.length) * 100) : 0;

    return { items, toggleItem, score, isLoaded };
}
