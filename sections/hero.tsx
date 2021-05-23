import { ButtonColors, ButtonOutline } from '../components/buttons';

import Image from 'next/image';
import styles from '../styles/index.module.css';

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroBox}>
                <div className={styles.heroImage}>
                    <Image
                        src="/img/me.jpg"
                        layout="responsive"
                        width="375"
                        height="500"
                        alt="Min datter og meg"
                    />
                </div>
                <div className={styles.heroText}>
                    <div>
                        <h1>Hei !!</h1>
                        <p>
                            Jeg heter Ole Tjernstad, innehaver av Tjernstad
                            Utvikling og selvlært hobby utvikler.
                        </p>
                        <img
                            src="/img/tu-logo.svg"
                            style={{ width: '300px' }}
                        />
                        <p>
                            Og viktigst, jeg er også pappa til ei nydelig jente,
                            bare se selv!!
                        </p>
                    </div>
                    <nav>
                        <ButtonOutline href="#" color={ButtonColors.primary}>
                            Mine Prosjekter
                        </ButtonOutline>
                    </nav>
                </div>
            </div>
        </div>
    );
};
