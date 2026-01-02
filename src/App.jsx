import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Home } from "lucide-react";

import { Layout } from "./components/Layout";
import { Card } from "./components/Card";
import { GameButton } from "./components/Button";

import IntroScreen from "./screens/IntroScreen";
import MenuScreen from "./screens/MenuScreen";
import StoryScreen from "./screens/StoryScreen";
import WritingScreen from "./screens/WritingScreen";
import FeedbackScreen from "./screens/FeedbackScreen";

export default function App() {
    const [screen, setScreen] = useState("intro");
    const [selectedStory, setSelectedStory] = useState(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const [userStory, setUserStory] = useState(null);

    const handleStart = () => setScreen("menu");

    const handleSelectStory = (story) => {
        setSelectedStory(story);
        setSlideIndex(0);
        setScreen("story");
    };

    const handleNextSlide = () => {
        if (slideIndex < selectedStory.slides.length - 1) {
            setSlideIndex((prev) => prev + 1);
        } else {
            setScreen("writing");
        }
    };

    const handleFinishWriting = (storyData) => {
        setUserStory(storyData);
        setScreen("feedback");
    };

    const handleReset = () => {
        setScreen("intro");
        setSelectedStory(null);
        setSlideIndex(0);
        setUserStory(null);
    };

    const renderContent = () => {
        switch (screen) {
            case "intro":
                return <IntroScreen onStart={handleStart} />;
            case "menu":
                return <MenuScreen onSelectStory={handleSelectStory} />;
            case "story":
                return <StoryScreen slideData={selectedStory.slides[slideIndex]} onNext={handleNextSlide} />;
            case "writing":
                return <WritingScreen onFinish={handleFinishWriting} />;
            case "feedback":
                return <FeedbackScreen finalStory={userStory} onReset={handleReset} />;
            default:
                return <IntroScreen onStart={handleStart} />;
        }
    };

    return (
        <Layout>
            {screen !== "intro" && (
                <div className="absolute top-4 left-4 z-50">
                    <GameButton variant="white" onClick={() => setScreen("menu")} className="p-3 rounded-full shadow-lg">
                        <Home size={24} className="text-sky-600" />
                    </GameButton>
                </div>
            )}

            <main className="flex-1 flex items-center justify-center p-4 md:p-6 w-full h-full relative z-10">
                <AnimatePresence mode="wait">
                    <Card key={screen}>{renderContent()}</Card>
                </AnimatePresence>
            </main>
        </Layout>
    );
}
