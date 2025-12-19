"use client";

import { useState } from "react";
import PokemonCard from "./PokemonCard";

const MY_TEAM = [
    "umbreon",
    "lucario",
    "infernape",
    "gardevoir",
    "metagross",
    "greninja"
];

export default function PokemonTeam() {
    const [showSql, setShowSql] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full">
            {/* Trigger Tab (Visible when closed) */}
            <div
                className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none scale-0' : 'opacity-100 scale-100'}`}
                onClick={() => setIsOpen(true)}
            >
                <div className="group cursor-pointer">
                    <div className="w-16 h-16 bg-neo-red rounded-full border-4 border-neo-black flex items-center justify-center shadow-neo group-hover:shadow-neo-lg group-hover:-translate-y-1 transition-all relative overflow-hidden bg-white">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-neo-red border-b-4 border-neo-black"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-neo-black rounded-full z-10"></div>
                    </div>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 font-black text-xs uppercase tracking-widest bg-neo-black text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Open Team
                    </span>
                </div>
            </div>

            {/* Accordion Content */}
            <section
                id="pokemon-team"
                className={`w-full border-t-3 border-neo-black bg-neo-black relative overflow-hidden transition-all duration-1000 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100 py-20' : 'max-h-0 opacity-0 py-0 border-none'}`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 z-50 bg-neo-black text-white w-10 h-10 border-2 border-white flex items-center justify-center font-black hover:bg-neo-yellow hover:text-black transition-colors shadow-neo hover:shadow-none"
                >
                    X
                </button>

                {/* Background decoration to look like Pokedex */}
                <div className="absolute top-0 left-0 w-full h-full bg-neo-red opacity-100 z-0"></div>

                {/* Circle lights decoration */}
                <div className="absolute top-6 left-6 flex gap-4 z-10">
                    <div className="w-16 h-16 rounded-full bg-blue-400 border-4 border-white shadow-lg animate-pulse"></div>
                    <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-white mt-2"></div>
                    <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white mt-2"></div>
                    <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white mt-2"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10 px-6 pt-12">
                    <div className="text-center mb-12">
                        <h2
                            className="text-4xl font-black mb-8 inline-block bg-white text-neo-black px-6 py-3 border-3 border-neo-black shadow-neo cursor-pointer transform rotate-1 hover:rotate-0 transition-transform uppercase tracking-widest"
                            onClick={() => setShowSql(!showSql)}
                        >
                            {showSql ? (
                                <span className="font-mono text-xl">SELECT * FROM dream_team;</span>
                            ) : (
                                "My Dream Team"
                            )}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
                        {MY_TEAM.map((poke) => (
                            <PokemonCard key={poke} name={poke} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
