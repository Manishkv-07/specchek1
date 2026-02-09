"use client";

import { useState } from "react";
import { loginWithEmail } from "../../lib/auth";
import { useUserStore } from "../store/useUserStore";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const setUserEmail = useUserStore((state) => state.setUserEmail);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await loginWithEmail(email, password);
      setUserEmail(email);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Failed to login. Check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Left Side: Visual/Branding (Hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 bg-amber-500 items-center justify-center p-12 relative overflow-hidden">
        {/* Subtle decorative circle */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative z-10 text-center max-w-md">
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://media.istockphoto.com/id/1976099664/photo/artificial-intelligence-processor-concept-ai-big-data-array.webp?a=1&b=1&s=612x612&w=0&k=20&c=H785hZU33rYNjGsiRuN5q2UleUxp4H7W2IMgkq8gXUQ=" 
              alt="AI Compliance"
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">SpecCheck AI</h2>
          <p className="text-amber-100 text-lg">
            Simplify complex legal terms instantly with the power of Gemini.
          </p>
        </div>
      </div>

      {/* Right Side: Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="text-center md:text-left mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500">Enter your credentials to access your dashboard</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-slate-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-slate-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-200 active:scale-[0.98] transition-all duration-200"
            >
              Sign In
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an account? <span className="text-amber-600 font-semibold cursor-pointer hover:underline">Request access</span>
          </p>
        </div>
      </div>
    </div>
  );
}