"use client";

import { CalendarClock, GraduationCap, TrendingUp, Users } from "lucide-react";

export function UseCases() {
  const cases = [
    {
      icon: <CalendarClock size={24} />,
      title: "Project Planning & Control",
      desc: "Link schedule logic to physical BIM elements for 4D simulation and progress tracking.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Cost & Risk Monitoring",
      desc: "Visualize cost variance on the 3D model. Predict overruns using historical graph data.",
      color: "text-red-400",
      bg: "bg-red-400/10",
      border: "border-red-400/20",
    },
    {
      icon: <Users size={24} />,
      title: "Resource Optimization",
      desc: "Prevent clashes and shortages by mapping resource demand to zone-based locations.",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "border-yellow-400/20",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Academic Research",
      desc: "A validated platform for Ontology and AI in Construction research (OWL/RDF support).",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
  ];

  return (
    <section id="use-cases" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Built for Impact</h2>
          <p className="text-muted-foreground">Solving critical challenges in construction management.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:border-white/10"
            >
              <div className={`w-12 h-12 rounded-lg ${item.bg} ${item.border} border flex items-center justify-center ${item.color} mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
