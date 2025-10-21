import styles from "../projects.module.css";
import { getAllProjects, getProjectData } from "@/app/utils/notionApi";

export default async function Project({
  params,
}: {
  params: {
    project: string;
  };
}) {
    console.log('project', params);
      // Fetch all projects
  const allProjects = await getAllProjects();
  console.log('all projects', allProjects)
  
  // Find the specific project by ID
  const projectData = allProjects.find((p:any) => p.properties.Slug?.rich_text[0].plain_text === params.project);
  console.log('project data', projectData)

  const formattedData = getProjectData(projectData);
  
  if (!projectData) {
    return <div>Project not found</div>;
  }
  return (
    <div id={styles.project}>
      <div className={styles.container}>I am a project page for project {formattedData.title}!</div>
    </div>
  );
}

// Generate paths for all projects at build time
export async function generateStaticParams() {
  const projects = await getAllProjects();
  const projectSlugs: any = [];
  projects.map((project: any) => {
    projectSlugs.push(project.properties.Slug?.rich_text[0].plain_text);
  });
  
  return projectSlugs.map((slug: string) => ({
    project: slug,
  }));
}
