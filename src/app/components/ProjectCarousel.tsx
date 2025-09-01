"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import ProjectModal from "./ProjectModal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "SwampSubleasing",
    description:
      "A full-stack website for students to find and sublease apartments, built with Supabase and Next.js.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    liveUrl: "https://www.swampsubleasing.com/",
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
    link: "https://github.com/NathanG1en/NutritionLabelMaker",
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
    pdf:"/RestaurantReviews.pdf",
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
    <div className="relative w-full overflow-hidden py-16 bg-gradient-to-br from-gray-50 to-white">
      <h2
        className="text-3xl font-bold text-center mb-12 font-mono cursor-pointer transition-colors"
        onClick={() => setShowSql(!showSql)}
      >
        {showSql ? (
          <>
            <span className="text-blue-600 hover:text-blue-800">SELECT</span> * <span className="text-blue-600 hover:text-blue-800">FROM</span> projects;
          </>
        ) : (
          <span className="text-gray-900 hover:text-blue-600">Projects</span>
        )}
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                onClick={() => openModal(proj)}
                className="cursor-pointer flex-shrink-0 w-[350px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
                  {proj.image && (
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                    <span>Click to learn more</span>
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 -ml-6"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 -mr-6"
        >
          <ChevronRight size={20} className="text-gray-700" />
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
