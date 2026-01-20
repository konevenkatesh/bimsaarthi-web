"use client";

import { Check, X } from "lucide-react";

export function ComparisonTable() {
  const features = [
    { name: "Data Model", acc: "Relational tables", procore: "Relational tables", ineight: "ERP-style relational", us: "Knowledge Graph (semantic)" },
    { name: "BIM Integration", acc: "File-linked", procore: "File-linked", ineight: "File-linked", us: "Graph-linked objects & tasks" },
    { name: "Progress Tracking", acc: "Percent complete", procore: "Percent complete", ineight: "Manual/cost-based", us: "Evidence + KG + 3D linked" },
    { name: "Risk Detection", acc: "Reports & dashboards", procore: "Reports & dashboards", ineight: "Rule-based", us: "AI over Knowledge Graph" },
    { name: "Visualization", acc: "2D dashboards", procore: "2D dashboards", ineight: "2D dashboards", us: "Live 3D Digital Twin" },
    { name: "Causality Analysis", acc: "✗", procore: "✗", ineight: "✗ (export to BI)", us: "✓ Instant KG queries" },
    { name: "Predictive Delay Risk", acc: "Analytics-based", procore: "Marketplace apps", ineight: "Integrated risk analysis", us: "AI + KG with root cause" },
  ];

  return (
    <section className="py-24 bg-[#0f1014]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-5xl font-bold mb-6">How We Compare</h2>
           <p className="text-muted-foreground">
              Where they excel: Workflow management, document control. <br/>
              <span className="text-white font-bold">Where we dominate: Knowing why things fail before they fail.</span>
           </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl">
            <table className="w-full text-left border-collapse text-sm">
                <thead>
                    <tr className="bg-white/5 text-white/60">
                        <th className="p-6 font-medium">Capability</th>
                        <th className="p-6 font-medium">Autodesk ACC</th>
                        <th className="p-6 font-medium">Procore</th>
                        <th className="p-6 font-medium">InEight</th>
                        <th className="p-6 font-bold text-blue-400 bg-blue-900/10 border-b-2 border-blue-500">BIMSaarthi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {features.map((feature, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                            <td className="p-6 font-medium text-white">{feature.name}</td>
                            <td className="p-6 text-muted-foreground">{renderCell(feature.acc)}</td>
                            <td className="p-6 text-muted-foreground">{renderCell(feature.procore)}</td>
                            <td className="p-6 text-muted-foreground">{renderCell(feature.ineight)}</td>
                            <td className="p-6 font-bold text-white bg-blue-900/5">{renderCell(feature.us)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </section>
  );
}

function renderCell(content: string) {
    if (content === "✗") return <X className="text-red-500/50" size={20} />;
    if (content.startsWith("✓")) return <span className="flex items-center gap-2 text-green-400"><Check size={16} /> {content.substring(2)}</span>;
    return content;
}
