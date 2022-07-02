import Head from 'next/head';
import MainFooter from '../../components/main-footer';
import MainHeader from '../../components/main-header';
import styles from './main.module.css'

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props): React.ReactElement => {
  return (
    <>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.main}>
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
