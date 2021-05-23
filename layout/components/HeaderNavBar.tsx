import { ButtonColors, ButtonOutline } from '../../components/buttons';

import { useScroll } from '../../hooks/useScroll';

export const HeaderNavBar = () => {
    const { isScrollingDown } = useScroll();
    return (
        <header
            className={`topNav ${isScrollingDown ? 'scrollDown' : 'scrollUp'}`}
        >
            <nav>
                <div>
                    <img src="/img/tu-logo.svg" style={{ width: '150px' }} />
                </div>
                <div style={{ paddingRight: '2rem' }}>
                    <ButtonOutline color={ButtonColors.secondary}>
                        Hjem
                    </ButtonOutline>
                </div>
            </nav>
        </header>
    );
};
