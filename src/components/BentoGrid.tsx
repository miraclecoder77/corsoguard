"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    onClick,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <motion.div
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={cn(
                "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-none p-6 bg-white/[0.03] border border-white/[0.1] justify-between flex flex-col space-y-4 backdrop-blur-xl cursor-pointer relative overflow-hidden",
                className
            )}
        >
            <div className="flex-1 flex w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/5 overflow-hidden">
                {header}
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="text-primary mb-2">{icon}</div>
                <div className="font-sans font-bold text-neutral-100 mb-2 mt-2 text-xl">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-400 text-sm">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
