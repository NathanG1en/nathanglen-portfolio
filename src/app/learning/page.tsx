"use client";

import { useState } from "react";
import Link from "next/link";

export default function LearningPage() {
  const [showSqlTitle, setShowSqlTitle] = useState(false);
  return (
    <main className="min-h-screen bg-neo-yellow text-neo-black pt-32 pb-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block bg-white text-neo-black font-mono text-sm md:text-base px-6 py-3 mb-6 cursor-pointer border-3 border-neo-black shadow-neo hover:-translate-y-1 active:translate-y-0 transition-all transform rotate-1"
            onClick={() => setShowSqlTitle((v) => !v)}
          >
            {showSqlTitle ? (
              <span className="font-bold">SELECT * FROM learning_journey;</span>
            ) : (
              <span className="font-black uppercase tracking-widest">Learning Journey</span>
            )}
          </div>
          <p className="text-lg font-bold bg-white text-neo-black border-3 border-neo-black p-4 max-w-2xl mx-auto shadow-neo-sm">
            A comprehensive overview of my academic coursework and ongoing professional development as a Data Science Major & Economics Minor.
          </p>
        </div>

        {/* University Courses Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-8 text-center text-neo-black uppercase tracking-tight">University Courses</h2>
          <div className="bg-neo-cream border-3 border-neo-black shadow-neo p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ["ECO2023 Principles of Microeconomics", "ECO2013 Principles of Macroeconomics", "COT3100 Applications of Discrete Structures", "COP3502C Programming Fundamentals 1", "COP3503C Programming Fundamentals 2", "COP3530 Data Structures & Algorithms", "CIS4301 Information & Database Systems 1", "EEL3872 AI Fundamentals"],
                ["MAS3114 Computational Linear Algebra", "MAS4115 Linear Algebra for Data Science", "MAD2502 Introduction to Computational Math", "MAC2311 Analytic Geometry & Calculus 1", "MAC2312 Analytic Geometry & Calculus 2", "MAC2313 Analytic Geometry & Calculus 3", "STA2023 Introduction to Statistics 1", "STA3100 Programming with Data"],
                ["STA4210 Regression Analysis", "STA4321 Introduction to Probability", "STA4322 Introduction to Statistics Theory", "STA4241 Statistical Learning", "STA4930 Special Topics", "ECP3703 Managerial Economics"]
              ].map((column, idx) => (
                <ul key={idx} className="space-y-3">
                  {column.map((course, cIdx) => (
                    <li key={cIdx} className="flex items-start bg-white border-2 border-neo-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform">
                      <span className="text-neo-green font-black mr-2 mt-[2px] text-lg">›</span>
                      <span className="font-bold text-sm leading-tight">{course}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>

        {/* DataCamp Certificates Section */}
        <section>
          <h2 className="text-4xl font-black mb-8 text-center text-neo-black uppercase tracking-tight">Online Course Certificates</h2>
          <div className="bg-white border-3 border-neo-black shadow-neo p-8">
            <div className="grid gap-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-neo-black mb-2 uppercase">Available Certificates</h3>
                <p className="font-medium text-gray-700">Click on any certificate to view or download</p>
              </div>

              {/* PDF Display */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Data Visualization", link: "/certs/Data_Viz.pdf" },
                  { title: "PySpark Basics", link: "/certs/PySpark_Introduction.pdf" },
                  { title: "RAG & LLMs", link: "/certs/LLM_Apps.pdf" }
                ].map((cert, idx) => (
                  <div key={idx} className="bg-neo-blue border-3 border-neo-black p-6 hover:shadow-neo hover:-translate-y-1 transition-all group">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white border-3 border-neo-black flex items-center justify-center mx-auto mb-4 group-hover:bg-neo-yellow transition-colors shadow-sm">
                        <svg className="w-8 h-8 text-neo-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-black text-neo-black mb-4 uppercase">{cert.title}</h4>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-neo-black text-white font-bold py-2 px-6 border-2 border-transparent hover:bg-white hover:text-black hover:border-neo-black transition-colors"
                      >
                        View PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-block bg-white text-neo-black px-8 py-4 font-black border-3 border-neo-black shadow-neo hover:bg-neo-black hover:text-white hover:shadow-neo-lg hover:-translate-y-1 transition-all"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
