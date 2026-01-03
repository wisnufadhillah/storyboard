import React, { useState, useEffect, useRef } from "react"; 
import { motion } from "motion/react";
import { Volume2, ArrowRight, BookOpen, PauseCircle } from "lucide-react"; 
import { GameButton } from "../components/Button";

export default function StoryScreen({ slideData, onNext }) {
    const [showWords, setShowWords] = useState(false);

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleAudio = () => {
        if (!slideData.audio) {
            alert("Maaf bolo, audio untuk bagian ini belum tersedia!");
            return;
        }

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            const newAudio = new Audio(slideData.audio);
            audioRef.current = newAudio;
            newAudio.play();
            setIsPlaying(true);

            newAudio.onended = () => setIsPlaying(false);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
            setIsPlaying(false);
        }
    }, [slideData]);

    return (
        <div className="flex flex-col h-full w-full relative">
            <div className="flex justify-between items-center mb-6 shrink-0">
                <span className="bg-yellow-300 px-6 py-2 rounded-full font-bold text-yellow-900 shadow-md border-2 border-white text-lg">Bagian: {slideData.type}</span>

                <button
                    onClick={toggleAudio}
                    className={`
                        p-3 rounded-full transition shadow-sm border-2 border-white 
                        ${isPlaying ? "bg-green-100 text-green-600 animate-pulse" : "bg-sky-100 text-sky-600 hover:bg-sky-200 hover:scale-110"}
                    `}
                >
                    {isPlaying ? <PauseCircle size={28} /> : <Volume2 size={28} />}
                </button>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-y-auto pb-4">
                <motion.div key={slideData.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full aspect-[4/3] bg-gray-200 rounded-3xl border-4 border-white shadow-lg overflow-hidden relative group">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">Sedang memuat gambar...</div>
                    <img
                        src={slideData.img}
                        alt="Ilustrasi Cerita"
                        className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                            e.target.style.display = "none";
                        }}
                    />
                </motion.div>

                <div className="flex flex-col gap-6 h-full justify-center">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border-2 border-purple-100 shadow-sm">
                        <p className="text-2xl md:text-3xl font-medium leading-loose text-slate-700 font-fredoka">
                            {slideData.text.split(" ").map((word, i) => {
                                const isHighlight = slideData.highlight && word.toUpperCase().includes(slideData.highlight);
                                return (
                                    <React.Fragment key={i}>
                                        <span className={isHighlight ? "text-red-500 font-bold underline decoration-wavy decoration-2" : ""}>{word}</span> {/* Spasi manual */}
                                    </React.Fragment>
                                );
                            })}
                        </p>
                    </motion.div>

                    <div className="w-full">
                        <GameButton variant="blue" icon={BookOpen} onClick={() => setShowWords(!showWords)} className="w-full mb-4 text-base py-2">
                            {showWords ? "Tutup Bank Kata" : "Buka Bank Kata"}
                        </GameButton>

                        <motion.div initial={false} animate={{ height: showWords ? "auto" : 0, opacity: showWords ? 1 : 0 }} className="overflow-hidden">
                            <div className="grid grid-cols-2 gap-3 p-1">
                                {slideData.words.map((word, idx) => (
                                    <motion.div key={idx} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: idx * 0.05 }} className="bg-yellow-100 text-yellow-800 py-3 px-4 rounded-xl text-center font-bold border-2 border-yellow-200 shadow-sm text-lg">
                                        {word}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-end shrink-0 pb-6 pr-2">
                <GameButton onClick={onNext} variant="orange" icon={ArrowRight}>
                    Lanjut
                </GameButton>
            </div>
        </div>
    );
}
