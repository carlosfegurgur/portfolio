import { Gallery } from "./components/gallery/Gallery";
import { Hero } from "./components/hero/Hero";
import { projectList } from "./projects/projectList";
import { Section } from "./components/section/Section";
import { Button } from "./components/button/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <Section name="About" style={{ color: 'var(--primary-light)'}}>
        <p>
          I’m a front-end developer who enjoys building fast, accessible, and
          maintainable web experiences. I work primarily with React and Next.js,
          both professionally and in personal projects, where I focus on clean
          architecture, responsive design, and smooth interactions.{" "}
        </p>
        <p>
          While I enjoy working with frameworks, I have a strong appreciation
          for the fundamentals—vanilla JavaScript and CSS are at the core of how
          I think about building for the web. I believe great UI starts with a
          solid foundation and attention to detail.
        </p>
        <p>
          I’m always looking for opportunities to contribute to meaningful
          digital products—whether that&lsquo;s through full-time roles or freelance
          work. My goal is to bring clarity and care to everything I build,
          helping teams and clients create intuitive, performant interfaces that
          people enjoy using.
        </p>
        <Button href={"/about"}>Learn More</Button>
      </Section>
      <Section style={{backgroundColor: 'var(--primary-light)'}} name="Projects">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel
          vero voluptatum animi dolorem qui, omnis nesciunt temporibus placeat
          debitis rerum vitae possimus distinctio expedita ipsum saepe esse
          deserunt sapiente?
        </p>
      </Section>
    </>
  );
}
