"use client";

const experiences = [
  {
    role: "Senior Flutter Engineer (Android & iOS)",
    company: "Jio Platforms Limited",
    period: "05/2023 – Current",
    highlights: [
      "Enhanced application performance and responsiveness by refactoring key modules using Clean Architecture.",
      "Contributed to large-scale Flutter applications serving high user traffic, ensuring scalability.",
      "Reduced app crashes and improved stability using Firebase Crashlytics and debugging tools.",
      "Optimized API integration and data handling (REST APIs, WebSockets).",
      "Led code reviews and enforced coding standards across the team."
    ]
  },
  {
    role: "Solution Engineer",
    company: "Deqode",
    period: "09/2021 – 04/2023",
    highlights: [
      "Delivered multiple client-facing applications with end-to-end feature ownership.",
      "Built reusable components and modular structures to improve development efficiency.",
      "Optimized development workflows through structured code reviews.",
      "Translated business needs into scalable technical solutions."
    ]
  },
  {
    role: "Senior Mobile Developer",
    company: "MMF InfoTech",
    period: "10/2017 – 08/2021",
    highlights: [
      "Established and streamlined Android applications using Kotlin and core Android libraries.",
      "Structured screens and logic for readability and reuse.",
      "Analyzed runtime issues and refined app responsiveness."
    ]
  },
  {
    role: "Android Developer",
    company: "Dollop InfoTech",
    period: "02/2017 – 09/2017",
    highlights: [
      "Contributed to Android application development by implementing screens and navigation flows.",
      "Tested and debugged applications to enhance reliability and performance."
    ]
  }
];

export default function ServiceRecord() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif font-bold mb-8 border-b-2 border-foreground pb-2 uppercase tracking-tight">
        Work Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 border-b border-foreground/10 pb-8 last:border-0">
            <div className="font-mono text-sm">
              <div className="font-bold">{exp.period}</div>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-2xl font-serif font-bold mb-1">{exp.role}</h3>
              <div className="text-lg font-serif italic mb-4 text-accent">{exp.company}</div>
              <ul className="list-disc list-inside space-y-2 text-md leading-relaxed">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="pl-4 -indent-4">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
