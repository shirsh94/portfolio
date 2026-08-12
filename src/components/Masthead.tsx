"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Link as LinkIcon, Moon, Sun, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { getYearsOfExperience } from "@/lib/utils";

export default function Masthead() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const years = getYearsOfExperience();

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  return (
    <header className="border-b-4 border-foreground py-8 mb-12 relative">
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 hidden md:block">
          <div className="text-sm font-mono uppercase tracking-widest opacity-60">
            {years}+ Years of Production Experience
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1AXOHbdLM51B95yHeR9rFLIZGkWDD0XJc/view?usp=sharing"
            target="_blank"
            className="flex items-center gap-2 px-3 py-1.5 border border-foreground font-mono text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            <FileText size={12} /> Resume
          </a>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 border border-foreground hover:bg-foreground hover:text-background transition-colors"
              aria-label="Toggle Night Edition"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}
        </div>
      </div>

      <div className="text-center py-6 border-y border-foreground/20 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif font-black tracking-tighter mb-4 text-ink"
        >
          SHIRSH SHUKLA
        </motion.h1>
        <p className="text-xl md:text-2xl font-serif italic text-accent">
          Senior Flutter Engineer (Android & iOS)
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-mono uppercase tracking-tight">
        <a href="mailto:shirsh94@gmail.com?subject=Inquiry%20via%20Portfolio" className="flex items-center gap-2 hover:underline">
          <Mail size={14} /> shirsh94@gmail.com
        </a>
        <a href="tel:+919479888872" className="flex items-center gap-2 hover:underline">
          <Phone size={14} /> +91 94798 88872
        </a>
        <a href="https://linkedin.com/in/shirsh-shukla" target="_blank" className="flex items-center gap-2 hover:underline">
          <LinkIcon size={14} /> LinkedIn
        </a>
        <a href="https://github.com/shirsh94" target="_blank" className="flex items-center gap-2 hover:underline">
          <LinkIcon size={14} /> GitHub
        </a>
        <a href="https://shirsh94.medium.com/" target="_blank" className="flex items-center gap-2 hover:underline">
          <LinkIcon size={14} /> Medium
        </a>
        <a href="https://stackoverflow.com/users/13098417/shirsh-shukla" target="_blank" className="flex items-center gap-2 hover:underline">
          <LinkIcon size={14} /> StackOverflow
        </a>
        <a href="https://pub.dev/publishers/shirsh.dev/packages" target="_blank" className="flex items-center gap-2 hover:underline">
          <LinkIcon size={14} /> pub.dev
        </a>
      </div>
    </header>
  );
}
