import { MousePointer2, BookOpen, Volume2, Pencil } from 'lucide-react';

export const tutorialSlides = [
    {
        id: 1,
        title: "Cara Melihat Gambar",
        text: "Klik tombol panah kanan untuk melihat gambar cerita berikutnya.",
        icon: MousePointer2,
        color: "bg-blue-100 text-blue-600",
        audio: "/audio/tutorial_1.mp3"
    },
    {
        id: 2,
        title: "Bank Kata",
        text: "Klik tombol 'Buka Bank Kata' untuk melihat kata-kata bantuan.",
        icon: BookOpen,
        color: "bg-yellow-100 text-yellow-600",
        audio: "/audio/tutorial_2.mp3"
    },
    {
        id: 3,
        title: "Mendengarkan Cerita",
        text: "Klik tombol speaker di pojok atas untuk mendengarkan suara.",
        icon: Volume2,
        color: "bg-green-100 text-green-600",
        audio: "/audio/tutorial_3.mp3"
    },
    {
        id: 4,
        title: "Waktunya Menulis",
        text: "Tulis ceritamu sendiri di kotak yang sudah disediakan ya!",
        icon: Pencil,
        color: "bg-pink-100 text-pink-600",
        audio: "/audio/tutorial_4.mp3"
    }
];