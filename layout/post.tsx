import Head from 'next/head';
import { HeaderNavBar } from './components/HeaderNavBar';
import { useEffect } from 'react';

type layoutProps = {
    children: React.ReactNode;
};
export const PostLayout = ({ children }: layoutProps) => {
    useEffect(() => {
        document.querySelector('body')?.classList.remove('fullPageImage');
    }, []);
    return (
        <div>
            <Head>
                <title>Tjernstad Utvikling.no</title>
                <meta name="description" content="Mine prosjekter" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderNavBar />
            <main>{children}</main>
            <footer></footer>
        </div>
    );
};
