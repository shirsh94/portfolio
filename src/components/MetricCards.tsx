"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Star } from "lucide-react";
import { DynamicMetrics } from "@/lib/metrics";

export default function MetricCards({ data }: { data: DynamicMetrics }) {
  const metrics = [
    {
      label: "StackOverflow",
      value: data.stackoverflowRep,
      subValue: "Reputation",
      description: `${data.stackoverflowReach}+ people reached with technical solutions.`,
      icon: Zap
    },
    {
      label: "OSS Ecosystem",
      value: data.pubDownloads,
      subValue: "Plugin Downloads",
      description: `${data.pubPackages}+ specialized Flutter & Dart packages.`,
      icon: Star
    },
    {
      label: "Medium",
      value: data.mediumFollowers,
      subValue: "Followers",
      description: "Top-tier architectural insights and tutorials.",
      icon: TrendingUp
    },
    {
      label: "Community",
      value: "Active",
      subValue: "GDG Speaker",
      description: "Verified speaker at Google Developer Groups.",
      icon: Users
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif font-bold mb-8 border-b-2 border-foreground pb-2 uppercase tracking-tight text-ink">
        Strategic Impact & Reach
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="p-6 border-2 border-foreground bg-paper flex flex-col justify-between group"
          >
            <div className="mb-4">
              <metric.icon size={20} className="mb-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-1">
                {metric.label}
              </div>
              <div className="text-4xl font-serif font-black tracking-tighter leading-none mb-1">
                {metric.value}
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-tight text-accent">
                {metric.subValue}
              </div>
            </div>

            <p className="text-[10px] font-mono leading-tight opacity-50 uppercase tracking-tighter">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
