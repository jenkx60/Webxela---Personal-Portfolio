import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import MobileNav from "@/components/MobileNav";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jenkins Uwagbai",
  url: "https://jenkinsuwagbai.online",
  jobTitle: "Software Developer",
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Ilorin" },
  knowsAbout: ["React", "Next.js", "TypeScript", "Supabase", "Frontend engineering", "Automation"],
  sameAs: [
    "https://github.com/jenkx60",
    "https://www.linkedin.com/in/jenkins-uwagbai/",
    "https://x.com/iamjenkinsb",
  ],
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <MobileNav />
      <Hero />
      <Marquee />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
