import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Teacher Attendance System",
    description:
      "A full-stack attendance management system for teachers and administrators. It includes authentication, attendance tracking, dashboard statistics, and role-based access.",
    image: "/images/teacher-attendance.png",
    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "TypeORM",
    ],
    github: "https://github.com/kimhongtry/frontend-attendance.git",
    githubBackend: "https://github.com/kimhongtry/backend-attendance.git",
    demo: "https://frontend-attendance1.vercel.app/",
    featured: true,
  },
  {
    title: "Rabbit School Cambodia",
    description:
      "A responsive website for Rabbit School Cambodia, a non-profit organization. It showcases the school's mission, programs, and contact information, with a clean and modern design.",
    image: "/images/rabbit-school.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "PostCSS",
      "ESLint",
    ],
    github: "https://github.com/Thoeurnbunthen/rabbitschoolcambodia.git",

    demo: "https://rabbit-school-cambodia.vercel.app/",
    featured: true,
  },
];

export default function Project() {
  return (
    <section id="project" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
            PROJECTS
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Things I have built
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A selection of projects where I practiced frontend development,
            backend APIs, database design, and responsive user interfaces.
          </p>
        </div>

        {/* Project cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-3xl border bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                project.featured
                  ? "border-blue-200 shadow-lg shadow-blue-100/60"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              {/* Project image */}
              <div className="relative h-56 overflow-hidden bg-slate-100 sm:h-64">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {project.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    FEATURED PROJECT
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={24}
                    className="shrink-0 text-blue-600 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {/* Links */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {project.githubBackend ? "Frontend Code" : "Source Code"}
                  </a>

                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Backend Code
                    </a>
                  )}

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
