"use client";

// src/app/page.tsx
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectCarousel from "@/app/components/ProjectCarousel";
import DatabaseDiagram from "@/app/components/DatabaseDiagram";
import Typewriter from "@/app/components/Typewriter";
import Image from "next/image";

export default function HomePage() {
  const [showSqlHero, setShowSqlHero] = useState(false);
  const [showSqlAbout, setShowSqlAbout] = useState(false);
  const [showSqlLearning, setShowSqlLearning] = useState(false);
  const [showSqlSchema, setShowSqlSchema] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6">
      {/* Hero Section */}
      <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen text-center">
        {/* Background SVG - Full Width */}
        <div className="absolute inset-0 z-0 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Sky gradient */}
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
              </linearGradient>
              
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#6b7280', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#4b5563', stopOpacity: 1 }} />
              </linearGradient>
              
              <linearGradient id="lakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 0.7 }} />
              </linearGradient>
            </defs>
            
            {/* Sky */}
            <rect width="100%" height="100%" fill="url(#skyGradient)" />
            
            {/* Distant mountains */}
            <path
              d="M0,600 L200,400 L400,500 L600,350 L800,450 L1000,380 L1200,420 L1200,800 L0,800 Z"
              fill="url(#mountainGradient)"
              opacity="0.5"
            />
            
            {/* Middle mountains */}
            <path
              d="M0,650 L150,500 L300,550 L450,450 L600,500 L750,420 L900,480 L1050,440 L1200,460 L1200,800 L0,800 Z"
              fill="url(#mountainGradient)"
              opacity="0.6"
            />
            
            {/* Lake reflection */}
            <ellipse
              cx="600"
              cy="750"
              rx="400"
              ry="80"
              fill="url(#lakeGradient)"
              opacity="0.4"
            />
            
            {/* Foreground mountains */}
            <path
              d="M0,700 L100,600 L200,650 L300,580 L400,620 L500,570 L600,600 L700,580 L800,610 L900,590 L1000,620 L1100,600 L1200,610 L1200,800 L0,800 Z"
              fill="url(#mountainGradient)"
              opacity="0.7"
            />
            
            {/* Animated particles */}
            <g className="animate-pulse">
              <circle cx="150" cy="150" r="1" fill="#ffffff" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="300" cy="100" r="1.2" fill="#ffffff" opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="450" cy="180" r="0.8" fill="#ffffff" opacity="0.7">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="600" cy="120" r="1.5" fill="#ffffff" opacity="0.9">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="750" cy="160" r="1" fill="#ffffff" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="900" cy="140" r="0.7" fill="#ffffff" opacity="0.8">
                <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="1050" cy="170" r="1.3" fill="#ffffff" opacity="0.7">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="3.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="0.9" fill="#ffffff" opacity="0.5">
                <animate attributeName="opacity" values="0.1;0.6;0.1" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="350" cy="220" r="1.1" fill="#ffffff" opacity="0.8">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="500" cy="160" r="0.6" fill="#ffffff" opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="650" cy="200" r="1.4" fill="#ffffff" opacity="0.7">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="4.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="800" cy="180" r="0.8" fill="#ffffff" opacity="0.5">
                <animate attributeName="opacity" values="0.1;0.7;0.1" dur="2.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="950" cy="200" r="1.2" fill="#ffffff" opacity="0.8">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.7s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Content - Centered */}
        <div className="relative z-10 text-white max-w-2xl mx-auto px-6">
          <code
            className="text-2xl md:text-3xl font-mono text-blue-200 mb-4 block cursor-pointer transition-colors hover:text-blue-100"
            onClick={() => setShowSqlHero(!showSqlHero)}
          >
            {showSqlHero ? "SELECT name, title, interests FROM nathan_glen;" : "Nathan Glen, Student & Developer"}
          </code>
          <h1 className="text-5xl font-extrabold mb-4 text-white">Nathan Glen</h1>
          <p className="text-xl text-gray-200 mb-8 h-8">
            <Typewriter text={` > Data Science @ UF | AI, Analytics & Bioinformatics`} />
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/NathanG1en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition border border-white/30"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/nathan-glen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="mailto:nathanglen@ufl.edu"
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition border border-white/30"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-6 font-mono cursor-pointer transition-colors"
            onClick={() => setShowSqlAbout(!showSqlAbout)}
          >
            {showSqlAbout ? (
              <>
                <span className="text-blue-600 hover:text-blue-800">SELECT</span> * <span className="text-blue-600 hover:text-blue-800">FROM</span> about_me;
              </>
            ) : (
              <span className="text-gray-900 hover:text-blue-600">About Me</span>
            )}
          </h2>

          <Image
            src="/images/About.png"
            alt="About"
            width={200}
            height={200}
            className="mx-auto mb-6 rounded-full shadow-lg object-cover"
          />

          <div className="text-lg text-gray-700 text-left bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
            <p className="mb-4">
              <span className="font-semibold text-gray-800">bio:</span> &quot;I&apos;m a Data Science student at the University of Florida with a minor in Economics, graduating in 2026.&quot;
            </p>
            <p className="mb-4">
              <span className="font-semibold text-gray-800">experience:</span> &quot;I have experience in data analysis and basic applications of data science. I&apos;m currently an AI Scholar and a member of the Graim Lab, studying bioinformatics!&quot;
            </p>
            <p>
              <span className="font-semibold text-gray-800">goal:</span> &quot;I love working with data, and am looking to apply my toolkit to real problems!&quot;
            </p>
          </div>
          <a
            href="/NathanGlenResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Full Resume
          </a>
        </div>
      </section>

      {/* Continuous Learning Section */}
      <section id="learning" className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-gray-50 py-20 px-6 -mt-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-8 font-mono cursor-pointer transition-colors"
            onClick={() => setShowSqlLearning(!showSqlLearning)}
          >
            {showSqlLearning ? (
              <>
                <span className="text-blue-600 hover:text-blue-800">SELECT</span> * <span className="text-blue-600 hover:text-blue-800">FROM</span> continuous_learning;
              </>
            ) : (
              <span className="text-gray-900 hover:text-blue-600">Continuous Learning</span>
            )}
          </h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Learning Journey</h3>
                <p className="text-gray-600 text-sm mb-6">Explore my university courses, and other professional development endeavors!</p>
                <a
                  href="/learning"
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Learning Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Section */}
      <section id="schema" className="w-full bg-gradient-to-br from-indigo-100 via-blue-50 to-gray-50 py-20 px-6 -mt-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2
                className="text-3xl font-bold mb-8 font-mono cursor-pointer transition-colors"
                onClick={() => setShowSqlSchema(!showSqlSchema)}
            >
                {showSqlSchema ? (
                <>
                    <span className="text-blue-600 hover:text-blue-800">DESCRIBE</span> nathans_stuff;
                </>
                ) : (
                <span className="text-gray-900 hover:text-blue-600">My Website&apos;s Schema</span>
                )}
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-4">
              <DatabaseDiagram />
            </div>
        </div>
      </section>
      
      <div id="projects">
        <ProjectCarousel />
      </div>

    </main>
  );
}