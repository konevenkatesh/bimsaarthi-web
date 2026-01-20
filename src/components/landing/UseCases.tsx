"use client";

import { Briefcase, Building2, GraduationCap, HardHat } from "lucide-react";

export function UseCases() {
  const personas = [
    {
      icon: <Briefcase size={24} />,
      title: "Project Managers",
      desc: "Gain predictive control over schedules and budgets. Eliminate surprises and report with confidence.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
    },
    {
      icon: <HardHat size={24} />,
      title: "BIM Managers",
      desc: "Automate model validation and semantic enrichment. Turn static geometry into a queryable knowledge graph.",
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "border-orange-400/20",
    },
    {
      icon: <Building2 size={24} />,
      title: "Construction Firms",
      desc: "Unify data across your portfolio. Reduce risk and improve margins with AI-driven insights.",
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-400/20",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Researchers",
      desc: "Leverage an ontology-driven platform (OWL 2) for advanced experiments in construction AI.",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
  ];

  return (
    <section id="use-cases" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Who Is This For?</h2>
          <p className="text-muted-foreground">Tailored intelligence for every stakeholder.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:border-white/10"
            >
              <div className={`w-12 h-12 rounded-lg ${item.bg} ${item.border} border flex items-center justify-center ${item.color} mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
