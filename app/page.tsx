"use client"

import Spline from "@splinetool/react-spline";
import React, {useState} from 'react';

export default function Home() {

    const emojis = ['😀', '😂', '😍', '🥳', '😎', '🤔', '🙄', '😜', '🤩', '😡', 'welcome wpp'];
    const [emojiList, setEmojiList] = useState<string[]>([]);

    function onMouseDown(e: { target: { name: string; }; }) {
        console.log("onMouseDown", e)
        console.log("click name:", e.target.name)
        if (e.target.name === 'key1') {
            console.log("click key1")
        }

        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        setEmojiList(prevList => [...prevList, randomEmoji]);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="mt-5 text-3xl h-[100px]">
                {emojiList.map((emoji, index) => (
                    <span key={index}>{emoji}</span>
                ))}
            </div>

            <div className="w-[700px] h-[700px] mt-5">
                <Spline
                    scene="https://prod.spline.design/4SHdr47qXQvKjgcW/scene.splinecode"
                    onSplineMouseDown={onMouseDown}
                />
            </div>
        </div>
    );
}
