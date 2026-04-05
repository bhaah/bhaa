"use client";

import type { Project } from "../data/portfolio";
import { ExternalLink } from "lucide-react"; // Highly recommend adding these for visual cues

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // A helper to wrap the content in a link only if one exists
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (!project.link) return <div className={baseStyles}>{children}</div>;
    
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} cursor-pointer active:scale-[0.98]`}
      >
        {children}
      </a>
    );
  };

  const baseStyles = "group block relative min-w-0 rounded-2xl border border-foreground/10 bg-white/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_12px_28px_rgba(31,47,53,0.14)]";

  return (
    <CardWrapper>
      <article className="flex h-full flex-col">
        <header className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            {/* 1. EYE-CATCHER: Pulsing Live Indicator */}
            {project.isLive && (
              <div className="mb-2 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Live Now</span>
              </div>
            )}
            <h3 className="text-xl font-semibold leading-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </div>
          
          {/* Visual cue for the link */}
          {project.link && (
            <div className="text-foreground/30 group-hover:text-accent transition-colors">
              {project.isLive ? <ExternalLink size={18} /> : <ExternalLink size={18} />}
            </div>
          )}
        </header>

        <p className="mt-3 flex-grow text-sm leading-relaxed text-foreground/80">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-accent/10 bg-accent/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent/80 transition-colors group-hover:bg-accent/10 group-hover:text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>
      </article>
    </CardWrapper>
  );
}