import { Home, School, Gamepad2, Cake, Trees } from 'lucide-react';
import { audio, img } from 'motion/react-client';
import imgSekolah1 from '../assets/images/anak-sekolah-dasar.png';
import imgSekolah2 from '../assets/images/bertemu-teman.jpg';
import imgSekolah3 from '../assets/images/pulang-sekolah.jpeg';
import imgBola from '../assets/images/minum.jpg';
import imgGiving from '../assets/images/giving.webp';
import imgGiving2 from '../assets/images/fotbar.jpg';
import imgTaman from '../assets/images/eskrim.jpg';

export const stories = [
    {
        id: 1,
        title: "Membantu Ibu Memasak",
        icon: Home,
        color: "bg-orange-400",
        slides: [
            {
                id: 1,
                type: "AWAL",
                text: "Pagi hari, aku masuk ke dapur. Ibu sedang menyiapkan bahan untuk memasak.",
                img: "https://images.unsplash.com/photo-1751620554431-c9014e6e5cb8?q=80&w=1222&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["dapur", "ibu", "aku", "pagi", "masuk"],
                audio: "/audio/masak-awal.mp3"
            },
            {
                id: 2,
                type: "TENGAH",
                highlight: "LALU",
                text: "Lalu, aku membantu ibu mencuci sayuran. Aku mencucinya sampai bersih.",
                img: "https://images.unsplash.com/photo-1578338244254-15d81ad98fa7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["mencuci", "sayuran", "air", "bersih"],
                audio: "/audio/masak-tengah.mp3"
            },
            {
                id: 3,
                type: "TENGAH",
                highlight: "KEMUDIAN",
                text: "Kemudian, ibu memasak sup. Aku membantu mengaduk supnya.",
                img: "https://images.unsplash.com/photo-1627880872609-f7ddd76616c2?q=80&w=831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["memasak", "mengaduk", "kompor", "wangi"],
                audio: "/audio/masak-tengah-2.mp3"
            },
            {
                id: 4,
                type: "AKHIR",
                highlight: "AKHIRNYA",
                text: "Akhirnya, kami makan bersama. Supnya sangat enak!",
                img: "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["makan", "keluarga", "enak", "bahagia"],
                audio: "/audio/masak-akhir.mp3"
            }
        ]
    },

    {
        id: 2,
        title: "Hari Pertama Sekolah",
        icon: School,
        color: "bg-blue-400",
        slides: [
            {
                id: 1,
                type: "AWAL",
                text: "Pagi ini aku bangun pagi sekali. Aku memakai seragam sekolahku dengan rapi.",
                img: imgSekolah1,
                words: ["bangun", "pagi", "seragam", "siap", "semangat"],
                audio: "/audio/sekolah-awal.mp3"
            },
            {
                id: 2,
                type: "TENGAH",
                highlight: "LALU",
                text: "Lalu, aku berangkat ke sekolah diantar ayah. Di jalan aku melihat banyak teman.",
                img: "https://images.unsplash.com/photo-1682019426216-f015bafc3af5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["berangkat", "jalan", "sekolah", "ayah", "mobil"],
                audio: "/audio/sekolah-tengah.mp3"
            },
            {
                id: 3,
                type: "TENGAH",
                highlight: "KEMUDIAN",
                text: "Kemudian, aku masuk ke kelas dan bertemu guru baru. Aku juga berkenalan dengan teman sebangku.",
                img: imgSekolah2,
                words: ["bertemu", "teman", "guru", "kelas", "salam"],
                audio: "/audio/sekolah-tengah-2.mp3"
            },
            {
                id: 4,
                type: "AKHIR",
                highlight: "AKHIRNYA",
                text: "Akhirnya, bel pulang berbunyi. Aku pulang dengan hati senang karena punya banyak teman baru.",
                img: imgSekolah3,
                words: ["belajar", "main", "pulang", "senang", "seru"],
                audio: "/audio/sekolah-akhir.mp3"
            }
        ]
    },

    {
        id: 3,
        title: "Main Bola",
        icon: Gamepad2,
        color: "bg-green-400",
        slides: [
            {
                id: 1,
                type: "AWAL",
                text: "Sore hari, aku mengajak teman-teman pergi ke lapangan. Kami ingin bermain bola.",
                img: "https://images.unsplash.com/photo-1633715151359-6fe04c8a0af5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["sore", "lapangan", "ajak", "teman", "bola"],
                audio: "/audio/bola-awal.mp3"
            },
            {
                id: 2,
                type: "TENGAH",
                highlight: "LALU",
                text: "Lalu, kami mulai menendang bola. Aku berlari cepat mengejar bola itu.",
                img: "https://images.unsplash.com/photo-1717942669436-9116c552efe4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["mulai", "tendang", "lari", "kejar", "cepat"],
                audio: "/audio/bola-tengah.mp3"
            },
            {
                id: 3,
                type: "TENGAH",
                highlight: "KEMUDIAN",
                text: "Kemudian, temanku mengoper bola padaku. Aku menendang kuat dan mencetak gol!",
                img: "https://images.unsplash.com/photo-1632328266313-8a1d49998fe2?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["gol", "sorak", "senang", "tepuk", "hore"],
                audio: "/audio/bola-tengah-2.mp3"
            },
            {
                id: 4,
                type: "AKHIR",
                highlight: "AKHIRNYA",
                text: "Akhirnya, matahari mulai terbenam. Kami istirahat minum sebentar lalu pulang ke rumah.",
                img: imgBola,
                words: ["istirahat", "minum", "capek", "pulang", "puas"],
                audio: "/audio/bola-akhir.mp3"
            }
        ]
    },

    {
        id: 4,
        title: "Ulang Tahun",
        icon: Cake,
        color: "bg-pink-400",
        slides: [
            {
                id: 1,
                type: "AWAL",
                text: "Hari ini adalah hari ulang tahunku. Ibu menghias rumah dengan balon warna-warni.",
                img: "https://images.unsplash.com/photo-1659670216057-977bb5a43a7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["ulang tahun", "hias", "balon", "ramai", "senang"],
                audio: "/audio/ultah-awal.mp3"
            },
            {
                id: 2,
                type: "TENGAH",
                highlight: "LALU",
                text: "Lalu, teman-temanku datang ke rumah. Mereka semua membawa kado untukku.",
                img: imgGiving,
                words: ["datang", "teman", "kado", "salam", "terima"],
                audio: "/audio/ultah-tengah.mp3"
            },
            {
                id: 3,
                type: "TENGAH",
                highlight: "KEMUDIAN",
                text: "Kemudian, kami bernyanyi bersama. Aku meniup lilin dan memotong kue bolu yang enak.",
                img: "https://images.unsplash.com/photo-1574400621226-d29d5d0a9c95?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["lilin", "tiup", "nyanyi", "kue", "potong"],
                audio: "/audio/ultah-tengah-2.mp3"
            },
            {
                id: 4,
                type: "AKHIR",
                highlight: "AKHIRNYA",
                text: "Akhirnya, kami foto bersama. Aku sangat bahagia hari ini.",
                img: imgGiving2,
                words: ["main", "foto", "senang", "bahagia", "terima kasih"],
                audio: "/audio/ultah-akhir.mp3"
            }
        ]
    },

    {
        id: 5,
        title: "Di Taman",
        icon: Trees,
        color: "bg-emerald-400",
        slides: [
            {
                id: 1,
                type: "AWAL",
                text: "Hari Minggu pagi, ayah mengajak kami pergi ke taman kota. Udaranya sangat segar.",
                img: "https://images.unsplash.com/photo-1698854633016-005ec93ff35f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["minggu", "taman", "pergi", "keluarga", "segar"],
                audio: "/audio/taman-awal.mp3"
            },
            {
                id: 2,
                type: "TENGAH",
                highlight: "LALU",
                text: "Lalu, aku berlari menuju ayunan. Aku bermain ayunan dan perosotan dengan gembira.",
                img: "https://images.unsplash.com/photo-1731473519681-8ce075d542de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["ayunan", "perosotan", "naik", "main", "tinggi"],
                audio: "/audio/taman-tengah.mp3"
            },
            {
                id: 3,
                type: "TENGAH",
                highlight: "KEMUDIAN",
                text: "Kemudian, aku melihat kolam ikan. Aku memberi makan ikan-ikan itu dengan roti.",
                img: "https://images.unsplash.com/photo-1766629501588-63db8d05ab72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                words: ["kolam", "ikan", "beri makan", "roti", "banyak"],
                audio: "/audio/taman-tengah-2.mp3"
            },
            {
                id: 4,
                type: "AKHIR",
                highlight: "AKHIRNYA",
                text: "Akhirnya, hari sudah siang. Kami duduk santai sambil minum es sebelum pulang.",
                img: imgTaman,
                words: ["duduk", "minum", "es", "capek", "pulang"],
                audio: "/audio/taman-akhir.mp3"
            }
        ]
    },
];