"use client";

import { motion } from "framer-motion";
import { Play, Apple, Star } from "lucide-react";
import { ProjectStats } from "@/lib/metrics";

const projectsList = [
  {
    id: "MyJio",
    title: "MyJio: For Everything Jio",
    type: "Android (Native)",
    summary: "Large-scale telecom application serving millions. Performance optimization and feature enhancement for production releases.",
    impact: "Stability at Scale",
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.jio.myjio&hl=en_IN", icon: Play },
      { label: "App Store", url: "https://apps.apple.com/us/app/myjio-for-everything-jio/id1074964262", icon: Apple }
    ]
  },
  {
    id: "JCP On The Go",
    title: "JCP On The Go",
    type: "Flutter (Hybrid)",
    summary: "Enterprise solution for real-time KPI monitoring. Built with WebSockets and interactive map visualizations for network insights.",
    impact: "Real-time Monitoring",
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.jio.jcpapps&hl=en_IN", icon: Play },
      { label: "App Store", url: "https://apps.apple.com/us/app/jcp-on-the-go/id1626956110", icon: Apple }
    ]
  },
  {
    id: "LEAD Student & Parent App",
    title: "LEAD Student & Parent App",
    type: "Flutter (Hybrid)",
    summary: "Large-scale education platform. Features live classes, assignments, and performance tracking with a focus on responsive UI.",
    impact: "Education Ecosystem",
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.leadschool.parentapp&hl=en_IN", icon: Play },
      { label: "App Store", url: "https://apps.apple.com/in/app/lead-group-student-app/id1571090872", icon: Apple }
    ]
  },
  {
    id: "Whoppah",
    title: "Whoppah",
    type: "Android (Native)",
    summary: "Premium second-hand marketplace. Implemented core modules for product listing, search, and secure user interaction flows.",
    impact: "Secure Marketplace",
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.whoppah&hl=en_IN", icon: Play },
      { label: "App Store", url: "https://apps.apple.com/be/app/whoppah/id1458122175", icon: Apple }
    ]
  }
];

export default function Deployments({ data }: { data: Record<string, ProjectStats> }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif font-bold mb-8 border-b-2 border-foreground pb-2 uppercase tracking-tight">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsList.map((project, index) => {
          const stats = data[project.id] || {};

          return (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 border-2 border-foreground relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-2 py-1 bg-foreground text-paper font-mono text-[10px] uppercase tracking-widest">
                    {project.type}
                  </span>
                  <div className="flex flex-col gap-1 items-end border-l border-foreground/20 pl-3">
                    {stats.playStoreDownloads && (
                      <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold">
                        <Play size={8} className="opacity-50" />
                        <span>{stats.playStoreDownloads}</span>
                        {stats.playStoreRating && <span className="opacity-40 ml-1 flex items-center gap-0.5"><Star size={7} className="fill-current" />{stats.playStoreRating.replace('★', '')}</span>}
                      </div>
                    )}
                    {stats.appStoreDownloads && (
                      <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold">
                        <Apple size={8} className="opacity-50" />
                        <span>{stats.appStoreDownloads}</span>
                        {stats.appStoreRating && <span className="opacity-40 ml-1 flex items-center gap-0.5"><Star size={7} className="fill-current" />{stats.appStoreRating.replace('★', '')}</span>}
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold leading-tight mb-2">{project.title}</h3>

                <p className="text-sm font-serif italic mb-6 leading-relaxed opacity-80">
                  {project.summary}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link, lIndex) => (
                    <a
                      key={lIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest border border-foreground/20 px-2 py-1 hover:bg-foreground hover:text-paper transition-colors"
                    >
                      <link.icon size={10} />
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="flex justify-between items-end pt-4 border-t border-dotted border-foreground/20">
                  <div className="font-mono text-[10px] uppercase tracking-widest border-l-2 border-foreground pl-3 py-1">
                    Impact: <span className="font-bold">{project.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
