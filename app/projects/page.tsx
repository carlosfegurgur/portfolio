import { Section } from "../components/layout";
import { getAllProjects, getProjectData, NotionProjectData } from "../utils/notionApi";
import styles from "./projects.module.css";
import { Card as ProjectCard } from "../components/common";
import Link from "next/link";

const ProjectList = async () => {
  const projects = await getAllProjects();
  console.log('projects', projects)
  return (
    <>
      {projects.map((project: NotionProjectData, index: number) => {
        const { slug } = getProjectData(project);
        return (
          <Link id={slug} href={slug}>
            <ProjectCard {...getProjectData(project)} key={index} />
          </Link>
        );
      })}
    </>
  );
};

const Projects = () => {
  return (
    <Section id="Project Page">
      <div className={styles.header}>
        <h1>Project Page</h1>
      </div>
      <div className={styles.content}>
        <ProjectList />
      </div>
    </Section>
  );
};

export default Projects;
