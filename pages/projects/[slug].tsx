import { Badge } from '../../components/badges';
import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import { PostLayout } from '../../layout/post';
import { ProjectInterface } from '../../contracts/project';
import client from '../../client';
import groq from 'groq';
import styles from '../../styles/project.module.css';
import { useNextSanityImage } from 'next-sanity-image';

interface ProjectProps {
    slug: string;
    project: ProjectInterface;
}
export default function Project({ project }: ProjectProps) {
    const imageProps = useNextSanityImage(client, project.mainImage);

    return (
        <PostLayout>
            <article className={styles.project}>
                <h1>{project.title}</h1>
                <figure>
                    <Image
                        layout="responsive"
                        {...imageProps}
                        alt={project.mainImage.caption}
                    />
                    <figcaption>- {project.mainImage.caption}</figcaption>
                </figure>
                <div className={styles.body}>
                    <BlockContent
                        blocks={project.body}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    />
                    <aside>
                        Prosjektet er utviklet med:
                        <ul>
                            {project.technologies &&
                                project.technologies.map((technology) => (
                                    <li key={technology}>{technology}</li>
                                ))}
                        </ul>
                    </aside>
                </div>
            </article>
        </PostLayout>
    );
}

Project.getInitialProps = async function (context: {
    query: { slug?: '' | undefined };
}) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = '' } = context.query;
    return {
        slug: slug,
        project: await client.fetch(
            groq`
            *[_type == "project" && slug.current == $slug][0] {
        body,
        "name": author->name,
        "technologies": technology[]->title,
        _id,
        publishedAt,
        mainImage,
        "slug": slug.current,
        title
        }
  `,
            { slug }
        )
    };
};
