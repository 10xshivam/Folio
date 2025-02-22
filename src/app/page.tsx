import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8 ">
      <section id="hero">
        <Hero/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
    </main>
  );
}
