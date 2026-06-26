import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import About from "../components/about";
import Education from "../components/education";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Project />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
