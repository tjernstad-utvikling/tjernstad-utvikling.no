import styles from '../styles/components/buttons.module.css';
type ButtonOutlineProps = {
    children: String;
};
export const ButtonOutline = ({ children }: ButtonOutlineProps) => {
    return (
        <a href="#" className={styles.outlineButton}>
            {children}
        </a>
    );
};
