import Link from 'next/link'
import styles from '../styles/link.module.css'
import Head from 'next/head'

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={'ruslan, nextjs' + keywords} />
        <title>Главная</title>
      </Head>
      <div className='navbar'>
        <Link href="/" className={styles.link}>Главная</Link>
        <Link href="/users" className={styles.link}>Пользователи</Link>
      </div>
      <div>
        {children}
      </div>
    </>
  );
};

export default MainContainer;