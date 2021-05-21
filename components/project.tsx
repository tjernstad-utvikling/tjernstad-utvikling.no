import { Badge, BadgeRow } from './badges';

import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectInterface } from '../contracts/project';
import styles from '../styles/index.module.css';

type ProjectProps = {
    project: ProjectInterface;
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
            <TextBox
                title={project.title}
                slug={project.slug.current}
                body={project.body}
            />
        </article>
    );
};

type TextBoxProps = {
    title: string;
    slug: string;
    body: Array<any>;
};
const TextBox = ({ title, body, slug }: TextBoxProps) => {
    return (
        <div>
            <h2>
                {' '}
                <Link href="/projects/[slug]" as={`/projects/${slug}`}>
                    <a>- {title}</a>
                </Link>
            </h2>
            <BlockContent
                blocks={body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
        </div>
    );
};
