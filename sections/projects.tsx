import { Project } from '../components/project';
import styles from '../styles/index.module.css';

export const Projects = () => {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionBox}>
                <h1>Prosjekter</h1>
                <Project />
            </div>
        </div>
    );
};
