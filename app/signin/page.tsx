"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    // Fake auth logic for now — you can plug in Firebase/Auth logic here
    if (email && password) {
      alert("Signed in successfully!");
      router.push("/"); // redirect to homepage
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#212731] px-4">
      <div className="w-full max-w-md bg-[#2a2f39] rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-[#fef9f1] mb-6 text-center">
          Sign In
        </h2>
        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label className="block text-[#fef9f1] mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-[#212731] border border-[#3a3f4a] text-[#fef9f1] focus:outline-none focus:ring-2 focus:ring-[#F7B6CA]"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-[#fef9f1] mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-[#212731] border border-[#3a3f4a] text-[#fef9f1] focus:outline-none focus:ring-2 focus:ring-[#F7B6CA]"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#F7B6CA] text-[#212731] font-semibold rounded-md hover:bg-[#fcd0e1] transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-[#aaa]">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#F7B6CA] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
