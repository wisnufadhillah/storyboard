import React from "react";
import { motion } from "motion/react";
import { Play, Sparkles } from "lucide-react";
import mascotImg from "../assets/images/siswa-sd.png";

export default function IntroScreen({ onStart }) {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="relative">
                <Sparkles className="absolute -top-6 -right-6 text-yellow-400 w-12 h-12 animate-pulse" />
                <h1 className="text-6xl font-comic font-bold text-blue-600 drop-shadow-lg">
                    Ayo Menulis <br /> <span className="text-orange-500">Cerita!</span>
                </h1>
            </motion.div>

            <motion.img src={mascotImg} alt="Maskot" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-64 h-64 object-contain" />

            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onStart} className="bg-green-500 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-xl border-b-4 border-green-700 flex items-center gap-3">
                <Play fill="white" /> Mulai Belajar
            </motion.button>
        </div>
    );
}
