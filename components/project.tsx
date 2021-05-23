import { Badge, BadgeRow } from './badges';

import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectInterface } from '../contracts/project';
import client from '../client';
import styles from '../styles/index.module.css';
import { useNextSanityImage } from 'next-sanity-image';

type ProjectProps = {
    project: ProjectInterface;
};
export const Project = ({ project }: ProjectProps) => {
    const imageProps = useNextSanityImage(client, project.mainImage);

    return (
        <article className={styles.projectBox}>
            <Image
                layout="responsive"
                {...imageProps}
                alt={project.mainImage.caption}
            />
            <BadgeRow>
                {project.technologies &&
                    project.technologies.map((technology) => (
                        <Badge key={technology} text={technology} />
                    ))}
            </BadgeRow>
            <TextBox
                title={project.title}
                slug={project.slug}
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
