import Head from 'next/head';
import { useEffect } from 'react';
import { useScroll } from '../hooks/useScroll';

type layoutProps = {
    children: React.ReactNode;
};
export const PostLayout = ({ children }: layoutProps) => {
    useEffect(() => {
        document.querySelector('body')?.classList.remove('fullPageImage');
    }, []);
    const { isScrollingDown } = useScroll();
    return (
        <div>
            <Head>
                <title>Tjernstad Utvikling.no</title>
                <meta name="description" content="Mine prosjekter" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header
                className={`topNav ${
                    isScrollingDown ? 'scrollDown' : 'scrollUp'
                }`}
            >
                <nav>Bla bla bla</nav>
            </header>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
};
