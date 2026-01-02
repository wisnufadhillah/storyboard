import React from "react";
import { motion } from "motion/react";

const VARIANTS = {
    orange: "bg-orange-500 border-orange-600 shadow-[0_4px_0_rgb(194,65,12)] hover:shadow-[0_6px_0_rgb(194,65,12)] hover:bg-orange-400 text-white",
    blue: "bg-sky-500 border-sky-600 shadow-[0_4px_0_rgb(2,132,199)] hover:shadow-[0_6px_0_rgb(2,132,199)] hover:bg-sky-400 text-white",
    green: "bg-green-500 border-green-600 shadow-[0_4px_0_rgb(22,163,74)] hover:shadow-[0_6px_0_rgb(22,163,74)] hover:bg-green-400 text-white",
    white: "bg-white border-slate-200 shadow-[0_4px_0_rgb(203,213,225)] hover:shadow-[0_6px_0_rgb(203,213,225)] hover:bg-slate-50 text-slate-600",
};

export const GameButton = ({ children, onClick, variant = "orange", icon: Icon, className = "", disabled = false }) => {
    const baseStyle = VARIANTS[variant] || VARIANTS.orange;

    return (
        <motion.button
            whileHover={!disabled ? { y: -2 } : {}}
            whileTap={!disabled ? { y: 2, boxShadow: "none" } : {}}
            onClick={onClick}
            disabled={disabled}
            className={`
        relative group flex items-center justify-center gap-3 px-6 py-3 rounded-2xl
        font-black text-lg tracking-wide border-b-4 transition-all duration-100
        disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:border-b-0 disabled:translate-y-1
        ${baseStyle}
        ${className}
      `}
        >
            {Icon && <Icon size={24} strokeWidth={3} />}
            {children}
        </motion.button>
    );
};
