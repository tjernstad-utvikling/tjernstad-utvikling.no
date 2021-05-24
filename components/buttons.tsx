import Link from 'next/link';
import styles from '../styles/components/buttons.module.css';
interface ButtonOutlineProps {
    children: String;
    color: ButtonColors;
    href: string;
}
export const ButtonOutline = ({
    children,
    color,
    href
}: ButtonOutlineProps) => {
    return (
        <Link href={href}>
            <a className={`${styles.outlineButton} ${styles[color]}`}>
                {children}
            </a>
        </Link>
    );
};

interface ButtonOutlineOnClickProps {
    children: String;
    color: ButtonColors;
    onClick: () => void;
}
export const ButtonOutlineOnClick = ({
    children,
    color,
    onClick
}: ButtonOutlineOnClickProps) => {
    return (
        <a
            href="#"
            onClick={onClick}
            className={`${styles.outlineButton} ${styles[color]}`}
        >
            {children}
        </a>
    );
};

export enum ButtonColors {
    primary = 'primary',
    secondary = 'secondary'
}
