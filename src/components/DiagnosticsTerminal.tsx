"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export default function DiagnosticsTerminal() {
  const [logs, setLogs] = useState<string[]>([
    "INITIALIZING SYSTEM DIAGNOSTICS...",
    "ESTABLISHING SECURE CONNECTION...",
    "SUBJECT: SHIRSH SHUKLA DETECTED.",
    "STATUS: SENIOR ARCHITECT ACTIVE."
  ]);

  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollPos / height;

      if (progress > 0.1 && logs.length === 4) addLog("CORE MODULE: FLUTTER ECOSYSTEM LOADED.");
      if (progress > 0.3 && logs.length === 5) addLog("ARCH PATTERN: CLEAN ARCHITECTURE DETECTED.");
      if (progress > 0.5 && logs.length === 6) addLog("RESOURCES: 19+ OSS PLUGINS INDEXED.");
      if (progress > 0.7 && logs.length === 7) addLog("COMMUNITY: GDG SPEAKER STATUS VERIFIED.");
      if (progress > 0.9 && logs.length === 8) addLog("DIAGNOSTICS COMPLETE. FULL STACK READY.");
    };

    const addLog = (msg: string) => {
      setLogs(prev => [...prev.slice(-4), msg]); // Keep last 5 logs
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logs]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] pointer-events-none p-4">
      <div className="max-w-7xl mx-auto flex justify-end">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="w-full md:w-80 bg-black/90 text-green-500 p-4 border border-green-500/30 rounded-t-lg shadow-2xl pointer-events-auto backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-3 border-b border-green-500/20 pb-2">
            <Terminal size={14} className="animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">System Diagnostics</span>
          </div>

          <div
            ref={terminalRef}
            className="font-mono text-[9px] leading-relaxed h-24 overflow-y-auto custom-scrollbar"
          >
            <AnimatePresence mode="popLayout">
              {logs.map((log, i) => (
                <motion.div
                  key={log + i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-1 flex gap-2"
                >
                  <span className="opacity-40">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                  <span>{log}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1.5 h-3 bg-green-500 ml-1 translate-y-0.5"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
