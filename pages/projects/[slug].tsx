import { PostLayout } from '../../layout/post';
import { ProjectInterface } from '../../contracts/project';
import client from '../../client';

interface ProjectProps {
    slug: string;
    project: ProjectInterface;
}
export default function Project({ project }: ProjectProps) {
    return (
        <PostLayout>
            <article>
                <h1>{project.title}</h1>
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
            `
    *[_type == "project" && slug.current == $slug][0]
  `,
            { slug }
        )
    };
};
