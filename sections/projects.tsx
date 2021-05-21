import { Project } from '../components/project';
import styles from '../styles/index.module.css';

type ProjectsProps = {
    projects: any;
};
export const Projects = ({ projects }: ProjectsProps) => {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionBox}>
                <h1>Prosjekter</h1>
                {projects.map(
                    (project) => project.slug && <Project project={project} />
                )}
            </div>
        </div>
    );
};
