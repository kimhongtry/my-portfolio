import { ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Kimhong Try
            </a>

            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Junior Full-Stack Developer building modern, responsive, and
              user-friendly web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white">
              NAVIGATION
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white">
              CONTACT
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Interested in working together or discussing a project?
            </p>

            <a
              href="mailto:trykimhong172005@gmail.com"
              className="mt-4 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              trykimhong172005@gmail.com
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="mt-6 flex w-fit items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              Back to top
              <ArrowUp size={17} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {currentYear} Kimhong Try. All rights reserved.</p>

          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
