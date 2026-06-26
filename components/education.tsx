import {
  Award,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

const learningTopics = [
  "Install and configure development environments",
  "Create user interface mockups",
  "Develop static user interfaces",
  "Develop dynamic user interface components",
  "Set up relational databases",
  "Develop SQL and NoSQL data access components",
  "Develop server-side business components",
];

export default function Education() {
  return (
    <section id="education" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold tracking-wider text-blue-600">
            <BookOpenCheck size={17} />
            EDUCATION
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            My learning journey
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Building a strong foundation in modern web development, databases,
            and full-stack application development.
          </p>
        </div>

        {/* Education card */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          {/* Decorative background */}
          <div className="absolute -left-5 top-8 hidden h-full w-1 rounded-full bg-blue-100 sm:block" />

          <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
            {/* Top accent */}
            <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400" />

            <div className="p-6 sm:p-9">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                  <GraduationCap size={31} />
                </div>

                {/* Main information */}
                <div className="flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                        Web & Mobile App Development
                      </h3>

                      <p className="mt-2 text-base font-semibold text-blue-600">
                        Pour un Sourire d&apos;Enfant (PSE)
                      </p>
                    </div>

                    <div className="flex w-fit items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                      <CalendarDays size={16} className="text-blue-600" />
                      2024 — Present
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                    Studying web development, software engineering, database
                    systems, and modern frontend and backend technologies to
                    build complete web and mobile applications.
                  </p>

                  {/* Learning topics */}
                  <div className="mt-7 border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-2">
                      <Award size={19} className="text-blue-600" />
                      <h4 className="font-bold text-slate-900">
                        Key Learning Areas
                      </h4>
                    </div>

                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {learningTopics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-blue-600"
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
