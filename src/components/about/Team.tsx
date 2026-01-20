'use client';

import { motion } from "framer-motion";
import { GraduationCap, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  qualification: string;
  focus: string;
  image: string;
  linkedin?: string;
  scholar?: string;
  email?: string;
}

const DirectorsData: TeamMember[] = [
  {
    name: "Venkatesh Kone",
    role: "Founder & DIRECTOR",
    qualification: "PhD Scholar, NIT Karnataka",
    focus: "Construction Informatics & AI",
    image: "/images/team/venkatesh.png",
    linkedin: "https://www.linkedin.com/in/venkatesh-kone-66149a13b/",
    scholar: "https://scholar.google.com/citations?user=0aKzihMAAAAJ&hl=en",
    email: "mailto:venkateshkone.connect@gmail.com"
  },
  {
    name: "Dr. Kondeti Chiranjeevi",
    role: "DIRECTOR",
    qualification: "PhD, NIT Karnataka",
    focus: "Materials & Transportation",
    image: "/images/team/chiranjeevi.jpeg",
    linkedin: "http://www.linkedin.com/in/kondeti-chiranjeevi-864904256",
    scholar: "https://scholar.google.com/citations?user=F05kw8UAAAAJ&hl=en",
    email: "mailto:chiru854@gmail.com"
  }
];

const CoreTeamTabs = {
  "BIM-Services": [
    {
      name: "Dr. Kaku Mahendra",
      role: "Principal Structural Engineer",
      qualification: "PhD, Structural Engineering",
      focus: "Structural Analysis & Design",
      image: "/images/team/placeholder_bim1.jpg",
    },
    {
      name: "Shanmukha Reddy V",
      role: "Lead – Electrical Engineering & BIM Systems",
      qualification: "PhD Scholar, NIT Karnataka",
      focus: "Electrical Engineering & BIM Systems",
      image: "/images/team/placeholder_bim2.jpg",
    },
    {
      name: "Balaji",
      role: "Head - Site Operations",
      qualification: "",
      focus: "Construction Execution & Site Operations",
      image: "/images/team/placeholder_bim3.jpg",
    }
  ],
  "R&D": [
    {
      name: "Anil Kumar M",
      role: "Research Lead – Advanced Construction Materials",
      qualification: "PhD Scholar, Mahindra University",
      focus: "Construction Materials & 3D Printing",
      image: "/images/team/placeholder_rnd1.jpg",
    },
    // {
    //   name: "Rahul Verma",
    //   role: "Data Scientist",
    //   qualification: "MS, Data Science",
    //   focus: "Predictive Analytics",
    //   image: "/images/team/placeholder_rnd2.jpg",
    // },
    // {
    //   name: "Emily White",
    //   role: "Algorithm Engineer",
    //   qualification: "M.Sc, Mathematics",
    //   focus: "Graph Theory",
    //   image: "/images/team/placeholder_rnd3.jpg",
    // }
  ],
  "Developers": [
    // {
    //   name: "Michael Chang",
    //   role: "Lead Full Stack Dev",
    //   qualification: "B.Tech, CS",
    //   focus: "Scalable Systems",
    //   image: "/images/team/placeholder_dev1.jpg",
    // },
    // {
    //   name: "Ananya Gupta",
    //   role: "Frontend Engineer",
    //   qualification: "B.E, IT",
    //   focus: "UI/UX & React",
    //   image: "/images/team/placeholder_dev2.jpg",
    // },
    // {
    //   name: "James Wilson",
    //   role: "Backend Engineer",
    //   qualification: "B.Sc, CS",
    //   focus: "API & Database",
    //   image: "/images/team/placeholder_dev3.jpg",
    // }
  ]
};

const AdvisoryData: TeamMember[] = [
  {
    name: "Dr. Gangadhar Mahesh",
    role: "Academic Advisor",
    qualification: "Professor, Civil Engineering",
    focus: "Construction Management & Contracts",
    image: "/images/team/placeholder_2.jpg",
  },
  {
    name: "Er. Vasu Adapa",
    role: "Design & Planning Advisor",
    qualification: "Founder / Principal Architect, Hycon Designs",
    focus: "Mega Projects & Strategy",
    image: "/images/team/placeholder_3.jpg",
  },
  // {
  //   name: "Dr. P. Singh",
  //   role: "Technology Advisor",
  //   qualification: "AI Research Lead",
  //   focus: "Knowledge Graphs & Semantic Web",
  //   image: "/images/team/placeholder_4.jpg",
  // }
];

const TeamCard = ({ member }: { member: TeamMember }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group h-full"
  >
    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white/10 group-hover:border-blue-500/50 transition-colors relative bg-zinc-800 shrink-0">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
         {member.image.includes('placeholder') ? (
             <div className="w-full h-full flex items-center justify-center text-xl font-bold text-white/20">
                 {member.name.charAt(0)}
             </div>
         ) : (
            <img src={member.image} alt={member.name} className="w-full h-full object-cover relative z-10" />
         )}
    </div>
    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
    <p className="text-blue-400 text-sm font-medium mb-1">{member.role}</p>
    <p className="text-gray-400 text-xs mb-3">{member.qualification}</p>
    
    <div className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 mb-4 border border-white/5">
        {member.focus}
    </div>

    <div className="flex gap-3 mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
        {member.linkedin && (
            <Link href={member.linkedin} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4 text-white" />
            </Link>
        )}
        {member.scholar && (
            <Link href={member.scholar} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors">
                <GraduationCap className="h-4 w-4 text-white" />
            </Link>
        )}
        {member.email && (
            <Link href={member.email} className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="h-4 w-4 text-white" />
            </Link>
        )}
    </div>
  </motion.div>
);

export function Team() {
  const [activeTab, setActiveTab] = useState<keyof typeof CoreTeamTabs>("BIM-Services");

  return (
    <section className="py-20 relative bg-black border-t border-white/5">
      <div className="container px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Minds</h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
             A blend of construction domain expertise and cutting-edge artificial intelligence research.
          </p>
        </div>

        {/* Directors Section */}
        <div className="mb-24">
            <h3 className="text-xl font-bold text-white text-center mb-10 tracking-widest uppercase border-b border-white/10 pb-4 max-w-xs mx-auto">Directors</h3>
            <div className="grid md:grid-cols-2 gap-8 justify-center max-w-2xl mx-auto">
                {DirectorsData.map((member, idx) => (
                    <TeamCard key={idx} member={member} />
                ))}
            </div>
        </div>

        {/* Core Team Stats & Tabs */}
        <div className="mb-24">
            <h3 className="text-xl font-bold text-white text-center mb-8 tracking-widest uppercase border-b border-white/10 pb-4 max-w-xs mx-auto">Core Team</h3>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {(Object.keys(CoreTeamTabs) as Array<keyof typeof CoreTeamTabs>).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" 
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
                <div className="grid md:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
                    {CoreTeamTabs[activeTab].map((member, idx) => (
                        <TeamCard key={`${activeTab}-${idx}`} member={member} />
                    ))}
                </div>
            </div>
        </div>

        {/* Advisory Board */}
        <div>
            <h3 className="text-xl font-bold text-white text-center mb-10 tracking-widest uppercase border-b border-white/10 pb-4 max-w-xs mx-auto">Advisory Board</h3>
            <div className="grid md:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
                 {AdvisoryData.map((member, idx) => (
                    <TeamCard key={idx} member={member} />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
