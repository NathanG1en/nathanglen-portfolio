"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    // Here you would typically send the form data to a backend or service
    setStatus('Thank you for your message! I will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white p-8 border-3 border-neo-black shadow-neo">
      <h2 className="text-2xl font-black mb-6 text-center text-neo-black uppercase border-b-3 border-neo-black pb-2 inline-block">Send a message</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-neo-black font-bold mb-2 uppercase text-sm tracking-wider">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 border-3 border-neo-black bg-gray-50 focus:bg-white focus:outline-none focus:shadow-neo transition-all font-mono placeholder:text-gray-400"
          placeholder="ENTER YOUR NAME"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-neo-black font-bold mb-2 uppercase text-sm tracking-wider">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border-3 border-neo-black bg-gray-50 focus:bg-white focus:outline-none focus:shadow-neo transition-all font-mono placeholder:text-gray-400"
          placeholder="ENTER YOUR EMAIL"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-neo-black font-bold mb-2 uppercase text-sm tracking-wider">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full px-4 py-3 border-3 border-neo-black bg-gray-50 focus:bg-white focus:outline-none focus:shadow-neo transition-all font-mono placeholder:text-gray-400"
          placeholder="TYPE YOUR MESSAGE HERE..."
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-neo-black text-white px-6 py-4 font-black uppercase tracking-widest border-3 border-transparent hover:bg-neo-green hover:text-neo-black hover:border-neo-black hover:shadow-neo transition-all transform hover:-translate-y-1 active:translate-y-0"
        >
          Send Message
        </button>
      </div>
      {status && <p className="text-center text-neo-black font-bold mt-4 bg-neo-green p-2 border-2 border-neo-black shadow-neo-sm transform -rotate-1">{status}</p>}
    </form>
  );
} 