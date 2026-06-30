import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-20 sm:py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex flex-col items-center justify-center text-center space-y-3 p-6 rounded-lg bg-white/40 dark:bg-black/20 border border-primary/20 hover:border-primary/80 transition-all duration-300 hover:shadow-[0_0_15px_var(--color-primary)] hover:-translate-y-1 backdrop-blur-sm">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a
                    href="mailto:gopikishan6719@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                  >
                    gopikishan6719@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-3 p-6 rounded-lg bg-white/40 dark:bg-black/20 border border-primary/20 hover:border-primary/80 transition-all duration-300 hover:shadow-[0_0_15px_var(--color-primary)] hover:-translate-y-1 backdrop-blur-sm">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <a
                    href="tel:+919279699164"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    +91 9279699164
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-3 p-6 rounded-lg bg-white/40 dark:bg-black/20 border border-primary/20 hover:border-primary/80 transition-all duration-300 hover:shadow-[0_0_15px_var(--color-primary)] hover:-translate-y-1 backdrop-blur-sm">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground text-sm">
                     Ranchi, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/gopi-kishan-2844aa314/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all duration-300">
                  <Linkedin />
                </a>
                <a href="https://x.com/GopiKishan84620" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all duration-300">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/gopikishan1729/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all duration-300">
                  <Instagram />
                </a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all duration-300">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          <form
            className="relative h-fit space-y-6 p-5 sm:p-8 flex flex-col justify-between rounded-xl bg-white/40 dark:bg-black/40 border border-primary/30 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:border-primary/60 transition-all duration-500"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground"> Send a Message</h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground/80 tracking-wide uppercase"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-primary/30 bg-white/50 dark:bg-black/20 text-foreground focus:outline-hidden focus:border-primary focus:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300 placeholder:text-muted-foreground/70 dark:placeholder:text-muted-foreground/50 backdrop-blur-sm"
                  placeholder="Gopi Kishan"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground/80 tracking-wide uppercase"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-primary/30 bg-white/50 dark:bg-black/20 text-foreground focus:outline-hidden focus:border-primary focus:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300 placeholder:text-muted-foreground/70 dark:placeholder:text-muted-foreground/50 backdrop-blur-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground/80 tracking-wide uppercase"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-primary/30 bg-white/50 dark:bg-black/20 text-foreground focus:outline-hidden focus:border-primary focus:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300 placeholder:text-muted-foreground/70 dark:placeholder:text-muted-foreground/50 resize-none h-32 backdrop-blur-sm"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 uppercase tracking-widest font-bold shadow-[0_0_15px_var(--color-primary)] hover:shadow-[0_0_25px_var(--color-primary)]"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
        </div>
      </div>
    </section>
  );
};
