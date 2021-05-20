import Head from "next/head";

type layoutProps = {
  children: React.ReactNode;
};
export const DefaultLayout = ({ children }: layoutProps) => {
  return (
    <div>
      <Head>
        <title>Tjernstad Utvikling.no</title>
        <meta name="description" content="Mine prosjekter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
