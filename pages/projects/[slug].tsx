import client from '../../client';

const Project = ({ query }: any) => {
    return (
        <article>
            <h1>{query.slug}</h1>
        </article>
    );
};

Project.getInitialProps = async function (context: {
    query: { slug?: '' | undefined };
}) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = '' } = context.query;
    return await client.fetch(
        `
    *[_type == "project" && slug.current == $slug][0]
  `,
        { slug }
    );
};

export default Project;
