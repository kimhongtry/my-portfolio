"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "trykimhong172005@gmail.com",
    href: "mailto:trykimhong172005@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/kimhong-try",
    href: "https://linkedin.com/in/trykimhong",
  },
  {
    label: "Location",
    value: "Cambodia",
    href: "#",
  },
];

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
      );

      setStatus("Message sent successfully. Thank you!");
      form.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
            CONTACT
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s work together
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Have a project, internship, or opportunity in mind? Feel free to
            contact me. I would be happy to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact information */}
          <div className="rounded-3xl bg-slate-900 p-7 text-white shadow-xl sm:p-9">
            <h3 className="text-2xl font-bold">Get in touch</h3>

            <p className="mt-4 leading-7 text-slate-300">
              You can contact me through email. I will reply as soon as
              possible.
            </p>

            <div className="mt-8 space-y-4">
              {contactLinks.map((item) => {
                const isExternal = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/20"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white"></div>

                    <div>
                      <p className="text-sm text-slate-300">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <p className="mt-8 text-sm leading-6 text-slate-400">
              I am open to internships, junior developer opportunities, and
              collaboration on web projects.
            </p>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-slate-700"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What would you like to discuss?"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-700"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Write your message here..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={19} />
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`mt-4 text-center text-sm font-medium ${
                  status.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
