"use client";

const skills = [
  {
    category: "Core Languages",
    items: ["Dart", "Kotlin", "Java", "Swift"]
  },
  {
    category: "Frameworks & SDKs",
    items: ["Flutter", "Android SDK", "iOS SDK"]
  },
  {
    category: "State Management",
    items: ["BLoC", "Riverpod", "Provider", "GetX"]
  },
  {
    category: "Architecture",
    items: ["Clean Architecture", "MVVM", "Modular Design"]
  },
  {
    category: "Cloud & Backend",
    items: ["Firebase", "REST APIs", "WebSockets", "AWS", "SQLite", "Firestore"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub Actions", "Codemagic", "Jira", "CI/CD"]
  }
];

export default function TechStack() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif font-bold mb-8 border-b-2 border-foreground pb-2 uppercase tracking-tight">
        Technical Expertise
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest border-b border-foreground/20 pb-2 font-bold">
              {skill.category}
            </h3>
            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="text-sm font-serif italic flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground/20 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-foreground/5 border-l-4 border-foreground italic font-serif">
        <p className="text-sm opacity-80">
          &quot;Expertise in Flutter ecosystems with deep native Android and iOS integration.
          Architecture patterns focused on maintainable, clean separation of concerns.&quot;
        </p>
      </div>
    </section>
  );
}
