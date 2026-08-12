"use client";

import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif font-bold mb-8 border-b-2 border-foreground pb-2 uppercase tracking-tight text-ink">
        Academic Foundation
      </h2>

      <div className="border-2 border-foreground p-6 bg-paper relative">
        <div className="absolute top-4 right-6 opacity-10">
          <GraduationCap size={80} />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-2xl font-serif font-bold">Bachelor of Engineering</h3>
            <p className="text-lg font-serif italic text-accent">Electronics & Communication</p>
          </div>
          <div className="font-mono text-sm font-bold border-l-2 border-foreground pl-4 mt-2 md:mt-0">
            GRADUATED JUNE 2016
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <Award size={18} className="text-accent" />
          <span className="font-mono text-sm uppercase tracking-widest">
            Shri Vaishnav Institute of Technology and Science, Indore
          </span>
        </div>

        <p className="text-sm font-serif italic opacity-80 leading-relaxed border-t border-foreground/10 pt-4">
          &quot;Foundational records indicate a strong technical background in circuit design and signal processing,
          which eventually evolved into a specialized focus on mobile software architecture and real-time systems.&quot;
        </p>
      </div>
    </section>
  );
}
