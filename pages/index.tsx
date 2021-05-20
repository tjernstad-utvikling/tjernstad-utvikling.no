import { DefaultLayout } from '../layout/default';
import Image from 'next/image';
import styles from '../styles/index.module.css';

export default function Home() {
    return (
        <div>
            <DefaultLayout>
                <div className={styles.hero}>
                    <div className={styles.heroBox}>
                        <div className={styles.heroImage}>
                            <Image
                                src="/img/me.jpg"
                                layout="fixed"
                                width="375"
                                height="500"
                            />
                        </div>
                        <div>
                            <h1>Hei, mitt navn er Ole Tjernstad</h1>
                            <p>
                                sh sghdfg dfg dfgh dgjdth dfgh fg dg fgh
                                jdgngchm fdg xfgh dfgdfhmdghg jdfxgxfghnfchndfxg
                                nxfgncgh mdfxgncfgnxfgn xcfgnxgnxf
                                gnxfgncghgfxhncnxfcgbnc bncvbncv cf gcfgfgcgh gh
                                mghm cghmcgfhmcvhmcvbmcvbmcghmwasd
                            </p>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </div>
    );
}
