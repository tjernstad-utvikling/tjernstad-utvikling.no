import { Badge, BadgeRow } from './badges';

import Image from 'next/image';
import styles from '../styles/index.module.css';

export const Project = () => {
    return (
        <article className={styles.projectBox}>
            <Image
                src="/img/sluttkontroll.png"
                layout="responsive"
                width="1940"
                height="896"
                alt="Sluttkontroll.no"
            />
            <BadgeRow>
                <Badge text="CSS" />
                <Badge text="JavaScript" />
                <Badge text="Vue" />
            </BadgeRow>
            <TextBox title="Sluttkontroll.no">Kort om prosjektet</TextBox>
        </article>
    );
};

type TextBoxProps = {
    title: String;
    children: String;
};
const TextBox = ({ title, children }: TextBoxProps) => {
    return (
        <div>
            <h2>- {title}</h2>
            <p>{children}</p>
        </div>
    );
};
