import { ButtonColors, ButtonOutline } from '../components/buttons';

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
                <nav>
                    <div>
                        <img
                            src="/img/tu-logo.svg"
                            style={{ width: '150px', margin: 'auto' }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: 'auto',
                            marginBottom: 'auto'
                        }}
                    >
                        <ButtonOutline color={ButtonColors.secondary}>
                            Hjem
                        </ButtonOutline>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
};
