"use client";

import { CheckCircle } from "lucide-react";

export function ResearchValidation() {
  return (
    <section id="research" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Baked by Research. <br/>Validated by Industry.</h2>
            <p className="text-xl text-muted-foreground mb-8">
              BIMSaarthi isn't just a tool; it's a scientific approach to construction intelligence, grounded in Semantic Web technologies.
            </p>
            
            <div className="space-y-4">
              {[
                "Ontology-driven architecture (OWL 2 Standard)",
                "Aligned with PMBOK Knowledge Areas",
                "Graph-based Inference Engine",
                "Technical Validation via Case Studies"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-400 shrink-0" />
                  <span className="font-medium text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-xl bg-white/5 border border-white/10">
               <p className="italic text-muted-foreground text-sm">
                 "The knowledge graph approach solves the interoperability problem fundamental to construction IT."
               </p>
               <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                  <div>
                      <div className="text-sm font-bold">Research Partner</div>
                      <div className="text-xs text-muted-foreground">IIT Madras</div>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
             <div className="relative border border-white/10 bg-[#0f1014] rounded-2xl p-8 shadow-2xl">
                 {/* Mock technical diagram */}
                 <div className="flex flex-col gap-6 items-center">
                     <div className="w-full h-16 border-2 border-dashed border-white/20 rounded-lg flex items-center justify-center text-white/50 text-sm font-mono">
                        Standard Ontologies (IFC, w3c-time)
                     </div>
                     <div className="h-8 w-px bg-white/20" />
                     <div className="w-full p-6 border-2 border-blue-500/50 bg-blue-500/5 rounded-lg text-center">
                         <div className="font-bold text-blue-400 mb-2">BIMSaarthi Core Ontology</div>
                         <div className="text-xs text-blue-300/70">Semantic Mapping & Inference Rules</div>
                     </div>
                     <div className="h-8 w-px bg-white/20" />
                      <div className="grid grid-cols-2 gap-4 w-full">
                          <div className="p-4 bg-white/5 rounded border border-white/10 text-center text-sm">
                             Decision Support
                          </div>
                          <div className="p-4 bg-white/5 rounded border border-white/10 text-center text-sm">
                             Predictive Analytics
                          </div>
                      </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
