import { Mail, ArrowDownToLine } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-50">
      {/* Background decorations */}
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 py-20 sm:px-6 md:grid-cols-2 md:gap-12 md:py-24">
        {/* Right side image — appears first on mobile */}
        {/* Right side image */}
        <div className="relative order-1 flex items-center justify-center md:order-2">
          {/* Soft glow */}
          <div className="absolute h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Decorative ring */}
          <div className="absolute h-[340px] w-[340px] rounded-full border-2 border-blue-200" />

          {/* Small accent circle */}
          <div className="absolute left-6 top-10 h-5 w-5 rounded-full bg-blue-600 shadow-lg" />

          {/* Profile image */}
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white shadow-[0_25px_60px_rgba(0,0,0,0.15)] sm:h-80 sm:w-80">
            <Image
              src="/images/profile.png"
              alt="Kimhong Try"
              fill
              priority
              sizes="(max-width:768px) 288px, 320px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Left side text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for opportunities
          </div>

          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-blue-600 sm:text-sm">
            HELLO, I AM
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Kimhong{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Try
            </span>
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-slate-700 sm:text-3xl">
            Junior Full-Stack Developer
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 md:mx-0">
            I build modern, responsive, and user-friendly web applications using
            Next.js, TypeScript, Express.js, PostgreSQL, and MySQL.
          </p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 md:justify-start">
            {["Next.js", "TypeScript", "React", "Express.js", "PostgreSQL"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {skill}
                </span>
              ),
            )}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 md:justify-start">
            <a
              href="mailto:trykimhong172005@gmail.com"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700 sm:w-auto"
            >
              <Mail size={19} />
              Contact Me
            </a>

            <a
              href="/images/kimhong-cv.pdf"
              download
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600 sm:w-auto"
            >
              <ArrowDownToLine size={19} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
