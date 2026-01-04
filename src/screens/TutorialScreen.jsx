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
        audio.play().catch((e) => console.log("Audio error:", e));

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
        <div className="h-full w-full flex flex-col items-center p-4 md:p-6 overflow-y-auto no-scrollbar relative">
            <div className="w-full max-w-2xl flex flex-col md:block items-start relative mb-6 shrink-0">
                <div className="self-start md:absolute md:top-2 md:left-0 z-20 mb-4 md:mb-0">
                    <GameButton variant="white" onClick={onBack} icon={Home} className="text-sm py-2 px-4">
                        Kembali
                    </GameButton>
                </div>

                <h2 className="w-full text-center text-3xl md:text-4xl font-comic font-bold text-purple-600 drop-shadow-sm mt-2 md:mt-4">Panduan Belajar</h2>
            </div>

            <div className="w-full max-w-xl flex-1 flex items-center justify-center min-h-[350px]">
                <AnimatePresence mode="wait">
                    <motion.div key={currentIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} className="w-full bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border-4 border-white flex flex-col items-center text-center gap-4 md:gap-6">
                        <div className={`p-6 md:p-8 rounded-full ${currentSlide.color} mb-1 shadow-inner`}>
                            <Icon size={48} className="md:w-20 md:h-20" strokeWidth={2.5} />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-slate-700">{currentSlide.title}</h3>

                        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">{currentSlide.text}</p>

                        <div className="flex gap-2 mt-2">
                            {tutorialSlides.map((_, idx) => (
                                <div key={idx} className={`h-2 md:h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-purple-500 w-6 md:w-8" : "bg-slate-200 w-2 md:w-3"}`} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="mt-6 md:mt-8 pb-4 shrink-0">
                <GameButton onClick={handleNext} variant={currentIndex === tutorialSlides.length - 1 ? "green" : "orange"} icon={currentIndex === tutorialSlides.length - 1 ? CheckCircle : ArrowRight} className="px-8 md:px-12 w-full md:w-auto text-lg">
                    {currentIndex === tutorialSlides.length - 1 ? "Saya Mengerti!" : "Lanjut"}
                </GameButton>
            </div>
        </div>
    );
}
