import styles from '../projects.module.css';

export default function Project({ 
    params 
}: { 
    params: { 
        project: string,
    } 
}) {
  return (
        <div id={styles.project}>

            <div className={styles.container}>I am a project page for project {params.project}!</div>
        </div>
    );
}
