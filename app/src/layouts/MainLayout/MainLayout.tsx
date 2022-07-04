import Head from 'next/head';
import MainFooter from '../../components/MainFooter/MainFooter';
import MainHeader from '../../components/MainHeader/MainHeader';

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
      <div className="relative">
        <MainHeader />
        <main>
          {children}
        </main>
        <MainFooter />
      </div>
    </>
  );
}

export default MainLayout;
