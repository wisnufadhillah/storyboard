import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Star, RotateCcw } from "lucide-react";

export default function FeedbackScreen({ finalStory, onReset }) {
    useEffect(() => {
        const audio = new Audio("/audio/hebat.mp3");

        audio.play().catch((error) => {
            console.log("Gagal memutar audio:", error);
        });

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <div className="h-full flex flex-col items-center justify-center p-8 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} className="flex gap-4 mb-8">
                {[1, 2, 3].map((i) => (
                    <Star key={i} size={64} className="text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                ))}
            </motion.div>

            <h2 className="text-5xl font-bold text-green-600 mb-4">Hebat Sekali!</h2>
            <p className="text-xl text-slate-500 mb-8">Kamu sudah berhasil membuat cerita yang bagus.</p>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border-4 border-yellow-200 max-w-2xl w-full text-left space-y-4 mb-8">
                <p>
                    <span className="font-bold text-pink-500">Awal:</span> {finalStory.awal}
                </p>
                <p>
                    <span className="font-bold text-blue-500">Tengah:</span> {finalStory.tengah}
                </p>
                <p>
                    <span className="font-bold text-green-500">Akhir:</span> {finalStory.akhir}
                </p>
            </div>

            <button onClick={onReset} className="bg-slate-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <RotateCcw /> Main Lagi
            </button>
        </div>
    );
}
