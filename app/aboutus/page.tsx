"use client";

import { HeaderAbout } from "../components/header";

export default function AboutUsPage() {
  return (
    <div className="h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/feedbackback.png')" }}>
      <HeaderAbout />
      <div className="px-6 py-12 flex items-center justify-center">
        <div className="max-w-5xl w-full text-center space-y-14">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#fefbf7] tracking-tight">
            About <span className="text-[#F7B6CA]">Us</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed text-[#dcd6ce]">
            We're a passionate team shaping the future through design, technology, and meaningful experiences.
            With a blend of creativity and intention, we build for people, not just users.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#2a2f39] border border-[#3a3f4a] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#fdfaf5] mb-2">
                🧠 Our Vision
              </h3>
              <p className="text-[#d1cbc3]">
                To shape a future where technology is empathetic, inclusive, and human-first.
              </p>
            </div>
            <div className="bg-[#2a2f39] border border-[#3a3f4a] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#fdfaf5] mb-2">
                🤝 Our Mission
              </h3>
              <p className="text-[#d1cbc3]">
                Empowering changemakers by crafting digital tools that are intuitive, purposeful, and inspiring.
              </p>
            </div>
            <div className="bg-[#2a2f39] border border-[#3a3f4a] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#fdfaf5] mb-2">
                🌍 Our Impact
              </h3>
              <p className="text-[#d1cbc3]">
                We’re driven by social impact, sustainability, and creating experiences that matter.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-10">
            <p className="text-[#bab4aa] text-lg">
              Want to collaborate or just say hi? Let’s build something meaningful together.
            </p> <a href="/contact">
            <button className="mt-4 px-6 py-2 rounded-xl text-[#1e1e1e] bg-[#e7c9a9] hover:bg-[#f3dcbf] transition font-semibold shadow-md">
              Get in Touch
            </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
