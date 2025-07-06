import ContactForm from "@/app/components/ContactForm";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:nathanglen@ufl.edu" className="flex items-center gap-4 text-gray-700 hover:text-blue-600">
                <Mail className="w-6 h-6 text-gray-500" />
                <span>nathanglen@ufl.edu</span>
              </a>
              <a href="https://linkedin.com/in/nathan-glen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-blue-600">
                <Linkedin className="w-6 h-6 text-gray-500" />
                <span>linkedin.com/in/nathan-glen</span>
              </a>
              <a href="https://github.com/NathanG1en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-blue-600">
                <Github className="w-6 h-6 text-gray-500" />
                <span>github.com/NathanG1en</span>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </main>
  );
} 