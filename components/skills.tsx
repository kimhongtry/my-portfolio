import { Braces, Database, Server, Wrench, Check } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Braces,
    description: "Creating responsive and modern user interfaces.",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building APIs and server-side applications.",
    skills: ["Node.js", "Express.js", "REST API", "TypeORM", "JWT"],
  },
  {
    title: "Database",
    icon: Database,
    description: "Designing and managing reliable databases.",
    skills: ["PostgreSQL", "MySQL", "Database Design"],
  },
  {
    title: "Tools",
    icon: Wrench,
    description: "Tools I use to communicate, build and manage projects.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "VS Code",
      "Trello",
      "Jira",
      "Aligntoday",
      "Asana",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-28"
    >
      {/* Background decoration */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-blue-600 sm:text-sm">
            MY SKILLS
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            A collection of technologies and tools I use to build complete web
            applications from frontend to database.
          </p>
        </div>

        {/* Skill cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20 transition group-hover:scale-110">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
                  {group.description}
                </p>

                {/* Skill list */}
                <ul className="mt-5 space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm font-medium text-slate-700"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
