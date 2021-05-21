import styles from '../styles/components/badges.module.css';

type BadgeRowProps = {
    children: React.ReactNode;
};
export const BadgeRow = ({ children }: BadgeRowProps) => {
    return <div className={styles.badgeRow}>{children}</div>;
};

type badgeProps = {
    text: String;
};
export const Badge = ({ text }: badgeProps) => {
    return <span className={styles.badge}>{text}</span>;
};
