"use client";

import { useState } from "react";
import Image from "next/image";

export default function ResearchPage() {
  const [showSqlHeader, setShowSqlHeader] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-extrabold mb-4 text-gray-900 font-mono cursor-pointer transition-colors"
            onClick={() => setShowSqlHeader((v) => !v)}
          >
            {showSqlHeader ? (
              <>
                <span className="text-blue-600">SELECT</span> * <span className="text-blue-600">FROM</span> research;
              </>
            ) : (
              "Research"
            )}
          </h1>
          <p className="text-gray-700">
            Note: As the project progresses, I will add more information.
          </p>
        </div>

        {/* Required fields */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Required</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Research project title</li>
            <li>PI name</li>
            <li>Institution and department</li>
            <li>Amount of time you have been affiliated with the project</li>
            <li>Research focus in narrative paragraph form</li>
            <li>Project responsibilities in narrative paragraph form</li>
            <li>Media: picture or video that conveys information about the project</li>
          </ul>
        </section> */}

        {/* Example/Placeholder Project Card */}
        <section>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Media */}
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
                <Image
                  src="/images/Cancers.png"
                  alt="Research media"  
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Does the enrichment of COSMIC genes in different cancers influence their suitability for study in model organisms?</h3>
                <div className="text-gray-700 space-y-1 mb-4">
                  <p><span className="font-semibold">PI:</span> Dr. Kiley Graim</p>
                  <p><span className="font-semibold">Institution/Department:</span> CISE</p>
                  <p><span className="font-semibold">Affiliation Duration:</span> Jan 2025 - Present</p>
                </div>

                <div className="space-y-3 text-gray-800">
                  <div>
                    <p className="font-semibold">Research Focus</p>
                    <p className="text-gray-700">This research explores the intersection of comparative oncology and genomic annotation bias, 
                      asking whether COSMIC annotation bias influences cancer classification and model suitability. 
                      Comparative oncology uses animal models, specifically dogs in this project, 
                      to better understand human cancers. The premise is that reliable models require a strong overlap in comparable genes,
                      but the COSMIC database may introduce annotation bias.
                       Building on prior Differential Gene Expression Analysis that classified cancers as “good” or “bad” based on COSMIC gene
                       counts, this study aims to determine whether the designation of “good” cancers stems from disparities in gene annotation 
                       rather than genuine biological suitability.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Project Responsibilities</p>
                    <p className="text-gray-700">My role in this project includes cleaning and categorizing data, 
                      refining metrics for “good” and “bad” models, and examining data distributions.
                      I will select statistical tests such as paired t-tests, chi-square tests, or non-parametric alternatives to investigate the relationship between COSMIC gene counts,
                       their percentages in DEGs, and model suitability. 
                       I am also responsible for training a predictive model on “good” dog cancer data to evaluate its ability to predict human cancer outcomes compared to a control. 
                       More broadly, I will apply statistical and machine learning methods to uncover patterns of bias and construct multiclass classification models to test how well “good” dog cancers translate to human outcomes.</p>
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
