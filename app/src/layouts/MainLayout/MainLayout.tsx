import Head from 'next/head';
import MainFooter from '../../components/MainFooter/MainFooter';
import MainNavigation from '../../components/MainNavigation/MainNavigation';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props): React.ReactElement => {
  return (
    <>
      <Head>
        <title>YAMLflow</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNavigation />
      <main>
        {children}
      </main>
      <MainFooter />
    </>
  );
}

export default MainLayout;
