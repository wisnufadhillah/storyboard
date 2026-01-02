import React, { useState, useRef } from "react"; // 1. Tambah useRef
import { Save, AlertCircle } from "lucide-react";
import { GameButton } from "../components/Button";
import { motion } from "motion/react";

export default function WritingScreen({ onFinish }) {
    const [story, setStory] = useState({ awal: "", tengah: "", akhir: "" });
    const [error, setError] = useState("");

    const errorAudioRef = useRef(new Audio("/audio/warning.mp3"));

    const handleSave = () => {
        if (!story.awal.trim() || !story.tengah.trim() || !story.akhir.trim()) {
            setError("Wah, ceritanya belum lengkap! Isi semua kotak dulu ya 😊");

            if (errorAudioRef.current) {
                errorAudioRef.current.pause();
                errorAudioRef.current.currentTime = 0;
                errorAudioRef.current.play().catch((e) => console.log("Gagal memutar audio:", e));
            }

            return;
        }

        setError("");
        onFinish(story);
    };

    const handleChange = (field, value) => {
        setStory({ ...story, [field]: value });
        if (error) setError("");
    };

    return (
        <div className="h-full flex flex-col p-2 md:p-4 overflow-y-auto w-full">
            <h2 className="text-3xl md:text-4xl font-comic font-bold text-center text-purple-600 mb-6 drop-shadow-sm">Ayo Tulis Ceritamu!</h2>

            <div className="grid gap-6 w-full max-w-4xl mx-auto pb-6">
                <div className="bg-pink-50 p-6 rounded-3xl border-4 border-pink-200 shadow-sm hover:border-pink-300 transition-colors">
                    <label className="block text-pink-600 font-bold text-xl mb-2">AWAL (Pembuka)</label>
                    <textarea className="w-full p-4 rounded-2xl border-2 border-pink-100 focus:border-pink-400 focus:ring-0 text-lg bg-white/80 resize-none placeholder:text-pink-200/70 text-slate-700" rows="3" placeholder="Contoh: Pagi hari, aku..." value={story.awal} onChange={(e) => handleChange("awal", e.target.value)} />
                </div>

                <div className="bg-blue-50 p-6 rounded-3xl border-4 border-blue-200 shadow-sm hover:border-blue-300 transition-colors">
                    <label className="block text-blue-600 font-bold text-xl mb-2">TENGAH (Kejadian Utama)</label>
                    <p className="text-sm text-blue-400 mb-2 font-bold">Gunakan kata "Lalu" atau "Kemudian"</p>
                    <textarea className="w-full p-4 rounded-2xl border-2 border-blue-100 focus:border-blue-400 focus:ring-0 text-lg bg-white/80 resize-none text-slate-700" rows="4" value={story.tengah} onChange={(e) => handleChange("tengah", e.target.value)} />
                </div>

                <div className="bg-green-50 p-6 rounded-3xl border-4 border-green-200 shadow-sm hover:border-green-300 transition-colors">
                    <label className="block text-green-600 font-bold text-xl mb-2">AKHIR (Penutup)</label>
                    <p className="text-sm text-green-400 mb-2 font-bold">Gunakan kata "Akhirnya"</p>
                    <textarea className="w-full p-4 rounded-2xl border-2 border-green-100 focus:border-green-400 focus:ring-0 text-lg bg-white/80 resize-none text-slate-700" rows="3" value={story.akhir} onChange={(e) => handleChange("akhir", e.target.value)} />
                </div>

                <div className="flex flex-col items-center gap-4 mt-2">
                    {error && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-100 text-red-600 px-6 py-3 rounded-xl border-2 border-red-200 flex items-center gap-2 font-bold shadow-sm">
                            <AlertCircle size={20} />
                            {error}
                        </motion.div>
                    )}

                    <GameButton onClick={handleSave} variant="orange" icon={Save} className="w-full md:w-auto px-12">
                        Selesai Menulis
                    </GameButton>
                </div>
            </div>
        </div>
    );
}
