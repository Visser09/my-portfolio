const projects = [
  {
    name: "Agent Hub",
    type: "AI orchestration platform",
    description:
      "A private multi-project AI operating hub that connects product work, GitHub workflows, AI providers, approvals, media generation, and reviewable automation in one control plane.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "OpenAI", "Anthropic", "GitHub Apps"],
    note: "Private product — walkthrough available on request",
  },
  {
    name: "AfterTrade",
    type: "AI-powered trading product",
    description:
      "A full-stack trading performance workspace with trade journaling, calendar review, performance analytics, AI coaching, conversational analysis, and production deployment workflows.",
    stack: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "SQL", "AI APIs"],
    note: "Private product — walkthrough available on request",
  },
  {
    name: "TradingBot",
    type: "Automated trading system",
    description:
      "A Python-based futures trading system with NinjaTrader integration, risk controls, configurable strategy profiles, replay/backtesting, persistence, logging, and automated tests.",
    stack: ["Python", "NinjaTrader", "SQLite", "Pytest", "APIs", "Automation"],
    note: "Private engineering project",
  },
  {
    name: "OASIS",
    type: "AI + game development",
    description:
      "An open-world Unity prototype exploring AI-assisted NPC collaboration, world building, terrain tools, procedural systems, and player-driven creation.",
    stack: ["Unity", "C#", "Python", "LLM integrations", "Game systems"],
    note: "Public project",
    href: "https://github.com/Visser09/OASIS-",
  },
];

const skills = [
  "AI-assisted engineering",
  "Claude Code / ChatGPT / Codex",
  "React / Next.js",
  "TypeScript / JavaScript",
  "Python / FastAPI",
  "REST APIs & integrations",
  "PostgreSQL / SQL",
  "Supabase / Drizzle",
  "Git / GitHub Actions",
  "Vercel deployments",
  "AI agents & tool workflows",
  "Testing, debugging & CI/CD",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090d] text-zinc-100 selection:bg-cyan-300 selection:text-black">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
        <nav className="flex items-center justify-between border-b border-white/10 pb-6">
          <a href="#top" className="text-sm font-semibold tracking-[0.2em] text-white">
            MV / BUILD
          </a>
          <div className="flex items-center gap-5 text-sm text-zinc-400">
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a
              className="rounded-full border border-white/15 px-4 py-2 text-zinc-100 transition hover:border-white/35 hover:bg-white/5"
              href="https://github.com/Visser09"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </nav>

        <section id="top" className="grid gap-12 py-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              AI-native product builder
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Mitchel Visser
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-zinc-300 sm:text-2xl">
              AI-Assisted Full-Stack Developer building real products with modern web stacks, Python backends, APIs, automation, and AI agents.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
              I use AI as part of the engineering workflow—not as a substitute for understanding the product. I move from idea to architecture, implementation, debugging, testing, deployment, and iteration quickly while keeping the shipped result reviewable and maintainable.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                See selected work
              </a>
              <a
                href="https://github.com/Visser09"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
              >
                View GitHub
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/30">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Current focus</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-zinc-300">
              <li className="border-b border-white/8 pb-4">AI-first full-stack product development</li>
              <li className="border-b border-white/8 pb-4">Agent workflows, APIs, MCP-style tool integrations</li>
              <li className="border-b border-white/8 pb-4">React / Next.js + Python / FastAPI systems</li>
              <li>Shipping, testing, debugging, CI/CD and production iteration</li>
            </ul>
            <p className="mt-6 rounded-2xl border border-emerald-300/15 bg-emerald-300/5 px-4 py-3 text-sm text-emerald-100">
              Open to AI-assisted software, product engineering, full-stack, automation, and agent-development opportunities.
            </p>
          </aside>
        </section>

        <section id="work" className="border-t border-white/10 py-20">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Selected work</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Products, systems, and experiments.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-zinc-500">
              Some active product work is private. The summaries below describe the engineering scope without exposing private source code.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/80">
                      {project.type}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">{project.name}</h3>
                  </div>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-zinc-500 transition group-hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  ) : null}
                </div>
                <p className="mt-5 text-sm leading-7 text-zinc-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs text-zinc-600">{project.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-t border-white/10 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Capabilities</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Built for the AI-first development workflow.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
                My strength is connecting product thinking with rapid implementation: turning a goal into a working system, integrating the services it needs, then testing and iterating until it behaves like a real product.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill} className="rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-4 text-sm text-zinc-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">How I work</p>
            <div className="mt-7 grid gap-8 md:grid-cols-3">
              <div>
                <p className="text-lg font-semibold text-white">01 / Define</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Turn a rough idea into clear product behavior, architecture, constraints, and an implementation path.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">02 / Build with AI</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Use AI coding tools aggressively for speed while reviewing decisions, debugging failures, and keeping control of the system.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">03 / Ship & iterate</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Connect APIs and data, test the flow, deploy it, observe what breaks, and improve the product based on real behavior.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Mitchel Visser — AI-Assisted Full-Stack Developer</p>
          <a className="transition hover:text-white" href="https://github.com/Visser09" target="_blank" rel="noreferrer">
            github.com/Visser09 ↗
          </a>
        </footer>
      </div>
    </main>
  );
}
