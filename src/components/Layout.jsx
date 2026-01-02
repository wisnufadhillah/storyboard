import React from "react";
import { motion } from "motion/react";

export const Layout = ({ children }) => {
    // --- PILIH WARNA SOLID FAVORITMU DI SINI ---

    // OPSI 1: Kertas Bersih (Paling Rapi & Kontras)
    // const bgClass = "bg-slate-50";

    // OPSI 2: Krem Hangat (Paling "Ramah Anak")
    const bgClass = "bg-orange-50";

    // OPSI 3: Langit Biru (Paling "Edukasi")
    // const bgClass = "bg-sky-50";

    return (
        <div className={`w-full h-screen ${bgClass} overflow-hidden font-fredoka relative`}>
            {/* --- DEKORASI (Opsional: Blob Warna Tipis-Tipis) --- */}
            {/* Kalau mau benar-benar polos, hapus bagian motion.div ini. 
          Tapi saya sarankan biarkan ada sedikit warna tipis biar manis. */}

            <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-yellow-200 rounded-full blur-[100px] opacity-30 pointer-events-none" />

            <motion.div animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }} transition={{ duration: 15, repeat: Infinity }} className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-sky-200 rounded-full blur-[100px] opacity-30 pointer-events-none" />

            {/* --- TEXTURE DOTS (Pola Bintik Buku Tulis) --- */}
            {/* Ini kuncinya agar warna solid tidak terlihat membosankan */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#94a3b8 2px, transparent 2px)",
                    backgroundSize: "30px 30px",
                }}
            ></div>

            {/* --- MAIN CONTENT --- */}
            <div className="relative z-10 w-full h-full flex flex-col">{children}</div>
        </div>
    );
};
