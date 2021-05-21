import { DefaultLayout } from '../layout/default';
import { Hero } from '../sections/hero';
import { Projects } from '../sections/projects';

export default function Home() {
    return (
        <div>
            <DefaultLayout>
                <Hero />

                <Projects />
            </DefaultLayout>
        </div>
    );
}
