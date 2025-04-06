"use client";

import { useRouter } from "next/navigation";
import HeaderContact from "../components/header";

export default function ContactUsPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Your message has been sent! Thank you.");
    router.push("/");
  };

  return (
    <div
      className="h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/feedbackback.png')" }}
    >
      <HeaderContact />
      <div className="px-6 py-12 flex items-center justify-center">
        <div className="max-w-4xl w-full space-y-12 text-center">
          {/* Heading */}
          <h1 className="text-5xl font-bold text-[#fefbf7]">
            Contact <span className="text-[#F7B6CA]">Us</span>
          </h1>
          <p className="text-lg text-[#d4cfc7] max-w-xl mx-auto">
            We'd love to hear from you! Whether it's a question, feedback, or a
            new opportunity—drop us a message.
          </p>

          {/* Contact Form */}
          <form
            className="bg-[#2a2f39] p-8 rounded-2xl shadow-lg space-y-6 text-left"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-[#FEF9F1]">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-[#212731] border border-[#3a3f4a] text-[#fefbf7] focus:outline-none focus:ring-2 focus:ring-[#F7B6CA]"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-[#FEF9F1]">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-[#212731] border border-[#3a3f4a] text-[#fefbf7] focus:outline-none focus:ring-2 focus:ring-[#F7B6CA]"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-[#FEF9F1]">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-[#212731] border border-[#3a3f4a] text-[#fefbf7] focus:outline-none focus:ring-2 focus:ring-[#F7B6CA]"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-[#F7B6CA] text-[#1e1e1e] font-semibold rounded-xl hover:bg-[#f3c9d7] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
