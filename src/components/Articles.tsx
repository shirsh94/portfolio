"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { DynamicArticle } from "@/lib/metrics";

export default function Articles({ data }: { data: DynamicArticle[] }) {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-2">
        <h2 className="text-3xl font-serif font-bold uppercase tracking-tight">
          Featured Articles
        </h2>
        <a
          href="https://shirsh94.medium.com/"
          target="_blank"
          className="font-mono text-[10px] uppercase tracking-widest hover:underline flex items-center gap-1 mb-1"
        >
          read all article <ArrowUpRight size={10} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {data.map((article, index) => (
          <motion.div
            key={index}
            className="group relative pl-8 border-l-2 border-foreground/10 hover:border-foreground transition-colors"
          >
            <div className="absolute -left-[5px] top-0 w-2 h-2 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">Article {index + 1}</span>
              <div className="flex items-center gap-1 font-mono text-[10px] opacity-40">
                <MessageSquare size={10} /> {article.responses} {article.responses === "New" ? "" : "Responses"}
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold mb-3 leading-tight group-hover:underline">
              <a href={article.url} target="_blank">{article.title}</a>
            </h3>

            <p className="text-sm font-serif italic opacity-70 leading-relaxed mb-4 line-clamp-2">
              &quot;{article.summary}&quot;
            </p>

            <a
              href={article.url}
              target="_blank"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold hover:gap-3 transition-all"
            >
              read more <ArrowUpRight size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
