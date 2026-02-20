"use client";
import { useState } from "react";

type News = {
    title: string;
    date: string;
    preview: string;
};

export default function LeftPanel({items }: { items: News[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <aside className="left">
            <h2>Notícias</h2>
            
            {items.map((news, index) => (
                <div 
                key={index} 
                className="news"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                >
                    <strong>{news.title}</strong>
                    <p>{news.date}</p>

                    {hovered === index && (
                        <span className="preview">{news.preview}</span>
                    )}
                </div>
            ))}
        </aside>
    );
}