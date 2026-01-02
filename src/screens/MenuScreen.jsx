import React from "react";
import { motion } from "motion/react";
import { stories } from "../data/stories";

export default function MenuScreen({ onSelectStory }) {
    return (
        <div className="flex flex-col items-center h-full p-8">
            <h2 className="text-4xl font-bold text-purple-600 mb-8">Pilih Cerita Kamu!</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
                {stories.map((story, index) => {
                    const Icon = story.icon;
                    return (
                        <motion.button
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: index * 0.1, duration: 0.5 },
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 2,
                                transition: { delay: 0, duration: 0.2 }, // Paksa delay jadi 0
                            }}
                            onClick={() => onSelectStory(story)}
                            className={`${story.color} p-6 rounded-3xl shadow-xl border-4 border-white text-white flex flex-col items-center gap-4 transition-shadow hover:shadow-2xl`}
                        >
                            <div className="bg-white/30 p-4 rounded-full backdrop-blur-sm">
                                <Icon size={48} strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-bold tracking-wide">{story.title}</span>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
