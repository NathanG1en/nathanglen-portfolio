"use client";

import { useState } from "react";
import Image from "next/image";

export default function ResearchPage() {
  const [showSqlHeader, setShowSqlHeader] = useState(false);

  return (
    <main className="min-h-screen bg-neo-cream text-neo-black pt-32 pb-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-block bg-white text-neo-black font-mono text-sm md:text-base px-6 py-3 mb-6 cursor-pointer border-3 border-neo-black shadow-neo hover:-translate-y-1 active:translate-y-0 transition-all"
            onClick={() => setShowSqlHeader((v) => !v)}
          >
            {showSqlHeader ? (
              <span className="font-bold">SELECT * FROM research;</span>
            ) : (
              <span className="font-black uppercase tracking-widest">Research Database</span>
            )}
          </div>
          <br />
          <p className="text-neo-black font-medium text-lg border-2 border-neo-black inline-block bg-neo-blue px-4 py-1 transform -rotate-1 shadow-neo-sm">
            Note: As the project progresses, I will add more information.
          </p>
        </div>

        {/* Example/Placeholder Project Card */}
        <section>
          <div className="bg-white border-3 border-neo-black shadow-neo p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Media */}
              <div className="relative w-full h-64 md:h-80 border-3 border-neo-black bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/Cancers.png"
                  alt="Research media"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-4"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-black text-neo-black mb-4 uppercase leading-none">
                  Does the enrichment of COSMIC genes in different cancers influence their suitability for study in model organisms?
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="font-bold bg-neo-yellow border-2 border-neo-black px-2 text-sm">PI:</span>
                    <span className="font-medium">Dr. Kiley Graim</span>
                  </div>
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="font-bold bg-neo-green border-2 border-neo-black px-2 text-sm">Dept:</span>
                    <span className="font-medium">CISE</span>
                  </div>
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="font-bold bg-neo-red text-white border-2 border-neo-black px-2 text-sm">Duration:</span>
                    <span className="font-medium">Jan 2025 - Present</span>
                  </div>
                </div>

                <div className="space-y-6 text-neo-black">
                  <div className="bg-gray-50 p-4 border-2 border-neo-black">
                    <p className="font-black uppercase mb-2 border-b-2 border-neo-black inline-block">Research Focus</p>
                    <p className="font-medium leading-relaxed text-sm md:text-base">
                      This research explores the intersection of comparative oncology and genomic annotation bias,
                      asking whether COSMIC annotation bias influences cancer classification and model suitability.
                      Comparative oncology uses animal models, specifically dogs in this project,
                      to better understand human cancers. The premise is that reliable models require a strong overlap in comparable genes,
                      but the COSMIC database may introduce annotation bias.
                      Building on prior Differential Gene Expression Analysis that classified cancers as “good” or “bad” based on COSMIC gene
                      counts, this study aims to determine whether the designation of “good” cancers stems from disparities in gene annotation
                      rather than genuine biological suitability.
                    </p>
                  </div>
                  <div>
                    <p className="font-black uppercase mb-2 border-b-2 border-neo-black inline-block">Responsibilities</p>
                    <p className="font-medium leading-relaxed text-sm md:text-base">
                      My role in this project includes cleaning and categorizing data, refining metrics for “good” and “bad” models, and examining data distributions.
                      I will select statistical tests such as paired t-tests, chi-square tests, or non-parametric alternatives to investigate the relationship between COSMIC gene counts,
                      their percentages in DEGs, and model suitability.
                      I am also responsible for training a predictive model on “good” dog cancer data to evaluate its ability to predict human cancer outcomes compared to a control.
                      More broadly, I will apply statistical and machine learning methods to uncover patterns of bias and construct multiclass classification models to test how well “good” dog cancers translate to human outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
