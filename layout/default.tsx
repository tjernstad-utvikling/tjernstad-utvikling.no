import Head from 'next/head';
import { useEffect } from 'react';

type layoutProps = {
    children: React.ReactNode;
};
export const DefaultLayout = ({ children }: layoutProps) => {
    useEffect(() => {
        document.querySelector('body')?.classList.add('fullPageImage');
    }, []);
    return (
        <div>
            <Head>
                <title>Tjernstad Utvikling.no</title>
                <meta name="description" content="Mine prosjekter" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
};
