import { Section } from "../../layout/index";
import styles from "./Projects.module.css";
import { Card as ProjectCard } from "../../common";
import { SkeletonCard } from "../../common/SkeletonCard/SkeletonCard";
import { getAllProjects, getProjectData } from "@/app/utils/notionApi";
import { Suspense } from "react";

const ProjectList = async () => {
  const projects = await getAllProjects();
  return (
    <>
      {projects.map((project: any, index: number) => (
        <ProjectCard {...getProjectData(project)} key={index} />
      ))}
    </>
  );
};

const LoadingGrid = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </>
  );
};

export const Projects = () => {
  return (
    <Section id="Projects">
      <div className={styles.header}>
        <div>
          <h2 className={styles.headerTitle}>Projects</h2>
          <p className={styles.headerSubtitle}>Selected works</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.projectCardGrid}>
          <Suspense fallback={<LoadingGrid />}>
            <ProjectList />
          </Suspense>
        </div>
      </div>
    </Section>
  );
};
