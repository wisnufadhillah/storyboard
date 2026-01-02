import React from "react";
import { motion } from "motion/react";

export const Card = ({ children, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            className={`
                bg-white/90 backdrop-blur-sm 
                w-full max-w-7xl max-h-[85vh] 
                rounded-[2.5rem] shadow-2xl shadow-sky-100 border-4 border-white 
                overflow-y-auto overflow-x-hidden
                ${className}
            `}
        >
            <div className="h-full p-6 md:p-12 flex flex-col">{children}</div>
        </motion.div>
    );
};
