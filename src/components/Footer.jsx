import { ArrowUp, Heart, Coffee } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 px-4 relative mt-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto flex flex-col sm:flex-row gap-6 justify-between items-center text-center sm:text-left z-10 relative">
        
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-foreground flex items-center justify-center sm:justify-start gap-1.5">
            Crafted with <Heart className="w-4 h-4 text-red-500 animate-pulse fill-red-500" /> & <Coffee className="w-4 h-4 text-amber-700 dark:text-amber-500" /> by
            <span className="relative group cursor-pointer ml-1 text-primary">
              <span className="relative z-10">Gopi Kishan</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </span>
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <a
          href="#hero"
          className="group relative p-3 rounded-2xl bg-card border border-border shadow-md hover:shadow-[0_5px_15px_rgba(139,92,246,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          aria-label="Scroll to top"
        >
          <span className="text-xs font-semibold text-primary/80 group-hover:text-primary uppercase tracking-wider hidden sm:block">
            Back to top
          </span>
          <ArrowUp size={18} className="text-primary group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </footer>
  );
};
