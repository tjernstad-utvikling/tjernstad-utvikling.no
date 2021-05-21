import { Badge, BadgeRow } from './badges';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/index.module.css';

type ProjectProps = {
    project: any;
};
export const Project = ({ project }: ProjectProps) => {
    return (
        <article className={styles.projectBox}>
            <Image
                src="/img/sluttkontroll.png"
                layout="responsive"
                width="1940"
                height="896"
                alt="Sluttkontroll.no"
            />
            <BadgeRow>
                <Badge text="CSS" />
                <Badge text="JavaScript" />
                <Badge text="Vue" />
            </BadgeRow>
            <TextBox title="Sluttkontroll.no">Kort om prosjektet</TextBox>
            <li key={project._id}>
                <Link
                    href="/projects/[slug]"
                    as={`/projects/${project.slug.current}`}
                >
                    <a>{project.title}</a>
                </Link>{' '}
                ({new Date(project._updatedAt).toDateString()})
            </li>
        </article>
    );
};

type TextBoxProps = {
    title: String;
    children: String;
};
const TextBox = ({ title, children }: TextBoxProps) => {
    return (
        <div>
            <h2>- {title}</h2>
            <p>{children}</p>
        </div>
    );
};
