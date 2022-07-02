import MainHeader from '../../components/main-header';
import styles from './main.module.css'

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props): React.ReactElement => {
  return (
    <div className={styles.main}>
      <MainHeader />
      <main>
        {children}
      </main>
      {/* <MainFooter /> */}
    </div>
  );
}

export default MainLayout;
