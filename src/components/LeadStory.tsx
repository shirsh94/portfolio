"use client";

import Image from "next/image";
import { getYearsOfExperience } from "@/lib/utils";

export default function LeadStory() {
  const years = getYearsOfExperience();
  const imageSrc = "/img_paper.png";

  return (
    <section className="newspaper-grid gap-y-8 mb-16">
      <div className="col-span-12 md:col-span-8 pr-0 md:pr-8 md:border-r border-foreground/20">
        <h2 className="text-4xl font-serif font-bold mb-6 underline decoration-2 underline-offset-8 uppercase tracking-tighter">
          About
        </h2>

        <div className="prose prose-zinc max-w-none">
          <p className="text-lg leading-relaxed first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left mb-4">
            Shirsh Shukla is a Senior Flutter Engineer with a {years}-year track record of architecting high-performance mobile ecosystems.
            Currently at Jio Platforms Limited, he spearheads the technical evolution of large-scale applications serving millions,
            specializing in robust Clean Architecture and deep performance optimization.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            A master of the Flutter lifecycle, Shirsh excels at transforming complex business requirements into maintainable,
            user-centric codebases—leveraging advanced state management (BLoC, Riverpod) and resilient CI/CD pipelines.
            His work ensures that production environments remain stable and responsive under high user traffic.
          </p>
          <p className="text-lg leading-relaxed">
            Beyond engineering, he is a dedicated technical advocate, sharing architectural insights through widely-read Medium
            publications and speaking at global developer forums like GDG and GDSC to mentor the next generation of mobile innovators.
          </p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-4 space-y-8">
        <div className="border-4 border-foreground p-1 bg-foreground">
          <div className="relative aspect-square w-full overflow-hidden bg-[#f7f5f0] mb-1">
            <Image
              src={imageSrc}
              alt="Shirsh Shukla - Subject Portrait"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover bg-[#f7f5f0] mix-blend-normal"
              priority
            />
          </div>
          <div className="bg-foreground text-paper px-4 py-2 text-[10px] font-mono tracking-[0.1em] border-t border-paper/10">
            Pictured: the subject, in his natural habitat.
          </div>
        </div>

        <div>
          <h3 className="font-mono uppercase text-xs tracking-widest mb-4 border-b border-foreground/20 pb-2">
            Key Metrics
          </h3>
          <ul className="space-y-4 font-mono text-sm">
            <li className="flex justify-between border-b border-dotted border-foreground/40 pb-2">
              <span>Experience</span>
              <span className="font-bold">{years}+ Years</span>
            </li>
            <li className="flex justify-between border-b border-dotted border-foreground/40 pb-2">
              <span>Current Post</span>
              <span className="font-bold text-right">Jio Platforms</span>
            </li>
            <li className="flex justify-between border-b border-dotted border-foreground/40 pb-2 gap-4">
              <span>Specialization</span>
              <span className="font-bold text-right">Senior Flutter Engineer (Android & iOS)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
