"use client";

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center">Loading Diagram...</div>
});

interface NodeObject {
    id: string;
    label: string;
    type: 'Database' | 'Table';
    columns: string[];
    x?: number;
    y?: number;
    fx?: number;
    fy?: number;
}

const graphData = {
    nodes: [
        { id: 'db', label: "nathans_stuff", type: 'Database', columns: ["Nathan Glen's Portfolio"] },
        { id: 'about', label: 'about_me', type: 'Table', columns: ['bio: TEXT', 'experience: TEXT', 'goal: TEXT'] },
        { id: 'projects', label: 'projects', type: 'Table', columns: ['title: VARCHAR', 'description: TEXT', 'tech: TEXT[]'] },
        { id: 'contact', label: 'contact_form', type: 'Table', columns: ['name: VARCHAR', 'email: VARCHAR', 'message: TEXT'] },
        { id: 'research', label: 'research', type: 'Table', columns: ['title: VARCHAR', 'pi: VARCHAR', 'dept: VARCHAR'] },
        { id: 'coursework', label: 'coursework', type: 'Table', columns: ['course_code: VARCHAR', 'course_name: TEXT'] },
    ] as NodeObject[],
    links: [
        { source: 'db', target: 'about', label: 'SELECT' },
        { source: 'db', target: 'projects', label: 'SELECT' },
        { source: 'db', target: 'contact', label: 'INSERT' },
        { source: 'db', target: 'research', label: 'SELECT' },
        { source: 'db', target: 'coursework', label: 'SELECT' },
    ],
};

export default function DatabaseDiagram() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fgRef = useRef<any>(null);

    useEffect(() => {
        const fg = fgRef.current as { d3Force: (name: string, force: null) => void; zoomToFit: (ms?: number, px?: number) => void } | null;
        if (fg) {
            // keep center force disabled (no rubber-band)
            fg.d3Force('center', null);
            // center and fit all nodes on initial render
            requestAnimationFrame(() => {
              fg.zoomToFit(400, 60);
            });
        }
    }, []);

    return (
        <div className="bg-gray-100 rounded-lg border-2 border-gray-300 shadow-inner overflow-hidden w-full h-[500px]">
            <ForceGraph2D
                ref={fgRef}
                graphData={graphData}
                nodeCanvasObject={(genericNode, ctx, globalScale) => {
                    const node = genericNode as NodeObject;
                    const nodeWidth = 160;
                    const headerHeight = 28;
                    const lineHeight = 16;
                    const nodeHeight = headerHeight + (node.columns.length * lineHeight) + 8;

                    // Node body
                    ctx.fillStyle = '#fff';
                    ctx.strokeStyle = '#333';
                    ctx.lineWidth = 1 / globalScale;
                    ctx.beginPath();
                    ctx.rect(node.x! - nodeWidth / 2, node.y! - nodeHeight / 2, nodeWidth, nodeHeight);
                    ctx.fill();
                    ctx.stroke();

                    // Header
                    ctx.fillStyle = '#e2e8f0'; // bg-gray-200
                    ctx.beginPath();
                    ctx.rect(node.x! - nodeWidth / 2, node.y! - nodeHeight / 2, nodeWidth, headerHeight);
                    ctx.fill();
                    ctx.stroke();

                    // Header text
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = '#333';
                    ctx.font = `6px 'Geist Mono', monospace`;
                    ctx.fillText(node.label, node.x!, node.y! - nodeHeight / 2 + 10);
                    ctx.font = `4px 'Geist Mono', monospace`;
                    ctx.fillText(`<<${node.type}>>`, node.x!, node.y! - nodeHeight / 2 + 20);

                    // Columns
                    ctx.textAlign = 'left';
                    ctx.font = `5px 'Geist Mono', monospace`;
                    node.columns.forEach((col, i) => {
                        ctx.fillText(col, node.x! - nodeWidth / 2 + 8, node.y! - nodeHeight / 2 + headerHeight + 8 + (i * lineHeight));
                    });
                }}
                onNodeDragEnd={(node) => {
                    const n = node as NodeObject;
                    n.fx = n.x;
                    n.fy = n.y;
                }}
                nodePointerAreaPaint={(node, color, ctx) => {
                    const n = node as NodeObject;
                    const nodeWidth = 160;
                    const headerHeight = 28;
                    const lineHeight = 16;
                    const nodeHeight = headerHeight + ((n.columns || []).length * lineHeight) + 8;
                    ctx.fillStyle = color;
                    ctx.fillRect(n.x! - nodeWidth / 2, n.y! - nodeHeight / 2, nodeWidth, nodeHeight);
                }}
                linkDirectionalArrowLength={3.5}
                linkDirectionalArrowRelPos={1}
                linkCurvature={0.25}
                linkColor={() => '#9ca3af'}
                linkWidth={1}
            />
        </div>
    );
} 