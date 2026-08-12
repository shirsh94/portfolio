"use client";

import { MessageSquare, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-4 border-foreground py-12 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">Contact</h2>
          <p className="text-sm font-mono leading-relaxed opacity-70">
            For inquiries regarding mobile architecture, high-scale Flutter deployments, or technical collaboration.
          </p>
        </div>

        <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
          <a href="mailto:shirsh94@gmail.com?subject=Inquiry%20via%20Portfolio" className="hover:underline flex items-center gap-2">
            <MessageSquare size={14} /> Send Message
          </a>
          <a href="https://linkedin.com/in/shirsh-shukla" target="_blank" className="hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/shirsh94" target="_blank" className="hover:underline">
            GitHub
          </a>
          <a href="https://shirsh94.medium.com/" target="_blank" className="hover:underline">
            Medium
          </a>
          <a href="https://stackoverflow.com/users/13098417/shirsh-shukla" target="_blank" className="hover:underline">
            StackOverflow
          </a>
          <a href="https://pub.dev/publishers/shirsh.dev/packages" target="_blank" className="hover:underline">
            pub.dev
          </a>
        </div>

        <div className="text-right flex flex-col justify-between h-full">
          <div className="hidden md:block">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 border-2 border-foreground hover:bg-foreground hover:text-paper transition-colors"
            >
              <ArrowUp size={20} />
            </button>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 mt-8 md:mt-0">
            © 2026 Shirsh Shukla
          </div>
        </div>
      </div>
    </footer>
  );
}
