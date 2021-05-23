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
    console.log(styles[color], color);
    return (
        <Link href={href}>
            <a className={`${styles.outlineButton} ${styles[color]}`}>
                {children}
            </a>
        </Link>
    );
};

export enum ButtonColors {
    primary = 'primary',
    secondary = 'secondary'
}
