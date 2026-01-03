import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle, Home } from "lucide-react";
import { GameButton } from "../components/Button";
import { tutorialSlides } from "../data/tutorial";

export default function TutorialScreen({ onBack }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentSlide = tutorialSlides[currentIndex];

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }

        const audio = new Audio(currentSlide.audio);
        audioRef.current = audio;
        audio.play().catch((e) => console.log("Audio belum siap/error:", e));

        return () => {
            if (audioRef.current) audioRef.current.pause();
        };
    }, [currentIndex]);

    const handleNext = () => {
        if (currentIndex < tutorialSlides.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            onBack();
        }
    };

    const Icon = currentSlide.icon;

    return (
        <div className="h-full flex flex-col items-center justify-center p-4 relative">
            <div className="absolute top-4 left-4">
                <GameButton variant="white" onClick={onBack} icon={Home}>
                    Kembali
                </GameButton>
            </div>

            <h2 className="text-4xl font-comic font-bold text-purple-600 mb-8 drop-shadow-sm">Panduan Belajar</h2>

            <div className="w-full max-w-2xl">
                <AnimatePresence mode="wait">
                    <motion.div key={currentIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} className="bg-white p-8 rounded-[2.5rem] shadow-xl border-4 border-white flex flex-col items-center text-center gap-6">
                        <div className={`p-8 rounded-full ${currentSlide.color} mb-2 shadow-inner`}>
                            <Icon size={80} strokeWidth={2} />
                        </div>

                        <h3 className="text-3xl font-bold text-slate-700">{currentSlide.title}</h3>

                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">{currentSlide.text}</p>

                        <div className="flex gap-2 mt-4">
                            {tutorialSlides.map((_, idx) => (
                                <div key={idx} className={`h-3 w-3 rounded-full transition-all ${idx === currentIndex ? "bg-purple-500 w-8" : "bg-slate-200"}`} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="mt-8">
                <GameButton onClick={handleNext} variant={currentIndex === tutorialSlides.length - 1 ? "green" : "orange"} icon={currentIndex === tutorialSlides.length - 1 ? CheckCircle : ArrowRight} className="px-12">
                    {currentIndex === tutorialSlides.length - 1 ? "Saya Mengerti!" : "Lanjut"}
                </GameButton>
            </div>
        </div>
    );
}
