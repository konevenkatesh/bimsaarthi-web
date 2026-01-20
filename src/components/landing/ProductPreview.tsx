"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    Bot,
    CloudUpload,
    Database,
    FileCode,
    FileSpreadsheet,
    FileText,
    FolderKanban,
    GitGraph,
    Layers,
    LayoutDashboard,
    Loader2,
    Send,
    Settings,
    ShieldCheck,
    Table
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// --- 1. Project Setup View (Code-based) ---
const SetupView = () => {
    return (
        <div className="flex h-full w-full bg-[#0f1014] font-sans text-white">
            {/* Sidebar - Config */}
            <div className="w-80 border-r border-white/10 p-6 flex flex-col gap-8 bg-[#0f1014]">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Settings className="animate-spin-slow" size={20} />
                    <span className="font-mono font-bold tracking-wider">Config</span>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 tracking-wider">PROJECT NAME</label>
                        <div className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-gray-300">
                            Skyline Towers
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 tracking-wider">ONTOLOGY</label>
                        <div className="bg-blue-500/10 border border-blue-500/30 rounded px-4 py-2 text-sm text-blue-400 font-medium">
                            IFC 4.3 + PMBOK
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - Data Ingestion */}
            <div className="flex-1 flex flex-col items-center justify-center p-12 bg-black/20">
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                        <CloudUpload className="text-blue-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Data Ingestion</h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                        Upload your project files to initialize the Knowledge Graph.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full max-w-2xl mb-12">
                     <button className="flex flex-col items-center justify-center gap-3 p-8 rounded-xl border border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all group">
                        <FileCode size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                        <span className="text-xs font-bold tracking-wider">REVIT / IFC</span>
                     </button>
                     <button className="flex flex-col items-center justify-center gap-3 p-8 rounded-xl border border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all group">
                        <FileSpreadsheet size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                        <span className="text-xs font-bold tracking-wider">MS PROJECT</span>
                     </button>
                     <button className="flex flex-col items-center justify-center gap-3 p-8 rounded-xl border border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all group">
                        <Database size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                        <span className="text-xs font-bold tracking-wider">PRIMAVERA</span>
                     </button>
                     <button className="flex flex-col items-center justify-center gap-3 p-8 rounded-xl border border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all group">
                        <Table size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                        <span className="text-xs font-bold tracking-wider">EXCEL BOQ</span>
                     </button>
                </div>

                <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-12 rounded-lg w-full max-w-2xl transition-all shadow-lg hover:shadow-blue-500/25">
                    Initialize Graph
                </button>
            </div>
        </div>
    );
};

// --- 2. Portfolio View ---
const PortfolioView = () => (
    <div className="relative h-full w-full bg-[#0f1014]">
        <Image 
            src="/product-screenshots/portfolio.png" 
            alt="Project Portfolio Interface" 
            fill 
            className="object-cover object-top" 
        />
    </div>
);

// --- 3. BIM Viewer ---
const BIMView = () => (
    <div className="relative h-full w-full bg-[#0f1014]">
         <Image 
            src="/product-screenshots/BIM_viewer.png" 
            alt="BIM Viewer Interface" 
            fill 
            className="object-cover object-top" 
        />
    </div>
);

// --- 4. Knowledge Graph View ---
const GraphView = () => (
    <div className="relative h-full w-full bg-[#0f1014]">
         <Image 
            src="/product-screenshots/Knowledge_Graph.png" 
            alt="Knowledge Graph Interface" 
            fill 
            className="object-cover object-top" 
        />
    </div>
);

// --- 5. Dashboard View ---
const DashboardView = () => (
    <div className="relative h-full w-full bg-[#0f1014]">
         <Image 
            src="/product-screenshots/Dashboard.png" 
            alt="Dashboard Interface" 
            fill 
            className="object-cover object-top" 
        />
    </div>
);

// --- 6. AI Agents View (Code-based) ---
const AgentsView = () => {
    return (
        <div className="relative h-full w-full bg-[#0f1014] flex flex-col">
            {/* Chat Header */}
            <div className="h-14 border-b border-white/10 flex items-center px-6 bg-white/5">
                <Bot className="text-purple-400 mr-3" size={20} />
                <span className="font-semibold text-white">Site Supervisor Agent</span>
                <span className="ml-auto flex items-center text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse" />
                    Online
                </span>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 space-y-6 overflow-hidden">
                <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
                        <Bot size={16} className="text-purple-400" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-sm text-gray-300">
                            I've analyzed the latest site scan. There seems to be a <span className="text-red-400 font-medium">15% deviation</span> in the HVAC duct installation on Level 3 compared to the BIM model.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
                        <span className="text-xs font-bold text-blue-400">YOU</span>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                        <p className="text-sm text-blue-100">
                            Generate a conflict report and assign a task to the MEP validation team.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
                        <Bot size={16} className="text-purple-400" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 max-w-[80%] space-y-3">
                        <p className="text-sm text-gray-300">
                           Done. I've created <span className="text-blue-400 underline cursor-pointer">Task #4392</span> and notified the team.
                        </p>
                        <div className="bg-black/40 rounded-lg p-3 border border-white/5 text-xs font-mono text-gray-400 flex items-center gap-3">
                            <Loader2 size={12} className="animate-spin text-purple-400" />
                            Updating Schedule Impact...
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="h-20 border-t border-white/10 p-4 bg-white/5">
                <div className="h-full bg-black/40 rounded-lg border border-white/10 flex items-center px-4 relative">
                    <span className="text-gray-500 text-sm">Ask about project status...</span>
                    <button className="absolute right-2 p-2 hover:bg-blue-500/20 rounded-md transition-colors group">
                        <Send size={16} className="text-gray-400 group-hover:text-blue-400" />
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- 7. Reports View ---
const ReportsView = () => (
    <div className="relative h-full w-full bg-[#0f1014]">
         <Image 
            src="/product-screenshots/Reports.png" 
            alt="Reports Interface" 
            fill 
            className="object-cover object-top" 
        />
    </div>
);


export function ProductPreview() {
  const [activeTab, setActiveTab] = useState("setup");

  const tabs = [
    { id: "setup", label: "Project Set Up", icon: Settings },
    { id: "portfolio", label: "Project Portfolio", icon: FolderKanban },
    { id: "bim", label: "BIM Viewer", icon: Layers },
    { id: "graph", label: "Knowledge Graph", icon: GitGraph },
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "agents", label: "AI Agents", icon: Bot },
    { id: "reports", label: "Reports", icon: FileText },
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
                       {activeTab === "portfolio" && <PortfolioView />}
                       {activeTab === "bim" && <BIMView />}
                       {activeTab === "graph" && <GraphView />}
                       {activeTab === "dashboard" && <DashboardView />}
                       {activeTab === "agents" && <AgentsView />}
                       {activeTab === "reports" && <ReportsView />}
                   </motion.div>
               </AnimatePresence>
           </div>
        </div>
      </div>
    </section>
  );
}
