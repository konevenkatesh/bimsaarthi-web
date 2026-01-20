import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <div className={cn("absolute top-32 left-4 md:left-12 z-40 flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide", className)}>
      <Link 
        href="/" 
        className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors"
      >
        <Home className="w-3 h-3 md:w-4 md:h-4" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
          {item.href ? (
             <Link href={item.href} className="text-gray-400 hover:text-cyan-400 transition-colors">
               {item.label}
             </Link>
          ) : (
             <span className="text-cyan-100/80">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}
