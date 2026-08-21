import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/60 text-sm font-bold text-gradient">
              RR
            </span>
            <span>Raju Rangoji</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{profile.shortTitle}</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Building scalable, production-grade web applications with React.js, NestJS, and TypeScript.
          </p>
          <motion.div whileHover={{ x: 4 }} className="mt-4 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:justify-end">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <Link to="/resume" className="text-muted-foreground transition-colors hover:text-foreground">
            Resume
          </Link>
        </nav>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {year} Raju Rangoji. All rights reserved.
      </div>
    </footer>
  );
}
