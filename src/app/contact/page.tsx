import ContactForm from "@/app/components/ContactForm";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neo-blue pt-32 pb-16 px-6 font-sans text-neo-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 uppercase tracking-tighter bg-white inline-block px-4 py-2 border-3 border-neo-black shadow-neo transform -rotate-1">Get in Touch</h1>
          <br />
          <br />
          <p className="text-xl font-bold bg-white inline-block p-4 border-3 border-neo-black shadow-neo-sm">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-neo-cream p-8 border-3 border-neo-black shadow-neo">
            <h3 className="text-2xl font-black mb-6 uppercase border-b-3 border-neo-black pb-2 inline-block">Contact Info</h3>
            <div className="space-y-6">
              <a href="mailto:nathanglen@ufl.edu" className="flex items-center gap-4 text-neo-black hover:text-white hover:bg-neo-black p-2 border-2 border-transparent hover:border-white transition-all group">
                <div className="bg-white p-2 border-2 border-neo-black group-hover:border-white">
                  <Mail className="w-6 h-6 text-neo-black" strokeWidth={2.5} />
                </div>
                <span className="font-bold">nathanglen@ufl.edu</span>
              </a>
              <a href="https://linkedin.com/in/nathan-glen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neo-black hover:text-white hover:bg-neo-black p-2 border-2 border-transparent hover:border-white transition-all group">
                <div className="bg-white p-2 border-2 border-neo-black group-hover:border-white">
                  <Linkedin className="w-6 h-6 text-neo-black" strokeWidth={2.5} />
                </div>
                <span className="font-bold">linkedin.com/in/nathan-glen</span>
              </a>
              <a href="https://github.com/NathanG1en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neo-black hover:text-white hover:bg-neo-black p-2 border-2 border-transparent hover:border-white transition-all group">
                <div className="bg-white p-2 border-2 border-neo-black group-hover:border-white">
                  <Github className="w-6 h-6 text-neo-black" strokeWidth={2.5} />
                </div>
                <span className="font-bold">github.com/NathanG1en</span>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </main>
  );
} 