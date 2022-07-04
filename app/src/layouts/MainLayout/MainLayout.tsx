import Head from 'next/head';
import DarkModeToggleButton from '../../components/Buttons/ThemeToggleButton';
import MainFooter from '../../components/MainFooter/MainFooter';
import MainHeader from '../../components/MainHeader/MainHeader';
import styles from './MainLayout.module.css'

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
        <DarkModeToggleButton />
        <main>
          {children}
        </main>
        <MainFooter />
      </div>
    </>
  );
}

export default MainLayout;
