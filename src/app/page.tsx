"use client";

// src/app/page.tsx
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectCarousel from "@/app/components/ProjectCarousel";
import PokemonTeam from "@/app/components/PokemonTeam";
import Typewriter from "@/app/components/Typewriter";
import Image from "next/image";

export default function HomePage() {
  const [showSqlHero, setShowSqlHero] = useState(false);
  const [showSqlAbout, setShowSqlAbout] = useState(false);
  const [showSqlLearning, setShowSqlLearning] = useState(false);

  return (
    <main className="min-h-screen bg-neo-cream text-neo-black font-sans selection:bg-neo-yellow selection:text-black">

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 bg-pattern-grid">
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-white border-3 border-neo-black shadow-neo p-8 md:p-12 mb-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div
              className="inline-block bg-neo-black text-neo-yellow font-mono text-sm md:text-base px-4 py-2 mb-6 cursor-pointer hover:bg-neo-yellow hover:text-black transition-colors border-2 border-neo-black"
              onClick={() => setShowSqlHero(!showSqlHero)}
            >
              {showSqlHero ? "SELECT name, title, interests FROM nathan_glen;" : "Nathan Glen, Student & Developer"}
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
              Nathan<br />Glen
            </h1>

            <div className="bg-neo-black text-neo-green font-mono p-4 border-2 border-neo-black mb-6 text-left shadow-sm overflow-hidden whitespace-nowrap">
              <span className="mr-2">$</span>
              <Typewriter text="cd /home/nathan/skills && ls -la" speed={50} />
            </div>

            <div className="text-xl md:text-2xl font-bold border-t-3 border-dashed border-neo-black pt-6 mt-6">
              <span className="bg-neo-green px-2 py-1 mr-2 inline-block -rotate-2">Data Science</span>
              <span className="bg-neo-blue px-2 py-1 mr-2 inline-block rotate-1">AI</span>
              <span className="bg-neo-red px-2 py-1 inline-block -rotate-1">Bioinformatics</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/NathanG1en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-neo-black border-3 border-neo-black px-6 py-3 font-bold hover:shadow-neo hover:-translate-y-1 transition-all active:translate-y-0 active:shadow-none"
            >
              <Github size={20} strokeWidth={2.5} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/nathan-glen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-neo-blue text-neo-black border-3 border-neo-black px-6 py-3 font-bold hover:shadow-neo hover:-translate-y-1 transition-all active:translate-y-0 active:shadow-none"
            >
              <Linkedin size={20} strokeWidth={2.5} />
              LinkedIn
            </a>

            <a
              href="mailto:nathanglen@ufl.edu"
              className="flex items-center gap-2 bg-neo-yellow text-neo-black border-3 border-neo-black px-6 py-3 font-bold hover:shadow-neo hover:-translate-y-1 transition-all active:translate-y-0 active:shadow-none"
            >
              <Mail size={20} strokeWidth={2.5} />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full py-20 px-6 border-t-3 border-neo-black bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neo-black translate-x-2 translate-y-2"></div>
              <Image
                src="/images/About.png"
                alt="About"
                width={250}
                height={250}
                className="relative border-3 border-neo-black bg-white z-10"
              />
            </div>
          </div>

          <div className="md:col-span-8">
            <h2
              className="text-4xl font-black mb-8 cursor-pointer inline-block bg-neo-red px-4 py-2 border-3 border-neo-black shadow-neo-sm transform -rotate-1 hover:rotate-0 transition-transform"
              onClick={() => setShowSqlAbout(!showSqlAbout)}
            >
              {showSqlAbout ? (
                <span className="font-mono text-xl">SELECT * FROM about_me;</span>
              ) : (
                "About Me"
              )}
            </h2>

            <div className="bg-white p-8 border-3 border-neo-black shadow-neo">
              <p className="mb-4 text-lg font-medium">
                <span className="bg-neo-yellow px-1 border border-black mr-2 font-bold">bio:</span>
                &quot;I&apos;m a Data Science student at the University of Florida with a minor in Economics, graduating in 2026.&quot;
              </p>
              <p className="mb-4 text-lg font-medium">
                <span className="bg-neo-green px-1 border border-black mr-2 font-bold">experience:</span>
                &quot;I have experience in data analysis and basic applications of data science. I&apos;m currently an AI Scholar and a member of the Graim Lab, studying bioinformatics!&quot;
              </p>
              <p className="text-lg font-medium">
                <span className="bg-neo-blue px-1 border border-black mr-2 font-bold">goal:</span>
                &quot;I love working with data, and am looking to apply my toolkit to real problems!&quot;
              </p>

              <a
                href="/NathanGlenResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-neo-black text-white px-8 py-3 font-bold border-3 border-transparent hover:bg-white hover:text-black hover:border-neo-black hover:shadow-neo transition-all"
              >
                View Full Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Learning Section */}
      <section id="learning" className="w-full py-20 px-6 bg-neo-yellow border-t-3 border-neo-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl font-black mb-12 inline-block bg-white px-4 py-2 border-3 border-neo-black shadow-neo transform rotate-1 cursor-pointer"
            onClick={() => setShowSqlLearning(!showSqlLearning)}
          >
            {showSqlLearning ? (
              <span className="font-mono text-xl">SELECT * FROM continuous_learning;</span>
            ) : (
              "Continuous Learning"
            )}
          </h2>

          <div className="max-w-md mx-auto">
            <div className="bg-white border-3 border-neo-black shadow-neo p-8 hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-neo-blue border-3 border-neo-black flex items-center justify-center mx-auto mb-6 shadow-neo-sm rounded-none">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-neo-black mb-3 uppercase tracking-tight">Learning Journey</h3>
                <p className="text-neo-black font-medium mb-6">Explore my university courses, and other professional development endeavors!</p>
                <a
                  href="/learning"
                  className="inline-block bg-neo-green text-black border-3 border-neo-black px-8 py-3 font-bold hover:shadow-neo hover:-translate-y-1 transition-all"
                >
                  View Learning Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Section */}
      <PokemonTeam />

      <div id="projects" className="border-t-3 border-neo-black">
        <ProjectCarousel />
      </div>

    </main>
  );
}