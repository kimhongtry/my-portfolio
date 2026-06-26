import { ArrowUpRight, Code2, Database, LayoutTemplate } from "lucide-react";

const strengths = [
  {
    icon: LayoutTemplate,
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces with Next.js and React.",
  },
  {
    icon: Code2,
    title: "Backend Development",
    description:
      "Creating REST APIs with Express.js, TypeScript, and clean project structure.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Working with PostgreSQL and MySQL for organized and reliable data.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-y border-slate-200 bg-slate-50 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold tracking-widest text-blue-600">
            ABOUT ME
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Building useful products with clean code.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            I am a junior full-stack developer who enjoys turning ideas into
            responsive web applications. I focus on writing maintainable code,
            learning modern tools, and creating interfaces that are simple to
            use.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            I have experience building projects with Next.js, React, TypeScript,
            Express.js, PostgreSQL, and MySQL.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
          >
            Explore my work <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid gap-4">
          {strengths.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-blue-50 text-blue-600">
                <Icon size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>

              <p className="mt-2 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
