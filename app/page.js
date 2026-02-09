"use client";

import { useState } from "react";
import { createAccount } from "../lib/auth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createAccount(email, password);
      alert("Account created! Check your email for verification.");
      router.push("/login");
    } catch (err) {
      console.error(err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      <div className="hidden md:flex md:w-1/2 bg-amber-500 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative z-10 text-center max-w-md">
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bSNvWwiLdPpa57uxQdncwcpu9Xt-NJSsmIBMxNxLQfw=" 
              alt="AI Security"
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Join SpecCheck</h2>
          <p className="text-amber-100 text-lg">
            Protect your business by understanding every clause before you sign.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="text-center md:text-left mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Create Account</h1>
            <p className="text-slate-500">Start your journey to smarter legal compliance</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-slate-900 bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-slate-900 bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Repeat your password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-slate-900 bg-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              onClick={handleSignup}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-200 active:scale-[0.98] transition-all duration-200 mt-2"
            >
              Get Started
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account? <span 
              onClick={() => router.push("/login")}
              className="text-amber-600 font-semibold cursor-pointer hover:underline"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}