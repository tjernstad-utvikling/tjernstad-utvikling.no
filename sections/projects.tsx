import { Project } from '../components/project';
import { ProjectInterface } from '../contracts/project';
import styles from '../styles/index.module.css';

interface ProjectsProps {
    projects: Array<ProjectInterface>;
}
export const Projects = ({ projects }: ProjectsProps) => {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionBox}>
                <h1>Prosjekter</h1>
                {projects.map(
                    (project) =>
                        project.slug && (
                            <Project key={project._id} project={project} />
                        )
                )}
            </div>
        </div>
    );
};
