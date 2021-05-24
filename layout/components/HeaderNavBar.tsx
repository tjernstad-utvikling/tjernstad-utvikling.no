import { ButtonColors, ButtonOutline } from '../../components/buttons';

import Link from 'next/link';
import { useScroll } from '../../hooks/useScroll';

export const HeaderNavBar = () => {
    const { isScrollingDown } = useScroll();
    return (
        <header
            className={`topNav ${isScrollingDown ? 'scrollDown' : 'scrollUp'}`}
        >
            <nav>
                <div>
                    <Link href="/">
                        <a>
                            <img
                                src="/img/tu-logo.svg"
                                style={{ width: '150px' }}
                            />
                        </a>
                    </Link>
                </div>
                <div style={{ paddingRight: '2rem' }}>
                    <ButtonOutline href="/" color={ButtonColors.secondary}>
                        Hjem
                    </ButtonOutline>
                </div>
            </nav>
        </header>
    );
};
