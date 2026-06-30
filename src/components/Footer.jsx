import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 px-4 bg-card relative border-t border-border mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center text-center sm:text-left">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Gopi_kishan.co. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
