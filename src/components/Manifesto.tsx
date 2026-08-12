"use client";

export default function Manifesto() {
  return (
    <section className="mb-16">
      <div className="bg-foreground text-paper p-8 md:p-12 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-paper/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border border-paper/10 -translate-x-1/2 translate-y-1/2 rotate-45" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.4em] mb-6 opacity-60">The Engineering Manifesto</h2>
          <blockquote className="text-3xl md:text-5xl font-serif font-black italic leading-tight mb-8">
            &quot;I believe in Clean Architecture not because it&apos;s a trend, but because it&apos;s the only way to scale for millions.&quot;
          </blockquote>
          <div className="w-16 h-1 bg-paper/20 mx-auto mb-6" />
          <p className="font-mono text-xs uppercase tracking-widest opacity-80">
            Shirsh Shukla — Senior Technical Lead
          </p>
        </div>
      </div>
    </section>
  );
}
