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
    console.log(projects);
    return (
        <div>
            <DefaultLayout>
                <Hero />

                <Projects projects={projects} />
            </DefaultLayout>
        </div>
    );
}

Index.getInitialProps = async () => ({
    projects: await client.fetch(groq`
      *[_type == "project" && publishedAt < now()]|order(publishedAt desc)
    `)
});
