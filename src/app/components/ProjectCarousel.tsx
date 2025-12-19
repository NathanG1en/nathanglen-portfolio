"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import ProjectModal from "./ProjectModal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "GatorSubleasing",
    description:
      " Previously known as SwampSubleasing, a full-stack website for students to find and sublease apartments, built with Supabase and Next.js.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    liveUrl: "https://www.gatorsubleasing.com/",
    image: "/images/swamp_subleasing.png",
  },
  {
    title: "UF Food Product Development Website",
    description:
      "A comprehensive website for UF's Food Product Development program, showcasing research, courses, and student projects.",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://www.uf-fpdc.org/",
    image: "/images/fpdc-website.png",
  },
  {
    title: "Nutrition Label Maker",
    description:
      "An AI assisted nutrition label maker that pulls from USDA database to create nutrition labels with Pillow. Uses fuzzymatching and a BERT language model to semantically find items from the database (WIP).",
    tech: ["Python", "BERT", "Pillow", "USDA API", "Fuzzy Matching"],
    link: "https://github.com/NathanG1en/NutriBuddy",
    image: "/images/nutrition-label.png",
  },
  {
    title: "Smart-Snacks Compliance Tool",
    description:
      "Web app that generates USDA-compliant nutrition labels using the Edamam API.",
    tech: ["Streamlit", "Python", "API"],
    link: "https://github.com/NathanG1en/Food",
    image: "/images/nutrition_compliance.png",
  },
  {
    title: "AVL Tree Implementation",
    description:
      "Built in C++, this tool uses regex to validate input and store student records in a self-balancing AVL Tree.",
    tech: ["C++", "Regex", "Data Structures"],
    image: "/images/avl_tree.png",
  },
  {
    title: "PageRank Algorithm",
    description:
      "Implemented Google's original PageRank algorithm as a way to explore graph theory and code from mathematical notation.",
    tech: ["Python", "Graph Theory", "PageRank"],
    image: "/images/page_rank.png",
  },
  {
    title: "Text Sentiment Analyzer",
    description:
      "Built for a Linear Algebra course using restaurant Google reviews. Compared multiple models for sentiment classification.",
    tech: ["NLP", "Scikit-learn", "Linear Algebra"],
    pdf: "/RestaurantReviews.pdf",
    image: "/images/text_sentiment.png",
  },
  {
    title: "Health Buddy",
    description:
      "Used Spotify API and regression to find songs that match a user's heart rate. Built in Python for a computational math course.",
    tech: ["Python", "Spotify API", "Regression"],
    link: "https://github.com/NathanG1en/apple_health",
    image: "/images/Health.png",
  },
  {
    title: "Tampa Bay Rays Capstone",
    description:
      "End-to-end project using XGBoost to predict strikeouts. Built a Streamlit app with SHAP visualizations for stakeholder interpretability.",
    tech: ["Python", "XGBoost", "SHAP", "EDA"],
    link: "https://github.com/NathanG1en/baseball-research",
    image: "/images/baseball_presentation.png",
    pdf: "/BaseballPresentation.pdf",
  },
  {
    title: "Bioinformatics Class Project",
    description:
      "Analyzed mouse lung cancer data from refine.bio to study effects of smoke exposure. Used frameworks like DESeq2 and R.",
    tech: ["R", "Bioinformatics", "DESeq2"],
    // link: "https://github.com/sjwright04/CGS4144-Project",
    image: "/images/bioinformatics_presentation.png",
    pdf: "/BioinformaticsPresentation.pdf",
  },
  {
    title: "UF ALP Chatbot",
    description:
      "RAG-based chatbot for housing and conservation research, using Langchain, PyPDF2, and Streamlit.",
    tech: ["LangChain", "Streamlit", "RAG"],
    // link: "#",
    image: "/images/ResearchPoster.jpg",
  },
];

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [showSql, setShowSql] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <div className="relative w-full overflow-hidden py-16 bg-neo-green border-t-3 border-neo-black">
      <h2
        className="text-4xl font-black text-center mb-12 inline-block mx-auto table bg-white px-6 py-3 border-3 border-neo-black shadow-neo transform rotate-1 cursor-pointer hover:rotate-0 transition-transform"
        onClick={() => setShowSql(!showSql)}
      >
        {showSql ? (
          <span className="font-mono text-xl">SELECT * FROM projects;</span>
        ) : (
          "Projects"
        )}
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8 py-4 px-2">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                onClick={() => openModal(proj)}
                className="cursor-pointer flex-shrink-0 w-[350px] bg-white border-3 border-neo-black shadow-neo hover:shadow-neo-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="h-48 bg-neo-blue relative overflow-hidden border-b-3 border-neo-black">
                  {proj.image && (
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 grayscale group-hover:grayscale-0"
                    />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black mb-3 text-neo-black uppercase tracking-tight group-hover:text-neo-blue transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-neo-black mb-4 text-sm font-medium leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="bg-neo-yellow text-neo-black text-xs px-3 py-1 font-bold border-2 border-neo-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-neo-black text-sm font-bold group-hover:underline decoration-2">
                    <span>Click to learn more</span>
                    <ChevronRight size={18} strokeWidth={3} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border-3 border-neo-black p-3 shadow-neo hover:shadow-neo-sm active:translate-y-1 active:shadow-none transition-all duration-200 -ml-4 z-10"
        >
          <ChevronLeft size={24} strokeWidth={3} className="text-neo-black" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border-3 border-neo-black p-3 shadow-neo hover:shadow-neo-sm active:translate-y-1 active:shadow-none transition-all duration-200 -mr-4 z-10"
        >
          <ChevronRight size={24} strokeWidth={3} className="text-neo-black" />
        </button>
      </div>

      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}
