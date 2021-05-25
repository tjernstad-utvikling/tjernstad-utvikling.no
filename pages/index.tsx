import { DefaultLayout } from '../layout/default';
import { Hero } from '../sections/hero';
import { ProjectInterface } from '../contracts/project';
import { Projects } from '../sections/projects';
import client from '../client';
import groq from 'groq';

interface IndexProps {
    projects: Array<ProjectInterface>;
}
export default function Index({ projects }: IndexProps) {
    return (
        <div>
            <DefaultLayout>
                <Hero />

                <Projects projects={projects} />
            </DefaultLayout>
        </div>
    );
}

export async function getStaticProps() {
    const projects = await client.fetch(groq`
      *[_type == "project" && publishedAt < now()]|order(publishedAt desc) {
        body,
        "name": author->name,
        "technologies": technology[]->title,
        _id,
        publishedAt,
        mainImage,
        "slug": slug.current,
        title
        }
    `);
    return {
        props: { projects } // will be passed to the page component as props
    };
}
