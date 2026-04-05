import { ProjectCard } from "./components/project-card";
import { projectsGitHub, projectsLive, skills } from "./data/portfolio";

export default function Home() {
  return (
    <section
      aria-label="Bhaa Hillou portfolio"
      className="relative flex min-h-screen w-full flex-col overflow-x-clip px-4 py-6 text-foreground sm:px-6 md:px-10 md:py-8 lg:px-16"
    >
      <aside
        className="grain pointer-events-none absolute inset-0 opacity-35"
        aria-hidden="true"
      />
      <header className="reveal delay-1 z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
        <p className="title-font text-2xl font-semibold tracking-wide">
          Bhaa Hillou
        </p>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] md:flex">
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>

          <a href="#projects" className="hover:text-accent transition-colors">
            Projects
          </a>

          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
        </nav>
      </header>

      <main className="z-10 mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-8 pb-12 pt-8 md:gap-10 md:pb-16 md:pt-14">
        <section className="soft-card reveal min-w-0 rounded-3xl p-5 sm:p-7 md:p-10 lg:p-12">
          <header className="reveal delay-1 z-20 mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
            <p className="title-font text-2xl font-semibold tracking-wide">
              Bhaa Hillou
            </p>

            <div className="flex items-center gap-6">
              <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] md:flex">
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </nav>

              {/* Professional Links */}
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/bhaah"
                  target="_blank"
                  className="hover:text-accent transition-colors"
                >
                  {/* <Github size={20} /> */}
                </a>
                <a
                  href="https://linkedin.com/in/bhaa-hillou-6740b1282"
                  target="_blank"
                  className="hover:text-accent transition-colors"
                >
                  {/* <Linkedin size={20} /> */}
                </a>
              </div>
            </div>
          </header>

          <section
            className="reveal delay-4 mt-8 flex flex-wrap gap-3 sm:gap-4"
            aria-label="Primary actions"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b85134] hover:shadow-[0_10px_24px_rgba(204,93,61,0.35)] sm:px-6"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-foreground/20 bg-surface px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_20px_rgba(31,47,53,0.14)] sm:px-6"
            >
              Book a Call
            </a>
          </section>

          {/* <section className="reveal delay-4 mt-10 grid gap-3 text-sm sm:grid-cols-3" aria-label="Highlights">
            <article className="rounded-2xl border border-foreground/10 bg-white/70 p-4">
              <p className="text-2xl font-semibold text-accent">4+ years</p>
              <p className="mt-1 uppercase tracking-[0.12em] text-foreground/70">Building on web</p>
            </article>
            <article className="rounded-2xl border border-foreground/10 bg-white/70 p-4">
              <p className="text-2xl font-semibold text-accent-secondary">28 projects</p>
              <p className="mt-1 uppercase tracking-[0.12em] text-foreground/70">Shipped globally</p>
            </article>
            <article className="rounded-2xl border border-foreground/10 bg-white/70 p-4">
              <p className="text-2xl font-semibold text-accent">12 brands</p>
              <p className="mt-1 uppercase tracking-[0.12em] text-foreground/70">Creative partners</p>
            </article>
          </section> */}
        </section>

        <section
          id="about"
          className="grid min-w-0 gap-5 md:grid-cols-[1.2fr_1fr] md:gap-6"
        >
          <article className="soft-card reveal delay-2 min-w-0 rounded-3xl p-5 sm:p-7 md:p-9">
            <h2 className="title-font text-4xl leading-tight font-semibold">
              About Bhaa
            </h2>
            <p className="mt-4 text-foreground/80">
              I collaborate with founders and teams to craft products that feel
              intentional, fast, and human. From early concept to launch, I
              focus on systems that scale without losing personality.
            </p>
            <p className="mt-4 text-foreground/80">
              My approach combines design thinking, measurable product outcomes,
              and clean implementation. Every screen should have a purpose, and
              every interaction should earn attention.
            </p>
          </article>
          <article className="soft-card reveal delay-3 min-w-0 rounded-3xl p-5 sm:p-7 md:p-9">
            <h2 className="title-font text-3xl leading-tight font-semibold">
              Core Skills
            </h2>
            <ul className="mt-5 flex flex-wrap gap-3" aria-label="Core skills">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* live projects */}
        <section
          id="projects"
          className="soft-card reveal delay-3 min-w-0 rounded-3xl p-5 sm:p-7 md:p-10 border-t-4 border-accent/20"
        >
          <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Production Ready
                </span>
              </div>
              <h2 className="title-font text-4xl leading-tight font-semibold italic">
                Live Ecosystems
              </h2>
            </div>
          </header>

          <section
            className="mt-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            aria-label="Live project cards"
          >
            {projectsLive.map((project) => (
              <div
                key={project.title}
                className="group transition-transform duration-500 hover:-translate-y-2"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </section>
        </section>

        {/* github */}
        <section
          id="projects-github"
          className="soft-card reveal delay-3 min-w-0 rounded-3xl p-5 sm:p-7 md:p-10 opacity-90"
        >
          <header>
            <h2 className="title-font text-4xl leading-tight font-semibold">
              Open Source & University
            </h2>
          </header>
          <section
            className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            aria-label="GitHub project cards"
          >
            {projectsGitHub.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </section>
        </section>

        <section
          id="contact"
          className="soft-card reveal delay-4 min-w-0 rounded-3xl p-5 text-center sm:p-7 md:p-12"
        >
          <h2 className="title-font text-4xl leading-tight font-semibold">
            Let&apos;s Build Something Memorable
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
            Interested in collaborating on a product, redesign, or launch? Reach
            out and let&apos;s bring your next idea to life.
          </p>
          <a
            href="mailto:bhaah@post.bgu.ac.il"
            className="mt-8 inline-flex w-full max-w-full break-all rounded-full bg-accent-secondary px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.14em]"
          >
            bhaah@post.bgu.ac.il
          </a>
        </section>
      </main>

      <footer className="z-10 mx-auto w-full max-w-6xl border-t border-foreground/10 py-6 text-sm text-foreground/70">
        © {new Date().getFullYear()} Bhaa Hillou. Crafted with intention.
      </footer>
    </section>
  );
}
