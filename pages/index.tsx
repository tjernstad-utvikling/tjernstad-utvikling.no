import { DefaultLayout } from '../layout/default';
import { Hero } from '../sections/hero';
import { Projects } from '../sections/projects';
import client from '../client';
import groq from 'groq';

export default function Index(props: any) {
    const { projects = [] } = props;
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
