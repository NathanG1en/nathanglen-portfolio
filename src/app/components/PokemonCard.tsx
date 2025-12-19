"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PokemonCardProps {
    name: string;
}

interface PokemonData {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    types: {
        type: {
            name: string;
        };
    }[];
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
}

const TYPE_COLORS: { [key: string]: string } = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

export default function PokemonCard({ name }: PokemonCardProps) {
    const [data, setData] = useState<PokemonData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
            .then((res) => res.json())
            .then((d) => {
                setData(d);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch pokemon", err);
                setLoading(false);
            });
    }, [name]);

    if (loading) {
        return (
            <div className="w-full h-64 bg-white border-3 border-neo-black shadow-neo flex items-center justify-center animate-pulse">
                <div className="w-12 h-12 rounded-full border-4 border-neo-black border-t-neo-red animate-spin"></div>
            </div>
        );
    }

    if (!data) return null;

    const mainType = data.types[0].type.name;
    const bgColor = TYPE_COLORS[mainType] || '#fff';

    return (
        <div className="bg-white border-3 border-neo-black shadow-neo hover:-translate-y-2 hover:shadow-neo-lg transition-all duration-300 group">
            {/* Image Area */}
            <div
                className="h-32 flex items-center justify-center border-b-3 border-neo-black relative overflow-hidden"
                style={{ backgroundColor: bgColor }}
            >
                <div className="absolute inset-0 bg-white opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                <Image
                    src={data.sprites.front_default}
                    alt={data.name}
                    width={120}
                    height={120}
                    className="rendering-pixelated transform group-hover:scale-110 transition-transform z-10"
                    style={{ imageRendering: 'pixelated' }}
                />
                <span className="absolute top-2 right-2 font-black text-white text-opacity-50 text-xl">
                    #{String(data.id).padStart(3, '0')}
                </span>
            </div>

            {/* Info Area */}
            <div className="p-4">
                <h3 className="font-black text-neo-black uppercase text-lg mb-2 tracking-wide">{data.name}</h3>

                {/* Types */}
                <div className="flex gap-2 mb-4">
                    {data.types.map((t) => (
                        <span
                            key={t.type.name}
                            className="text-xs font-bold uppercase px-2 py-1 border-2 border-neo-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                            {t.type.name}
                        </span>
                    ))}
                </div>

                {/* Base Stats (Mini) */}
                <div className="space-y-1">
                    {data.stats.slice(0, 3).map((stat) => (
                        <div key={stat.stat.name} className="flex items-center text-xs font-bold font-mono">
                            <span className="w-8 uppercase text-gray-500">{stat.stat.name.substring(0, 2)}</span>
                            <div className="flex-1 h-2 bg-gray-200 border border-black ml-2 relative">
                                <div
                                    className="h-full bg-neo-black"
                                    style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
