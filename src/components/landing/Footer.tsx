import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
             <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    B
                </div>
                <span className="text-xl font-bold text-white">BIMSaarthi</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Empowering construction with intelligent decision support systems backed by Knowledge Graphs and AI.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Github size={20} /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-white transition-colors">Architecture</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Use Cases</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Login</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6">Contact</h4>
             <ul className="space-y-4 text-sm text-muted-foreground">
              <li>info@bimsaarthi.com</li>
              <li>Research Park, IIT Madras</li>
              <li>Chennai, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
           <p>&copy; {new Date().getFullYear()} BIMSaarthi. All rights reserved.</p>
           <div className="flex gap-6">
             <Link href="#" className="hover:text-white">Privacy Policy</Link>
             <Link href="#" className="hover:text-white">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
