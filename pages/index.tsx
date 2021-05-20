import { DefaultLayout } from "../layout/default";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <DefaultLayout>
        <h1>Min side</h1>
      </DefaultLayout>
    </div>
  );
}
