import { Gallery } from "./components/gallery/Gallery";
import { Hero } from "./components/hero/Hero";
import { projectList } from "./projects/projectList";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery projects={projectList.slice(0,3)} />
    </>
  );
}
