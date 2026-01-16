"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    AlertTriangle,
    ArrowRight,
    Bot,
    Clock,
    FileCode,
    GitBranch,
    GitGraph,
    Info,
    Layers,
    PieChart,
    PlayCircle,
    RotateCcw,
    Settings,
    ShieldCheck,
    Split,
    UploadCloud
} from "lucide-react";
import { useState } from "react";

// --- 1. Project Setup View (Dark Mode) ---
const SetupView = () => (
    <div className="flex h-full font-mono text-sm text-gray-300">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-white/10 bg-black/40 p-4 space-y-4">
         <div className="flex items-center gap-2 text-blue-400 mb-6 font-bold">
            <Settings size={16} /> Config
         </div>
         <div className="space-y-4">
             <div className="space-y-2">
                 <div className="text-xs text-muted-foreground uppercase tracking-wider">Project Name</div>
                 <div className="h-8 bg-white/5 rounded border border-white/10 flex items-center px-3 text-white/70">
                    Skyline Towers
                 </div>
             </div>
             <div className="space-y-2">
                 <div className="text-xs text-muted-foreground uppercase tracking-wider">Ontology</div>
                 <div className="h-8 bg-blue-500/10 rounded border border-blue-500/30 flex items-center px-3 text-blue-300">
                    IFC 4.3 + PMBOK
                 </div>
             </div>
         </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gradient-to-br from-black/60 to-black/20">
           <div className="max-w-md mx-auto space-y-6">
                <div className="text-center mb-8">
                     <div className="inline-block p-3 rounded-full bg-blue-500/10 mb-4">
                        <UploadCloud size={24} className="text-blue-400" />
                     </div>
                     <h3 className="text-lg font-bold text-white mb-2">Data Ingestion</h3>
                     <p className="text-muted-foreground text-xs">Upload your project files to initialize the Knowledge Graph.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {["REVIT / IFC", "MS PROJECT", "PRIMAVERA", "EXCEL BOQ"].map((file, i) => (
                        <div key={i} className="h-24 rounded-lg border border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 hover:border-blue-500/50 transition-colors group">
                              <FileCode className="mb-2 text-muted-foreground group-hover:text-blue-400 transition-colors" size={20} />
                              <span className="text-xs font-bold text-muted-foreground group-hover:text-white transition-colors">{file}</span>
                        </div>
                    ))}
                </div>
                
                 <button className="w-full h-10 bg-blue-600 hover:bg-blue-500 text-white rounded font-medium transition-colors shadow-lg shadow-blue-900/20">
                     Initialize Graph
                 </button>
           </div>
      </div>
    </div>
);

// --- 2. BIM Viewer (Dark Mode) ---
const BIMView = () => (
    <div className="relative h-full bg-gradient-to-br from-gray-900 to-black overflow-hidden flex">
         {/* 3D Scene Mock */}
         <div className="flex-1 relative">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [perspective:1000px] [transform-style:preserve-3d]">
                 {/* Abstract Building Shape */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-blue-500/30 bg-blue-500/5 rotate-45 transform-gpu backdrop-blur-sm"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-purple-500/30 bg-purple-500/5 -rotate-12 transform-gpu backdrop-blur-sm"></div>
             </div>

             {/* Floating Labels */}
             <div className="absolute top-1/3 left-1/3 px-3 py-1 bg-black/80 border border-blue-500/50 rounded text-xs text-blue-300 backdrop-blur-md">
                 Target: Column C-12
             </div>

             {/* Toolbar */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 backdrop-blur border border-white/10 rounded-full">
                 {[RotateCcw, Info, Split, PlayCircle].map((Icon, i) => (
                     <button key={i} className="p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors">
                         <Icon size={18} />
                     </button>
                 ))}
             </div>
         </div>

         {/* Properties Panel */}
         <div className="w-64 border-l border-white/10 bg-black/80 backdrop-blur p-4 font-mono text-xs hidden md:block">
              <div className="text-white font-bold mb-4 border-b border-white/10 pb-2">Properties</div>
              <div className="space-y-3">
                  <div className="flex justify-between">
                      <span className="text-muted-foreground">Type</span>
                      <span className="text-white">IFCColumn</span>
                  </div>
                   <div className="flex justify-between">
                      <span className="text-muted-foreground">Material</span>
                      <span className="text-white">Concrete M40</span>
                  </div>
                  <div className="flex justify-between">
                      <span className="text-muted-foreground">Load</span>
                      <span className="text-red-400">Critical</span>
                  </div>
              </div>

               <div className="mt-8">
                  <div className="text-white font-bold mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                       <GitBranch size={12} className="text-purple-400" /> Linked Data
                  </div>
                   <div className="space-y-2">
                       <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded text-purple-200">
                           Task: Pouring L2
                       </div>
                       <div className="p-2 bg-green-500/10 border border-green-500/20 rounded text-green-200">
                           Cost: $450.00
                       </div>
                   </div>
               </div>
         </div>
    </div>
);


// --- 3. Knowledge Graph View (Dark Mode) ---
const GraphView = () => (
    <div className="h-full bg-[#0f1014] relative overflow-hidden flex items-center justify-center">
         {/* Background Grid */}
         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4f4f4f_1px,transparent_1px)] bg-[size:20px_20px]"></div>

         {/* Graph Nodes (Mock) */}
         <div className="relative w-full h-full max-w-2xl max-h-[400px]">
             {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.5)] z-20 border-4 border-black">
                  <GitGraph size={32} className="text-white" />
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              </svg>

              {/* Satellite Nodes */}
              <div className="absolute top-[30%] left-[20%] p-3 bg-black border border-white/20 rounded-lg flex items-center gap-2 shadow-xl z-10">
                   <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                   <span className="text-xs text-white font-mono">Cost Overrun</span>
              </div>

              <div className="absolute top-[30%] right-[20%] p-3 bg-black border border-white/20 rounded-lg flex items-center gap-2 shadow-xl z-10">
                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                   <span className="text-xs text-white font-mono">On Schedule</span>
              </div>

              <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 p-3 bg-black border border-white/20 rounded-lg flex items-center gap-2 shadow-xl z-10">
                   <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                   <span className="text-xs text-white font-mono">Resource Clash</span>
              </div>
         </div>
            
         {/* Simple Popover Mock */}
         <div className="absolute top-6 right-6 w-64 p-4 bg-black/90 border border-white/10 rounded-lg backdrop-blur text-xs text-white/80">
             <div className="font-bold text-white mb-2">Semantic Link Found</div>
             <p>Inferred relationship between <span className="text-blue-400">Column C-12</span> and <span className="text-red-400">Budget Code 404</span>.</p>
         </div>
    </div>
);


// --- 4. AI Agents View (Dark Mode) ---
const AgentsView = () => (
    <div className="h-full flex flex-col">
        <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
             {/* Agent Message */}
             <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0 border border-blue-400/30">
                     <Bot size={20} className="text-white" />
                 </div>
                 <div className="space-y-1">
                     <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-blue-400">Schedule Agent</span>
                        <span className="text-[10px] text-white/40">10:42 AM</span>
                     </div>
                     <div className="p-4 rounded-r-xl rounded-bl-xl bg-white/5 border border-white/10 text-sm text-white/90 leading-relaxed shadow-sm">
                         I've detected a potential delay in <span className="text-yellow-400 font-mono bg-yellow-400/10 px-1 rounded">Task 4.2</span> based on current resource allocation. Should I simulate a reallocation scenario?
                     </div>
                 </div>
             </div>

              {/* User Message */}
              <div className="flex gap-4 flex-row-reverse">
                 <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shrink-0 border border-purple-400/30">
                     <div className="text-xs font-bold text-white">ME</div>
                 </div>
                 <div className="space-y-1 text-right">
                     <div className="p-4 rounded-l-xl rounded-br-xl bg-purple-500/10 border border-purple-500/20 text-sm text-purple-100 leading-relaxed">
                         Yes, prioritize critical path activities.
                     </div>
                 </div>
             </div>

             {/* Agent Response */}
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0 border border-blue-400/30">
                     <Bot size={20} className="text-white" />
                 </div>
                  <div className="space-y-2">
                     <div className="p-4 rounded-r-xl rounded-bl-xl bg-white/5 border border-white/10 text-sm text-white/90 leading-relaxed shadow-sm">
                         Simulation complete. By shifting <span className="text-blue-300">Team A</span> to Sector 3, we can recover 4 days.
                     </div>
                     {/* Action Buttons */}
                     <div className="flex gap-2">
                         <button className="px-3 py-1.5 bg-green-500/20 border border-green-500/30 text-green-300 text-xs rounded hover:bg-green-500/30 transition-colors">Apply Changes</button>
                         <button className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/60 text-xs rounded hover:bg-white/10 transition-colors">View Details</button>
                     </div>
                 </div>
             </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask your project agents..." 
                  className="w-full bg-black/50 border border-white/10 rounded-lg pl-4 pr-12 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50"
                  disabled
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 rounded-md text-white">
                    <ArrowRight size={14} />
                </div>
            </div>
        </div>
    </div>
);

// --- 5. Insights Dashboard View (Dark Mode) ---
const InsightsView = () => (
    <div className="h-full p-6 space-y-6 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-red-400 text-sm font-bold">
                    <AlertTriangle size={16} /> Cost Alert
                </div>
                <div className="text-2xl font-bold text-white">+$42K</div>
                <div className="text-xs text-red-300/60">Projected overrun in MEP works</div>
            </div>
             <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                    <Clock size={16} /> Schedule
                </div>
                <div className="text-2xl font-bold text-white">On Track</div>
                <div className="text-xs text-green-300/60">Milestone completion: 98%</div>
            </div>
        </div>

        <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
             <div className="text-sm font-bold text-white mb-4">Project Health Trend</div>
             <div className="h-32 flex items-end justify-between gap-2 px-2">
                 {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                     <div key={i} className="w-full bg-blue-500/20 rounded-t-sm relative group">
                         <div 
                           className="absolute bottom-0 inset-x-0 bg-blue-500 rounded-t-sm transition-all duration-1000"
                           style={{ height: `${h}%` }}
                         />
                     </div>
                 ))}
             </div>
             <div className="flex justify-between text-xs text-white/30 mt-2 font-mono">
                 <span>MON</span><span>SUN</span>
             </div>
        </div>
    </div>
);


export function ProductPreview() {
  const [activeTab, setActiveTab] = useState("setup");

  const tabs = [
    { id: "setup", label: "Setup", icon: Settings },
    { id: "bim", label: "BIM Viewer", icon: Layers }, // Ensure Layers is imported, or use another icon
    { id: "graph", label: "Knowledge Graph", icon: GitGraph },
    { id: "agents", label: "AI Agents", icon: Bot },
    { id: "insights", label: "Insights", icon: PieChart },
  ];

  return (
    <section id="product-view" className="py-24 bg-black/20 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">One Platform. Total Control.</h2>
          <p className="text-muted-foreground">Seamlessly switch between data, models, and intelligence.</p>
        </div>

        <div className="border border-white/10 rounded-2xl bg-[#0f1014] shadow-2xl overflow-hidden flex flex-col h-[700px] max-w-6xl mx-auto backdrop-blur-sm">
           {/* Browser-like Header */}
           <div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-4 gap-4">
               <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
               </div>
               <div className="flex-1 flex justify-center">
                   <div className="bg-black/40 px-6 py-1.5 rounded-md text-xs text-white/30 font-mono border border-white/5 flex items-center gap-2">
                       <ShieldCheck size={12} className="text-green-500" /> bimsaarthi.ai/project/skyline-towers
                   </div>
               </div>
           </div>

           {/* Tabs */}
           <div className="flex border-b border-white/10 bg-black/20 overflow-x-auto no-scrollbar">
             {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all border-r border-white/5 whitespace-nowrap
                    ${activeTab === tab.id 
                       ? "bg-blue-500/10 text-blue-400 border-b-2 border-b-blue-500" 
                       : "text-muted-foreground hover:text-white hover:bg-white/5"}
                  `}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
             ))}
           </div>

           {/* Main Content Area */}
           <div className="flex-1 overflow-hidden relative">
               <AnimatePresence mode="wait">
                   <motion.div
                     key={activeTab}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     transition={{ duration: 0.2 }}
                     className="h-full w-full"
                   >
                       {activeTab === "setup" && <SetupView />}
                       {activeTab === "bim" && <BIMView />}
                       {activeTab === "graph" && <GraphView />}
                       {activeTab === "agents" && <AgentsView />}
                       {activeTab === "insights" && <InsightsView />}
                   </motion.div>
               </AnimatePresence>
           </div>
        </div>
      </div>
    </section>
  );
}
