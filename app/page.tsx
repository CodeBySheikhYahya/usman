"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#116466] via-white to-[#3C3B6E] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-10 border border-[#3C3B6E]/10 max-w-lg"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#116466]">
          Welcome to
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#3C3B6E]">
          Techmiles Solution
        </h2>
        <p className="mt-4 text-gray-700 text-base sm:text-lg font-medium">
          Empowering innovation with a blend of Pakistani passion 🇵🇰 and American precision 🇺🇸
        </p>
      </motion.div>
    </main>
  );
}
