import styles from '../styles/components/buttons.module.css';
interface ButtonOutlineProps {
    children: String;
    color: ButtonColors;
}
export const ButtonOutline = ({ children, color }: ButtonOutlineProps) => {
    console.log(styles[color], color);
    return (
        <a href="#" className={`${styles.outlineButton} ${styles[color]}`}>
            {children}
        </a>
    );
};

export enum ButtonColors {
    secondary = 'secondary'
}
