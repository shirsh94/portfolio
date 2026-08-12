"use client";

import { motion } from "framer-motion";
import { Mic, Users, Calendar, ArrowUpRight } from "lucide-react";

const events = [
  {
    title: "Flutter Festival Indore 2022",
    organization: "Google Developer Groups (GDG)",
    role: "Technical Speaker",
    date: "March 2022",
    description: "Delivered a technical talk on Flutter fundamentals and advanced architectural patterns during the first post-pandemic in-person community event.",
    url: "https://gdg.community.dev/events/details/google-gdg-indore-presents-flutter-festival-indore-2022/"
  },
  {
    title: "Various Technical Sessions",
    organization: "Google Developer Student Clubs (GDSC)",
    role: "Community Speaker & Mentor",
    date: "2021 - Present",
    description: "Mentored aspiring developers and spoke at multiple GDSC chapters on topics ranging from Dart optimization to mobile app security.",
    url: "#"
  }
];

export default function Community() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-2">
        <h2 className="text-3xl font-serif font-bold uppercase tracking-tight">
          Community
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            className="p-6 border-2 border-foreground bg-paper relative overflow-hidden group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-foreground text-paper rounded-full">
                <Mic size={20} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold leading-tight">{event.title}</h3>
                <p className="text-sm font-mono uppercase tracking-widest text-accent">{event.organization}</p>
              </div>
            </div>

            <p className="text-sm font-serif italic mb-6 leading-relaxed opacity-80">
              &quot;{event.description}&quot;
            </p>

            <div className="flex justify-between items-center mt-auto pt-4 border-t border-dotted border-foreground/20 font-mono text-[10px] uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar size={12} /> {event.date}
              </div>
              <div className="flex items-center gap-2">
                <Users size={12} /> {event.role}
              </div>
              {event.url !== "#" && (
                <a
                  href={event.url}
                  target="_blank"
                  className="hover:underline flex items-center gap-1 font-bold"
                >
                  Event Details <ArrowUpRight size={10} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 border border-foreground/10 text-center font-mono text-[10px] uppercase tracking-widest opacity-50 italic">
        * Regular contributor to GDG, GDSC, and local developer ecosystems since 2017.
      </div>
    </section>
  );
}
