import React from "react";
import { motion } from "motion/react";

export const Layout = ({ children }) => {
    const bgClass = "bg-orange-50";

    return (
        <div className={`w-full h-screen ${bgClass} overflow-hidden font-fredoka relative`}>
            <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-yellow-200 rounded-full blur-[100px] opacity-30 pointer-events-none" />

            <motion.div animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }} transition={{ duration: 15, repeat: Infinity }} className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-sky-200 rounded-full blur-[100px] opacity-30 pointer-events-none" />

            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#94a3b8 2px, transparent 2px)",
                    backgroundSize: "30px 30px",
                }}
            ></div>

            <div className="relative z-10 w-full h-full flex flex-col">{children}</div>
        </div>
    );
};
