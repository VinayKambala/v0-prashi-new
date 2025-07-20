"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", project: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setStatus("Message sent!");
    else setStatus("Failed to send message.");
  };

  return (
    <form className="space-y-6 bg-white/90 p-8 rounded-2xl shadow-xl border border-gold/20" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold text-gold mb-4 text-center">Contact Our Experts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gold mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-gold/30 focus:border-gold focus:ring-1 focus:ring-gold bg-white text-obsidian"
            type="text"
            name="name"
            id="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gold mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-gold/30 focus:border-gold focus:ring-1 focus:ring-gold bg-white text-obsidian"
            type="tel"
            name="phone"
            id="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            pattern="[0-9+\-\s]{7,15}"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gold mb-1" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-4 py-2 rounded-lg border border-gold/30 focus:border-gold focus:ring-1 focus:ring-gold bg-white text-obsidian"
          type="email"
          name="email"
          id="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gold mb-1" htmlFor="project">
          Project Name
        </label>
        <input
          className="w-full px-4 py-2 rounded-lg border border-gold/30 focus:border-gold focus:ring-1 focus:ring-gold bg-white text-obsidian"
          type="text"
          name="project"
          id="project"
          required
          value={form.project}
          onChange={handleChange}
          placeholder="Project you are interested in"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gold mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full px-4 py-2 rounded-lg border border-gold/30 focus:border-gold focus:ring-1 focus:ring-gold bg-white text-obsidian"
          name="message"
          id="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gold hover:bg-gold-light text-white font-semibold py-2 rounded-lg transition-colors"
        disabled={status === "Sending..."}
      >
        {status === "Sending..." ? "Sending..." : "Send Message"}
      </button>
      {status && (
        <div className={`text-center mt-2 text-sm ${status === "Message sent!" ? "text-green-600" : "text-red-600"}`}>
          {status}
        </div>
      )}
    </form>
  );
}