"use client";

import { motion } from "framer-motion";
import { Download, Award, Package, ArrowUpRight } from "lucide-react";

const plugins = [
  {
    name: "flutter_doc_scanner",
    description: "High-performance document scanning using ML Kit and VisionKit.",
    points: "150/150",
    downloads: "27.6k",
    url: "https://pub.dev/packages/flutter_doc_scanner"
  },
  {
    name: "flutter_regex",
    description: "Massive regex library supporting emojis, 50+ country IDs, and 1000+ patterns.",
    points: "145/150",
    downloads: "3.95k",
    url: "https://pub.dev/packages/flutter_regex"
  },
  {
    name: "ghost_autocomplete",
    description: "Copilot-style predictive inline autocomplete and suggestion system.",
    points: "140/150",
    downloads: "283",
    url: "https://pub.dev/packages/ghost_autocomplete"
  },
  {
    name: "country_picker_pro",
    description: "Ultra-customizable country selector with detailed data and widget support.",
    points: "150/150",
    downloads: "209",
    url: "https://pub.dev/packages/country_picker_pro"
  }
];

export default function Plugins() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-2">
        <h2 className="text-3xl font-serif font-bold uppercase tracking-tight">
          Featured Plugins
        </h2>
        <a
          href="https://pub.dev/publishers/shirsh.dev/packages"
          target="_blank"
          className="font-mono text-[10px] uppercase tracking-widest hover:underline flex items-center gap-1 mb-1"
        >
          view all plugin <ArrowUpRight size={10} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plugins.map((plugin, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="p-5 border-2 border-foreground bg-paper flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 border border-foreground/20">
                  <Package size={18} />
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end text-xs font-mono font-bold">
                    <Award size={12} className="text-accent" /> {plugin.points}
                  </div>
                  <div className="flex items-center gap-1 justify-end text-[10px] font-mono opacity-60">
                    <Download size={10} /> {plugin.downloads}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 truncate">{plugin.name}</h3>
              <p className="text-xs font-serif italic leading-relaxed mb-6 opacity-80">
                {plugin.description}
              </p>
            </div>

            <a
              href={plugin.url}
              target="_blank"
              className="block text-center py-2 border border-foreground font-mono text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-paper transition-colors"
            >
              view package
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
